
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Auto-play videos on hover
    document.querySelectorAll('.project-video').forEach(video => {
      const card = video.closest('.project-card');
      
      card.addEventListener('mouseenter', () => {
        video.play();
      });
      
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });

    // Modal functions
    function openModal(modalId) {
      document.getElementById(modalId).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function closeModal(modalId) {
      document.getElementById(modalId).style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.animated-bg');
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    });

    // Typing effect for hero title
    function typeWriter(element, text, speed = 100) {
      let i = 0;
      element.innerHTML = '';
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }

    // Initialize typing effect when page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        const heroTitle = document.querySelector('.hero-text h1');
        if (heroTitle) {
          const originalText = heroTitle.textContent;
          heroTitle.style.opacity = '1';
          typeWriter(heroTitle, originalText, 50);
        }
      }, 1000);
    });

    // Add floating animation to skill tags
    document.querySelectorAll('.skill-tag').forEach((tag, index) => {
      tag.style.animationDelay = `${index * 0.1}s`;
      tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1) rotate(5deg)';
      });
      tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1) rotate(0deg)';
      });
    });

    // Add particle effect to background
    function createParticle() {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        animation: float-particle 6s linear infinite;
      `;
      
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = '100vh';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 6000);
    }

    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-particle {
        to {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Create particles periodically
    setInterval(createParticle, 300);

    // Add loading animation
    window.addEventListener('load', () => {
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
      }, 100);
    });
