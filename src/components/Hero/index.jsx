import './hero.css'

export default function Hero() {
    return (
        <section className='hero-container'>
            <h4>Great Taste. Great Quality</h4>
            <h1>Savor Every Moment with Party Deal Catering.</h1>
            <p><span>You</span> bring the <span>crowd</span>, <span>We</span> bring the <span>Food</span></p>
            <div className="hero-cta">
                <button href="">Book A Reservation</button>
                <button href="">See Our Menu</button>
            </div>
            <i className="fa-solid fa-angles-down"></i>
        </section>
    )
}
