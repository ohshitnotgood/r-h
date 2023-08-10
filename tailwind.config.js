/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        animatedSettings: {
            animatedSpeed: 1000,
            heartBeatSpeed: 500,
            hingeSpeed: 2000,
            bounceInSpeed: 750,
            bounceOutSpeed: 750,
            animationDelaySpeed: 500,
            classes: ['bounce', 'heartBeat']
        },
        extend: {
            rotate: {
                '270': '270deg'
            },
            screens: {
                "xl": "1420px"
            },
            colors: {
                "bg-1": "#B8DBD9",
                "primary-1": "#3066BE",
                "secondary-1": "#5583CF",
                "tertiary-1": "#DB5375",
                "contrast-1": "#586F7C",

                "bg-2": "#D9F0FF",
                "primary-2": "#093A3E",
                "secondary-2": "#000000",
                "tertiary-2": "#586F7C",
                "contrast-2": "#000000",

                "bg-3": "#F7F7FF",
                "primary-3": "#093A3E",
                "secondary-3": "#000000",
                "tertiary-3": "#586F7C",
                "contrast-3": "#000000",

                "bg-4": "#F7F7FF",
                "primary-4": "#EA526F",
                "secondary-4": "#F5879B",
                "tertiary-4": "#EA526F",
                "contrast-4": "#EA526F",

                "bg-5": "#EA526F",
                "primary-5": "#ECE2D0",
                "secondary-5": "#E9E9E9",
                "tertiary-5": "#E9E9E9",
                "contrast-5": "#ECE2D0",

                "bg-6": "#ECE2D0",
                "primary-6": "#C59666",
                "secondary-6": "#572E2E",
                "tertiary-6": "#96897D",
                "contrast-6": "#64594D",

                "bg-7": "#F2E9E4",
                "primary-7": "#4A4E69",
                "secondary-7": "#727272",
                "tertiary-7": "#4A4E69",
                "contrast-7": "#C9ADA7",

                "bg-8": "#F4F4F9",
                "primary-8": "#",
                "secondary-8": "#",
                "tertiary-8": "#",
                "contrast-8": "#",

                "bg-9": "#F4F4F9",
                "primary-9": "#",
                "secondary-9": "#",
                "tertiary-9": "#",
                "contrast-9": "#",

                "bg-10": "#F4F4F9",
                "primary-10": "#",
                "secondary-10": "#",
                "tertiary-10": "#",
                "contrast-10": "#",
            }
        },
    },
    plugins: [
    ],
}