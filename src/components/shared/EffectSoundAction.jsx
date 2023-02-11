import { useEffect, useRef } from 'react';
import ReactSlider from 'react-slider';
import RainAudio from '~/assets/audio/rain-audio.mp3';
function EffectSoundAction({ level, onChange: changeVol, isRaining, setRaining }) {
    const ref = useRef();
    useEffect(() => {
        if (isRaining) {
            ref.current?.play();
            ref.current.volume = level;
        } else {
            ref.current?.pause();
        }
    }, [level, isRaining]);

    return (
        <div className="flex flex-col items-center absolute top-1/3 left-1/2 -translate-x-1/2">
            {/* Circle button */}
            <div
                className={`p-[5px] border-[3px] border-solid rounded-full cursor-pointer ${
                    isRaining ? 'border-secondary' : 'border-white'
                }`}
                onClick={() => setRaining(!isRaining)}
            >
                <div className={`p-3 rounded-full bg-transparent  ${isRaining ? 'bg-secondary' : 'hover:bg-white'}`} />
            </div>
            {/* tooltip with slider volume */}
            <div className="relative flex flex-col items-center w-full mt-2 p-2 rounded-md bg-[#12121280]">
                <p className="text-white">Summer Storm</p>
                <audio src={RainAudio} loop ref={ref}></audio>
                <ReactSlider
                    className={`${isRaining ? 'block' : 'hidden'} h-3 w-[200px] m-2 bg-gray-300 rounded-full`}
                    defaultValue={level * 100}
                    onChange={(value) => {
                        changeVol(value);
                    }}
                    renderThumb={(props, state) => {
                        return (
                            <div
                                {...props}
                                className="h-5 w-5 absolute top-[-3px] rounded-full bg-white outline-none cursor-pointer"
                            />
                        );
                    }}
                    renderTrack={(props, state) => {
                        return (
                            <div
                                {...props}
                                className={`h-full rounded-full ${state.index === 0 ? 'bg-secondary' : ''}`}
                            ></div>
                        );
                    }}
                />
            </div>
        </div>
    );
}

export default EffectSoundAction;
