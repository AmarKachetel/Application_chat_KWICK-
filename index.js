

function _(e) { /*Fonvtion qui appel ducument.getElementById*/ 
    return document.getElementById(e);
}
const displayform = _('displayForm');
const forLogin = _('forLogin');/*Le bouton pour afficher le formulaire de connexion*/ 
const loginForm = _('loginForm');/*Le formulaire de connexion*/
const forRegister = _('forRegister');/*Le bouton pour afficher le formulaire d'insription*/
const registerForm = _('registerForm');/*Le formulaire d'insciption'*/
const formContainer = _('formContainer');

displayform.addEventListener('click', showForm);/*quand on clique sur le bouton se connecter on affiche le formulaire de connexion et d'inscription */


forLogin.addEventListener('click', () =>{
    forLogin.classList.add('active')
    forRegister.classList.remove('active')
    if(loginForm.classList.contains('toggleForm')){
        formContainer.style.transform = 'translate(0%)'; /*translation 100 % pour que l'autre formulaire apparait*/ 
        formContainer.style.transition = 'transform .2s';/*le temps de transformation */
        registerForm.classList.add('toggleForm');/*retirer la class toggleForm*/
        loginForm.classList.remove('toggleForm')/*lancer le login et ajouter la classe toggleForm */
    }
})


forRegister.addEventListener('click', () => {
    forLogin.classList.remove('active')
    forRegister.classList.add('active')
    if(registerForm.classList.contains('toggleForm')){
        formContainer.style.transform = 'translate(-100%)'; /*translation 100 % pour que l'autre formulaire apparait*/ 
        formContainer.style.transition = 'transform .2s';/*le temps de transformation */
        registerForm.classList.remove('toggleForm');/*retirer la class toggleForm*/
        loginForm.classList.add('toggleForm')/*lancer le login et ajouter la classe toggleForm */
    }
})

function showForm(){
    document.querySelector('.form-wrapper .card').classList.toggle('show');
}


/* java script pour afficher et cacher le mot de passe quand on clique sur l'icone oeil */

const pswrdChamp = document.querySelector(".card-body input[type='password']"),
afficheMDPBtn = document.querySelector(" .card-body i");

afficheMDPBtn.onclick = ()=>{
    if( pswrdChamp.type == "password"){
        pswrdChamp.type = "text";
    }else{
        pswrdChamp.type = "password";
    }
}