import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

interface Slide {
  url: string;
}

function App(): JSX.Element {
  const slides: Slide[] = [
    {
      url: 'https://media.istockphoto.com/id/1335522873/photo/air-conditioning-technician-and-a-part-of-preparing-to-install-new-air-conditioner.jpg?s=612x612&w=0&k=20&c=v16Oz_PHQ0aX0GSa4TH1P2mxQS8FARYgcFd3fmJSkUk=',
    },
    {
      url: 'https://media.istockphoto.com/id/1368514998/photo/hand-adjusting-temperature-on-air-conditioner.jpg?s=612x612&w=0&k=20&c=sx_08JADhXZFKFadmJE9vfjF43C5ru5X96YPHLo-EPE=',
    },
    {
      url: 'https://media.istockphoto.com/id/1327493924/photo/ventilation-system-installation-and-repair-service-hvac-technician-at-work-banner-copy-space.jpg?s=612x612&w=0&k=20&c=dAx_VMdd76J3PMNvI_M_3_RmVyurhcUHU8UYp4PGjzg=',
    },
    {
      url: 'https://media.istockphoto.com/id/1148634878/photo/air-heat-pumps-beside-house.jpg?s=612x612&w=0&k=20&c=UyIVoLHkkRQ9xyPKCjhBd6XtLXHRYvXjT6blrc6I3Cw=',
    },
    {
      url: 'https://media.istockphoto.com/id/912000730/photo/close-up-view-on-hvac-units-3d-rendered-illustration.jpg?s=612x612&w=0&k=20&c=Ttw3Gpn6LwUkWM5NlPNzd88QLV5G1iO4n3hOAl7vPMs=',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
      </div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((_, slideIndex: number) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
