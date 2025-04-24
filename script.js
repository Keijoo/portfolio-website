// Define the texts for each page
const texts = { 
    "home": ["Exploring Virtual & Augmented Reality"],
    "about": ["Virtual Reality vs Augmented Reality"],
    "gallery": ["Visuals from the VR/AR World"],
    "contact": ["Get in Touch!"]
  };
  // Create a function to type text for each element
  function typeText(elementId, text) {
    const element = document.getElementById(elementId);
    let index = 0;
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index); // Add one character at a time
        index++;
        setTimeout(type, 100); // Type at this speed (100ms)
      }
    }
    type(); // Start typing
  }
  // Call the function for each page's heading
  window.onload = function() {
    // Check if the body has a class indicating the current page
    const bodyClass = document.body.classList[0]; // Assumes the body has a class like 'home', 'about', etc.
    if (texts[bodyClass]) {
      typeText(`typing-text-${bodyClass}`, texts[bodyClass][0]); // Dynamically call typeText based on the page class
    }
  };
  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Validation logic
    if (name === "") {
      alert("Name is required.");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (message === "") {
      alert("Message is required.");
      return;
    }
    // If all validations pass, you can submit the form (e.g., via an AJAX request or form submission)
    alert("Form submitted successfully!");
    // For example, you could submit the form here: this.submit();
  });
  