// Cyber-Nexus Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Glitch effect on header text
  const glitchText = document.querySelector('.glitch-text');
  
  if(glitchText) {
    setInterval(() => {
      const originalText = glitchText.getAttribute('data-text');
      const shouldGlitch = Math.random() > 0.9;
      
      if(shouldGlitch) {
        // Quick glitch
        glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        glitchText.style.textShadow = `
          ${Math.random() * 10 - 5}px 0 rgba(0, 243, 255, 0.7),
          ${Math.random() * -10 + 5}px 0 rgba(255, 0, 60, 0.7)
        `;
        
        setTimeout(() => {
          glitchText.style.transform = 'none';
          glitchText.style.textShadow = '0 0 10px rgba(255,255,255,0.3)';
        }, 100);
      }
    }, 200);
  }

  // Hover sound effect simulation (visual only for now)
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      // Simulate a small glitch on button hover
      btn.style.transform = `scale(1.02)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `scale(1)`;
    });
  });

  // Simple scroll reveal for feature cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
  });
});
