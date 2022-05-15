import React from 'react';
import bucketGirl from "../../Assets/Images/bucketgirl.png"

const Landing = () => {
    return (
        <>
            <div class="hero h-fit lg:h-[70vh] mt-16 lg:mt-0 bg-accent">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos="fade-right"
                            data-aos-duration="1000" className='text-xl'>Best Quality</p>
                        <h1 data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="1000" class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1000" class="py-6 max-w-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi porro pariatur sint quibusdam, aut odio vero velit reprehenderit voluptates tempore?</p>
                        <button data-aos="fade-right"
                            data-aos-delay="1000"
                            data-aos-duration="1000" class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[65vh] lg:mt-10 shrink-0'>
                        <img src={bucketGirl} class="h-full" alt='' />
                    </div>
                </div>
            </div>
            <div className='w-5/6 mx-auto bg-base-200 p-10 rounded-2xl relative shadow-lg z-30 mt-[-25px]'>
                <h1 className='text-2xl text-primary mb-4'>Get Free Estimate</h1>
                <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='mt-5 btn btn-primary'>GET A QUOTE</button>
            </div>
        </>
    );
};

export default Landing;