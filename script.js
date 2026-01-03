// Global state
let selectedPropertyType = '';
let formData = {};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializePropertyTypeSelection();
    initializeForm();
    initializeFAQ();
    initializeSmoothScrolling();
});

// Property Type Selection
function initializePropertyTypeSelection() {
    const propertyCards = document.querySelectorAll('.property-type-card');

    propertyCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            propertyCards.forEach(c => c.classList.remove('selected'));

            // Add selected class to clicked card
            this.classList.add('selected');

            // Store selected type
            selectedPropertyType = this.dataset.type;

            // Wait a moment for visual feedback, then proceed to form
            setTimeout(() => {
                goToStep(2);
            }, 300);
        });
    });
}

// Form Handling
function initializeForm() {
    const form = document.getElementById('property-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateForm()) {
                collectFormData();
                calculateEstimate();
                goToStep(3);
            }
        });
    }

    // Add real-time validation
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateForm() {
    const form = document.getElementById('property-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;

    // Remove previous error styling
    field.style.borderColor = '';

    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        field.style.borderColor = 'var(--error-color)';
    }

    // Validate specific field types
    if (value) {
        if (fieldType === 'email' && !isValidEmail(value)) {
            isValid = false;
            field.style.borderColor = 'var(--error-color)';
        }

        if (field.id === 'zipcode' && !/^\d{5}$/.test(value)) {
            isValid = false;
            field.style.borderColor = 'var(--error-color)';
        }

        if (fieldType === 'number' && value < (field.min || 0)) {
            isValid = false;
            field.style.borderColor = 'var(--error-color)';
        }
    }

    if (isValid) {
        field.style.borderColor = 'var(--success-color)';
    }

    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function collectFormData() {
    const form = document.getElementById('property-form');
    const formElements = form.elements;

    formData = {
        propertyType: selectedPropertyType,
        street: formElements['street'].value,
        zipcode: formElements['zipcode'].value,
        city: formElements['city'].value,
        livingArea: parseFloat(formElements['living-area'].value),
        plotArea: parseFloat(formElements['plot-area'].value) || 0,
        rooms: parseFloat(formElements['rooms'].value),
        constructionYear: parseInt(formElements['construction-year'].value),
        condition: formElements['condition'].value,
        renovationYear: parseInt(formElements['renovation-year'].value) || null,
        name: formElements['name'].value,
        email: formElements['email'].value,
        phone: formElements['phone'].value,
        features: []
    };

    // Collect selected features
    const featureCheckboxes = form.querySelectorAll('input[name="features"]:checked');
    featureCheckboxes.forEach(checkbox => {
        formData.features.push(checkbox.value);
    });
}

function calculateEstimate() {
    // Base price per square meter by region (simplified model)
    const basePricePerSqm = getBasePriceForZipcode(formData.zipcode);

    // Adjust for property type
    let typeMultiplier = 1.0;
    switch (formData.propertyType) {
        case 'einfamilienhaus':
            typeMultiplier = 1.15;
            break;
        case 'eigentumswohnung':
            typeMultiplier = 1.0;
            break;
        case 'doppelhaushaelfte':
            typeMultiplier = 1.05;
            break;
        case 'reihenhaus':
            typeMultiplier = 0.95;
            break;
        case 'mehrfamilienhaus':
            typeMultiplier = 1.25;
            break;
        case 'grundstueck':
            typeMultiplier = 0.4;
            break;
    }

    // Adjust for condition
    let conditionMultiplier = 1.0;
    switch (formData.condition) {
        case 'neuwertig':
            conditionMultiplier = 1.2;
            break;
        case 'gepflegt':
            conditionMultiplier = 1.0;
            break;
        case 'renovierungsbeduerftig':
            conditionMultiplier = 0.8;
            break;
        case 'sanierungsbeduerftig':
            conditionMultiplier = 0.6;
            break;
    }

    // Adjust for age
    const age = new Date().getFullYear() - formData.constructionYear;
    let ageMultiplier = 1.0;
    if (age < 5) {
        ageMultiplier = 1.15;
    } else if (age < 15) {
        ageMultiplier = 1.05;
    } else if (age < 30) {
        ageMultiplier = 1.0;
    } else if (age < 50) {
        ageMultiplier = 0.9;
    } else {
        ageMultiplier = 0.75;
    }

    // Adjust for renovation
    if (formData.renovationYear) {
        const yearsSinceRenovation = new Date().getFullYear() - formData.renovationYear;
        if (yearsSinceRenovation < 5) {
            ageMultiplier = Math.min(1.15, ageMultiplier + 0.15);
        } else if (yearsSinceRenovation < 10) {
            ageMultiplier = Math.min(1.1, ageMultiplier + 0.1);
        }
    }

    // Calculate base value
    const adjustedPricePerSqm = basePricePerSqm * typeMultiplier * conditionMultiplier * ageMultiplier;
    let estimatedValue = formData.livingArea * adjustedPricePerSqm;

    // Add value for features
    const featureValue = formData.features.length * 5000;
    estimatedValue += featureValue;

    // Add plot value for houses
    if (formData.plotArea > 0 && formData.propertyType !== 'eigentumswohnung') {
        const plotPricePerSqm = basePricePerSqm * 0.3;
        estimatedValue += formData.plotArea * plotPricePerSqm;
    }

    // Calculate range (±10%)
    const lowerBound = estimatedValue * 0.9;
    const upperBound = estimatedValue * 1.1;

    // Display results
    displayResults(estimatedValue, lowerBound, upperBound, adjustedPricePerSqm);
}

function getBasePriceForZipcode(zipcode) {
    // Simplified pricing model based on first digit of zipcode
    // In a real application, this would use actual market data
    const firstDigit = parseInt(zipcode.charAt(0));

    const priceMap = {
        0: 3500,  // Dresden, Chemnitz
        1: 4200,  // Berlin, Potsdam
        2: 4000,  // Hamburg, Kiel
        3: 3200,  // Hannover, Braunschweig
        4: 3800,  // Düsseldorf, Dortmund
        5: 3600,  // Köln, Bonn
        6: 4500,  // Frankfurt, Wiesbaden
        7: 4200,  // Stuttgart, Karlsruhe
        8: 5500,  // München, Augsburg
        9: 3400   // Nürnberg, Regensburg
    };

    return priceMap[firstDigit] || 3500;
}

function displayResults(estimatedValue, lowerBound, upperBound, pricePerSqm) {
    // Format numbers
    const formattedValue = formatCurrency(Math.round(estimatedValue));
    const formattedLower = formatCurrency(Math.round(lowerBound));
    const formattedUpper = formatCurrency(Math.round(upperBound));
    const formattedPricePerSqm = formatCurrency(Math.round(pricePerSqm));

    // Update DOM
    document.getElementById('estimated-value').textContent = formattedValue;
    document.getElementById('value-range').textContent = `${formattedLower} - ${formattedUpper}`;
    document.getElementById('price-per-sqm').textContent = `${formattedPricePerSqm}/m²`;

    // Animate the value
    animateValue('estimated-value', 0, Math.round(estimatedValue), 1500);
}

function formatCurrency(value) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

function animateValue(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = formatCurrency(Math.round(current));
    }, 16);
}

// Step Navigation
function goToStep(stepNumber) {
    const steps = document.querySelectorAll('.calculator-step');

    steps.forEach(step => {
        step.classList.remove('active');
    });

    const targetStep = document.getElementById(`step-${stepNumber}`);
    if (targetStep) {
        targetStep.classList.add('active');

        // Scroll to calculator section
        const calculatorSection = document.getElementById('rechner');
        if (calculatorSection) {
            calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Update progress bar if on step 2
    if (stepNumber === 2) {
        updateProgressBar(33);
    } else if (stepNumber === 3) {
        updateProgressBar(100);
    }
}

function updateProgressBar(percentage) {
    const progressBar = document.querySelector('.progress-bar-fill');
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
}

function resetCalculator() {
    // Reset form
    document.getElementById('property-form').reset();

    // Reset selected property type
    selectedPropertyType = '';
    document.querySelectorAll('.property-type-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Go back to step 1
    goToStep(1);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// FAQ Accordion
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(i => i.classList.remove('active'));

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form input improvements
document.addEventListener('DOMContentLoaded', function() {
    // Auto-format phone number
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                e.target.value = value;
            }
        });
    }

    // Auto-format zipcode
    const zipcodeInput = document.getElementById('zipcode');
    if (zipcodeInput) {
        zipcodeInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = value.substring(0, 5);
        });
    }

    // Prevent future construction years
    const constructionYearInput = document.getElementById('construction-year');
    if (constructionYearInput) {
        const currentYear = new Date().getFullYear();
        constructionYearInput.setAttribute('max', currentYear);
    }

    // Validate renovation year is not before construction year
    const renovationYearInput = document.getElementById('renovation-year');
    if (renovationYearInput) {
        renovationYearInput.addEventListener('blur', function() {
            const constructionYear = parseInt(document.getElementById('construction-year').value);
            const renovationYear = parseInt(this.value);

            if (renovationYear && constructionYear && renovationYear < constructionYear) {
                alert('Das Renovierungsjahr kann nicht vor dem Baujahr liegen.');
                this.value = '';
            }
        });
    }
});

// Track conversion events (placeholder for analytics)
function trackEvent(eventName, eventData) {
    console.log('Event:', eventName, eventData);
    // In production, integrate with Google Analytics, Facebook Pixel, etc.
    // Example: gtag('event', eventName, eventData);
}

// Track when user selects property type
document.addEventListener('DOMContentLoaded', function() {
    const propertyCards = document.querySelectorAll('.property-type-card');
    propertyCards.forEach(card => {
        card.addEventListener('click', function() {
            trackEvent('property_type_selected', {
                property_type: this.dataset.type
            });
        });
    });
});

// Track form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('property-form');
    if (form) {
        form.addEventListener('submit', function() {
            trackEvent('valuation_requested', {
                property_type: selectedPropertyType,
                living_area: formData.livingArea
            });
        });
    }
});
