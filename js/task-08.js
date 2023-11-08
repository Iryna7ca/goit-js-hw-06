const form = document.querySelector(".login-form");
 
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (form.email.value === `` || form.password.value === ``) {
        alert("Всі поля мають бути заповнені!");
    } else {
        console.dir(`Email: ${form.email.value}, Password: ${form.password.value}`);
        form.reset();
    }
    
     
};
