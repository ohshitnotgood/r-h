export function randomizePalette() {

    let palette = Math.floor(Math.random() * 9 + 1)

    document.documentElement.style.setProperty("--bg-color", getBackgroundColor(palette))
    document.documentElement.style.setProperty("--primary-color", getPrimaryColor(palette))
    document.documentElement.style.setProperty("--secondary-color", getSecondaryColor(palette))
}


function getBackgroundColor(palette: number): string {
    let c: {[index: string]: string} = {
        1: "#B8DBD9",
        2: "#D9F0FF",
        3: "#F7F7FF",
        4: "#F7F7FF",
        5: "#EA526F",
        6: "#ECE2D0",
        7: "#F2E9E4",
        8: "#F4F4F9",
        9: "#F2E9E4",
        10: "#F2E8CF",
    }

    return c[palette]
}

function getPrimaryColor(palette: number): string {
    let c: {[index: number]: string} = {
        1: "#3066BE",
        2: "#093A3E",
        3: "#093A3E",
        4: "#EA526F",
        5: "#ECE2D0",
        6: "#C59666",
        7: "#4A4E69",
        8: "#000",
        9: "#4A4E69",
        10: "#22223B",
    }
    
    return c[palette]
}

function getSecondaryColor(palette: number): string {
    let c: {[index: number]: string} = {
        1: "#5583CF",
        2: "#000000",
        3: "#000000",
        4: "#F5879B",
        5: "#E9E9E9",
        6: "#572E2E",
        7: "#727272",
        8: "#171414",
        9: "#727272",
        10: "#323259",
    }
    return c[palette]
}


