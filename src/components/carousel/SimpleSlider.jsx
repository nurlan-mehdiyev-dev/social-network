import Slider from "react-slick";

export default function SimpleSlider({ images }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {
                images.map((image) => {
                    return (
                        <div>
                            <img width='100%' src={image} alt="" />
                        </div>
                    )
                })
            }
        </Slider>
    );
}