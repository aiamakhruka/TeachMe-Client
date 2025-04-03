import Header from '../../components/Header/Header';
import './HomePage.scss';
import laptop from '../../assets/images/laptop.jpeg';
import legs from '../../assets/images/legs.jpeg';
import math from '../../assets/images/math.jpeg';
import chim from '../../assets/images/chim.jpeg';
import phis from '../../assets/images/phis.jpeg';
import history from '../../assets/images/history.jpeg';
import geo from '../../assets/images/geo.jpeg';
import language from '../../assets/images/language.jpeg';
import cs from '../../assets/images/cs.jpeg';
import engin from '../../assets/images/engin.jpeg';
import teacher1 from '../../assets/images/teacher1.jpeg';
import teacher2 from '../../assets/images/teacher2.jpeg';
import teacher3 from '../../assets/images/teacher3.jpeg';
import student1 from "../../assets/images/student1.jpeg";
import student2 from "../../assets/images/student2.jpeg";
import student3 from "../../assets/images/student3.jpeg";
import lamp from "../../assets/images/lamp.jpeg";
import { Link } from 'react-router-dom'; // Already imported
import IconQuote from '../../assets/icons/quote-right-solid.svg';
import Footer from '../../components/Footer/Footer';

function HomePage() {
    return (
        <>
            <Header />
            <section className='hero'>
                <div className='hero__left'>
                    <h2 className='header'>Empowering Minds, Igniting Futures</h2>
                    <p className='paragraph'>Nurturing potential, shaping futures. Our dedicated teachers inspire a love for learning, empowering students to thrive and succeed on their educational journey.</p>
                    <Link to={"/login"}><button className='hero__button button-gradient'>Get Started</button></Link>
                </div>
                <div className='hero__right'>
                    <img src={laptop} alt="Laptop" />
                </div>
            </section>
            <section className='about'>
                <div className='about__left'>
                    <h2 className='about-header'>Makes Learning simple</h2>
                    <p className='about-paragraph'>Discover a new way of learning with our personalized online education service. Connect with expert teachers, explore various subjects, and achieve your academic goals from the comfort of your own home. Join us today and embark on an exciting educational journey tailored just for you.</p>
                </div>
                <div className='about__right'>
                    <img src={legs} alt="Legs" />
                </div>
            </section>
            <section className='subjects'>
                <h2 className='subjects__header'>With multiple subjects to choose from</h2>
                <div className='subjects-container'>
                    <div className='row'>
                        <Link to="/mathBooks" className='subject-containers'>
                            <p><strong>Math</strong></p>
                            <img className="image" src={math} alt="Math" />
                        </Link>
                        <Link to="/chemistryBooks" className='subject-containers'>
                            <p><strong>Chemistry</strong></p>
                            <img className="image" src={chim} alt="Chemistry" />
                        </Link>
                        <Link to="/physicsBooks" className='subject-containers'>
                            <p><strong>Physics</strong></p>
                            <img className="image" src={phis} alt="Physics" />
                        </Link>
                        <Link to="/historyBooks" className='subject-containers'>
                            <p><strong>History</strong></p>
                            <img className="image" src={history} alt="History" />
                        </Link>
                    </div>
                    <div className='row'>
                        <Link to="/geographyBooks" className='subject-containers'>
                            <p><strong>Geography</strong></p>
                            <img className="image" src={geo} alt="Geography" />
                        </Link>
                        <Link to="/languageBooks" className='subject-containers'>
                            <p><strong>Language</strong></p>
                            <img className="image" src={language} alt="Language" />
                        </Link>
                        <Link to="/csBooks" className='subject-containers'>
                            <p><strong>Computer Science</strong></p>
                            <img className="image" src={cs} alt="Computer Science" />
                        </Link>
                        <Link to="/engineeringBooks" className='subject-containers'>
                            <p><strong>Engineering</strong></p>
                            <img className="image" src={engin} alt="Engineering" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className='list-of-teachers'>
                <h2 className='list-of-teachers__header'>Book one of our numerous teachers and get assistance with any subject.</h2>
                <div className='list-of-teachers__images'>
                    <div className='list-of-teachers__teacher-image'>
                        <img className='list-of-teachers__single-teacher-image' src={teacher1} alt="Teacher 1" />
                        <h3>Michael Rodriguez</h3>
                        <p>English Literature</p>
                    </div>
                    <div className='list-of-teachers__teacher-image'>
                        <img className='list-of-teachers__single-teacher-image' src={teacher2} alt="Teacher 2" />
                        <h3>Olivia Thompson</h3>
                        <p>History</p>
                    </div>
                    <div className='list-of-teachers__teacher-image'>
                        <img className='list-of-teachers__single-teacher-image' src={teacher3} alt="Teacher 3" />
                        <h3>Emily Johnson</h3>
                        <p>Mathematics</p>
                    </div>
                </div>
            </section>
            <section className='list-of-testimonials'>
                <h2 className='list-of-testimonials__header'>Listen to what our students are saying</h2>
                <div className='list-of-testimonials__divs'>
                    <div className='list-of-testimonials__testimonial'>
                        <img className='Icon-quote' src={IconQuote} alt="Quote" />
                        <h3 className='testimonial-text'>From Struggling to Success! Thanks to the patient guidance of my teacher, Sarah, I went from barely understanding math to acing my exams. She tailored lessons to my learning style, boosting my confidence and making learning enjoyable. Forever grateful!</h3>
                        <h3 className='testimonial-name'>Emily Thompson</h3>
                        <p className='testimonial-school'>High school student</p>
                        <img className='list-of-testimonials__single-testimonial-image' src={student1} alt="Student 1" />
                    </div>
                    <div className='list-of-testimonials__testimonial'>
                        <img className='Icon-quote' src={IconQuote} alt="Quote" />
                        <h3 className='testimonial-text'>Mastering Science with Ease! Being a science enthusiast, I wanted to delve deeper into complex topics. Under the guidance of my knowledgeable teacher, Jessica, I not only expanded my understanding but also developed a passion for scientific exploration. Her expertise and interactive teaching methods were truly inspiring!</h3>
                        <h3 className='testimonial-name'>Liam Patel</h3>
                        <p className='testimonial-school'>High School Student</p>
                        <img className='list-of-testimonials__single-testimonial-image' src={student2} alt="Student 2" />
                    </div>
                    <div className='list-of-testimonials__testimonial'>
                        <img className='Icon-quote' src={IconQuote} alt="Quote" />
                        <h3 className='testimonial-text'>English Excellence! As an international student, I had difficulty with language skills. With the support of my dedicated teacher, Miguel, I improved my English fluency and writing abilities. His engaging lessons and personalized approach made all the difference. Thank you for helping me excel</h3>
                        <h3 className='testimonial-name'>Aia Makhruka</h3>
                        <p className='testimonial-school'>University Student</p>
                        <img className='list-of-testimonials__single-testimonial-image' src={student3} alt="Student 3" />
                    </div>
                </div>
            </section>
            <section className='join'>
                <div className='join__left'>
                    <img className='join__lamp' src={lamp} alt="Lamp" />
                </div>
                <div className='join__right'>
                    <h2 className='header-join'>Want to join as a educator</h2>
                    <p className='paragraph-join'>Nurturing potential, shaping futures. Our dedicated teachers inspire a love for learning, empowering students to thrive and succeed on their educational journey.</p>
                    <Link to={"/login"}><button className='join__button button-gradient'>Get Started</button></Link>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default HomePage;