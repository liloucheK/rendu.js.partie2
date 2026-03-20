let form = document.querySelector('form')
let errorContainer = document.getElementById('message-error');
let errorList = document.getElementById('error-list');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoi du form detecté');
    errorList.innerHTML='';
})

let email = document.querySelector('#email');
//EMAIL confirmation
form.addEventListener('submit', function(event){
    event.preventDefault();
    
    if(email.value == ''){

        email.classList.add('error');
        console.log("email invalide");

//Message d'erreur email
        errorContainer.classList.add('visible');
        let err = document.createElement('li');
        err.innerText = "Le champ Email doit contenir un email"
        errorList.appendChild(err)
        
        
        
    } else {

        email.classList.add('success');
        console.log('email valide');

    }
})
//PSEUDO confirmation
let pseudo = document.querySelector('#pseudo')
form.addEventListener('submit', function(event){
    event.preventDefault();

    if(pseudo.value.length < 6){

        pseudo.classList.add('error');
        console.log("pseudo invalide");

//Message d'erreur pseudo

        errorContainer.classList.add('visible');
        let err = document.createElement('li',  );
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"
        errorList.appendChild(err);
    } else {

        pseudo.classList.add('success');
        console.log('pseudo valide');
    }
})

//MDP confirmation
let password = document.getElementById('password')
let passCheck = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])"
    );

form.addEventListener('submit', function(event){
    event.preventDefault();

    if(password.value.length < 10) {

        password.classList.add('error');
        console.log("Mot de passe invalide, trop court");

//Message d'erreur mdbLength    

        errorContainer.classList.add('visible');
        let err = document.createElement('li');
        err.innerText = "Le champ Mot de passe doit contenir au moins 10 caractères"
        errorList.appendChild(err);

    } if(passCheck.test(password.value)==false){

        password.classList.add('error');
        console.log("Mot de passe invalide, rajoutez des caractères spéciaux")

//Message d'erreur mdpChara

        errorContainer.classList.add('visible');
        let err = document.createElement('li');
        err.innerText = "Le champ Mot de passe doit contenir minuscule, majuscule, chiffre, caractères spéciaux"
        errorList.appendChild(err);

    } else {

        password.classList.add('success');
        console.log("Mot de passe valide");
    }
})
//MDPRepeat confirmation
let passwordRepeat = document.getElementById('password2');
form.addEventListener('submit', function(event){
    event.preventDefault();

    if(password.value = passwordRepeat.value){

        passwordRepeat.classList.add('success');

    } else {

        passwordRepeat.classList.add('error');
        console.log("Le mot de passe n'est pas identique");

//Message d'erreur mdpRepeat

        errorContainer.classList.add('visible');
        let err = document.createElement('li');
        err.innerText = "Le Mot de passe doit être identique"
        errorList.appendChild(err);
        
    }
})


//Message de confirmation d'envoi
let successContainer = document.getElementById('message-success');
successContainer.classList.remove('visible');
form.addEventListener('submit', function(event){
    event.preventDefault();

    if(
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        passwordRepeat.classList.contains('success')
    )
    {
    successContainer.classList.add('visible');
    console.log("formulaire envoyé")
    }})
    
