emailjs.init('OD9POHhDC3h7GwB6O');
const messageBox=document.querySelector("#formMessage");
const  contactForm=document.querySelector("#contactForm");
function sendContactForm(event) {
  event.preventDefault();
  const {name,email,message}=event.target;
  templateParams={
    to_name:name.value,
    message:message.value,
    to_email:email.value
  }
  emailjs.send('service_edcychh', 'template_w2x8y4r', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
        event.target.reset();
       messageBox.classList.remove("error")
       messageBox.classList.add("success")
       messageBox.textContent="Form successfully submitted."
    }, function(error) {
       console.log('FAILED...', error);
       messageBox.classList.remove("success")
       messageBox.classList.add("error")
       messageBox.textContent="Invalid mail address"

    });
}
contactForm.addEventListener("submit",sendContactForm)
// Örnek kullanım:
