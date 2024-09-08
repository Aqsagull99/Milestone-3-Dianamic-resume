const form = document.getElementById('resume-form') as HTMLFormElement;
const dynamicResume = document.getElementById('dynamic-resume') as HTMLElement;

const dynamicName = document.getElementById('dynamic-name') as HTMLElement;
const dynamicEmail = document.getElementById('dynamic-email') as HTMLElement;
const dynamicPhone = document.getElementById('dynamic-phone') as HTMLElement;
const dynamicEducation = document.getElementById('dynamic-education') as HTMLElement;
const dynamicSkills = document.getElementById('dynamic-skills') as HTMLElement;

// Add event listener for the WhatsApp button
const whatsappButton = document.getElementById('whatsapp-submit') as HTMLButtonElement;
whatsappButton.addEventListener('click', (e: Event) => {
  e.preventDefault();

  // Capture Form Values
  const nameInput = (document.getElementById('name-input') as HTMLInputElement).value.trim();
  const emailInput = (document.getElementById('email-input') as HTMLInputElement).value.trim();
  const phoneInput = (document.getElementById('phone-input') as HTMLInputElement).value.trim();
  const educationInput = (document.getElementById('education-input') as HTMLInputElement).value.trim();
  const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value.trim();

  // Validation
  if (!nameInput || !emailInput || !phoneInput || !educationInput || !skillsInput) {
    alert('Please fill in all fields.');
    return;
  }

  // Construct WhatsApp Message
  const message = `Name: ${nameInput}\nEmail: ${emailInput}\nPhone: ${phoneInput}\nEducation: ${educationInput}\nSkills: ${skillsInput}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '923172813709'; // Update with your WhatsApp number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Redirect to WhatsApp
  window.open(whatsappURL, '_blank');
});
