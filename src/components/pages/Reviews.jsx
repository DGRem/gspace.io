import Footer from "../Footer";
import NavBar from "../Navbar";
 


export default function Reviews() {
    return (
        <>
            <NavBar/>

  <section className="section-medium section-arrow--bottom-center section-arrow-primary-color bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-12 text-white text-center">
              <h2 className="section-title">What Others Say About Us</h2>
              <p className="section-sub-title">
                We are a passionate digital design agency that specializes in beautiful and easy-to-
                <br /> use digital design &amp; web development services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-primary border-t border-gray-300">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 testimonial-three testimonial-three--col-three">
            {/* Testimonial 1 */}
            <div className="md:col-span-1 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image">
                  <img className="w-48 h-48" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Testimonial Image" />
                </div>
                {/* Dito sir pwede lagay review API*/}
                <div className="testimonial-content"> 
                  <p>
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <strong className="testimonial-name">Anna Vandana</strong>
                  <span className="testimonial-job-title">CEO</span> – <a className="testimonial-link" href="#">Media Wiki</a>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            {/* Repeat the above structure for Testimonial 2 and Testimonial 3 with the respective image URLs */}
          </div>
        </div>
      </section>
            <Footer/>
        </>
    )
}