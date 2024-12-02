import { Router } from "express"
import { getAll, updateFuncionario, deleteFuncionario } from "../controller/funcionarioController.js"

const router = Router()

router.get("/", getAll)
router.put("/:id", updateFuncionario)
router.delete("/:id", deleteFuncionario)

export default router