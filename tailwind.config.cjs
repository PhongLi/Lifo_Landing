module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Helvetica: 'Helvetica, sans-serif',
            },
            colors: {
                primary: 'var(--color-primary)',
            },
            boxShadow: {
                s1: 'rgb(0 0 0 / 50%) 0px 16px 48px;',
                s2: 'rgb(0 0 0 / 10%) 0px 4px 32px;',
            },
            backgroundImage: {
                'hero-playlist': "url('./assets/images/hero-image.png')",
            },
        },
    },
    plugins: [],
};
