import React from 'react';
import Img1 from '../../assets/women.png';
import Img2 from '../../assets/women2.jpg';
import Img3 from '../../assets/women3.jpg';
import Img4 from '../../assets/women4.jpg';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'women ethic',
    rating: 5.0,
    color: 'white',
    aosDelay: '0',
  },
  {
    id: 2,
    img: Img2,
    title: 'women westren',
    rating: 4.0,
    color: 'red',
    aosDelay: '200',
  },
  {
    id: 3,
    img: Img3,
    title: 'Googles',
    rating: 4.5,
    color: 'brown',
    aosDelay: '400',
  },
  {
    id: 4,
    img: Img4,
    title: 'Printed T-shirt',
    rating: 4.7,
    color: ' yellow',
    aosDelay: '600',
  },
  {
    id: 5,
    img: Img2,
    title: 'Fashin T-Shirt',
    rating: 4.5,
    color: 'Pink',
    aosDelay: '800',
  },
];

const Product = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-primary'>
            Top Selling Products For You!
          </p>
          <h1 dara-aos='fade-up' className='text-3xl font-bold'>
            Products
          </h1>
          <p data-aos='fade-up' className='text=lg text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            provident repellendus quaerat iure eveniet? Nobis, unde a!
            Architecto, voluptate maiores totam, asperiores quia, ratione
            temporibus mollitia quibusdam hic aut aspernatur?
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos='fade-up'
                data-aos-delay={data.aosDelay}
                key={data.id}
                className='space-y-3'
              >
                <img
                  src={data.img}
                  alt='Cover img'
                  className='h-[220px] w=[150px] object-cover rounded-md'
                />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yello-400' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer bg-primary/40 text-black py-1 px-5 rounded-md'>
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
