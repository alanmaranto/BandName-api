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
      socket.emit("current-bands", this.bandList.getBands());

      // Vote for the band
      socket.on("vote-band", (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      // Delete band
      socket.on('delete-band', (id) => {
        console.log('here')
        this.bandList.deleteBand(id)
        this.io.emit('current-bands', this.bandList.getBands());
      })
    });
  }
}

module.exports = Sockets;
