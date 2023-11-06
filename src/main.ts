let puntuacion: number = 0;
let numeroCarta: number = 0;
let puntuacionFinal: number = 0;

const nuevapartida  = document.getElementById("nuevapartida");
    if (nuevapartida instanceof HTMLButtonElement)
    nuevapartida.disabled = true;
    const plantarseDisabled  = document.getElementById("plantate");
    if (plantarseDisabled instanceof HTMLButtonElement)
    plantarseDisabled.disabled = true;
    const saber  = document.getElementById("saber");
    if (saber instanceof HTMLButtonElement)
    saber.disabled = true;

const repartoCarta = () => {
  const dameCarta = () => Math.floor(Math.random() * 10) + 1;
  numeroCarta = dameCarta();
  if (numeroCarta > 7) {
    numeroCarta = numeroCarta + 2;
  }
  const plantarseDisabled  = document.getElementById("plantate");
  if (plantarseDisabled instanceof HTMLButtonElement)
  plantarseDisabled.disabled = false;

  mostrarCarta(numeroCarta);
  muestraPuntacion();

};

const muestraPuntacion = () => {
  const elementoMuestraPuntuacion = document.getElementById("puntuacion");
  puntuacionFinal = puntuacionFinal + puntuacion;
  if (elementoMuestraPuntuacion) {
    elementoMuestraPuntuacion.innerHTML = `PUNTUACIÓN ${puntuacionFinal}`;
  }
  if (puntuacionFinal > 7.5) {
    const pierde = document.getElementById("mensaje");
    if (pierde) {
      pierde.innerHTML = `GAME OVER VUELVA A INTENTARLO`;
    }
    
    const damecarta  = document.getElementById("damecarta");
    if (damecarta instanceof HTMLButtonElement)
    damecarta.disabled = true;
    const plantarseDisabled  = document.getElementById("plantate");
    if (plantarseDisabled instanceof HTMLButtonElement)
    plantarseDisabled.disabled = true;
    const nuevapartida  = document.getElementById("nuevapartida");
    if (nuevapartida instanceof HTMLButtonElement)
    nuevapartida.disabled = false;
    const saber  = document.getElementById("saber");
    if (saber instanceof HTMLButtonElement)
    saber.disabled = true;
  
}
};
const comprobarBoton = document.getElementById("damecarta");

comprobarBoton?.addEventListener("click", repartoCarta);


const plantarse = () => {

  const saber  = document.getElementById("saber");
  if (saber instanceof HTMLButtonElement)
  saber.disabled = false;

  let mensaje = "";
if (puntuacionFinal <= 4) {
  mensaje = "Has sido muy conservador, ¿quieres saber lo que hubiera sucedido? Pulsa Saber";
} else if (puntuacionFinal > 4 && puntuacionFinal <= 5.5) {
  mensaje = "Te ha entrado el canguelo eh?, ¿quieres saber lo que hubiera sucedido? Pulsa Saber";
}else if (puntuacionFinal >= 6 && puntuacionFinal <= 7) {
  mensaje = "Casi casi..., ¿quieres saber lo que hubiera sucedido? Pulsa Saber";
}else if (puntuacionFinal === 7.5) {
  mensaje = "¡ Lo has clavado! ¡Enhorabuena!";
  const saber  = document.getElementById("saber");
  if (saber instanceof HTMLButtonElement)
  saber.disabled = true;
}
else if (puntuacionFinal > 7.5) {
  mensaje = "GAME OVER VUELVA A INTENTARLO";
}
const elementoPlantarse = document.getElementById("mensaje");
if (elementoPlantarse) {
  elementoPlantarse.innerHTML = mensaje;
};
const damecarta  = document.getElementById("damecarta");
if (damecarta instanceof HTMLButtonElement)
damecarta.disabled = true
const plantarseDisabled  = document.getElementById("plantate");
if (plantarseDisabled instanceof HTMLButtonElement)
plantarseDisabled.disabled = true;
const nuevapartida  = document.getElementById("nuevapartida");
    if (nuevapartida instanceof HTMLButtonElement)
    nuevapartida.disabled = false;

}

const plantarseBoton = document.getElementById("plantate");
   plantarseBoton?.addEventListener("click", plantarse);

const mostrarCarta = (carta: number) : void => {
  let imagenCarta = "";
    switch (carta) {
      case 1:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        puntuacion = 1;
        break;
      case 2:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        puntuacion = 2;
        break;
      case 3:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        puntuacion = 3;
        break;
      case 4:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        puntuacion = 4;
        break;
      case 5:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        puntuacion = 5;
        break;
      case 6:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        puntuacion = 6;
        break;
      case 7:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        puntuacion = 7;
        break;
      case 10:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        puntuacion = 0.5;
        break;
      case 11:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        puntuacion = 0.5;
        break;
      case 12:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        puntuacion = 0.5;
        break;
      default:
        imagenCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        break;

    }
    const elementoCarta = document.getElementById("carta") as HTMLImageElement;

    if (elementoCarta !== null && elementoCarta !== undefined) {
        elementoCarta.src = imagenCarta;
    }

};
const nuevaPartida = () => {
  puntuacion = 0;
  numeroCarta = 0;
  puntuacionFinal = 0;
  const elementoMuestraPuntuacion = document.getElementById("puntuacion");
  if (elementoMuestraPuntuacion) {
    elementoMuestraPuntuacion.innerHTML = `PUNTUACIÓN ${puntuacionFinal}`;
  }
  const elementoPlantarse = document.getElementById("mensaje");
  if (elementoPlantarse) {
    elementoPlantarse.innerHTML = "";
  }
  const elementoCarta = document.getElementById("carta") as HTMLImageElement;
  if (elementoCarta !== null && elementoCarta !== undefined) {
    elementoCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  const damecarta  = document.getElementById("damecarta");
if (damecarta instanceof HTMLButtonElement)
damecarta.disabled = false;
const plantarseDisabled  = document.getElementById("plantate");
if (plantarseDisabled instanceof HTMLButtonElement)
plantarseDisabled.disabled = false;
const nuevapartida  = document.getElementById("nuevapartida");
  if (nuevapartida instanceof HTMLButtonElement)
  nuevapartida.disabled = true;
  const saber  = document.getElementById("saber");
  if (saber instanceof HTMLButtonElement)
  saber.disabled = true;


}
const nuevapartidaBoton = document.getElementById("nuevapartida");
    nuevapartidaBoton?.addEventListener("click", nuevaPartida);

const saberPuntuacion = () => {
repartoCarta();
const plantarseDisabled  = document.getElementById("plantate");
if (plantarseDisabled instanceof HTMLButtonElement)
plantarseDisabled.disabled = true;
}
const saberBoton = document.getElementById("saber");
    saberBoton?.addEventListener("click", saberPuntuacion);
