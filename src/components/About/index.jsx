import './about.css'
export default function AboutUs() {
    return (
        <section className='about-container'>
            <div className="about-left">
                <img src="https://i.ibb.co/kKhkrkW/Photo.png" alt='hhhh' />
            </div>
            <div className="about-right">
                <h4>About Us</h4>
                <h3>We Believe in Working Accredited Farmers</h3>
                <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className="assure">
                    <div className="assure-left">
                    <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="assure-right">
                        <h4>Customer-Centric Approach</h4>
                        <p>Customers lie at the heart of everything we do. </p>
                    </div>
                </div>
                <div className="assure">
                    <div className="assure-left">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="assure-right">
                        <h4>Quality Excellence</h4>
                        <p>Our passion for excellence shines through in every plate we serve, ensuring that your event is nothing short of extraordinary</p>
                    </div>
                </div>
                <div className="about-more">
                    <a href="">Book Now</a>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
        </section>
    )
}
