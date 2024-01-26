import express from "express";
import { handleAnimalRoutes, handlePetRoutes} from "../controllers/animalsController.js";

const animalRouter = express.Router();

animalRouter.get("/:pet_type", handleAnimalRoutes)
animalRouter.get("/:pet_type/:pet_id", handlePetRoutes);

export default animalRouter;