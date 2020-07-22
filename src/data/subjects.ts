import { Subject } from "@/models/subject";
import { fields } from "@/data/fields.js";

export const subjects = {
    D:    new Subject("Deutsch",                 "D", true, true, fields.D),
    E:    new Subject("Englisch",                "E", true, true, fields.FS),
    F:    new Subject("Französisch",             "F", true, true, fields.FS),
    L:    new Subject("Latein",                  "L", true, true, fields.FS),
    SN:   new Subject("Spanisch",                "SN", true, true, fields.FS),
    BK:   new Subject("Bildende Kunst",          "BK", true, true, fields.KF),
    MU:   new Subject("Musik",                   "MU", true, true, fields.KF),
    DS:   new Subject("Darstellendes Spiel",     "DS", false, true, fields.KF),
    G:    new Subject("Geschichte",              "G", true, true, fields.GW),
    EK:   new Subject("Erdkunde",                "EK", true, false, fields.GW),
    SK:   new Subject("Sozialkunde",             "SK", true, false, fields.GW),
    EKSK: new Subject("Erdukunde / Sozialkunde", "EKSK", true, true, fields.GW),
    M:    new Subject("Mathematik",              "M", true, true, fields.M),
    PH:   new Subject("Physik", "PH", true, true, fields.NW),
    CH:   new Subject("Chemie", "CH", true, true, fields.NW),
    BI:   new Subject("Biologie", "BI", true, true, fields.NW),
    IN:   new Subject("Informatik", "IN", true, true, fields.INF),
    ER:   new Subject("Evangelische Religion", "ER", false, true, fields.R),
    KR:   new Subject("Katholische Religion", "KR", false, true, fields.R),
    ET:   new Subject("Ethik", "ET", false, false, fields.R),
    SP:   new Subject("Sport", "SP", true, true, fields.SP),
    PI:   new Subject("Philosophie", "PI", false, true, fields.PHI)
}
