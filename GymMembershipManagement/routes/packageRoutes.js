import express from "express"
import addPackage from "../controller/packageController.js";

const router = express.Router();

router.post("/addPackage", addPackage);

export default router;