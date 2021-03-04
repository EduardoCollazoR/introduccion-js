// metodos de propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`reproducir ${id}`);
  },
  pausar: function () {
    console.log("pausar");
  },

  crearPlaylist: function (nombre) {
    console.log(`creando la playlist ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`reproduciendo la playlist ${nombre}`);
  },
};

reproductor.borrarCancion = function (id) {
  console.log(`eliminar cancion ${id}`);
};

reproductor.reproducir(234);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("metal");
reproductor.reproducirPlaylist("metal");
