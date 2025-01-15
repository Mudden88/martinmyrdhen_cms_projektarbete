"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { getSocialLinks } from "@/lib/api";

// Form with emailJS to send emails
export default function ContactForm() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_message: "",
    })
    const [sendTo] = useState("Martin")
    const [connectSocials, setConnectSocials] = useState([])

    //Same logic as footer component but useEffect instead. 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSocialLinks();

                if (data.length > 0 && data[0].socialName && data[0].socialUrl) {
                    const socials = data[0].socialName.map((name, index) => ({
                        name,
                        url: data[0].socialUrl[index],
                    }));
                    setConnectSocials(socials);
                }
            } catch (error) {
                console.error("Error fetching social links:", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const sendEmail = async (e) => {
        e.preventDefault();

        const { user_name, user_email, user_message } = formData;

        if (user_name === "" || user_email === "") {
            alert("Name and email cannot be blank.");
            return;
        }

        try {
            await emailjs.send(
                `${process.env.NEXT_PUBLIC_SERVICE}`,
                `${process.env.NEXT_PUBLIC_TEMPLATE}`,
                {
                    user_name,
                    to_name: sendTo,
                    user_message,
                    user_email,
                },
                `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
            );

            alert("Email Successfully Sent!");

            // Reset form
            setFormData({
                user_name: "",
                user_email: "",
                user_message: "",
            });
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Contact</h2>
                <p className="text-gray-600 mb-6">
                    Fill out the form below to get in touch with me. I´ll reply as soon as possible.
                </p>
                <form onSubmit={sendEmail} className="space-y-4" aria-label="Contant Form">
                    <div className="flex flex-col">
                        <label htmlFor="user_name" className="text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="user_email" className="text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="user_message" className="text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            name="user_message"
                            value={formData.user_message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            rows="5"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                        >
                            Submit
                        </button>
                    </div>

                </form>
                <div className="flex justify-center">
                    {connectSocials.length > 0 ? connectSocials.map((social) => (<Link key={social.name} href={social.url} className="text-black mr-3 hover:text-blue-500" target="_blank"><i className={`fa-brands fa-${social.name.toLowerCase()} text-6xl`}></i></Link>)) : <div>Loading</div>}

                </div>
            </div>
        </>
    )
}