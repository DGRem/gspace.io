import Footer from "../Footer";
import NavBar from "../Navbar";

const reviews = [
    // waiting sa API
  ];


export default function Reviews() {
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
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-gray-800">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
            <Footer/>
        </>
    )
};