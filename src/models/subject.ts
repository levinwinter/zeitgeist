import { Field } from "@/models/field.js";

export class Subject {
    name: string;
    asMajor: boolean;
    asMinor: boolean;
    abbreviation: string;
    field: Field;

    constructor(name: string, abbreviation: string, asMajor: boolean, asMinor: boolean, field: Field) {
        this.name = name;
        this.asMajor = asMajor;
        this.asMinor = asMinor;
        this.abbreviation = abbreviation;
        this.field = field.addSubject(this);
    }
}
