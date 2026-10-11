/**
 * INAMIGOS FOUNDATION — INTERACTIVE JAVASCRIPT LOGIC
 * High-craft interactions, accessible forms, responsive viewports, and modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Viewport / Device Switcher Controls (Stakeholder Review Tool)
  // =========================================================================
  const viewportContainer = document.getElementById('viewportContainer');
  const viewButtons = document.querySelectorAll('.view-btn[data-view]');
  const uiKitBtn = document.getElementById('openUiKitBtn');
  const uiKitModal = document.getElementById('uiKitModal');

  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view');
      
      // Update active button state
      viewButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update container mode class
      viewportContainer.classList.remove('mode-desktop', 'mode-mobile');
      if (mode === 'desktop') {
        viewportContainer.classList.add('mode-desktop');
      } else if (mode === 'mobile') {
        viewportContainer.classList.add('mode-mobile');
      }
    });
  });

  if (uiKitBtn && uiKitModal) {
    uiKitBtn.addEventListener('click', () => {
      openModal(uiKitModal);
    });
  }

  // =========================================================================
  // 2. Navigation, Sticky Header & Scroll Spy
  // =========================================================================
  const mainHeader = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  // Scroll listener for sticky header styling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }

    // Scroll spy for active navigation item
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Mobile Navigation Drawer Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-donate-btn');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // =========================================================================
  // 3. Impact Statistics Counter Animation
  // =========================================================================
  const statCards = document.querySelectorAll('.stat-card[data-counter]');
  let countersAnimated = false;

  function animateCounters() {
    statCards.forEach(card => {
      const target = parseInt(card.getAttribute('data-counter'), 10);
      const valEl = card.querySelector('.counter-value');
      if (!valEl) return;

      const duration = 1800;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out quadratic
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.floor(easeProgress * target);

        valEl.textContent = currentVal.toLocaleString('en-IN');

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          valEl.textContent = target.toLocaleString('en-IN');
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  if ('IntersectionObserver' in window) {
    const impactSection = document.getElementById('impact');
    if (impactSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersAnimated) {
            countersAnimated = true;
            animateCounters();
          }
        });
      }, { threshold: 0.25 });
      observer.observe(impactSection);
    }
  } else {
    animateCounters();
  }

  // =========================================================================
  // 4. Interactive Donation Engine
  // =========================================================================
  const donationForm = document.getElementById('donationForm');
  const freqButtons = document.querySelectorAll('.freq-btn');
  const freqHintText = document.getElementById('freqHintText');
  const presetButtons = document.querySelectorAll('.preset-btn');
  const customAmountInput = document.getElementById('customAmountInput');
  const donationCauseSelect = document.getElementById('donationCause');
  const summaryFrequency = document.getElementById('summaryFrequency');
  const summaryAmountText = document.getElementById('summaryAmountText');
  const summaryCauseText = document.getElementById('summaryCauseText');
  const donationTermsCheckbox = document.getElementById('donationTerms');
  const donationTermsError = document.getElementById('donationTermsError');
  const impactTierItems = document.querySelectorAll('.tier-item');

  let currentFrequency = 'One-Time';
  let currentAmount = 1000;

  // Sync tier highlights on the left
  function syncTierHighlight(amount) {
    impactTierItems.forEach(item => {
      const tierVal = parseInt(item.getAttribute('data-tier'), 10);
      if (tierVal === amount) {
        item.classList.add('active-tier');
      } else {
        item.classList.remove('active-tier');
      }
    });
  }

  // Frequency Toggle
  freqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      freqButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      const freqType = btn.getAttribute('data-freq');
      if (freqType === 'monthly') {
        currentFrequency = 'Monthly';
        freqHintText.textContent = 'Multiply your compassion with dependable ongoing monthly community support.';
      } else {
        currentFrequency = 'One-Time';
        freqHintText.textContent = 'Make an immediate difference with a single compassionate contribution.';
      }
      summaryFrequency.textContent = currentFrequency;
    });
  });

  // Preset Amount Selection
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      currentAmount = parseInt(btn.getAttribute('data-amount'), 10);
      customAmountInput.value = '';
      summaryAmountText.textContent = `₹${currentAmount.toLocaleString('en-IN')}`;
      syncTierHighlight(currentAmount);
    });
  });

  // Custom Amount Input
  if (customAmountInput) {
    customAmountInput.addEventListener('input', (e) => {
      const rawVal = e.target.value.trim();
      if (rawVal !== '') {
        presetButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        const parsed = parseInt(rawVal, 10);
        if (!isNaN(parsed) && parsed > 0) {
          currentAmount = parsed;
          summaryAmountText.textContent = `₹${parsed.toLocaleString('en-IN')}`;
          syncTierHighlight(parsed);
        } else {
          summaryAmountText.textContent = `₹0`;
        }
      } else {
        // Fallback to active preset or default
        const activePreset = document.querySelector('.preset-btn.active');
        if (activePreset) {
          currentAmount = parseInt(activePreset.getAttribute('data-amount'), 10);
          summaryAmountText.textContent = `₹${currentAmount.toLocaleString('en-IN')}`;
          syncTierHighlight(currentAmount);
        }
      }
    });
  }

  // Cause select changes
  if (donationCauseSelect) {
    donationCauseSelect.addEventListener('change', () => {
      summaryCauseText.textContent = donationCauseSelect.value;
    });
  }

  // Initial sync
  syncTierHighlight(1000);

  // Donation Form Submission & Validation
  const donationModal = document.getElementById('donationModal');
  const modalDonationFreq = document.getElementById('modalDonationFreq');
  const modalDonationAmount = document.getElementById('modalDonationAmount');
  const modalDonationCause = document.getElementById('modalDonationCause');
  const modalDonorName = document.getElementById('modalDonorName');
  const modalDonorEmail = document.getElementById('modalDonorEmail');

  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Terms Checkbox
      if (!donationTermsCheckbox.checked) {
        donationTermsError.textContent = 'Please review and accept the donation terms to proceed.';
        isValid = false;
      } else {
        donationTermsError.textContent = '';
      }

      // Validate Amount
      if (currentAmount <= 0) {
        alert('Please select or enter a valid donation amount.');
        isValid = false;
      }

      if (isValid) {
        // Populate modal data
        const donorNameInput = document.getElementById('donorName').value.trim();
        const donorEmailInput = document.getElementById('donorEmail').value.trim();

        modalDonationFreq.textContent = `${currentFrequency} Giving`;
        modalDonationAmount.textContent = `₹${currentAmount.toLocaleString('en-IN')}`;
        modalDonationCause.textContent = donationCauseSelect.value;
        modalDonorName.textContent = donorNameInput || 'Kind Supporter';
        modalDonorEmail.textContent = donorEmailInput || 'Provided for Demo';

        openModal(donationModal);
      }
    });
  }

  // =========================================================================
  // 5. Campaign CTAs & Campaign Modal
  // =========================================================================
  const campaignSupportBtns = document.querySelectorAll('.campaign-support-btn');
  const campaignExploreBtns = document.querySelectorAll('.campaign-explore-btn');
  const campaignJoinBtns = document.querySelectorAll('.campaign-join-btn');
  const campaignModal = document.getElementById('campaignModal');
  const campaignModalTitle = document.getElementById('campaignModalTitle');
  const campaignModalBody = document.getElementById('campaignModalBody');

  // Support cause button clicks -> scroll to donation with pre-selected cause
  campaignSupportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const campaignName = btn.getAttribute('data-campaign');
      if (donationCauseSelect) {
        for (let i = 0; i < donationCauseSelect.options.length; i++) {
          if (donationCauseSelect.options[i].text.includes(campaignName) || donationCauseSelect.options[i].value.includes(campaignName)) {
            donationCauseSelect.selectedIndex = i;
            summaryCauseText.textContent = donationCauseSelect.options[i].value;
            break;
          }
        }
      }
      const donationSec = document.getElementById('donation');
      if (donationSec) {
        donationSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Explore Campaign button -> opens campaign overview modal
  const campaignDetailsMap = {
    'Community Care': {
      title: 'Campaign: Community Care & Family Wellbeing',
      content: `
        <p><strong>Goal:</strong> Provide essential nutrition kits, healthcare checkup access, and seasonal relief to 400 vulnerable families.</p>
        <div class="next-steps-card">
          <h4>Key Campaign Milestones</h4>
          <ul>
            <li>Bi-weekly whole-grain and pulse distribution in urban clusters.</li>
            <li>Geriatric healthcare monitoring and basic medicine distribution.</li>
            <li>Winter blanket distribution drives ahead of December.</li>
          </ul>
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: #565C56;">
          * Illustrative campaign overview for design prototype evaluation.
        </p>
      `
    },
    'Education for Every Child': {
      title: 'Campaign: Education for Every Child',
      content: `
        <p><strong>Goal:</strong> Ensure no child drops out due to lack of books, school bags, or basic academic mentoring.</p>
        <div class="next-steps-card">
          <h4>Program Pillars</h4>
          <ul>
            <li>Textbooks and stationery kit distribution to 1,200 school children.</li>
            <li>Weekend volunteer tutoring circles focusing on mathematics and reading.</li>
            <li>Mini-library set-up in 10 neighborhood community centers.</li>
          </ul>
        </div>
      `
    },
    'Green Tomorrow': {
      title: 'Campaign: Green Tomorrow Eco-Sanctuary',
      content: `
        <p><strong>Goal:</strong> Plant 1,000 indigenous trees and create citizen-led urban pollinator green spots.</p>
        <div class="next-steps-card">
          <h4>Key Actions</h4>
          <ul>
            <li>Community tree planting drives with geo-tagged sapling survival tracking.</li>
            <li>Rainwater harvest awareness and neighborhood compost pits.</li>
            <li>School green clubs inspiring young eco-stewards.</li>
          </ul>
        </div>
      `
    }
  };

  campaignExploreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const campaignName = btn.getAttribute('data-campaign');
      const details = campaignDetailsMap[campaignName] || campaignDetailsMap['Community Care'];
      campaignModalTitle.textContent = details.title;
      campaignModalBody.innerHTML = details.content;
      openModal(campaignModal);
    });
  });

  // Join Initiative button -> scrolls to volunteer section and checks Environment
  campaignJoinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const volSection = document.getElementById('volunteer');
      if (volSection) {
        volSection.scrollIntoView({ behavior: 'smooth' });
        const envCheckbox = document.querySelector('input[name="volInterests"][value="Environment"]');
        if (envCheckbox) envCheckbox.checked = true;
      }
    });
  });

  // Upcoming Events RSVP Modal
  const rsvpEventBtns = document.querySelectorAll('.rsvp-event-btn');
  const eventModal = document.getElementById('eventModal');
  const eventModalDetails = document.getElementById('eventModalDetails');
  const confirmRsvpBtn = document.getElementById('confirmRsvpBtn');

  rsvpEventBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const eventName = btn.getAttribute('data-event');
      const eventDate = btn.getAttribute('data-date');
      eventModalDetails.textContent = `Event: ${eventName} (${eventDate})`;
      openModal(eventModal);
    });
  });

  if (confirmRsvpBtn) {
    confirmRsvpBtn.addEventListener('click', () => {
      const name = document.getElementById('rsvpNameInput').value.trim();
      const email = document.getElementById('rsvpEmailInput').value.trim();
      if (!name || !email) {
        alert('Please provide your name and email to receive event details.');
        return;
      }
      closeModal(eventModal);
      alert(`Thank you, ${name}! Your RSVP has been confirmed for prototype demonstration.`);
    });
  }

  // =========================================================================
  // 6. Volunteer Registration Form Validation & Feedback
  // =========================================================================
  const volunteerForm = document.getElementById('volunteerForm');
  const volunteerModal = document.getElementById('volunteerModal');
  const volunteerGreeting = document.getElementById('volunteerGreeting');

  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      // Full Name
      const nameField = document.getElementById('volFullName');
      const nameError = document.getElementById('volFullNameError');
      if (!nameField.value.trim()) {
        nameError.textContent = 'Please enter your full name.';
        hasError = true;
      } else {
        nameError.textContent = '';
      }

      // Email
      const emailField = document.getElementById('volEmail');
      const emailError = document.getElementById('volEmailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailField.value.trim() || !emailRegex.test(emailField.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        hasError = true;
      } else {
        emailError.textContent = '';
      }

      // Phone
      const phoneField = document.getElementById('volPhone');
      const phoneError = document.getElementById('volPhoneError');
      const phoneRegex = /^[+]?[0-9\s\-()]{7,15}$/;
      if (!phoneField.value.trim() || !phoneRegex.test(phoneField.value.trim())) {
        phoneError.textContent = 'Please enter a valid phone number.';
        hasError = true;
      } else {
        phoneError.textContent = '';
      }

      // City
      const cityField = document.getElementById('volCity');
      const cityError = document.getElementById('volCityError');
      if (!cityField.value.trim()) {
        cityError.textContent = 'Please enter your city or locality.';
        hasError = true;
      } else {
        cityError.textContent = '';
      }

      // Areas of Interest (at least one checkbox)
      const interestCheckboxes = document.querySelectorAll('input[name="volInterests"]:checked');
      const interestError = document.getElementById('volInterestsError');
      if (interestCheckboxes.length === 0) {
        interestError.textContent = 'Please select at least one area of interest.';
        hasError = true;
      } else {
        interestError.textContent = '';
      }

      // Message
      const messageField = document.getElementById('volMessage');
      const messageError = document.getElementById('volMessageError');
      if (!messageField.value.trim()) {
        messageError.textContent = 'Please share a brief note on what inspires you to volunteer.';
        hasError = true;
      } else {
        messageError.textContent = '';
      }

      // Consent
      const consentField = document.getElementById('volConsent');
      const consentError = document.getElementById('volConsentError');
      if (!consentField.checked) {
        consentError.textContent = 'Please check the box to confirm consent for volunteer communication.';
        hasError = true;
      } else {
        consentError.textContent = '';
      }

      if (!hasError) {
        const applicantName = nameField.value.trim();
        volunteerGreeting.textContent = `Thank you, ${applicantName}! Your willingness to serve is inspiring.`;
        openModal(volunteerModal);
        volunteerForm.reset();
      }
    });
  }

  // =========================================================================
  // 7. Testimonials & Stories of Change Modal
  // =========================================================================
  const openStoriesBtn = document.getElementById('openStoriesBtn');
  const storiesModal = document.getElementById('storiesModal');

  if (openStoriesBtn && storiesModal) {
    openStoriesBtn.addEventListener('click', () => {
      openModal(storiesModal);
    });
  }

  // =========================================================================
  // 8. Contact Form Validation & Feedback
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const contactStatusAlert = document.getElementById('contactStatusAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      const nameField = document.getElementById('contactName');
      const nameError = document.getElementById('contactNameError');
      if (!nameField.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        hasError = true;
      } else {
        nameError.textContent = '';
      }

      const emailField = document.getElementById('contactEmail');
      const emailError = document.getElementById('contactEmailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailField.value.trim() || !emailRegex.test(emailField.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        hasError = true;
      } else {
        emailError.textContent = '';
      }

      const subjectField = document.getElementById('contactSubject');
      const subjectError = document.getElementById('contactSubjectError');
      if (!subjectField.value) {
        subjectError.textContent = 'Please choose an inquiry subject.';
        hasError = true;
      } else {
        subjectError.textContent = '';
      }

      const messageField = document.getElementById('contactMessage');
      const messageError = document.getElementById('contactMessageError');
      if (!messageField.value.trim()) {
        messageError.textContent = 'Please write a message.';
        hasError = true;
      } else {
        messageError.textContent = '';
      }

      if (!hasError) {
        contactStatusAlert.className = 'form-status-alert success';
        contactStatusAlert.textContent = `Thank you, ${nameField.value.trim()}! Your message was received in prototype mode. In production, our team responds within 24 hours.`;
        contactStatusAlert.style.display = 'block';
        contactForm.reset();

        setTimeout(() => {
          contactStatusAlert.style.display = 'none';
        }, 7000);
      }
    });
  }

  // =========================================================================
  // 9. FAQ Accordion Interaction
  // =========================================================================
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const targetId = trigger.getAttribute('aria-controls');
      const targetContent = document.getElementById(targetId);

      // Toggle this item
      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        if (targetContent) targetContent.hidden = true;
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        if (targetContent) targetContent.hidden = false;
      }
    });
  });

  // =========================================================================
  // 10. Legal / Privacy Policy & Terms Modal
  // =========================================================================
  const legalModal = document.getElementById('legalModal');
  const legalTriggers = document.querySelectorAll('[data-modal="privacy"], [data-modal="terms"], .open-terms-link');

  legalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(legalModal);
    });
  });

  // =========================================================================
  // 11. Modal Framework Helper Functions
  // =========================================================================
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.removeAttribute('hidden');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button or first action
    const closeBtn = modalEl.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.setAttribute('hidden', '');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach generic close buttons
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-dialog-overlay');
      if (modal) closeModal(modal);
    });
  });

  // Click outside modal card to close
  document.querySelectorAll('.modal-dialog-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // Escape key closes modals and drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-dialog-overlay:not([hidden])').forEach(modal => {
        closeModal(modal);
      });
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    }
  });

  // Current year update in footer
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

});
