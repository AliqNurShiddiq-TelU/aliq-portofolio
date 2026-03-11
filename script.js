// ============================================
// Mobile Menu Toggle
// ============================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});

// ============================================
// Certificate Modal
// ============================================

const certificateModal = document.getElementById('certificateModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalIframe = document.getElementById('modalIframe');

// Certificate data mapping
const certificateData = {
  'lkmm': {
    title: 'Sertifikat LKMM-TM 2026',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'bi': {
    title: 'Sertifikat Semifinalist BI',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'dqlab': {
    title: 'Sertifikat Bootcamp DQLab',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'kelaskita': {
    title: 'Sertifikat UI/UX KelasKita',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'lab-assistant': {
    title: 'Laboratorium Assistant Documentation',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'videographer': {
    title: 'Videographer Intern Documentation',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'liaison-officer': {
    title: 'Liaison Officer Documentation',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'sekretaris-osis': {
    title: 'Sekretaris OSIS Documentation',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'senior-resident': {
    title: 'Senior Resident Documentation',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  },
  'genbi': {
    title: 'GenBI Documentation',
    url: 'https://drive.google.com/file/d/1v5m_vR_v_v_v_v_v_v_v_v_v_v_v_v/preview'
  }
};

// Get all certificate buttons
const certButtons = document.querySelectorAll('[data-cert]');

certButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const certId = button.getAttribute('data-cert');
    const cert = certificateData[certId];
    
    if (cert) {
      openCertificate(cert.title, cert.url);
    }
  });
});

function openCertificate(title, url) {
  modalTitle.innerHTML = `<i class="fas fa-award"></i><span>${title}</span>`;
  modalIframe.src = url;
  certificateModal.classList.add('open');
}

function closeCertificate() {
  certificateModal.classList.remove('open');
  modalIframe.src = '';
}

// Close modal button
modalCloseBtn.addEventListener('click', closeCertificate);

// Close modal when clicking outside
certificateModal.addEventListener('click', (e) => {
  if (e.target === certificateModal) {
    closeCertificate();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certificateModal.classList.contains('open')) {
    closeCertificate();
  }
});

// ============================================
// Smooth Scroll Navigation
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Animation on Scroll (Optional)
// ============================================

// Simple fade-in animation for elements when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply observer to sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// ============================================
// Navbar Background on Scroll
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});

// ============================================
// External Links Handler
// ============================================

// You can add your actual links here
document.querySelectorAll('.btn').forEach(btn => {
  if (btn.textContent.includes('Download My CV')) {
    btn.addEventListener('click', (e) => {=
      e.preventDefault();
      // Link ke CV Anda
      alert('asset/docs/CV Aliq Nur Shiddiq.pdf');
    });
  }
  
  if (btn.textContent.includes('Connect on LinkedIn')) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Link ke LinkedIn Anda
      window.open('https://www.linkedin.com/in/aliqnurshiddiq/', '_blank');
    });
  }
});

// ============================================
// Project Card Hover Effects
// ============================================

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
    this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.15)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
  });
  
  card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

// ============================================
// Add smooth transitions to all interactive elements
// ============================================

const style = document.createElement('style');
style.innerHTML = `
  * {
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }
`;
document.head.appendChild(style);

console.log('Portfolio script loaded successfully!');
