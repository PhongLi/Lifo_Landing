module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Helvetica: 'Helvetica, sans-serif',
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                'text-color': 'var(--text-color)',
                'text-white': 'var(--text-white)',
                'bg-dark': 'var(--bg-dark)',
            },
            boxShadow: {
                s1: 'rgb(0 0 0 / 50%) 0px 16px 48px;',
                s2: 'rgb(0 0 0 / 10%) 0px 4px 32px;',
            },
            backgroundImage: {
                'hero-playlist': "url('./assets/images/hero-image.png')",
                'gradient-timer': 'var(--gradient-timer)',
                'gradient-insights': 'var(--gradient-insights)',
                'gradient-playlist': 'var(--gradient-playlist)',
                'gradient-notes': 'var(--gradient-notes)',
                'gradient-sounds': 'var(--gradient-sounds)',
            },
        },
    },
    plugins: [],
};
