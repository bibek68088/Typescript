import { useEffect, useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./image-slider.css"



type ImageSliderProps = {
    images: {
        url: string,
        alt: string,
        content: string,
    }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(showNextImage, 3000);
        return () => clearInterval(interval);
    }, [imageIndex]);

    function showNextImage() {
        setImageIndex((index) => (index + 1) % images.length);
    }
    
    function showPrevImage() {
        setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
    }

    return (
        <section aria-label="Image Slider" style={{ width: "100%", height: "100%", position: "relative" }}>
            <div style={{ width: "100%", height: "calc(100vh - 16px)", position: "relative", overflow: "hidden" }}>
                {images.map(({ url, alt, content }, index) => (
                    <div key={url} style={{ position: "absolute", top: 0, left: `${(index - imageIndex) * 100}%`, width: "100%", height: "100%", transition: "left 0.5s ease-in-out" }}>
                        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20%",right: "20%", zIndex: 1 }}>
                            <p className="img-slider-content" style={{ fontStyle: "sans serif" }}>{content}</p>
                        </div>
                        <img src={url} alt={alt} className="img-slider-img" style={{ width: "100vw", height: "100vh", objectFit: "cover" }} />
                    </div>
                ))}
            </div>

            <button className="img-slider-btn" style={{ left: 0 }} onClick={showPrevImage} aria-label="View Previous Image">
                <ArrowBigLeft aria-hidden />
            </button>
            <button className="img-slider-btn" style={{ right: 0 }} onClick={showNextImage} aria-label="View Next Image">
                <ArrowBigRight aria-hidden />
            </button>

            <div style={{ position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".5rem" }}>
                {images.map((_, index) => (
                    <button key={index} className="img-slider-dot-btn" aria-label={`View Image ${index }`} onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? <CircleDot aria-hidden="true" /> : <Circle />}
                    </button>
                ))}
            </div>
        </section>
    );
}
