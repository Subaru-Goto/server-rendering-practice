import { typePage } from "../components/typePage.js";
import { petPage } from "../components/petPage.js";

export const handleAnimalRoutes = (req, res) => {
  const { pet_type } = req.params;
  res.send(`${typePage(pet_type)}`);
};

export const handlePetRoutes = (req, res) => {
  const { pet_type, pet_id } = req.params;
  res.send(`${petPage(pet_type, pet_id)}`)
}