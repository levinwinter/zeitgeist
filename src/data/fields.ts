import { Field } from "@/models/field.js";
import { categories } from "@/data/categories.js";

export const fields = {
    D:   new Field("D",   categories.SPRACHE),
    FS:  new Field("S",   categories.SPRACHE),
    GW:  new Field("GW",  categories.GESELLSCHAFT),
    M:   new Field("M",   categories.MINT),
    NW:  new Field("NW",  categories.MINT),
    INF: new Field("INF", categories.MINT),
    R:   new Field("R",   categories.GEIST),
    SP:  new Field("SP",  categories.SPORT),
    KF:  new Field("KF",  categories.KUNST),
    PHI: new Field("PHI", categories.GEIST)
}
