import React, {useState} from "react";
import '../index.css'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function GeneralPage(){
    const [page, setPage] = useState(<HomePage/>)
    let home = true
    let explore = false
    let bookings = false
    let saved = false
    let profile = false

    function handleHome(){
        if (home){
            explore = false
            bookings = false
            saved = false
            profile = false
            setPage('./home-page')
        }
    }
    function handleExplore(){
        if (explore){
            home = false
            bookings = false
            saved = false
            profile = false
            setPage('./explore')
        }
    }
    function handleBooking(){
        if (bookings){
            explore = false
            bookings = false
            saved = false
            profile = false
            setPage('./booking')
        }
    }
    return(
        <>
            <header className="fixed w-full z-50 bg-white shadow-md flex justify-between p-6">
                <h1>TALENVO</h1>
                <section className="hidden md:flex md:justify-around gap-6 items-end">
                <section className="bg-noti rounded-2xl p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
</section>
<section className="bg-blue-500 text-center p-1 rounded px-2">
    <p>Book Appointment</p>
</section>
</section>
            </header>
            <main className="md:ml-20">
                {page}
                {page}
            </main>
            <section className="flex flex-row md:h-4/5 md:flex-col md:justify-between md:flex">
            <section className="flex border-t-1 border-gray-300 pt-2 flex-row justify-between fixed bottom-0 md:w-20 md:h-91/100 md:fixed md:top-20 md:left-0 md:flex md:flex-col md:ml-0 w-full bg-white shadow-lg"> {/* Background color added along with shadow */}
            {/* Navigation Items */}
    <section className="flex justify-around flex-row w-full  md:flex-col gap-4">
      <section className="nav-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <p>Home</p>
      </section>

      <section className="nav-btn">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 11.8083C12.3391 11.8083 11.8083 12.3392 11.8083 13C11.8083 13.6608 12.3391 14.1917 13 14.1917C13.6608 14.1917 14.1916 13.6608 14.1916 13C14.1916 12.3392 13.6608 11.8083 13 11.8083ZM13 2.16666C7.01996 2.16666 2.16663 7.01999 2.16663 13C2.16663 18.98 7.01996 23.8333 13 23.8333C18.98 23.8333 23.8333 18.98 23.8333 13C23.8333 7.01999 18.98 2.16666 13 2.16666ZM15.3725 15.3725L6.49996 19.5L10.6275 10.6275L19.5 6.49999L15.3725 15.3725Z" fill="#0077CC"/>
        </svg>
        <p>Explore</p>
      </section>

      <section className="nav-btn">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.375 2.43466L17.8693 2.43468V0.815369C17.8693 0.366462 17.5057 0.00286865 17.0568 0.00286865C16.6079 0.00286865 16.2443 0.366462 16.2443 0.815369V2.43427H9.74431V0.815369C9.74431 0.366462 9.38072 0.00286865 8.93181 0.00286865C8.48291 0.00286865 8.11931 0.366462 8.11931 0.815369V2.43427H1.625C0.727594 2.43427 0 3.16187 0 4.05927V24.3718C0 25.2692 0.727594 25.9968 1.625 25.9968H24.375C25.2724 25.9968 26 25.2692 26 24.3718V4.05927C26 3.16225 25.2724 2.43466 24.375 2.43466Z" fill="#333333"/>
        </svg>
        <p>Bookings</p>
      </section>

      <section className="nav-btn">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.33337 5.41667V21.2182C4.33337 22.1823 5.50012 22.6666 6.18262 21.9841L13 15.1667L19.8175 21.9841C20.5 22.6666 21.6667 22.1834 21.6667 21.2182V5.41667C21.6667 4.84203 21.4384 4.29093 21.0321 3.8846C20.6258 3.47827 20.0747 3.25 19.5 3.25H6.50004C5.9254 3.25 5.3743 3.47827 4.96798 3.8846C4.56165 4.29093 4.33337 4.84203 4.33337 5.41667Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p>Saved</p>
      </section>
    </section>

    {/* This section will be visible only on medium and larger screens */}
    <section className="hidden md:mt-auto md:flex md:justify-center md:py-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    </section>
  </section>
</section>


        </>
    )
}