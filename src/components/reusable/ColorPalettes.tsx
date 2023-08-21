export function randomizePalette() {

    let palette = Math.floor(Math.random() * 9 + 1)

    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getBackgroundColor(palette));

    document.documentElement.style.setProperty("--bg-color", getBackgroundColor(palette))

    document.documentElement.style.setProperty("--primary-color-post", getPrimaryColor(palette))
    document.documentElement.style.setProperty("--secondary-color-post", getSecondaryColor(palette))
    document.documentElement.style.setProperty("--border-color", getContrastColor(palette))


    Array.from(document.getElementsByClassName('primary-text') as HTMLCollectionOf<HTMLElement>).forEach((value) => {
        value.animate({
            color: [`var(--primary-color-pre)`, `var(--primary-color-post)`],
        }, 1000)

        setTimeout(() => {
            value.style.color = `var(--primary-color-pre)`
        }, 1000)
    })

    Array.from(document.getElementsByClassName('secondary-text') as HTMLCollectionOf<HTMLElement>).forEach((value) => {
        value.animate({
            color: [`var(--secondary-color-pre)`, `var(--secondary-color-post)`],
        }, 1000)

        setTimeout(() => {
            value.style.color = `var(--secondary-color-pre)`
        }, 1000)
    })

    setTimeout(() => {
        document.documentElement.style.setProperty("--primary-color-pre", getPrimaryColor(palette))
        document.documentElement.style.setProperty("--secondary-color-pre", getSecondaryColor(palette))
    }, 1000)
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


function getSecondaryBackgroundColor(palette: number): string {
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


function getContrastColor(palette: number): string {
    let c:{[index: number]: string} = {
            1: "#586F7C",
            2: "#000000",
            3: "#000000",
            4: "#EA526F",
            5: "#bea265",
            6: "#3f362d",
            7: "#725653",
            8: "#0e0e0e",
            9: "#6c5651",
            10: "#133C55",
    }

    return c[palette]
}