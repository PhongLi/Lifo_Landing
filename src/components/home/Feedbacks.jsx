import ScrollSlider from './ScrollSlider';

function Feedbacks() {
    return (
        <section className="mt-16 w-screen">
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-3xl md:text-[40px] font-bold md:leading-10 text-center mb-6 md:mb-12">
                    Join +150.000 users <br /> chilling every month
                </h2>
                <div className="-mx-4">
                    <ScrollSlider />
                </div>
            </div>
        </section>
    );
}

export default Feedbacks;
