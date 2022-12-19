import { Express } from "express";
import productsRouter from "./products.routes";

function appRoutes(app: Express) {
    app.use("/products", productsRouter);
}

export default appRoutes;
