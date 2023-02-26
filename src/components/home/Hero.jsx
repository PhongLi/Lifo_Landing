import { useEffect, useState } from 'react';
import { ChromeToolBar } from '~/assets/images';
import { landing } from '~/assets/video';
import { appUrl } from '~/common/constants';
import { Button } from '../shared/Button';

const words = ['focus', 'work', 'study', 'relax'];
function Hero() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && index !== words.length && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            if (index !== words.length - 1) {
                setIndex((prev) => prev + 1);
            } else {
                setIndex(0);
            }
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <header className="flex flex-col items-center w-screen mt-20">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-12">
                Your calm, digital <br /> environment to
                <span style={{ display: 'block', minHeight: '4rem' }}>{`${words[index].substring(0, subIndex)}${
                    blink ? '|' : ' '
                }`}</span>
            </h1>
            <Button className="md:hidden text-xl py-3 mb-12" href={appUrl}>
                Get Started For Free
            </Button>
            <div className=" w-[840px] max-w-[80vw] rounded-[10px] overflow-hidden shadow-s1">
                <img src={ChromeToolBar} alt="ChromeToolBar" />
                <video
                    src={landing}
                    className="w-[840px] max-w-[80vw] max-h-[552px] rounded-t-0 rounded-b-[10px]"
                    muted
                    autoPlay
                    playsInline
                    loop
                ></video>
            </div>
        </header>
    );
}

export default Hero;
