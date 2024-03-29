import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import getProductByIdController from "../controllers/products/getProductById.controller";
import getProductsController from "../controllers/products/getProducts.controller";
import updateProductController from "../controllers/products/updateProduct.controller";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import productSchema from "../schemas/products/products.schema";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import idOwnerProductVerifierMiddleware from "../middlewares/idOwnerProductVerifier.middleware";

const productsRouter = Router();

productsRouter.post(
    "",
    verifyTokenMiddleware,
    yupValidateMiddleware(productSchema),
    createProductController
);

productsRouter.get("", getProductsController);

productsRouter.get("/:id", getProductByIdController);

productsRouter.delete(
    "/:id",
    verifyTokenMiddleware,
    idOwnerProductVerifierMiddleware,
    deleteProductController
);

productsRouter.patch(
    "/:id",
    verifyTokenMiddleware,
    idOwnerProductVerifierMiddleware,
    updateProductController
);

export default productsRouter;
