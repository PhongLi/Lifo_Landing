import { ChillIcon, JazzyIcon, SleepyIcon } from '~/assets/icons';
import { PlayerImg } from '~/assets/images';
import { Button } from '~/components/shared/Button';

function CtaPlaylist() {
    return (
        <section className="w-full lg:w-3/4  grid lg:grid-cols-2 px-2 md:px-4">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start max-w-[25rem] mx-auto mb-10">
                <h3 className="text-[1.75rem] md:text-[2rem] leading-8 font-bold mb-4">
                    The Perfect Playlist <br /> One Click Away
                </h3>
                <p className="text-lg leading-5 font-Helvetica font-semibold mb-6">
                    Hit play and get into the zone instantly. No ads. No distracting lyrics.
                </p>
                <Button type="rounded" className="font-bold" href="https://app-chillhop.onrender.com">
                    Get Started
                </Button>
            </div>
            <div className="px-2">
                <div className="relative flex justify-center items-end aspect-[6/5] bg-hero-playlist bg-cover rounded-3xl">
                    <img src={PlayerImg} alt="player" className="w-1/2 h-3/4" />
                    <div className="absolute top-[37%] w-1/2 grid grid-cols-3 px-1">
                        <SleepyIcon className="p-2" />
                        <ChillIcon className="p-2" />
                        <JazzyIcon className="p-2" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaPlaylist;
