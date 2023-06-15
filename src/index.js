import './style.css';
import { Header } from "./components/header"
import { Banner } from "./components/banner"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { Gallery } from "./components/gallery"
import { Menu } from "./components/menu"


const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);