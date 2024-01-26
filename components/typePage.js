import { pets } from "../petList.js";
import { divStyle, anchorStyle, pStyle, listStyle } from "../styles/index.js";

export const typePage = (pet_type) => {
  let listElement = "";
  pets[pet_type].forEach(pet => {
    const { name, url } = pet;
    listElement += `
      <div>
        <ul style="${listStyle}">
          <li>
            <a
              style="${anchorStyle}" 
              href="/animals/${pet_type}/${name}">
              ${name}
            </a>
          </li>
        </ul>
        <div>
          <img 
            src=${url}
            alt="cute animals who wants you to bring home"
            width="200px"
            height="200px"/>
        </div>
      </div>`;
  })

  return (
    `
    <div style="${divStyle}">
      <h1>${pet_type}</h1>
        <p style="${pStyle}">Check available ${pet_type} below.</p>
      <ul style="display:flex; gap:1.5rem;">
        ${listElement}
      </ul>
     </div>
    `
  )
};