import React from 'react';
import Img1 from '../../assets/shirt.png';
import Img2 from '../../assets/shirt2.png';
import Img3 from '../../assets/shirt3.png';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Casual Wear',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque deleniti eos illum, reiciendis quasi debitis iusto, totam, quo assumenda ratione atque sint iste voluptatem possimus corporis. Mollitia officiis eveniet consequatur.',
  },
  {
    id: 2,
    img: Img2,
    title: 'Printed shirt',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque deleniti eos illum, reiciendis quasi debitis iusto, totam, quo assumenda ratione atque sint iste voluptatem possimus corporis. Mollitia officiis eveniet consequatur.',
  },
  {
    id: 3,
    img: Img3,
    title: 'Casual Shirts',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque deleniti eos illum, reiciendis quasi debitis iusto, totam, quo assumenda ratione atque sint iste voluptatem possimus corporis. Mollitia officiis eveniet consequatur.',
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className='container'>
      <div className='text-left mb-24'>
        <p data-aos='fade-up' className='text-lg text-primary mb-1 '>
          Top Rated products for you
        </p>
        <h1 data-aos='fade-up' className='text-3xl font-bold mb-2'>
          Best Products
        </h1>
        <p data-aos='fade-up' className='text-lg text-gray-400 mb-20'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ex
          aspernatur nulla nam tempora, natus impedit, eius animi nisi
          doloremque facere aperiam beatae mollitia necessitatibus illum facilis
          ut sapiente. Quas!
        </p>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {ProductsData.map((data) => (
              <div
                data-aos='zoom-in'
                className='rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-primary/40 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 max-w-[600px] mt-12'
              >
                <div>
                  <img
                    src={data.img}
                    className='max-w-[340px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                  />
                </div>
                <div className='w-full flex items-center justify-center gap-1'>
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                  {data.description}
                </p>
                <button
                  className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                  onClick={handleOrderPopup}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
