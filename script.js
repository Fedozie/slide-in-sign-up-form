//VARIABLE DECLARATIONS
const signUp = document.querySelector('.sign-up-btn');
const signIn = document.querySelector('.sign-in-btn');
const sectionSignUp = document.querySelector('.container__sign-up');
const sectionSignIn = document.querySelector('.container__sign-in');
const formSignUp = document.querySelector('.form__sign-up-btn');
const formSignIn = document.querySelector('.form__sign-in-btn');


//Click event to slide into Sign Up Section
signUp.addEventListener('click', () => {
    sectionSignUp.classList.remove("hide");
    sectionSignIn.classList.add("hide");
})

//Click event to slide back into Sign In Section
signIn.addEventListener('click', () => {
    sectionSignUp.classList.add("hide");
    sectionSignIn.classList.remove("hide");
})