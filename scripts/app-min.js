const submit=document.querySelector("#submit-btn"),formName=document.querySelector(".form-name"),formEmail=document.querySelector(".form-email"),formText=document.querySelector(".form-text"),formConf=document.querySelector(".form-confirmation");let bool=!1;const data={service_id:"contact_service",template_id:"template_vqmdehr",user_id:"user_N1lY8Mc7IHZz5e2Jv6ZE1",template_params:{from_name:"",email:"",message:""}},toggle=()=>{formConf.style.display=bool?"block":"none"};toggle(),submit.addEventListener("click",(()=>{bool=!0,data.template_params.from_name=formName.value,data.template_params.email=formEmail.value,data.template_params.message=formText.value,$.ajax("https://api.emailjs.com/api/v1.0/email/send",{type:"POST",data:JSON.stringify(data),contentType:"application/json"}).done((function(){toggle(),formName.value="",formEmail.value="",formText.value=""})).fail((function(e){alert("Oops... "+JSON.stringify(e))}))}));