// object for emailjs parameters
const submit = document.querySelector("#submit-btn");
const formName = document.querySelector(".form-name");
const formEmail = document.querySelector(".form-email");
const formText = document.querySelector(".form-text");
const formConf = document.querySelector(".form-confirmation")
let bool = false;

const data = {
  service_id: "contact_service",
  template_id: "template_vqmdehr",
  user_id: "user_N1lY8Mc7IHZz5e2Jv6ZE1",
  template_params: {
    from_name: "",
    email: "",
    message: "",
  },
};

const toggle = () => {
  !bool ? formConf.style.display ="none": formConf.style.display = "block";
}

toggle();

submit.addEventListener("click", () => {
  bool = true;

  data.template_params.from_name = formName.value;
  data.template_params.email = formEmail.value;
  data.template_params.message = formText.value;

  console.log(data.template_params.from_name);
  console.log("I was clicked");
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    toggle();
    formName.value = "";
    formEmail.value = "";
    formText.value = "";
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
})

