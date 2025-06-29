import React from 'react';
import background from "../Images/j3.jpg";
import solarGlobe from "../Images/j1.png";
import family from "../Images/j2.png";
import { motion } from 'framer-motion';
import './SolarLanding.css';

function Homestart() {
    return (
        <div
            className="min-h-screen flex flex-col relative overflow-hidden -mt-0 sm:-mt-0 lg:-mt-40"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <main className="flex flex-col lg:flex-row flex-1 max-w-[1280px] mx-auto w-full px-6 md:px-12 items-center justify-between relative z-10">

                {/* Left Content */}
                <motion.div
                    className="max-w-lg mt-16 md:mt-24 lg:mt-32 text-center lg:text-left z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-black text-sm font-semibold mb-1">
                        Your Electricity Bill is Burning a Hole in Your Wallet
                    </p>
                    <h1 className="text-[36px] md:text-5xl font-extrabold text-[#121827] leading-tight mb-1">
                        SWITCH TO <span className="text-[#FD8C4E] italic font-extrabold">SOLAR ENERGY</span>
                    </h1>
                    <p className="text-gray-600 text-sm font-medium mb-8 leading-relaxed">
                        Power your <span className="font-semibold">home</span> or business
                        <br />
                        with India’s most trusted solar experts.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#E50C0C] text-white font-semibold rounded-full py-3 px-8 w-full max-w-[320px] hover:bg-[#2f6f3a] transition"
                    >
                        Get Free Solar Consultation
                    </motion.button>
                </motion.div>

                {/* Right Visuals */}
                <motion.div
                    className="relative flex-1 h-[500px] sm:h-[600px] md:h-[700px] mt-20 md:mt-32"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <motion.img
                        src={solarGlobe}
                        alt="Solar globe"
                        className="absolute top-[100px] left-[0px] sm:top-[100px] sm:left-[-50px] md:top-[200px] md:left-[-150px] lg:top-[350px] lg:left-[-125px] scale-[1.8] sm:scale-[1.7] md:scale-[1.8] lg:scale-[1] w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] rotating-image z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    />
                </motion.div>

                {/* Family Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <img
                        src={family}
                        alt="Smiling family"
                        className="absolute top-[700px] left-[1050px] transform -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[400px] z-20"
                    />
                </motion.div>

            </main>
        </div>
    );
}

export default Homestart;
