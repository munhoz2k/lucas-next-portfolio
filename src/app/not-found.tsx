'use client';
import Image from 'next/image';

import errorImage from '/public/images/error-ilustration.png'

import './globals.css'
 
export default function NotFound() {
  return (
    <html lang="en">
      <body className='mx-auto container h-screen bg-zinc-300'>
        <div className='h-full flex flex-col items-center justify-center gap-10'>
          <Image
            className='size-80'
            alt='robot saying oops'
            src={errorImage}
          />

          <div className='text-center'>
            <h2 className='text-4xl font-semibold font-sans text-black/70'>
              Not Found
            </h2>

            <p className='text-lg font-medium font-sans text-black/70'>
              The page you are looking for doesn't exist or an other error occurred.
              Go back, or head over to the main page.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}