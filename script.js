document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typed-text");
    const phrases = ["Full Stack Web Developer", "Open Source Contributor", "DSA Enthusiast"];
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
  
    function typeText() {
      const currentPhrase = phrases[currentPhraseIndex];
      textElement.textContent = currentPhrase.substring(0, currentLetterIndex + 1);
      currentLetterIndex++;
  
      if (currentLetterIndex < currentPhrase.length) {
        setTimeout(typeText, 100); // Delay between typing letters
      } else {
        setTimeout(deleteText, 1000); // Delay before deleting the text
      }
    }
  
    function deleteText() {
      const currentPhrase = phrases[currentPhraseIndex];
      textElement.textContent = currentPhrase.substring(0, currentLetterIndex - 1);
      currentLetterIndex--;
  
      if (currentLetterIndex > 0) {
        setTimeout(deleteText, 50); // Delay between deleting letters
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(typeText, 500); // Delay before typing the next phrase
      }
    }
  
    typeText(); // Start the typing animation
  });
  document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 200); // Delay each skill item by 200ms
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 200); // Delay each education item by 200ms
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 200); // Delay each project item by 200ms
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const extracurricularItems = document.querySelectorAll('.extracurricular-item');
    
    extracurricularItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 200); // Delay each extracurricular item by 200ms
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("response-message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Basic form validation
      if (name && email && message) {
        responseMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
        responseMessage.style.color = "green";
        form.reset(); // Reset the form after successful submission
      } else {
        responseMessage.textContent = "Please fill in all the fields.";
        responseMessage.style.color = "red";
      }
    });
  });
  
