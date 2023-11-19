import Footer from "../Footer";
import NavBar from "../Navbar";

const Gallery = () => {
    const images = [
      /* waiting nalang sa API */
    ];
    return (
        <>
            <NavBar/>
            <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply h-100px">
     <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">GALLERY</h1>
     </div>
    </section>
       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} className="h-auto max-w-full rounded-lg"/>
                ))}
            </div>
        </div>
            <Footer/>
        </>
    )
}
export default Gallery;