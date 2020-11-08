class Partida {
    constructor(tablero, jugadores, ficha, idPartida) {
      this.tablero = tablero;
      this.jugadores = jugadores;
      this.ficha = ficha;
      this.idPartida = idPartida;
    }

    //Getters
    get getJugadores(){
      return this.jugadores;
    }

    get getTablero(){
      return this.tablero;
    }

    get getFicha(){
      return this.ficha;
    }

    //Setters
    set setJugadores(jugadores){
      this.jugadores = jugadores;
    }

    set setTablero(tablero){
      this.tablero = tablero;
    }

    set setFicha(ficha){
      this.ficha = ficha;
    }

    set idPartida (idPartida){
      this.idPartida = idPartida;
    }
  }