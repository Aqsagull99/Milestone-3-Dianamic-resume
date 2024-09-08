// Dynamic Resume Form Logic
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const dynamicResume = document.getElementById('dynamic-resume') as HTMLElement;
// const dynamicName = document.getElementById('dynamic-name') as HTMLElement;
// const dynamicEmail = document.getElementById('dynamic-email') as HTMLElement;
// const dynamicPhone = document.getElementById('dynamic-phone') as HTMLElement;
// const dynamicEducation = document.getElementById('dynamic-education') as HTMLElement;
// const dynamicSkills = document.getElementById('dynamic-skills') as HTMLElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
// Capture Form Values
//   const nameInput = (document.getElementById('name-input') as HTMLInputElement).value;
//   const emailInput = (document.getElementById('email-input') as HTMLInputElement).value;
//   const phoneInput = (document.getElementById('phone-input') as HTMLInputElement).value;
//   const educationInput = (document.getElementById('education-input') as HTMLInputElement).value;
//   const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value;
// Populate Resume
//   dynamicName.textContent = nameInput;
//   dynamicEmail.textContent = `Email: ${emailInput}`;
//   dynamicPhone.textContent = `Phone: ${phoneInput}`;
//   dynamicEducation.textContent = educationInput;
// Populate Skills
//   dynamicSkills.innerHTML = '';
//   skillsInput.split(',').forEach(skill => {
//     const li = document.createElement('li');
//     li.textContent = skill.trim();
//     dynamicSkills.appendChild(li);
//   });
// Show the Resume
//   dynamicResume.classList.remove('hidden');
// });
// Dynamic Resume Form Logic
// jjj
var form = document.getElementById('resume-form');
var dynamicResume = document.getElementById('dynamic-resume');
var dynamicName = document.getElementById('dynamic-name');
var dynamicEmail = document.getElementById('dynamic-email');
var dynamicPhone = document.getElementById('dynamic-phone');
var dynamicEducation = document.getElementById('dynamic-education');
var dynamicSkills = document.getElementById('dynamic-skills');
// Add event listener for the WhatsApp button
var whatsappButton = document.getElementById('whatsapp-submit');
whatsappButton.addEventListener('click', function (e) {
    e.preventDefault();
    // Capture Form Values
    var nameInput = document.getElementById('name-input').value.trim();
    var emailInput = document.getElementById('email-input').value.trim();
    var phoneInput = document.getElementById('phone-input').value.trim();
    var educationInput = document.getElementById('education-input').value.trim();
    var skillsInput = document.getElementById('skills-input').value.trim();
    // Validation
    if (!nameInput || !emailInput || !phoneInput || !educationInput || !skillsInput) {
        alert('Please fill in all fields.');
        return;
    }
    // Construct WhatsApp Message
    var message = "Name: ".concat(nameInput, "\nEmail: ").concat(emailInput, "\nPhone: ").concat(phoneInput, "\nEducation: ").concat(educationInput, "\nSkills: ").concat(skillsInput);
    var encodedMessage = encodeURIComponent(message);
    var whatsappNumber = '923172813709'; // Update with your WhatsApp number
    var whatsappURL = "https://wa.me/".concat(whatsappNumber, "?text=").concat(encodedMessage);
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
});
// Existing event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Populate Resume
    dynamicName.textContent = document.getElementById('name-input').value.trim();
    dynamicEmail.textContent = "Email: ".concat(document.getElementById('email-input').value.trim());
    dynamicPhone.textContent = "Phone: ".concat(document.getElementById('phone-input').value.trim());
    dynamicEducation.textContent = document.getElementById('education-input').value.trim();
    // Populate Skills
    dynamicSkills.innerHTML = '';
    var skills = document.getElementById('skills-input').value.trim().split(',');
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        dynamicSkills.appendChild(li);
    });
    // Show the Resume
    dynamicResume.classList.remove('hidden');
});
