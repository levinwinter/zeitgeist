import { Field } from "@/models/field.js";
import { Combination } from "./combination.js";
import { Subject } from "@/models/subject.js";

export class Choice extends Combination {
    constructor(majors: Subject[], minors: Subject[]) {
        let translatedMajors: Field[] = [];
        let translatedMinors: Field[] = [];
        majors.forEach(function (subject) {
            translatedMajors.push(subject.field);
        })
        minors.forEach(function (subject) {
            translatedMinors.push(subject.field);
        })
        super(translatedMajors, translatedMinors);
    }
}
