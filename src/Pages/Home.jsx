import { Hero, Feedbacks, CtaPlaylist, CtaScene, CtaSound, Features } from '~/components/home';

function Home() {
    return (
        <div className="flex flex-col items-center h-full overflow-hidden">
            <Hero />
            <Feedbacks />
            <h2 className="text-3xl md:text-[40px] md:leading-10 font-bold text-center mb-20  mt-20 ">
                Everything you need <br /> to make the most of <br /> your time
            </h2>
            <CtaPlaylist />
            <CtaScene />
            <CtaSound />
            <Features />
        </div>
    );
}

export default Home;
