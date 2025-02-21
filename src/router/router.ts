import express from "express";
import { addUserToDatabase } from "../controller/postData";
import { getUserToDatabase } from "../controller/getData";

const router = express.Router();

router.get("/bfhl", getUserToDatabase);
router.post("/bfhl", addUserToDatabase);

export default router;