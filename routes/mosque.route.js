import express from "express";
import { addMosque, mosques } from "../controllers/mosque.controller.js";
import { addMosqueValidator } from '../controllers/validator/mosque.validator.js';

const mosqueRouter = express.Router();

mosqueRouter.post('/add', addMosqueValidator, addMosque);

mosqueRouter.get('/', mosques);

export default mosqueRouter;