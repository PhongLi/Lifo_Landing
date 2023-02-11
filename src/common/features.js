import { catalogScenes, insightsImg, notesImg, playlistImg, soundsImg, timerImg } from '~/assets/images';

export const features = [
    {
        title: 'Advanced Timer',
        description:
            'A powerful timer with customizable pomodoro settings, tasks with time tracking and a live report for time management.',
        image: timerImg,
        className: 'flex items-end bg-gradient-timer',
        styles: {
            height: '90%',
        },
    },
    {
        title: 'Playlists & Templates',
        description: 'Save your favorite combinations or use pre-made sets.',
        image: playlistImg,
        className: 'flex items-end bg-gradient-playlist',
        styles: {
            height: '90%',
        },
    },
    {
        title: 'Growing catalog of scenes',
        description:
            'Enjoy the full catalog of 20+ original scenes, updated monthly.\n' +
            'Premium users can also download scenes as wallpapers.',
        image: catalogScenes,
        catalog: true,
        styles: {
            background: '#fff',
            height: '90%',
        },
    },
    {
        title: 'Sounds',
        description: 'Full catalog of 15+ soundscapes.',
        image: soundsImg,
        className: 'flex items-end bg-gradient-sounds',
        styles: {
            height: '95%',
        },
    },
    {
        title: 'Insights',
        description: 'Check back on your tasks, focus time and break time for all your timer sessions.',
        image: insightsImg,
        className: 'flex items-center bg-gradient-insights',
        styles: {
            height: '90%',
        },
    },
    {
        title: 'Notes',
        description: 'Capture your thoughts and ideas before they slip away.',
        image: notesImg,
        className: 'flex items-center bg-gradient-notes',
        styles: {
            height: '90%',
        },
    },
];
