import Footer from "../Footer";
import NavBar from "../Navbar";
import { useState } from 'react';

const ArcadeFAQ = () => {
  const faqs = [
    {
      question: 'What types of games are available at the arcade?',
      answer: 'Our arcade offers a variety of games, including classic arcade games, modern video games, and multiplayer experiences.'
    },
    {
      question: 'How can I rent a gaming hub?',
      answer: 'To rent a gaming hub, visit our front desk or book online through our website. Choose your preferred time and date for the ultimate gaming experience.'
    },
    {
      question: 'Are there age restrictions for the arcade?',
      answer: 'The arcade is open to all ages. However, some games may have age restrictions, and parental guidance is advised for younger players.'
    },
    {
      question: 'Do you offer group discounts for gaming hub rentals?',
      answer: 'Yes, we offer group discounts for gaming hub rentals. Contact our customer service for more information on group rates and special packages.'
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <NavBar/>
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply h-100px">
     <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">G-Space FAQ`s</h1>
     </div>
    </section>
    <div className="container mx-auto mt-8 p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between bg-white p-4 rounded shadow cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <span>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className="bg-white p-4 rounded shadow mt-2">
              <p className="text-gray-800">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default ArcadeFAQ;


            
