import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { socialProof } from '~/common/social_proof';
function ScrollSlider() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        draggable: false,
        speed: 80000,
        autoplaySpeed: 500,
        slidesToScroll: 3,
        slidesToShow: 5,
        cssEase: 'linear',
    };
    return (
        <div className="w-[1600px] select-none">
            <Slider {...settings} className="flex items-center">
                {socialProof.map((s, index) => (
                    <div key={index} className="bg-white max-w-[300px] text-base shadow-s2 p-8 m-4 rounded-2xl">
                        <div className="flex flex-row items-center mb-2">
                            <img src={s.icon} alt="email icon" width="24px" />
                            <p className="font-bold ml-2">{s.from}</p>
                        </div>
                        <p>{s.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ScrollSlider;
