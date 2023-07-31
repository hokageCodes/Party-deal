import './works.css'
import Middle from '../../assets/middle.jpg'

export default function HowItWorks() {
    return (
        <section className='works-container'>
            <div className="works-left">
                <div className="work">
                    <i className="fa-solid fa-envelope"></i>
                    <h3>Confirmation Email</h3>
                    <p>Upon submitting the reservation form, you will receive an automatic confirmation email acknowledging your booking request. This email will serve as proof of your reservation.</p>
                </div>
                <div className="work">
                    <i className="fa-solid fa-phone"></i>
                    <h3>Follow-up Call</h3>
                    <p>Our dedicated team will promptly reach out to you via phone call to discuss your order in detail. We believe in providing personalized attention to every customer. During this call, we will go over the event specifics, your desired menu, and any additional services you may need.</p>
                </div>
            </div>
            <div className="works-middle">
                <div className="left">
                    <div className="work">
                        <i className="fa-solid fa-calendar-days"></i>
                        <h3>Reservation</h3>
                        <p>Start by filling out our convenient reservation form, providing essential details about your event, such as the date, time, location, and the number of guests. You can also mention any specific preferences or dietary requirements. Input your contact information, ensuring we can easily reach you.</p>
                    </div>
                </div>
                <div className="middle-img">
                    <img src={Middle} alt='' />
                </div>
                <div className="right">
                    <div className="work">
                        <i className="fa-solid fa-comments-dollar"></i>
                        <h3>Finalized Quote</h3>
                        <p>After understanding your preferences and requirements, we will create a customized catering package tailored to your event. We will then send you a finalized quote via email or SMS, including all the details discussed during the phone call.</p>
                    </div>
                </div>
            </div>
            <div className="works-right">
                <div className="work">
                    <i className="fa-solid fa-money-check"></i>
                    <h3>Confirmation and Payment </h3>
                    <p>Upon receiving the quote, you can confirm your booking by proceeding with the payment. We accept secure online payment methods for your convenience. Once the payment is completed, your reservation will be officially confirmed.</p>
                </div>
                <div className="work">
                    <i className="fa-solid fa-lock"></i>
                    <h3>Booking Policy </h3>
                    <p>Please note that bookings cannot be canceled less than 8 days before the scheduled event date. We value your understanding as meticulous preparations and arrangements are made well in advance to ensure an outstanding catering experience.</p>
                </div>
            </div>
        </section>
    )
}
