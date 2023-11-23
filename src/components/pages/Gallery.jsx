import Footer from "../Footer";
import NavBar from "../Navbar";
import Pic1 from "/src/assets/images/arcade1.webp";
import Pic2 from "/src/assets/images/arcade2.jpg";
import Pic3 from "/src/assets/images/arcade3.jpg";
import Pic4 from "/src/assets/images/arcade4.jpg";
import Con1 from "/src/assets/images/console1.jpeg";
import Con2 from "/src/assets/images/console2.jpeg";
import Con3 from "/src/assets/images/console3.jpg";
import Con4 from "/src/assets/images/console4.jpg";
import Pc1 from "/src/assets/images/pcgaming1.jpeg";
import Pc2 from "/src/assets/images/pcgaming2.jpeg";
import Pc3 from "/src/assets/images/pcgaming3.jpg";
import Pc4 from "/src/assets/images/pcgaming4.jpg";







const Gallery = () => {
    const images = [
      /* waiting nalang sa API */
    ];
    return (
    <>
    <NavBar/>
    <div className="main-gallery pt-10 bg-black">
      <div className="main-title">
      <h1 className="text-3xl font-bold ml-20 mt-20 bolder text-transparent bg-clip-text bg-gradient-to-r from-customPink via-customBlue to-customBlue">
          Arcade  
          </h1>
      </div>
      <div className="arcade-content grid md:grid-cols-2 lg:grid-cols-4 p-10 gap-5">
        <div className="img1">
          <img src={Pic1} alt="" />
        </div>
        <div className="img1">
          <img src={Pic2} alt="" />
        </div>
        <div className="img1">
          <img src={Pic3} alt="" />
        </div>
        <div className="img1">
          <img src={Pic4} alt="" />
        </div>
      </div>

      <div className="main-title">
      <h1 className="text-3xl font-bold ml-20 mt-20 bolder text-transparent bg-clip-text bg-gradient-to-r from-customPink via-customBlue to-customBlue">
          Console   
          </h1>
      </div>
      <div className="arcade-content grid md:grid-cols-2 lg:grid-cols-4 p-10 gap-5">
        <div className="img1">
          <img src={Con1} alt="" />
        </div>
        <div className="img1">
          <img src={Con2} alt="" />
        </div>
        <div className="img1">
          <img src={Con3} alt="" />
        </div>
        <div className="img1">
          <img src={Con4} alt="" />
        </div>
      </div>
      
      <div className="main-title">
      <h1 className="text-3xl font-bold ml-20 mt-20 bolder text-transparent bg-clip-text bg-gradient-to-r from-customPink via-customBlue to-customBlue">
          PcGaming  
          </h1>
      </div>
      <div className="arcade-content grid md:grid-cols-2 lg:grid-cols-4 p-10 gap-5 pb-32">
        <div className="img1">
          <img src={Pc1} alt="" />
        </div>
        <div className="img1">
          <img src={Pc2} alt="" />
        </div>
        <div className="img1">
          <img src={Pc3} alt="" />
        </div>
        <div className="img1">
          <img src={Pc4} alt="" />
        </div>
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