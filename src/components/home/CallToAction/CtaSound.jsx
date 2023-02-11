import { useState } from 'react';
import { ArrowIcon } from '~/assets/icons';
import { norain, rain } from '~/assets/video';
import { Button } from '~/components/shared/Button';
import EffectSoundAction from '~/components/shared/EffectSoundAction';
import GifVideo from '~/components/shared/GifVideo';

const appUrl = 'https://app-chillhop.onrender.com';
function CtaSound() {
    const [isRaining, setRaining] = useState(false);
    const [effectLevel, setLevel] = useState(0.5);
    const handleChangeVolume = (level) => {
        setLevel(level / 100);
    };
    return (
        <section className="lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 px-2 md:px-4">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start max-w-[25rem] mx-auto mb-10">
                <h3 className="text-[1.75rem] md:text-[2rem] leading-8 font-bold mb-4">
                    Peaceful sounds to <br /> cut out the noise
                </h3>
                <p className="text-lg leading-5 font-Helvetica font-semibold mb-6">
                    Each scene comes with adjustable soundscapes like rain, waves or birds.
                </p>
                <Button type="rounded" className="font-bold" href={appUrl}>
                    Get Started
                </Button>
            </div>
            <div className="relative p-2 aspect-[6/5] w-[432px] max-w-full">
                <div className={`${isRaining ? 'hidden' : 'block h-full'}`}>
                    <GifVideo video={norain} className={`object-cover rounded-2xl w-full h-full`}></GifVideo>
                </div>
                <div className={`${!isRaining ? 'hidden' : 'block h-full'}`}>
                    <GifVideo video={rain} className={` object-cover rounded-2xl w-full h-full`}></GifVideo>
                </div>
                <EffectSoundAction
                    level={effectLevel}
                    onChange={handleChangeVolume}
                    isRaining={isRaining}
                    setRaining={setRaining}
                />
                <div className="absolute hidden md:block -right-[30%] top-[15%]">
                    <ArrowIcon />
                    <p className="text-primary font-Helvetica font-bold rotate-[10deg] mt-2">Click the circle</p>
                </div>
            </div>
        </section>
    );
}

export default CtaSound;
