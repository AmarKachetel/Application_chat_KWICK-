const pswrdChamp = document.querySelector(" .card-body input[type='password']"),
afficheMDPBtn = document.querySelector(" .card-body i");

afficheMDPBtn.onclick = ()=>{
    if( pswrdChamp.type == "password"){
        pswrdChamp.type = "text";
    }else{
        pswrdChamp.type = "password";
    }
}