//Exo 1
//for(let i=1; i<=10; i++){console.log(7*i);}

//Exo2
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// var note =getRandomInt(0, 20);
// console.log(note)

// switch (note) {
//     case(18):
//     case(19):
//     case(20):
//         console.log("Excellent !");
//         break;
//     case(14):
//     case(15):
//     case(16):
//     case(17):
//         console.log("Bien.");
//         break;
//     case(10):
//     case(11):
//     case(12):
//     case(13):
//         console.log("Passable.");
//         break;
//     default:
//         console.log("Insuffisant.");
//         break;
// }

//Exo3



// function additionner(a, b){
//     console.log(a + b);
// }

// function multiplication(a, b){
//     console.log(a * b);
// }

// function calculprix (prixHT, tva){
//     var prixTTC = prixHT + prixHT * tva /100;
//     return prixTTC;
// }
// var prix = calculprix(132,455.52);
// console.log(parseFloat(prix.toFixed(2)));


//Exo Noté

// var prenom ="Lilo";

// var notes =[16, 14, 15, 12, 13, 11, 10, 19];

// var total =0;
// for(let i=0; i<notes.length; i++){
//      total = total+notes[i]/8
//  }
//  console.log(total);


var notes =[16, 14, 15, 12, 13, 11, 10, 19];
var total =0;
function calculerMoyenne(a, b){
    for(let i=0; i<b.length; i++){
     a = a+b[i];
     console.log(a)
 }
    console.log(a)
    return a/b.length;
}

var moyenne = calculerMoyenne(total, notes);
console.log(parseFloat(moyenne.toFixed(1)))


// Animations
function afficherNotif(){
    const notif = document.getElementById("notif");
    notif.classList.add('visible');
    setTimeout(() => {
        notif.classList.remove('visible');
    }, 3000)
    }
