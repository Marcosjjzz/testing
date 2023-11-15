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
 

const dameCarta = () => Math.floor(Math.random() * 10) + 1;

const repartoCarta = () => {
  
  numeroCarta = dameCarta();
  if (numeroCarta > 7) {
    numeroCarta = numeroCarta + 2;
  }
  habilitarBoton("plantate");

  mostrarCarta(numeroCarta);
  muestraPuntacion();

};

const muestraPuntacion = () => {
  const elementoMuestraPuntuacion = document.getElementById("puntuacion");
  puntuacionFinal = puntuacionFinal + puntuacion;
  if (elementoMuestraPuntuacion !== null && elementoMuestraPuntuacion !== undefined) {
    elementoMuestraPuntuacion.innerHTML = `PUNTUACIÓN ${puntuacionFinal}`;
  }
  if (puntuacionFinal >= 7.5) {
  resultadoPuntuacion();
}
}

const resultadoPuntuacion = () => {
  let mensaje = "";
  if (puntuacionFinal === 7.5) {
    mensaje = "Lo has clavado ! Enhorabuena !";
  }else {
    mensaje = "GAME OVER VUELVA A INTENTARLO";
  }
    
   const resultado = document.getElementById("mensaje");
    if (resultado !== null && resultado !== undefined) {
      resultado.innerHTML = mensaje;
    }
  deshabilitarBoton("damecarta");
  deshabilitarBoton("plantate");
  habilitarBoton("nuevapartida");
  deshabilitarBoton("saber");
    }

const comprobarBoton = document.getElementById("damecarta");

comprobarBoton?.addEventListener("click", repartoCarta);

//PARA PLANTARSE
const plantarse = () => {

  habilitarBoton("saber");

  let mensaje = "";
if (puntuacionFinal <= 4) {
  mensaje = "Has sido muy conservador, ¿quieres saber lo que hubiera sucedido? Pulsa Saber";
} else if (puntuacionFinal > 4 && puntuacionFinal <= 5.5) {
  mensaje = "Te ha entrado el canguelo eh?, ¿quieres saber lo que hubiera sucedido? Pulsa Saber";
}else if (puntuacionFinal >= 6 && puntuacionFinal <= 7) {
  mensaje = "Casi casi..., ¿quieres saber lo que hubiera sucedido? Pulsa Saber";
}else if (puntuacionFinal === 7.5) {
  mensaje = "Habrías ganado, ooooohhh vuelve a intentarlo";
  deshabilitarBoton("saber");
}
else if (puntuacionFinal > 7.5) {
  mensaje = "GAME OVER VUELVA A INTENTARLO";
}
const elementoPlantarse = document.getElementById("mensaje");
if (elementoPlantarse) {
  elementoPlantarse.innerHTML = mensaje;
};
deshabilitarBoton("damecarta");
deshabilitarBoton("plantate");
habilitarBoton("nuevapartida");

};

const plantarseBoton = document.getElementById("plantate");
if (plantarseBoton !== null && plantarseBoton !== undefined){
   plantarseBoton.addEventListener("click", plantarse);
}
//PARA MOSTRAR LA CARTA
const mostrarCarta = (carta: number) => {
    const imagenCarta = obternetImagenCarta(carta);
    const elementoCarta = document.getElementById("carta") as HTMLImageElement;

    if (elementoCarta !== null && elementoCarta !== undefined) {
        elementoCarta.src = imagenCarta;
    }

};
//PARA OBTENER LA IMAGEN DE LA CARTA
const obternetImagenCarta = (carta:number) => {
  switch (carta) {
    case 1:
      puntuacion = 1;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

    case 2:
      puntuacion = 2;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

    case 3:
      puntuacion = 3;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      puntuacion = 4;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      
    case 5:
      puntuacion = 5;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      puntuacion = 6;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      
    case 7:
      puntuacion = 7;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

    case 10:
      puntuacion = 0.5;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      puntuacion = 0.5;
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      
    case 12:
      puntuacion = 0.5;
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
  const elementoMuestraPuntuacion = document.getElementById("puntuacion");
  if (elementoMuestraPuntuacion !== null && elementoMuestraPuntuacion !== undefined) {
    elementoMuestraPuntuacion.innerHTML = `PUNTUACIÓN ${puntuacionFinal}`;
  }
  const elementoPlantarse = document.getElementById("mensaje");
  if (elementoPlantarse !== null && elementoPlantarse !== undefined) {
    elementoPlantarse.innerHTML = "";
  }
  const elementoCarta = document.getElementById("carta") as HTMLImageElement;
  if (elementoCarta !== null && elementoCarta !== undefined) {
    elementoCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
habilitarBoton("damecarta");
habilitarBoton("plantate");
deshabilitarBoton("nuevapartida");
deshabilitarBoton("saber");

}

const nuevapartidaBoton = document.getElementById("nuevapartida");
    nuevapartidaBoton?.addEventListener("click", nuevaPartida);

const saberPuntuacion = () => {
repartoCarta();
deshabilitarBoton("plantate");
}
const saberBoton = document.getElementById("saber");
    saberBoton?.addEventListener("click", saberPuntuacion);
