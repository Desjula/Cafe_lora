import "./style.css";

export const Header = () => {
  const hamburger = () => {
    const roll = document.querySelector(".rollout-nav");
    roll.classList.toggle("nav-closed");
  };

  document.addEventListener('DOMContentLoaded', () => {
    const nav_btn = document.querySelector(".nav-btn");
    nav_btn.addEventListener('click', hamburger);
  });

  const elm =  document.createElement("header");
  elm.innerHTML = `
    <div class="header__content container" id="home">
      <div class="site-logo"></div>

      <div class="navigation">
        <button class="nav-btn"></button>
        <nav class="rollout-nav nav-closed">
          <a href="#home">domů</a>
          <a href="#menu">menu</a>
          <a href="#gallery">galerie</a>
          <a href="#contact">kontakt</a>
        </nav>
      </div>
    </div>
  `;

  return elm;
};
