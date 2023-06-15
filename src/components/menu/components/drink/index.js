import { Layer } from "./../layer";
import "./style.css"

export const Drink = (props) => {
  const {name, ordered, image,} = props;

    const layer = Layer(
    {
      color: '#feeeca',
      label: 'mléčná pěna',
    }
  )
  
  return`
    <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src=${image}>
        </div>
        <div class="drink__info">
          <h3>${name}</h3>
          ${layer}
        </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">
          Objednat
        </button>
      </div>
    </div>
    `
  };