import React, { useState } from 'react'
import heroImg from '../assets/images/videoCallMeeting.jpeg'

const Hero = () => {
    const [input, setInput] = useState("")

    const submitHandler = (e) => {
        if (input) {
            window.location.href = `/room/${input}`
        }
    }

    return (
        <div>
            <div class="bg-gray-50">


                <section class="pt-12 pb-12 sm:pb-16 lg:pt-8">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                            <div>
                                <div class="text-center lg:text-left">
                                    <h1 class="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Meet with your Family and Friends</h1>
                                    <p class="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Start a free conference call with your friends, family or team members. No sign up required</p>

                                    <div class="mt-8 sm:mt-10">
                                        <div class="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} id="" placeholder="Enter your room ID" class="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent" required="" />
                                            <div class="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                                <button onClick={submitHandler} class="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Join Us Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <img class="w-full" src={heroImg} alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero