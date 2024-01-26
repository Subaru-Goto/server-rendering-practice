import { typePage } from "../components/typePage.js";
import { petPage } from "../components/petPage.js";

export const handleAnimalRoutes = (req, res) => {
  if(req.params) {
    try{
      const { pet_type } = req.params;
      res.send(typePage(pet_type));
    } catch(error) {
      res.status(404).send("404 No pet found");
    }
  } else {
    res.status(404).send("404 No pet found");
  };
};

export const handlePetRoutes = (req, res) => {
  if(req.params?.pet_id) {
    try{
      const { pet_type, pet_id } = req.params;
      res.send(petPage(pet_type, pet_id));
    } catch(error) {
      res.status(404).send("404 No pet found");
    }
  } else {
    res.status(404).send("404 No pet found");
  };
}