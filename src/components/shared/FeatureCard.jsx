import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FeatureCard({ feature, className }) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        draggable: true,
        speed: 80000,
        autoplaySpeed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
    };
    return (
        <div className={`${className} p-8 rounded-[2rem] h-[40rem] bg-white`}>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="text-lg mt-3 mb-6 leading-6 font-Helvetica text-[#837e7e] font-bold">{feature.description}</p>
            {feature.catalog ? (
                <div className={`h-3/4 overflow-x-hidden`}>
                    <div className="w-[2016px] h-full">
                        <Slider {...settings}>
                            <img src={feature.image} alt="" className="px-1" />
                            <img src={feature.image} alt="" />
                        </Slider>
                    </div>
                </div>
            ) : (
                <div className={`${feature.className} rounded-[2rem] h-3/4 w-full`}>
                    <img src={feature.image} alt="featureImg" className="h-[90%] mx-auto w-auto object-scale-down" />
                </div>
            )}
        </div>
    );
}

export default FeatureCard;
