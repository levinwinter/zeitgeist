import { Choice } from "./choice.js";
import { Field } from "@/models/field.js";

export class Combination {
    majors: Field[];
    minors: Field[];

    constructor(majors: Field[], minors: Field[]) {
        this.majors = majors;
        this.minors = minors;
    }

    differenceOfArrays(minuendOriginal: Field[], subtrahend: Field[]): Field[] {
        let minuend = minuendOriginal.slice();
        subtrahend.forEach((value) => {
            //TODO change to .includes
            if (minuend.indexOf(value) !== -1) {
                minuend.splice(minuend.indexOf(value), 1);
            }
        });
        return minuend;
    }

    possibleMajors(choice: Choice): Field[] {
        return this.differenceOfArrays(this.majors, choice.majors);
    }

    possibleMinors(choice: Choice): Field[] {
        return this.differenceOfArrays(this.minors, choice.minors);
    }

    isSupersetOf(choice: Choice): boolean {
        //TODO maybe switch to subset function
        return this.differenceOfArrays(choice.majors, this.majors).length === 0 &&
            this.differenceOfArrays(choice.minors, this.minors).length === 0;
    }

    equals(choice: Choice): boolean {
        //TODO check implementation
        return this.possibleMajors(choice).length === 0 &&
            this.possibleMinors(choice).length === 0;
    }
}
