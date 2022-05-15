import React from 'react';
import bucketGirl from "../../Assets/Images/bucketgirl.png"

const Landing = () => {
    return (
        <div class="hero h-fit lg:h-[70vh] mt-16 lg:mt-0 bg-accent">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <p className='text-xl'>Best Quality</p>
                    <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p class="py-6 max-w-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi porro pariatur sint quibusdam, aut odio vero velit reprehenderit voluptates tempore?</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <div className='h-[65vh] lg:mt-10 shrink-0'>
                    <img src={bucketGirl} class="h-full" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Landing;