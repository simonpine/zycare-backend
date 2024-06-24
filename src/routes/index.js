import { Router } from "express"
import { getHospitales } from "../controllers/index.js"

const router = Router()

router.get('/', getHospitales)
export default router