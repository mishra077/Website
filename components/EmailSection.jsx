"use client";
import React, { useState, } from 'react'
import GitHubIcon from '../public/github-icon.svg'
import LinkedInIcon from '../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    
    const [emailSubmitted, setEmailSubmitted] = useState(true);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailSubmitted(false);
        // const data = {
        //     email : e.target.email.value,
        //     subject : e.target.subject.value,
        //     message : e.target.message.value,
        // }

        // const JSONdata = JSON.stringify(data);
        // const endpoint = 'api/send';

        // // From the request for sending data to the server
        // const options = {
        //     // The method is POST because we are sending data
        //     method: 'POST',
        //     // Tell the server we're sending JSON.
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     // Body of the request is the JSON data we created above.
        //     body: JSONdata,
        // }

        // const response = await fetch(endpoint, options);
        // const resData = await response.json();
        // console.log(resData);
        // if(response.status === 'success') {
        //     console.log('Email sent successfully');
        //     setEmailSubmitted(true);
        // }
    }

  return <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="#contact">
    <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I'm currently looking for new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best 
            to get back to you!
        </p>
        <div className="social flex flex-row gap-2">
            <Link href="https://github.com/mishra077">
                <Image src={GitHubIcon} alt="GitHub Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/abhishekmishra301202/">
                <Image src={LinkedInIcon} alt="LinkedIn Icon" />
            </Link>
        </div>
    </div>
    <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>

            <div className="mb-6">
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                <input
                    name = "email"
                    type = "email"
                    id = "email"
                    required
                    placeholder="mishraab@usc.edu"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray text-sm rounded-lg block w-full p-2.5"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                <input
                    name = "subject"
                    type = "text"
                    id = "subject"
                    required
                    placeholder="Just saying hi!"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray text-sm rounded-lg block w-full p-2.5"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message"
                    className='text-white block mb-2 text-sm font-medium'
                >
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Hi Abhishek, I'd like to connect with you!"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray text-sm rounded-lg block w-full p-2.5"
                />
            </div>
            <button
                type="submit"
                className="bg-purple-500 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:bg-purple-600 transition duration-200"
            >
                Send Message
            </button>

            {
                // If the email is submitted successfully, show this message
                !emailSubmitted && (
                    <p className="text-purple-500 text-sm mt-2">
                        Email hasn't been configured yet! <br />
                        Please reach out to me at <a href="mailto:mishraab@usc.edu" className="underline">mishraab@usc.edu </a> 
                    </p>
                )
            }

        </form>
    </div>
  </section>
}

export default EmailSection