class Jugador {
    constructor(fullname, username, email, password, avatar, id, score){
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.id = id;
        this.score = score;
    }
}

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

function players(){
    p1 = new Jugador();
    p2 = new Jugador();
    p3 = new Jugador();
    p4 = new Jugador();
    console.log("dentro de players()")
}

module.exports.players = players;