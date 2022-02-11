const form = document.querySelector('.login-form');


form.addEventListener('submit', formSubmit);
function formSubmit (evt){
    evt.preventDefault();

    let formItems = evt.currentTarget.elements
    let email = formItems.email.value;
    let password = formItems.password.value;
    const userData = {
        email,
        password,
    };

    if (email==='' || password ===''){
        return alert('все поля должны быть заполнены');
    } else {
    console.log(userData);
    form.reset();
    }
}

