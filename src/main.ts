let puntuacion: number = 0;
let numeroCarta: number = 0;
let puntuacionFinal: number = 0;

document.addEventListener("DOMContentLoaded", () => {

    deshabilitarBoton("nuevapartida");
    deshabilitarBoton("plantate");
    deshabilitarBoton("saber");
  });

  const deshabilitarBoton = (elementoId: string) => {
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
      elementoMuestraPuntuacion.innerHTML = `PUNTUACIÓN ${puntuacionFinal}`;
    }
  }

  const mostrarMensaje = (mensaje: string) => {
    const elemento = document.getElementById("mensaje");
    if (elemento !== null && elemento !== undefined) {
      elemento.innerHTML = mensaje;
    }
  
  }


const dameCarta = () => Math.floor(Math.random() * 10) + 1;

const generarNumeroCarta = (numeroCarta : number) => {
  if (numeroCarta > 7) {
    numeroCarta = numeroCarta + 2;
  }
  return numeroCarta;
};

const repartoCarta = () => {
  const numeroAleatorio = dameCarta();
   generarNumeroCarta(numeroAleatorio);
   calculaPuntacion();
   mostrarCarta(numeroCarta);
   comprobarPartida();
   habilitarBoton("plantate");
 };

const calculaPuntacion = () => {
  puntuacionFinal = puntuacionFinal + puntuacionCarta(numeroCarta);
  muestraPuntuacion();
}
const puntuacionCarta = (carta : number) => {
  return carta < 7 ? carta : 0.5; 
 }

const comprobarPartida = () => {
  if (puntuacionFinal === 7.5) {
      hasGanado();
  } else if (puntuacionFinal > 7.5) {
      hasPerdido();
    }
    
  }
  const hasGanado = () => { 
    mostrarMensaje ("Lo has clavado ! Enhorabuena !");
    deshabilitarBoton("damecarta");
    deshabilitarBoton("plantate");
    habilitarBoton("nuevapartida");
    deshabilitarBoton("saber");
  }
  const hasPerdido = () => {
    mostrarMensaje ("GAME OVER VUELVA A INTENTARLO");
    deshabilitarBoton("damecarta");
    deshabilitarBoton("plantate");
    habilitarBoton("nuevapartida");
    deshabilitarBoton("saber");
  }

const comprobarBoton = document.getElementById("damecarta");
if (comprobarBoton !== null && comprobarBoton !== undefined && comprobarBoton instanceof HTMLButtonElement){
comprobarBoton.addEventListener("click", repartoCarta);
};
//PARA PLANTARSE
const plantarse = () => {
habilitarBoton("saber");
mensajePlantarse();
deshabilitarBoton("damecarta");
deshabilitarBoton("plantate");
habilitarBoton("nuevapartida");

};

const mensajePlantarse = () => {
if (puntuacionFinal <= 4) {
  mostrarMensaje ("Has sido muy conservador, ¿quieres saber lo que hubiera sucedido? Pulsa Saber");
} else if (puntuacionFinal > 4 && puntuacionFinal <= 5.5) {
  mostrarMensaje ("Te ha entrado el canguelo eh?, ¿quieres saber lo que hubiera sucedido? Pulsa Saber");
}else if (puntuacionFinal >= 6 && puntuacionFinal <= 7) {
  mostrarMensaje ("Casi casi..., ¿quieres saber lo que hubiera sucedido? Pulsa Saber");
}
}

const plantarseBoton = document.getElementById("plantate");
if (plantarseBoton !== null && plantarseBoton !== undefined){
   plantarseBoton.addEventListener("click", plantarse);
}
//PARA MOSTRAR LA CARTA
const mostrarCarta = (carta: number) => {
    const imagenCarta = obternerImagenCarta(carta);
    const elementoCarta = document.getElementById("carta");

    if (elementoCarta !== null && elementoCarta !== undefined && elementoCarta instanceof HTMLImageElement) {
        elementoCarta.src = imagenCarta;
    }

};
//PARA OBTENER LA IMAGEN DE LA CARTA
const obternerImagenCarta = (carta:number) => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
}


//PARA NUEVA PARTIDA
const nuevaPartida = () => {
  puntuacion = 0;
  numeroCarta = 0;
  puntuacionFinal = 0;
  muestraPuntuacion();
  mostrarMensaje("");
  mostrarCarta(0);
  habilitarBoton("damecarta");
  habilitarBoton("plantate");
  deshabilitarBoton("nuevapartida");
  deshabilitarBoton("saber");
}

const nuevapartidaBoton = document.getElementById("nuevapartida");
    if (nuevapartidaBoton !== null && nuevapartidaBoton !== undefined && nuevapartidaBoton instanceof HTMLButtonElement){
    nuevapartidaBoton.addEventListener("click", nuevaPartida);
    }
const saberPuntuacion = () => {
    repartoCarta();
    calculaPuntacion();
    mostrarCarta(numeroCarta);
    puntuacionSaber();
}
const puntuacionSaber = () => {
  if (puntuacionFinal === 7.5) {
    mostrarMensaje ( "Ooooohhhh, si no te hubieras plantado hubieras ganado");
    deshabilitarBoton("saber");
  } else if (puntuacionFinal > 7.5) {
    mostrarMensaje ("Genial ! Te has pasado, si no te hubieras plantado hubieras perdido");
    deshabilitarBoton("saber");
  }
}

const saberBoton = document.getElementById("saber");
if (saberBoton !== null && saberBoton !== undefined && saberBoton instanceof HTMLButtonElement){
    saberBoton.addEventListener("click", saberPuntuacion);
}