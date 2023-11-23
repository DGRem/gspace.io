import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import NavBar from "../Navbar";


export default function Reviews() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/reviews').then((res) => {
        setData(res)
      });
      console.log(data);
    },[]);

    return (
        <>
            <NavBar/>
            <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply h-100px">
     <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Reviews</h1>
     </div>
    </section>
    <div className="container mx-auto mt-8 p-4">
      <div className="flex flex-wrap justify-around">
        {data.map((reviews, i) => (
          <div key={i} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-semibold drop">{reviews.name}</h3>
            <p className="text-gray-800">{reviews.comment}</p>
          </div>
        ))}
      </div>
    </div>
            <Footer/>
        </>
    )
}