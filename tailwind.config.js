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
            }
        },
    },
    plugins: [
        require('tailwindcss-animatecss'),
    ],
}