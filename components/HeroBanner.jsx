import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src='' alt='earbuds' className='hero-banner-image' />
        <div>
            <Link href='/product/ID'>
                <button type='button'>Button text</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
