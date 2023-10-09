import { Router } from "express";
const allRouter = Router();
import { home } from "../controllers/views.controller.js";


allRouter.get('/', home)


export { allRouter };