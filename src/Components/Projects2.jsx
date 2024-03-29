import { useState } from "react"

export default function Projects2() {

    const [current, setCurrent] = useState(0); 
    const images = ["/images/project1.png", "/images/project2.png", "/images/project3.png", "/images/project4.png", "/images/project5.png"];

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    return (
        <>
            <div className="projects">
                <h1>Projelerim</h1>
                <div className="slider">
                    <img src={images[current]} alt={`Project ${current + 1}`} />
                </div>
                <div className="sliderBtn">
                    <a href="#" onClick={(e) => {e.preventDefault(); prevSlide();}}><img src="/images/arrow-left.png" alt="Left Slider" /></a>
                    <a href="#" onClick={(e) => {e.preventDefault(); nextSlide();}}><img src="/images/arrow-right.png" alt="Right Slider" /></a>
                </div>
            </div>
        </>
    )
}