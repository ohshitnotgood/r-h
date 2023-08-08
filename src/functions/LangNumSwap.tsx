export function langNumSwap(str: String): string {
    let final: string = ""
    for (let i in str) {
        if (str[i] === "1") final += "১"
        else if (str[i] === "2") final += "২"
        else if (str[i] === "3") final += "৩"
        else if (str[i] === "4") final += "৪"
        else if (str[i] === "5") final += "৫"
        else if (str[i] === "6") final += "৬"
        else if (str[i] === "7") final += "৭"
        else if (str[i] === "8") final += "৮"
        else if (str[i] === "9") final += "৯"
        else if (str[i] === "0") final += "০"
        else final += str[i]
    }
    return final
}