import Footer from "../Footer";
import NavBar from "../Navbar";
import Pic1 from "/src/assets/images/arcade1.webp";
import Pic2 from "/src/assets/images/arcade2.webp";
import Pic4 from "/src/assets/images/console2.jpeg";
import Pic5 from "/src/assets/images/pcgaming1.jpeg";


const Gallery = () => {
    const images = [
      /* waiting nalang sa API */
    ];
    return (
    <>
    <NavBar/>
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Gallery</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">   
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={Pic1}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={Pic2}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={Pic4}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={Pic5}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                </div>
            </div>
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