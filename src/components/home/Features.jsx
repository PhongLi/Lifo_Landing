import { features } from '~/common/features';
import { Button } from '../shared/Button';
import FeatureCard from '../shared/FeatureCard';

function Features() {
    return (
        <section className="my-20 w-full lg:w-3/4">
            <div className="flex flex-col justify-center items-center text-center mx-auto mb-10">
                <h3 className="text-[2rem] md:text-[2.5rem] leading-10 font-bold mb-4">
                    Get more done with <br /> <span className="text-primary">premium</span>
                </h3>
                <Button type="rounded" className="font-bold rounded-2xl px-6">
                    See Pricing
                </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2 pb-20 mt-20">
                <FeatureCard feature={features[0]} className="lg:col-span-7" />
                <FeatureCard feature={features[1]} className="lg:col-span-5" />
                <FeatureCard feature={features[2]} className="lg:col-span-7" />
                <FeatureCard feature={features[3]} className="lg:col-span-5" />
                <FeatureCard feature={features[4]} className="lg:col-span-5" />
                <FeatureCard feature={features[5]} className="lg:col-span-7" />
            </div>
            <div className="flex flex-col justify-center items-center text-center mx-auto mb-10">
                <h3 className="text-[1.75rem] md:text-[2rem] leading-10 font-bold mb-8">
                    ...and <span className="text-primary">more.</span>
                </h3>
                <Button type="rounded" className="font-bold rounded-2xl px-6">
                    See Pricing
                </Button>
            </div>
        </section>
    );
}

export default Features;
