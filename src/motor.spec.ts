import {vi} from "vitest"
import {juego} from "./model";
import { generarNumeroCarta, puntuacionCarta, comprobarPartida} from "./motor";


describe("generarNumeroCarta", () => {
  it ("le doy un numero menor que 7 deberia devolver el mismo numero", () => {
    // Arrange
    const numeroCarta = 5;
    // Act
    const resultado = generarNumeroCarta(numeroCarta);
    vi.spyOn(juego, "numeroCarta", "get").mockReturnValue(5);
    // Assert
    expect(resultado).toBe(5);
  });
  it ("le doy un numero mayor que 7 deberia devolver el numero mas 2", () => {
    // Arrange
    const numeroCarta = 8;
    // Act
    const resultado = generarNumeroCarta(numeroCarta);
    vi.spyOn(juego, "numeroCarta", "get").mockReturnValue(8);
    // Assert
    expect(resultado).toBe(10);
  });
});

describe("puntuacionCarta", () => {
  it ("le doy un numero menor que 7 deberia devolver el mismo numero", () => {
    // Arrange
    const numeroCarta = 5;
    // Act
    const resultado = puntuacionCarta(numeroCarta);
    vi.spyOn(juego, "numeroCarta", "get").mockReturnValue(5);
    // Assert
    expect(resultado).toBe(5);
  });
  it ("le doy un numero mayor que 7 deberia devolver 0.5", () => {
    // Arrange
    const numeroCarta = 10;
    // Act
    const resultado = puntuacionCarta(numeroCarta);
    vi.spyOn(juego, "numeroCarta", "get").mockReturnValue(10);
    // Assert
    expect(resultado).toBe(0.5);
  });
});

describe("comprobarPartida", () => {
it ("le doy un numero menor que 7.5 deberia devolver jugando", () => {
  // Arrange
  const puntuacion = 5;
  // Act
  const resultado = comprobarPartida(puntuacion);
  vi.spyOn(juego, "puntuacionFinal", "get").mockReturnValue(5);
  // Assert
  expect(resultado).toBe("jugando");
});
it ("le doy un numero igual que 7.5 deberia devolver ganado", () => {
  // Arrange
  const puntuacion = 7.5;
  // Act
  const resultado = comprobarPartida(puntuacion);
  vi.spyOn(juego, "puntuacionFinal", "get").mockReturnValue(7.5);
  // Assert
  expect(resultado).toBe("ganado");
});
it ("le doy un numero mayor que 7.5 deberia devolver perdido", () => {
  // Arrange
  const puntuacion = 8;
  // Act
  const resultado = comprobarPartida(puntuacion);
  vi.spyOn(juego, "puntuacionFinal", "get").mockReturnValue(8);
  // Assert
  expect(resultado).toBe("perdido");
});
});


