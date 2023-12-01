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
export type Estado = "jugando" | "ganado" | "perdido";