import React from 'react';
import Slider from 'react-slick';

const TestimonialsData = [
  {
    is: 1,
    name: 'Vector',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima dignissimos, facere ullam, amet dolor, perspiciatis earum neque autem esse consequatur alias nulla ipsum sequi. Repellat, nobis natus. Quos, omnis',
    img: 'https://picsum.photos/200',
  },
  {
    is: 2,
    name: 'Minahil',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima dignissimos, facere ullam, amet dolor, perspiciatis earum neque autem esse consequatur alias nulla ipsum sequi. Repellat, nobis natus. Quos, omnis',
    img: 'https://picsum.photos/200',
  },
  {
    is: 3,
    name: 'khadija',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima dignissimos, facere ullam, amet dolor, perspiciatis earum neque autem esse consequatur alias nulla ipsum sequi. Repellat, nobis natus. Quos, omnis',
    img: 'https://picsum.photos/200',
  },
  {
    is: 4,
    name: 'haseeb',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima dignissimos, facere ullam, amet dolor, perspiciatis earum neque autem esse consequatur alias nulla ipsum sequi. Repellat, nobis natus. Quos, omnis',
    img: ' https://picsum.photos/200',
  },
  {
    is: 5,
    name: 'nighat',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima dignissimos, facere ullam, amet dolor, perspiciatis earum neque autem esse consequatur alias nulla ipsum sequi. Repellat, nobis natus. Quos, omnis',
    img: 'https://picsum.photos/200',
  },
];

const Testimonials = () => {
  var settings = {
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseonHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slidesToScroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slidesToScroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-primary'>
            What Our Customer Are Saying?
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            Testimonials
          </h1>
          <p data-aos='fade-up' className='text-lg text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim neque
            officia numquam. A, soluta deserunt voluptatibus exercitationem
            quaerat assumenda, magnam nulla est error ut corporis? Voluptatum
            vitae sit cum recusandae.
          </p>
        </div>
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className='my-6'>
                <div
                  key={data.id}
                  className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative'
                >
                  <div className='mb-4'>
                    <img
                      src={data.img}
                      alt=''
                      className='rounded-full w-20 h-20'
                    />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-lg dark:text-slate-300 text-gray-400'>
                        {data.text}
                      </p>
                      <h1 className='text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light'>
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
