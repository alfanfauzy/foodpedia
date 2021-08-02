import "regenerator-runtime";
import "../styles/main.css";
import App from "./views/App";
import swRegister from "./utils/sw-register";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import "./views/components/navigation-component";

const app = new App({
    button: document.querySelector("#hamburger"),
    drawer: document.querySelector(".header__nav"),
    content: document.querySelector("#maincontent"),
});

window.addEventListener("load", () => {
    app.renderPage();
    swRegister();
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});
