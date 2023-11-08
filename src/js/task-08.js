const form = document.querySelector(".login-form");
 
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (form.email.value === `` || form.password.value === ``) {
        alert("Всі поля мають бути заповнені!");
    } else {
        console.log(`Email: ${form.email.value}`);
        console.log(`Password: ${form.password.value}`);
        form.reset();
    }
    
     
};
