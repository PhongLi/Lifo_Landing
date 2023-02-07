import { useEffect, useRef, useState } from 'react';

function GifVideo({ video }) {
    const ref = useRef();
    const [inView, setInView] = useState();
    useEffect(() => {
        if (inView) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    }, [ref, inView]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setInView(entry.isIntersecting);
        });
        observer.observe(ref.current);
    }, []);
    return (
        <video width="100%" ref={ref} muted autoPlay playsInline loop className="w-full h-auto rounded-2xl p-2">
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default GifVideo;
