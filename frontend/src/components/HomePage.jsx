import React from "react";
import '../index.css'
import image from '../assets/image.png'
import image2 from '../assets/image2.png'

export default function Test(){
    return(
        <main className='py-4'>
        <section className='relative'>
        <section className='font-bold flex grid-cols-3 pt-20 pb-16 -mb-8 px-2 mx-1 md:flex md:grid-cols-2'>
            <section className='col-span-2 max-h-1/2 md:col-span-1'>
                <h1 className='text-lg md:text-big'>Your Path to</h1>
                <h1 className='text-lg text-blue-300 md:text-big'>Affordable Healthcare</h1>
                <h1 className='text-lg'>Starts Here</h1>
                <p className='text-para h-2.5 md:text-lg md:w-3/5 '>Easily locate providers, view services and schedule your next visit with confidence</p>
            </section>
            <img className='w-26 h-50 col-span-1 md:w-40 md:h-50 md:col-span-1' src={image} alt='doctor'/>
        </section>
        <section className='bg-gray-200 px-2 py-8 rounded-2xl mx-6 absolute top-7/10'>
            <section className='flex justify-between'>
                <input placeholder='Search by Name of Hospital' type='text' className='bg-white p-2 w-11/20 text-sm'/>
                <input placeholder='Enter Location' type='text' className='bg-white p-2 w-2/5 text-sm'/>
            </section>
            </section>
        </section>
        <section className='bg-blue-400 p-6 md:flex md:justify-center '>
        <section className='p-8'>
            <img src={image2} alt='image' className='w-50 text-center h-30 rounded-2xl'/>
        </section>
        <section className="md:flex md:flex-col md:mt-4">
        <p className='text-blue-800 text-center text-xl font-bold'>Why Choose Our Platform?</p>
        <ul className='list-disc'>
            <li className='mt-2'>Lorem ipsum</li>
            <li className='mt-2'>Lorem ipsum</li>
            <li className='mt-2'>Lorem ipsum</li>
            <li className='mt-2'>Lorem ipsum</li>
        </ul>
        </section>
        </section>
    </main>
    )
}