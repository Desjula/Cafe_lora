import "./style.css";

export const Footer = () => {
  const elm =  document.createElement("footer")
  elm.innerHTML = `
  <div class="container">
    <div class="footer__content">
      Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
    </div>
  </div>
  `
  return elm
};