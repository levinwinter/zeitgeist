import { Combination } from "./combination.js";
import { Choice } from "./choice.js";
import { Field } from "@/models/field.js";

export class Option {
    combinations: Combination[] = [];

    constructor(majors: Field[], minors: (Field[] | Field)[]) {
        this.extendCourses(minors).forEach((extendedMinors) => {
            this.combinations.push(new Combination(majors, extendedMinors));
        });
    }

    extendCourses(courses: (Field[] | Field)[]): Field[][] {
        let result: (Field[] | Field)[][] = [courses.slice()];
        let foundSubArray: boolean;
        do {
            foundSubArray = false;
            result.forEach((array, indexArray) => {
                array.forEach((subArray, indexSubArray) => {
                    // check whether element really is an array & prevent doubled results in result
                    if (Array.isArray(subArray)) {
                        foundSubArray = true;
                        // remove subArray
                        result.splice(indexArray, 1);
                        // for each element in the subArray append a newly created Array
                        subArray.forEach((field) => {
                            let extendedArray: (Field[] | Field)[] = array.slice();
                            extendedArray[indexSubArray] = field;
                            result.push(extendedArray);
                        });
                    }
                });
            });
        } while (foundSubArray);
        return result as Field[][];
    }

    possibleMajors(choice: Choice): Field[] {
        let possibleMajors: Field[] = [];
        this.combinations.forEach((combination) => {
            // only target supersets to prevent code from recommending unavailable courses
            if (combination.isSupersetOf(choice)) {
                combination.possibleMajors(choice).forEach((field) => {
                    if (!possibleMajors.includes(field)) possibleMajors.push(field);
                });
            }
        });
        return possibleMajors;
    }

    possibleMinors(choice: Choice): Field[] {
        let possibleMinors: Field[] = [];
        this.combinations.forEach((combination) => {
            // only target supersets to prevent code from recommending unavailable courses
            if (combination.isSupersetOf(choice)) {
                combination.possibleMinors(choice).forEach((field) => {
                    if (!possibleMinors.includes(field)) possibleMinors.push(field);
                });
            }
        });
        return possibleMinors;
    }

    isSupersetOf(choice: Choice): boolean {
        this.combinations.forEach((combination) => {
            if (combination.isSupersetOf(choice)) return true;
        });
        return false;
    }

    equals(choice: Choice): boolean {
        this.combinations.forEach((combination) => {
            if (combination.equals(choice)) return true;
        });
        return false;
    }
}
