import { langNumSwap } from "./LangNumSwap";

export function getAge(lang: string): string | Element {
    const ageDifMs = Date.now() - Date.parse("2004-07-07");
    const ageDate = new Date(ageDifMs);

    if (lang === "en") return (Math.abs(ageDate.getUTCFullYear() - 1970)).toString();
    else return langNumSwap((Math.abs(ageDate.getUTCFullYear() - 1970).toString()))
}