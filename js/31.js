const boton = document.querySelector("#boton");
boton.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) =>
    console.log(`resultado`, resultado)
  );
});

if (Notification.permission == "granted") {
  new Notification("esta es una notificacion", {
    icon: "img/information.png",
    body: "Alerta",
  });
}
