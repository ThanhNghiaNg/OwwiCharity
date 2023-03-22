let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: true,
      method: ["PUT", "POST", "PATCH", "GET", "DELETE"],
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket is not initialized!");
    } else {
      return io;
    }
  },
};
