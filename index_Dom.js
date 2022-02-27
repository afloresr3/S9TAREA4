import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busquedas.js";
import getGeolocation from "./geolocaliacion.js";
import hamburgerMenu from "./menu_hamburgesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidations from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";
const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/Alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "jn 25, 2022 00:00:00", "Feliz Cumpleaños Alan 🥳");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
      "youtube",
      "(min-width: 1024px)",
      `<a href="https://www.youtube.com/embed/2SetvwBV-SU" target="_blank" rel="noopener">Ver Video</a>`,
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
      "gmaps",
      "(min-width: 1024px)",
      `<a href="https://goo.gl/maps/KirwNBy6M9WG5Es59" target="_blank" rel="noopener">Ver Mapa</a>`,
      `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.601780949819!2d-79.8912882308806!3d-2.1913961323391313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6e64c00a5ebf%3A0xb983f0134e08ebb!2sMalec%C3%B3n%202000!5e0!3m2!1ses!2sec!4v1645840415676!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();