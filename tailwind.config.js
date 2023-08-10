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
                "bg-1": "#FFE5D9",
                "primary-1": "#D8E2DC",
                "secondary-1": "#FFCAD4",
                "contrast-1": "#9D8189",

                "bg-2": "#F4F4F9",
                "primary-2": "#2F4550",
                "secondary-2": "#586F7C",
                "tertiary-2": "#B8DBD9",
                "contrast-2": "#000000",

                "bg-3": "#DBE9EE",
                "primary-3": "#4A6FA5",
                "secondary-3": "#4F6D7A",
                "tertiary-3": "#C0D6DF",
                "contrast-3": "#166088",

                "bg-4": "#F4F4F9",
                "primary-4": "#2F4550",
                "secondary-4": "#586F7C",
                "tertiary-4": "#B8DBD9",
                "contrast-4": "#000000",

                "bg-5": "#F4F4F9",
                "primary-5": "#",
                "secondary-5": "#",
                "tertiary-5": "#",
                "contrast-5": "#",

                "bg-6": "#F4F4F9",
                "primary-6": "#",
                "secondary-6": "#",
                "tertiary-6": "#",
                "contrast-6": "#",

                "bg-7": "#F4F4F9",
                "primary-7": "#",
                "secondary-7": "#",
                "tertiary-7": "#",
                "contrast-7": "#",

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