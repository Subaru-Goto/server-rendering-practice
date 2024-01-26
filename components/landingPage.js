import { pets } from "../petList.js";
import { divStyle, anchorStyle, pStyle, listStyle } from "../styles/index.js";

export const landingPage = () => {
  const listElement = Object.keys(pets).map(pet => {
    return `
      <li>
        <a
          style="${anchorStyle}"
          href="/animals/${pet}">
          ${pet}
        </a>
      </li>`;
  }).join("");

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