import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Slider() {
    return (
        <section className="relative mt-3 shadow-2xl max-w-screen-3xl mx-auto">
            <Carousel 
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <Image src="/images/slider-1.jpg" alt="" height={680} width={1600} loading="lazy" />
                </div>
                <div>
                    <Image src="/images/slider-2.jpg" alt="" height={680} width={1600} loading="lazy" />
                </div>
                <div>
                    <Image src="/images/slider-3.jpg" alt="" height={680} width={1600} loading="lazy" />
                </div>
                <div>
                    <Image src="/images/slider-4.jpeg" alt="" height={680} width={1600} loading="lazy" />
                </div>
            </Carousel>
        </section>
    )
}

export default Slider