import { Field } from "@/models/field.js";

export class Category {
    name: string;
    fields: Field[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addField(field: Field): Category {
        this.fields.push(field);
        return this;
    }
}
