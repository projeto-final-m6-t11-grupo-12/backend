import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./products.entity";

@Entity("images")
export class Image {
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column()
    url: string;

    @ManyToOne(() => Product, (product) => product.images, {
        onDelete: "CASCADE",
    })
    product: Product;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
