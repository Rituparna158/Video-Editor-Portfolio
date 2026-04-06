"use client"
import { motion } from "framer-motion"

export default function Hero(){
    return (
        <section className="text-center py-20 relative isolate overflow-hidden">

            <img
            src="/hero-gradient.png"
            alt="hero"
            className="hero-bg-img"
            />

            <h2 className="text-gray-400">JIMMY TURNER</h2>

            <div className="common-line" />

            <h1 className="text-5xl font-bold mt-4">PROFESSIONAL VIDEO EDITOR</h1>

            <p className="text-gray-400 mt-4">Making your videos look more cool.</p>

            <button className="contact-btn">
                LET'S TALK
            </button>
        </section>
    )
}