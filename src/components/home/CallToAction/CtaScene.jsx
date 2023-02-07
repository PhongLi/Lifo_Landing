import { useState } from 'react';
import Switch from 'react-switch';
import { MoonIcon, SunIcon } from '~/assets/icons';
import { SceneGif } from '~/assets/images';
import { exteriorday, kyotoparkday, kyotostreetday, lofiday, lofiexteriorday, lvrday } from '~/assets/video';
import { Button } from '~/components/Button';
import GifVideo from '~/components/shared/GifVideo';

function CtaScene() {
    const [isDay, setDay] = useState(true);
    const handleSwitch = () => {
        setDay(!isDay);
    };

    return (
        <section className="mt-20 -mx-4">
            <div className="flex flex-col justify-center items-center text-center max-w-[30rem] mx-auto mb-10">
                <h3 className="text-[1.75rem] md:text-[2rem] leading-8 font-bold mb-4">
                    Craft your focus <br /> environment
                </h3>
                <p className="text-lg leading-5 font-Helvetica font-semibold mb-6">
                    Would you rather get it done in the cafe, or escape to the beach? lofi.co gives you both and a lot
                    more.
                </p>
                <Button type="rounded" className="font-bold">
                    Get Started
                </Button>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center">
                    <SunIcon />
                    <Switch
                        checked={isDay}
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
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 w-[120vw]">
                        {isDay ? <GifVideo video={kyotoparkday}></GifVideo> : <GifVideo></GifVideo>}
                        <GifVideo video={exteriorday}></GifVideo>
                        <GifVideo video={lvrday}></GifVideo>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-4 w-[170vw]">
                        <GifVideo video={lofiexteriorday}></GifVideo>
                        <GifVideo video={kyotostreetday}></GifVideo>
                        <GifVideo video={lofiday}></GifVideo>
                        <img src={SceneGif} alt="scene" className="w-full h-auto rounded-2xl p-2" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaScene;
