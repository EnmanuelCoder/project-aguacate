import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../components/Boton';
import SvgNotFound from '../assets/icons/SvgNotFound';



const NotFound = () => {
    return (
        <main>
          <main className='p-4 font-mono'>
            <div className='font-bold text-md md:text-xl'>404 Not Found</div>
            <section className='w-full h-screen flex flex-col items-center md:flex-row'>
              <figure className='w-full h-60 flex justify-center	'>
                <SvgNotFound />
              </figure>
              <div className='w-full h-1/2 md:flex md:flex-col md:justify-center md:items-center md:text-center md:h-2/5'>
                <h1 className='text-4xl font-bold my-4 leading-tight text-primary md:text-5xl'>I have bad news for you</h1>
                <p className='my-5 md:text-xl md:w-80 md:leading-relaxed'>The you are looking for might be removed or is temporarily unavailable</p>
                <Boton>
                  <Link to="/home">Back to homepage</Link>
                </Boton>
              </div>
            </section>
            <footer className='w-full mt-20 text-sm text-colors-slate-500 text-center'>
              <p>The best Avocados of the world!</p>
            </footer>
          </main>
        </main>
    );
};

export default NotFound;