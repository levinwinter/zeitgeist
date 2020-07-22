import { Subject } from "@/models/subject.js";
import { Category } from "@/models/category.js";

export class Field {
    readonly name: string;
    readonly category: Category;
    readonly subjects: Subject[] = [];

    constructor(name: string, category: Category) {
        this.name = name;
        this.category = category.addField(this);
    }

    addSubject(subject: Subject): Field {
        this.subjects.push(subject);
        return this;
    }
}
