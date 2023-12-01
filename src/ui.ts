
import {
    juego,
    Estado
  } from "./model";
  
  import {
      dameCarta,
      generarNumeroCarta,
      obternerImagenCarta,
      calculaPuntacion,
      comprobarPartida,
  } from "./motor";

  export const deshabilitarBoton = (elementoId: string) => {
    const elemento = document.getElementById(elementoId)

    if (elemento !== null && elemento !== undefined && elemento instanceof HTMLButtonElement) {
        elemento.disabled = true;
    }
  }

  const habilitarBoton = (elementoId: string) => {
    const elemento = document.getElementById(elementoId)

    if (elemento !== null && elemento !== undefined && elemento instanceof HTMLButtonElement) {
        elemento.disabled = false;
    }

  }
 
  const muestraPuntuacion = () => {
    const elementoMuestraPuntuacion = document.getElementById("puntuacion");
    if (elementoMuestraPuntuacion !== null && elementoMuestraPuntuacion !== undefined) {
      elementoMuestraPuntuacion.innerHTML = `PUNTUACIÓN ${juego.puntuacionFinal}`;
    }
  }

  const mostrarMensaje = (mensaje: string) => {
    const elemento = document.getElementById("mensaje");
    if (elemento !== null && elemento !== undefined) {
      elemento.innerHTML = mensaje;
    }
  
  }
  const repartoCarta = () => {
    const numeroAlAzar = dameCarta(); // dame un numero al Azar
    juego.numeroCarta = generarNumeroCarta(numeroAlAzar);
    mostrarCarta(juego.numeroCarta);
    calculaPuntacion();
    muestraPuntuacion();
    habilitarBoton("plantate");
    const comprobacion = comprobarPartida (juego.puntuacionFinal);
    ganadoPerdido(comprobacion);
  };

  const comprobarBoton = document.getElementById("damecarta");
if (comprobarBoton !== null && comprobarBoton !== undefined && comprobarBoton instanceof HTMLButtonElement){
comprobarBoton.addEventListener("click", repartoCarta);
};

const plantarse = () => {
    habilitarBoton("saber");
    mensajePlantarse();
    deshabilitarBoton("damecarta");
    deshabilitarBoton("plantate");
    habilitarBoton("nuevapartida");
    
    };
  
  const plantarseBoton = document.getElementById("plantate");
  if (plantarseBoton !== null && plantarseBoton !== undefined){
     plantarseBoton.addEventListener("click", plantarse);
  }

  const mostrarCarta = (carta: number) => {
    const imagenCarta = obternerImagenCarta(carta);
    const elementoCarta = document.getElementById("carta");

    if (elementoCarta !== null && elementoCarta !== undefined && elementoCarta instanceof HTMLImageElement) {
        elementoCarta.src = imagenCarta;
    }

};
   //PARA NUEVA PARTIDA
   export const nuevaPartida = () => {
    juego.puntuacion = 0;
    juego.numeroCarta = 0;
    juego.puntuacionFinal = 0;
    muestraPuntuacion();
    mostrarMensaje("");
    mostrarCarta(0);
    habilitarBoton("damecarta");
    deshabilitarBoton("plantate");
    deshabilitarBoton("nuevapartida");
    deshabilitarBoton("saber");
  }

const nuevapartidaBoton = document.getElementById("nuevapartida");
    if (nuevapartidaBoton !== null && nuevapartidaBoton !== undefined && nuevapartidaBoton instanceof HTMLButtonElement){
    nuevapartidaBoton.addEventListener("click", nuevaPartida);
    }

//PARA SABER LA PUNTUACION
    const saberPuntuacion = () => {
      repartoCarta();
      mostrarCarta(juego.numeroCarta);
      puntuacionSaber();
      deshabilitarBoton("plantate");
  }

const saberBoton = document.getElementById("saber");
if (saberBoton !== null && saberBoton !== undefined && saberBoton instanceof HTMLButtonElement){
    saberBoton.addEventListener("click", saberPuntuacion);
}
const ganadoPerdido = (estado: Estado) => { 
  if (estado === "ganado"){
      ganar();

  } else if (estado === "perdido") {
      perdido();
  }
};

const ganar = () => { 
mostrarMensaje ("Lo has clavado ! Enhorabuena !");
deshabilitarBoton("damecarta");
deshabilitarBoton("plantate");
habilitarBoton("nuevapartida");
deshabilitarBoton("saber");
}
const perdido = () => {
mostrarMensaje ("GAME OVER VUELVA A INTENTARLO");
deshabilitarBoton("damecarta");
deshabilitarBoton("plantate");
habilitarBoton("nuevapartida");
deshabilitarBoton("saber"); 
}
  
  const mensajePlantarse = () => {
  if (juego.puntuacionFinal <= 4) {
    mostrarMensaje ("Has sido muy conservador, ¿quieres saber lo que hubiera sucedido? Pulsa Saber");
  } else if (juego.puntuacionFinal > 4 && juego.puntuacionFinal <= 5.5) {
    mostrarMensaje ("Te ha entrado el canguelo eh?, ¿quieres saber lo que hubiera sucedido? Pulsa Saber");
  }else if (juego.puntuacionFinal >= 6 && juego.puntuacionFinal <= 7) {
    mostrarMensaje ("Casi casi..., ¿quieres saber lo que hubiera sucedido? Pulsa Saber");
  }
  }
  



  
  const puntuacionSaber = () => {
    if (juego.puntuacionFinal === 7.5) {
      mostrarMensaje ( "Ooooohhhh, si no te hubieras plantado hubieras ganado");
    } else if (juego.puntuacionFinal > 7.5) {
      mostrarMensaje ("Genial ! Te has pasado, si no te hubieras plantado hubieras perdido");
    }
  }