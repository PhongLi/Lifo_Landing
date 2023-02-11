import { useState } from 'react';
import Switch from 'react-switch';
import { MoonIcon, SunIcon } from '~/assets/icons';
import { SceneGif } from '~/assets/images';
import {
    exteriorday,
    exteriornight,
    kyotoparkday,
    kyotoparknight,
    kyotostreetday,
    kyotostreetnight,
    lofiday,
    lofiexteriorday,
    lofiexteriornight,
    lofinight,
    lvrday,
    lvrnight,
} from '~/assets/video';
import { Button } from '~/components/shared/Button';
import GifVideo from '~/components/shared/GifVideo';

const appUrl = 'https://app-chillhop.onrender.com';

function CtaScene() {
    const [isDay, setDay] = useState(true);
    const handleSwitch = () => {
        setDay(!isDay);
    };

    return (
        <section className="my-20 -mx-4">
            <div className="flex flex-col justify-center items-center text-center max-w-[30rem] mx-auto mb-10">
                <h3 className="text-[1.75rem] md:text-[2rem] leading-8 font-bold mb-4">
                    Craft your focus <br /> environment
                </h3>
                <p className="text-lg leading-5 font-Helvetica font-semibold mb-6">
                    Would you rather get it done in the cafe, or escape to the beach? lofi.co gives you both and a lot
                    more.
                </p>
                <Button type="rounded" className="font-bold" href={appUrl}>
                    Get Started
                </Button>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center">
                    <SunIcon />
                    <Switch
                        checked={!isDay}
                        onChange={handleSwitch}
                        handleDiameter={27}
                        offColor="#edeae7"
                        onColor="#212020"
                        offHandleColor="#fff"
                        boxShadow="rgb(0 0 0 / 15%) 0px 2px 3px"
                        activeBoxShadow="0 0 0 0 transparent"
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={34}
                        width={60}
                        className="mx-8"
                    ></Switch>
                    <MoonIcon />
                </div>
                <p className="text-[#9E9999] mt-2">Click me!</p>
            </div>
            <div>
                <div className="flex justify-center mt-8">
                    <div className="grid grid-cols-3 w-[120vw]">
                        <div className={`${isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={kyotoparkday} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${!isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={kyotoparknight} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={exteriorday} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${!isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={exteriornight} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={lvrday} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${!isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={lvrnight} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-4 w-[170vw]">
                        <div className={`${isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={lofiexteriorday} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${!isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={lofiexteriornight} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={kyotostreetday} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${!isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={kyotostreetnight} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={lofiday} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <div className={`${!isDay ? 'block' : 'hidden'}`}>
                            <GifVideo video={lofinight} className="w-full h-auto rounded-2xl p-2"></GifVideo>
                        </div>
                        <img src={SceneGif} alt="scene" className="w-full h-auto rounded-2xl p-2" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaScene;
