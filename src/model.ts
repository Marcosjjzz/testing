interface Juego {
    puntuacion: number;
    numeroCarta: number;
    puntuacionFinal: number;
}
export const juego: Juego = {
    puntuacion: 0,
    numeroCarta: 0,
    puntuacionFinal: 0,
}
interface comprobarPuntuacion {
    ganar: number
    perder: number
    sigue: number

}
export const comprobarPuntuacion: comprobarPuntuacion = {
    ganar: 1,
    perder: 2,
    sigue: 0
}