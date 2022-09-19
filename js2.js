function cine(){
alert("Bienvenido a cines Pointbuster");
let pregunta1 = prompt("Que pelicula desea ver? \n 1. Top Gun: Maverick \n 2. Elvis \n 3. Minions");
 
const entrada_pelicula = {
    nombrePeli:{1:"Top Gun: Maverick", 2:"Elvis", 3:"Minions"},
    nombreEntra:{1:"2D",2:"3D",3:"4D"},
};

if(pregunta1 == 1){
    alert("usted eligio "+entrada_pelicula.nombrePeli[1]);
}else if(pregunta1 == 2){
    alert("usted eligio "+entrada_pelicula.nombrePeli[2]);
}else if(pregunta1 == 3){
    alert("usted eligio "+entrada_pelicula.nombrePeli[3]);
};

let pregunta2 = prompt("Que formato prefiere? \n 1. 2D \n 2. 3D \n 3. 4D ");
const precio =[250, 500, 750];

if (pregunta2 == 1){
    alert("usted eligio la pelicula en formato "+entrada_pelicula.nombreEntra[1]);
    alert("tiene que pagar $"+precio[0]);
}else if (pregunta2 == 2){
    alert("usted eligio la pelicula en formato "+entrada_pelicula.nombreEntra[2]);
    alert("tiene que pagar $"+precio[1]);
}else if(pregunta2 == 3){
    alert("usted eligio la pelicula en formato "+entrada_pelicula.nombreEntra[3]);
    alert("tiene que pagar $"+precio[2]);
};
}
cine();
