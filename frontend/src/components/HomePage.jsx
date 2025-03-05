import React from "react";
import '../index.css'
import image from '../assets/doctor.png'
import image2 from '../assets/image2.png'

export default function Test(){
    return(
        <main className='py-4'>
        <section className="md:relative"> 
        <section className='relative md:h-full font-bold flex grid-cols-3 pt-20 pb-16 -mb-8 px-2 mx-1 md:flex md:grid-cols-2'>
            <section className='md:pt-16 col-span-2 md:pl-5 max-h-2/3 md:col-span-1'>
                <h1 className='text-lg md:text-big'>Your Path to</h1>
                <h1 className='text-lg text-blue-300 md:text-big'>Affordable Healthcare</h1>
                <h1 className='text-lg md:text-big'>Starts Here</h1>
                <p className='text-para h-2.5 md:text-lg md:w-full '>Easily locate providers, view services and schedule your next visit with confidence</p>
            </section>
            <img className='w-26 h-50 col-span-1 md:w-2/5 md:h-full md:col-span-1' src={image} alt='doctor'/>
        </section>
        <section className="absolute md:top-7/10 md:w-full flex justify-center " >
        <section className='md:absolute md:top-5 md:w-3/5 md:h-2/10 flex md:justify-center md:items-center md:transform md:-translate-y-1/2 md:z-10 bg-gray-200 md:p-4 rounded-md shadow-lg'>
            <section className='flex absolute justify-between'>
                <input placeholder='Search by Name of Hospital' type='text' className='bg-white p-2 w-11/20 text-sm'/>
                <input placeholder='Enter Location' type='text' className='bg-white p-2 w-2/5 text-sm'/>
            </section>
            </section>
        <section className='bg-blue-400 p-4 md:flex md:justify-between md:pt-20 md:pb-10'>
        <section className='w-1/2'>
            <img src={image2} alt='image' className='object-cover w-full h-full text-center h-30 rounded-2xl'/>
        </section>
        <section className="md:flex md:flex-col md:mt-4">
        <p className='text-blue-800 text-center text-xl md:text-3xl font-bold'>Why Choose Our Platform?</p>
        <ul className='list-disc md:ml-10 md:text-lg md:font-bold'>
            <li className='mt-2'>Locate trusted doctors, clinics, and hospitals in your area</li>
            <li className='mt-2'>Compare consultation fees and check accepted insurance plans.</li>
            <li className='mt-2'>Book appointments with reminders to ensure you never miss a visit.</li>
            <li className='mt-2'>Help improve healthcare by sharing your feedback.m</li>
        </ul>
        </section>
        </section>
        </section>
        </section>
    </main>
    )
}