import { Drink } from "./components/drink";
import "./style.css";

export const Menu = () => {

 const drink = Drink(
    {
      id: 'romano',
      name: 'Romano',
      ordered: false,
      image: 'https://cafelora.kodim.app/assets/cups/romano.png',
      layers: [
        {
          color: '#fbdf5b',
          label: 'citrón',
        },
        {
          color: '#613916',
          label: 'espresso',
        },
      ]
    }
  )

  const elm =  document.createElement("menu")
  elm.innerHTML = `
  <section class="menu" id="menu">
  <div class="container">
    <h2>Naše nabídka</h2>
    <p class="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
    <div class="drinks-list">
    ${drink}
    </div>

    <div class="order-detail">
      <a href="/objednavka">Detail objednávky</a>
    </div>
  </div>
</section>
  `
  return elm
};