import express from "express"

import recipesRouter from "./api/v1/recipesRouter.js"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router() 

rootRouter.use("/api/v1/recipes", recipesRouter)
rootRouter.use("/", clientRouter)

export default rootRouter
