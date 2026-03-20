document.addEventListener('DOMContentLoaded', ()=> {
    let prenom = localStorage.getItem('prenom')
    const titre = document.getElementById("titre");

    if(prenom === null){
        console.log("Il n'y a pas de prénom dans le localstorage");
    } else {
        titre.textContent = "Bonjour" + prenom;
    }

    function save(){
        event.preventDefault();
        let prenom= document.getElementById("prenom").value;
        console.log(prenom);

        if(prenom === null){
        console.log("aucun prenom à sauvegarder");
        } else {
        localStorage.setItem("prenom", prenom);
        titre.textContent = "Bonjour" + prenom;
        }
}
document.getElementById("submit").onclick = save();
})