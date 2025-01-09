"use client"
import { useState } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { useMetadata } from "@/app/context/metadataContext";


export default function ContactForm() {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_message: "",
    })
    const [sendTo] = useState("Martin")
    const metadata = useMetadata()

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
                "service_lsa6g3k",
                "template_zdsip6k",
                {
                    user_name,
                    to_name: "Martin",
                    user_message,
                    user_email,
                },
                "S8vGnw8J7SRCu_DFe"
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
                <form onSubmit={sendEmail} className="space-y-4">
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
                    <Link href={metadata[0]?.socialLinks[0]} target="_blank" className="mr-4"><i className="fa-brands fa-facebook text-6xl text-blue-800"></i> </Link>
                    <Link href={metadata[0]?.socialLinks[1]} target="_blank" className="mr-4"><i className="fa-brands fa-linkedin text-6xl text-blue-700"></i> </Link>
                    <Link href={metadata[0]?.socialLinks[2]} target="_blank" className="mr-4"><i className="fa-brands fa-github text-6xl"></i> </Link>
                </div>
            </div>
        </>
    )
}