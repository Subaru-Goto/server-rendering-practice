import { pets } from "../petList.js";
import { divStyle, anchorStyle, pStyle, listStyle } from "../styles/index.js";

export const landingPage = () => {
  let listElement ="";

  Object.keys(pets).forEach(pet => {
    listElement += `
    <li>
      <a
        style="${anchorStyle}"
        href="/animals/${pet}">
        ${pet}
      </a>
    </li>`;
  });

  return (
    `
    <div style="${divStyle}">
      <h1>Adopt a Pet!</h1>
      <p style="${pStyle}">Browse through the links below to find your new furry friend:’</p>
      <ul style="${listStyle}">
        ${listElement}
      </ul>
    </div>
    `
  )
};