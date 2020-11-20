const BandList = require("./band-list.js");

class Sockets {
  constructor(io) {
    this.io = io;

    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      // Escuchar evento: mensaje-to-server
      console.log("Cliente conectado");
        
      // Emit all the current bands to the connected cliente
      socket.emit('current-band', this.bandList.getBands())
    });
  }
}

module.exports = Sockets;
