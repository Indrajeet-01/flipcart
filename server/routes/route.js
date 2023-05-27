import express from "express";
import { userLogin, userSignup } from "../controller/user.js";
import { getProducts } from "../controller/product.js";

const router = express.Router()

router.post('/signup', userSignup)
router.post('/login', userLogin)

router.get('/products', getProducts)

export default router