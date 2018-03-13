
/* funciones flecha y funciones
let miFuncion = function(a){
  return a;
}

let miFuncionF = a =>a;

let miFuncion2 = function(a:number, b:number){
  return a+b;
}

let miFuncion2F = (a:number, b:number)=> a +b;

let miFuncion3 = function(nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;

}
let miFuncion3F = (nombre:string)=>{
  nombre = nombre.toUpperCase();
  return nombre;
}

let hulk = {
  nombre: "Hulk",
  smash(){

    setTimeout(()=>{
      console.log(this.nombre + " smash!!");
    },1500)

  }
}

hulk.smash();
*/
/*estructuracion objetos
/*let avenger ={
  nombre: "steve",
  clave: "Capitan America",
  poder: "droga"
}

let {nombre, clave, poder} = avenger;

//estructuracion arreglos
let avengers:string[] = ["Thor","Steve","Tony"];
let [thor, capi,  ironman]= avengers;
console.log(thor, capi, ironman);
*/
/*promesas usados para conexion asincronas.
let prom1 = new Promise( function( resolve, reject ){
  setTimeout(()=>{
    console.log("promesa Terminada");
    //si termina bien
    resolve();
    //termina mal
    //reject()
  },1500)
} )
console.log("paso 1");
prom1.then(function(){
  console.log("ejecutarme cuando se termine bien");

}, function(){
  console.error("ejecutarme si todo sale mal");
})
console.log("paso2");
*/
//interfaz de typescript
/*
interface Xmen{
nombre:string,
poder:string

}
function enviarMision(xmen:any){
console.log("enviando a: " + xmen.nombre);

}
function enviarCuartel(xmen:{nombre:string}){
console.log("regresando al cuartel: " + xmen.nombre);

}
let wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneracion"
};

enviarMision(wolverine);
enviarCuartel(wolverine);
*/
//introduccion a las clases POO
