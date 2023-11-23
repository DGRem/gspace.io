import Footer from "../Footer";
import NavBar from "../Navbar";
import GSpaceLogo from "../../assets/LOGO.png";
import Background from "../../assets/vid2.mp4";
import Wifi from "../../assets/WIFI.png";
import Rooms from "../../assets/ComfortableRooms.png";
import Food from "../../assets/FoodAndDrinks.png";
import ArcadeRoom from "../../assets/arcade.jpg";
import ConsoleRoom from "../../assets/consoleRoom.jpg";
import PcGamingRoom from "../../assets/pcGaming.jpg";
import MicrosoftLogo from "../../assets/microsoftLogo.png";
import AsusLogo from "../../assets/asuslogo.png";
import HpLogo from "../../assets/hpLogo.png";
import TierOneLogo from "../../assets/tierOneLogo.png";
import PlaceholderGal from "../../assets/Placeholder.png";
import PlaceholderRev from "../../assets/Placeholder.png";
import { useState } from 'react';
import { Link } from "react-router-dom";
import "../../App.css"
import Con1 from "/src/assets/images/console1.jpeg";
import Con2 from "/src/assets/images/console2.jpeg";
import Con3 from "/src/assets/images/console3.jpg";
import Con4 from "/src/assets/images/console4.jpg";


export default function Home() {
    const faqs = [
      {
        question: "Operating Hours and Days: When We're Available to Serve You?",
        answer: "Monday to Sunday: Our services are available from 10AM to 12MN.",
      },
      {
        question: "Can I book the gaming rooms for group events or parties?",
        answer: "Absolutely! Our spacious gaming rooms are perfect for hosting group events, birthday parties, or gaming gatherings. Contact us for special group booking options."
      },
      {
        question: "Are there themed gaming rooms available?",
        answer: "Yes, we offer an array of themed rooms inspired by popular games or eras. Immerse yourself in themed environments designed to elevate your gaming experience."
      },
      {
        question: "Can I bring my own gaming equipment?",
        answer: "Of course! Feel free to bring your gaming gear. However, we also provide high-quality gaming equipment for your convenience."
      },
      
    ];

      const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


    return (
        <>
            <NavBar/>
       <div className="main relative">
        <video src={Background} autoPlay loop muted className="w-full"/>
        <div className="main-content absolute">
            <h1 className="main-text text-md mt-5 md:text-3xl lg:text-6xl mb-10 w-full"><span className="text-transparent bg-clip-text bg-gradient-to-r from-customBlue via-customBlue to-customLightGreen">Unlock Gaming Excitement</span> <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-customBlue via-customBlue to-customLightGreen">Book Your Thrills</span> <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-customBlue via-customBlue to-customLightGreen">Play Your Way</span></h1>
            <button className="main-button rounded-xl border-2 border-dotted border-black bg-gradient-to-r from-customPurple to-customPink px-2 py-4 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px 4px 0px black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <Link

                to="/booking">
                <a href="#" className="p-5">
                    Book Now</a>
                </Link>
            </button>
        </div>
        </div>

        <div className="highlights grid justify-center items-center bg-black">
            <div className="highlight-title">
                <h1 className="text-3xl font-bold ml-20 mt-20 bolder text-transparent bg-clip-text bg-gradient-to-r from-customPink via-customBlue to-customBlue">
                    Featured Gems
                </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
                <div className="bg-transparent border rounded-lg shadow md:flex-row md:max-w-md p-5">
                    <img className="w-24 mb-5" src={Wifi} alt=""/>
                        <h5 className="mb-2 text-xl font-bold text-customDarkPurple">High-Speed Connectivity</h5>
                        <p className="mb-3 text-lg font-normal text-white">High-speed connectivity offers numerous benefits that positively impact various aspects of daily life, work, and entertainment.</p>
                </div>
                <div className="bg-transparent border rounded-lg shadow md:flex-row md:max-w-md p-5">
                    <img className="w-24 mb-5" src={Rooms} alt=""/>
                        <h5 className="mb-2 text-xl font-bold text-customDarkPurple">Inviting and Comfortable Rooms</h5>
                        <p className="mb-3 text-lg font-normal text-white">Comfortable rooms in gaming can enhance the gaming experience. It allowing gamers to play for longer periods without discomfort or strain.</p>
                </div>
                <div className="bg-transparent border rounded-lg shadow md:flex-row md:max-w-md p-5">
                    <img className="w-36 mb-5" src={Food} alt=""/>
                        <h5 className="mb-2 text-xl font-bold text-customDarkPurple">No Food Restriction</h5>
                        <p className="mb-3 text-lg font-normal text-white">While we don't provide food and drinks, you're welcome to bring your own. We encourage responsible consumption to maintain a comfortable gaming environment.</p>
                </div>
            </div>
        </div>

        <div id="about"className="bg-black dark:bg-gray-900 relative">
            <div className="py-8 px-8 mx-auto max-w-screen-xl lg:py-24">
                <div className="grid md:grid-cols-2">
                     <div className="bg-gradient-to-r from-customBlue via-black to-customDarkPurple md:w-8/12 lg:w-7/12 h-5/6">
                        <img src={GSpaceLogo} alt="logo" className="logo w-9/12 sm: mt-40 md:mt-48 lg:mt-40 sm: ml-28 md:ml-36 lg:ml-40 w-7/12 z-10" />
                    </div>
                    <div className="bg-transparent-50 dark:bg-transparent-800 border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <h2 className="about-text text-3xl mb-5 font-bold bolder text-transparent bg-clip-text bg-gradient-to-r from-customPink via-customBlue to-customBlue">About</h2>
                        <p className="text-lg font-normal text-white  mb-4">Welcome to GSPACE where 
                        passion for gaming meets seamless booking experiences. We're more than just a platform; we're the nexus for gamers seeking 
                        immersive adventures, unforgettable tournaments, and exclusive access to the gaming universe. Our mission is simple: to 
                        transform your gaming journey into a curated odyssey of excitement and accessibility. Whether you're a casual player or a 
                        hardcore enthusiast, we're here to amplify your gaming experiences. Get ready to level up with us as we unlock a world of 
                        endless gaming possibilities.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="booking p-10 bg-black">
            <div className="booking-title">
                <h1 className="text-center md:text-6xl lg:text-7xl booking-area-title font-bold m-10 mb-20 bolder text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue">What We Offer</h1>
            </div>
            <div className="booking-content grid grid-cols-3 gap-10">
                <div className="arcade justify-self-center border rounded-lg w-10/12 p-5">
                    <img src={ArcadeRoom} alt="ArcadeImg" />
                    <div className="room-name p-5">
                        <h5 className="text-center mb-2 text-xl font-bold text-customDarkPurple">Arcade Room</h5>
                    </div>
                </div>
                <div className="ConsoleRoom justify-self-center border rounded-lg w-11/12 p-5">
                    <img src={ConsoleRoom} alt="ArcadeImg" />
                    <div className="room-name p-5">
                        <h5 className="text-center mb-2 text-xl font-bold text-customDarkPurple">Console Room</h5>
                    </div>   
                </div>
                <div className="PcGamingRoom justify-self-center border rounded-lg w-10/12 p-5">
                    <img src={PcGamingRoom} alt="ArcadeImg" />
                    <div className="room-name p-5">
                        <h5 className="text-center mb-2 text-xl font-bold text-customDarkPurple">PcGaming Room</h5>
                    </div>
                </div>
            </div>
            <div className="booking-button grid justify-center mt-16">
                <button className="btn-12 ">
                    <Link
                    to="/booking">
                        <span className="bg-gradient-to-r from-customPurple to-customPink text-white">Click!</span><span className="bg-gradient-to-r from-customPurple to-customPink text-white">Book Now</span>
                        </Link>
                </button>
            </div>
        </div>
            <div className="Partners bg-black">
                    <h1 className="Partner-title text-center md:text-6xl lg:text-7xl booking-area-title font-bold bolder text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue">OUR PARTNERS</h1>
                    <div className="partners-content grid">
                        <ul className="flex m-10 mt-0 gap-4 p-10">
                            <li>
                                <a href="https://www.microsoft.com/en-ph">
                                    <img src={MicrosoftLogo} alt="MicrosoftLogo" className="MicrosoftLogo w-12/12" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.asus.com/ph/">
                                    <img src={AsusLogo} alt="AsusLogo" className="AsusLogo w-12/12 mt-2" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.logitech.com/">
                                    <img src={TierOneLogo} alt="TierOneLogo" className="TierOneLogo w-12/12 mt-5" />
                                </a>
                            </li>
                            <li>
                                <a href="https://tier.one/">
                                    <img src={HpLogo} alt="HpLogo" className="HpLogo w-9/12 mt-10 ml-10" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid  md:grid-cols-2 gap-8 pb-40 p-10">
                    <h1 className="faq-title md:mt-48 lg:mt-24 sm: text-2xl md:text-3xl lg:text-7xl booking-area-title font-bold m-10 mt-20 bolder text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue">LEVELING UP YOUR KNOWLEDGE</h1>
                    <div className="FAQ">
                        <div className="grid grid-col">
                            {faqs.map((faq, index) => (
                                <div key={index} className="container mb-2">
                                    <div
                                        className="flex items-center justify-between bg-transparent border m-5 p-2 rounded shadow cursor-pointer"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <h3 className="faq-questions mb-2 text-xl font-bold text-customDarkPurple">{faq.question}</h3>
                                        <span className="text-white">{activeIndex === index ? '▲' : '▼'}</span>
                                    </div>
                                    {activeIndex === index && (
                                    <div className="bg-black rounded shadow mt-2">
                                        <p className="text-lg ml-5 font-normal text-white">{faq.answer}</p>
                                    </div>
                                    )}
                                </div>
                                ))}
                                <button className="learn-more mb-5 ml-5 rounded-xl border-black md:w-52 lg:w-3/12 bg-gradient-to-r from-customBlue  to-customGreen py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px 4px 0px black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                    <Link
                                    to="/faq">

                                    <a href="#" className="p-5">
                                        Learn More</a>
                                    </Link>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            



            









        

        <Footer/>
        </>
    )
};