

//Una función no se ejecuta si no la llamamos


function calcularPrecioTotal(){
    //Muestra por consola
   console.log("Ingresó a calucarPrecioTotal");

   //en CantEnt almaceno la cantidad de entradas que ingresó el usuario
   let cantEnt=document.getElementById("cantEntradas").value;
   console.log("cantEnt: " + cantEnt);


     //En porcDesc almaceno el descuento que seleccionó el usuario

   let porcDesc=document.getElementById("porcDescuento").value;
   console.log("porcDesc: " + porcDesc);
   

    //En descuento almacenamos el total de pesos para descontar
   let descuento=(cantEnt*200) * porcDesc/100;
   console.log("descuento: " + descuento);

   //Precio total a pagar
   let precioFin=(cantEnt*200) - descuento;
   console.log("precioFin: " + precioFin);


    //Modifico el input precio final para poner el total con descuento
   document.getElementById("precioFinal").value=precioFin;




console.log ("Compraste: "+ cantEnt + " " + "entrada por un total de $" + precioFin);


document.getElementById('resumen').onclick = () => {
  alert('"Compraste: "+  + " " + "entrada por un total de $" + ');
}


}


 





