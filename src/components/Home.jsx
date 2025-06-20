import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Sun } from "lucide-react";
import solar from "../Images/solar.jpg";
import solarch from "../Images/chacha.png";
import img1 from "../Images/Img1.png";
import "./Home.css";

// import { FaRobot } from "react-icons/fa";
import { RiRobotLine } from "react-icons/ri";
import ChatUI from "./ChatUI";

const Dashboard = lazy(() => import("./Dashboard"));
import { useState } from "react";
import StatsSection from "./StatsSection";
import ChartCard from "./ChartCard";
import SolarCarousel from "./SolarCarousel";
import SolarServices from "./SolarServices";
import SolarProduct from "./SolarProduct";
import SolarCostCalculator from "./SolarCostCalculator";
import FaqSection from "./FaqSection";
import SolarPortfolio from "./SolarPortfolio";
import CustomerCarousel from "./CustomerCarousel";
import ExactMatchPage from "./ExactMatchPage";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import bg from "../Images/bg1.jpg";
import frongimg from "../Images/SolarChahaFront.png";
import ChatbotPopup from "./ChatbotPopup";
import ChatbotToggle from "./ChatbotToggle";
import SolarSolutions from "./SolarSolutions";
import Solarabout from "./Solarabout";
import Hero from "./Hero";
import ChatUI1 from "./ChatUI1";

import Ctpage from "./Ctpage";
import PageOne from "./PageOne";
import { Link, Links } from "react-router-dom";
import Conversation from "./Conversation";
import Homestart from "./Homestart";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is Solar Energy?",
      content:
        "Solar energy is the energy derived from the sun’s radiation. It is a clean, renewable source of energy that can be harnessed using solar panels to generate electricity or heat.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "How Do Solar Panels Work?",
      content:
        "Solar panels convert sunlight directly into electricity using photovoltaic cells. When sunlight hits these cells, it creates an electric current that can be used to power homes and businesses.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Benefits of Solar Energy",
      content:
        "Solar energy reduces electricity bills, lowers carbon footprint, and requires minimal maintenance. It’s sustainable and helps in energy independence.",
      img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for children elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,

    transition: { duration: 0.3 },
  };

  return (
    <div className=" relative overflow-hidden   max-w-7xl mx-auto">
      <ChatbotToggle />
      <div>
        <section>
          <Homestart />
        </section>
        <section>
          <section className="m-10">
            <div className="About max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-stretch relative mt-14">
              {/* Left: Images */}
              <div className="relative flex flex-col justify-center h-full">
                {/* Main Image */}
                <div className="w-full rounded-xl overflow-hidden shadow-lg h-full">
                  <img
                    src="https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg"
                    alt="Solar Field"
                    className="rounded-xl object-cover w-full h-full min-h-[400px]"
                  />
                </div>

                {/* Stacked Image for large screens */}
                <div className="absolute md:bottom-[-40px] md:left-[60px] w-3/4 border-4 border-white rounded-xl overflow-hidden shadow-xl md:block hidden">
                  <img
                    src="https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg"
                    alt="Solar Roof Work"
                    className="rounded-xl object-cover w-full h-[200px] md:h-[250px]"
                  />
                </div>

                {/* Small screen stacked image below */}
                <div className="md:hidden mt-6 w-full border-4 border-white rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg"
                    alt="Solar Roof Work"
                    className="rounded-xl object-cover w-full h-[200px]"
                  />
                </div>
              </div>

              {/* Right: Text Content */}
              <div className="text-gray-800 flex flex-col justify-center h-full px-2 sm:px-0">
                <h3 className="text-xl   font-semibold text-green-800 tracking-wider uppercase mb-2">
                  About Us
                </h3>
                <h2 className="text-3xl About1 sm:text-4xl font-bold leading-tight mb-4">
                  We Don’t Just Sell Solar. <br className="hidden sm:block" /> We
                  Engineer Smart Power Solutions.
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  At <strong>DIVY Power</strong>, we believe solar isn’t just a
                  product, it’s your power freedom. From site assessment to
                  installation and support, we handle everything.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  We’ve been lighting lives responsibly for over a decade as an
                  authorized partner of <strong>Tata Power Solar</strong>. Backed
                  by Tata’s legacy of trust, we deliver cost-effective solar
                  solutions that prioritize energy safety, quality, and long-term
                  performance.
                </p>
                <p className="text-base leading-relaxed">
                  From planning to financing, and installation to maintenance, we
                  offer customized solar services required to meet your project’s
                  needs. With us, you don’t just go solar — you go{" "}
                  <strong>safe, smart, and sustainable</strong>.
                </p>
                <div className="flex flex-wrap gap-x-20 gap-y-6 mt-5 max-w-[420px] ">
                  <div>
                    <p className="font-semibold text-[24px] text-green-700">25+</p>
                    <p className="text-[12px] text-gray-600">Years Experince</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[24px] text-green-700">1000+ </p>
                    <p className="text-[12px] text-gray-600"> Product Delivered</p>
                  </div>
                </div>
                <button className="bg-[#E50C0C] text-white mt-10 font-semibold rounded-full py-3 px-8 w-full max-w-[190px]  transition">
                  <Link to={'/about'}>
                    know more
                  </Link>
                </button>
              </div>

            </div>
          </section>
          <section className=" mt-[70px]">
            <div className="bg-[#E50C0C] flex justify-center items-center h-[450px] p-4">
              <div className="max-w-5xl w-full text-center">
                <img
                  src={img1}
                  alt="Three cartoon sun characters standing side by side, the middle one wearing sunglasses and orange shoes, the two on sides with hands on hips and smiling faces"
                  className="mx-auto -mt-32 mb-6 max-w-full h-auto"
                  width="400"
                  height="300"
                />
                <h1 className="text-white  font-semibold About text-xl sm:text-2xl md:text-3xl leading-tight">
                  Still Paying for Electricity?
                  <br />
                  Let Solar Chacha &amp; Roshni Didi explain why switch to solar
                </h1>
              </div>
            </div>
          </section>
        </section>
      </div>

      <section>
        <Conversation />
      </section>
      <Suspense fallback={<div></div>}>

      </Suspense>
      {/* <ChatUI /> */}


      {/* <Solarabout /> */}

      {/* <section className=" m-10">
        <StatsSection />
        <SolarSolutions />
      </section> */}


      <section className=" -mt-64 md:-mt-64 lg:-mt-64 xl:-mt-72 2xl:-mt-[500px]  m-10">
        <ChartCard />
      </section>
      <section>
        <SolarCostCalculator />

      </section>
      <section className=" mt-24">
        <Dashboard />
      </section>
      <section>
        <div className="text-center  py-6 mb-10">
          <button className="bg-[#E50C0C] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            <Link to="./contact">Contact Us to Get Started</Link>
          </button>
        </div>

      </section>

      <section>
        <SolarSolutions />
      </section>

      <section className=" ">
        <PageOne />
      </section>
      <section>
        <ChatUI1 />
      </section>
      <section className="bg-[#f8f7f0] mr-10 ml-10  -mt-0 md:-mt-0 lg:-mt-0 xl:-mt-0 2xl:-mt-[200px]">

        <SolarProduct />
      </section>

      <main className="max-w-full mx-auto  bg-[#f8f7f0] GetFontSol mr-10 ml-10 ">
        <section className="bg-[#E50C0C] py-16 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left Image */}
            <div className="flex-shrink-0">
              <img
                src="https://storage.googleapis.com/a1aa/image/e9519b91-9347-4552-5dab-d16eaf280dab.jpg"
                alt="Solar Panel Setup"
                className="w-full max-w-[220px] h-auto object-contain"
              />
            </div>

            {/* Center Text */}
            <div className="text-white flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug About1">
                Invest in Safety Settle for Nothing Less
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-normal About">
                At <strong>Divy Power</strong>, we believe that quality and safety come first.
                While our solutions may come at a premium, we never compromise on the integrity
                of our installations. Our systems are built with government-approved materials,
                installed by certified engineers, and designed for long-term durability.
                <br className="hidden sm:block" />
                <br />
                We take pride in ensuring that every solar installation is robust, reliable,
                and secure — giving you peace of mind that your investment will last for decades.
                When you choose Divy, you’re choosing <strong>safety, reliability, and performance</strong>.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0">
              <img
                src={frongimg}
                alt="Solar Chacha"
                className="w-64 h-68 md:w-72 md:h-72 object-contain sc"
                width={200}
                height={200}
              />
            </div>

          </div>
        </section>

        <section className="">
          <ChatUI />
        </section>
      </main>

      <section className="mr-10 ml-10 -mt-0 md:-mt-0 lg:-mt-0 xl:-mt-0 2xl:-mt-[350px]">
        <Ctpage />

        <ExactMatchPage />
      </section>

      <section className="bg-[#f8f7f0] mr-10 ml-10 -mt-24 md:-mt-36 lg:-mt-36 xl:-mt-56 2xl:-mt-[630px]">
        <SolarPortfolio />

        <FaqSection />

        <ContactForm />

        <section>


        </section>

       <section className="-mt-10 md:-mt-20 lg:-mt-20 xl:-mt-24 2xl:-mt-[100px]">
         <Footer />
       </section>
      </section>
    </div>
  );
}

export default Home;
