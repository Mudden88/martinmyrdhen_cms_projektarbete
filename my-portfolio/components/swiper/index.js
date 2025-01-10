import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function SwiperComponent({ projectImages }) {
    const images = projectImages

    return (
        <div className="flex justify-center">

            <Swiper
                navigation
                modules={[Navigation]}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center">
                            <Image
                                src={`${image.url}?fm=webp`}
                                alt={image.title}
                                width={500}
                                height={500}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}