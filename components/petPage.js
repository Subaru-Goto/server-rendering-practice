import { pets } from "../petList.js";
import { divStyle, anchorStyle, pStyle, listStyle } from "../styles/index.js";

export const petPage = (pet_type, pet_id) => {
  console.log(pet_type)
  console.log(pet_id)
  const findPet = pets[pet_type].find(pet => pet.name === pet_id);
  const { name, url, age, breed, description } = findPet;
  return (
    `
    <div style="${divStyle}">
      <h1>Hi my name is ${name}!</h1>
      <div>
        <img
          src=${url}
          alt="cute animals who wants you to bring home"
          width="300px"
          height="300px"/>
      </div>
        <p style="${pStyle}">${description}</p>
      <ul style="${listStyle}">
        <li>Age: ${age}</li>
        <li>Breed: ${breed}</li>
      </ul>
     </div>
    `
  )
};