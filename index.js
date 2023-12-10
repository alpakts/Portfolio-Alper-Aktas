emailjs.init("OD9POHhDC3h7GwB6O");
const messageBox = document.querySelector("#formMessage");
const contactForm = document.querySelector("#contactForm");
function sendContactForm() {
  const { name, email, message } = contactForm;
  templateParams = {
    to_name: name.value,
    message: message.value,
    to_email: email.value,
  };
  emailjs.send("service_edcychh", "template_w2x8y4r", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      contactForm.reset();
      messageBox.classList.remove("error");
      messageBox.classList.add("success");
      messageBox.textContent = "Form successfully submitted.";
      sendEmailToMyself(templateParams.to_name, templateParams.message);
    },
    function (error) {
      console.log("FAILED...", error);
      messageBox.classList.remove("success");
      messageBox.classList.add("error");
      messageBox.textContent = "Invalid mail address";
    }
  );
}
function sendEmailToMyself(from_name, message) {
  templateParams = {
    to_name: "Alper",
    from_name: from_name,
    message: message,
  };
  emailjs.send("service_edcychh", "template_p0be16h", templateParams);
}
function onSubmit(token) {
  sendContactForm();
}
contactForm.addEventListener("submit", sendContactForm);
// Örnek kullanım:
