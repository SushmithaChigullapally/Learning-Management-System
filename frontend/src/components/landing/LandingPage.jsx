import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
import img1 from '../../assets/landing/logo.png';
import content_img from '../../assets/landing/content-img.png';
import content_img1 from '../../assets/landing/content-img-1.png';
import content_img2 from '../../assets/landing/content-img-2.png';
import hero_1 from '../../assets/landing/hero-1.png';
import hero_2 from '../../assets/landing/hero-2.png';
import hero_3 from '../../assets/landing/hero-3.png';
import serv_1 from '../../assets/landing/serv-1.png';
import serv_2 from '../../assets/landing/serv-2.png';
import serv_3 from '../../assets/landing/serv-3.png';
import cor_1 from '../../assets/landing/cor-1.png';
import cor_2 from '../../assets/landing/cor-2.png';
import cor_3 from '../../assets/landing/cor-3.png';
import cor_4 from '../../assets/landing/cor-4.png';
import vec from '../../assets/landing/vec.png';
import vec_2 from '../../assets/landing/vec-2.png';
import time from '../../assets/landing/Time.png';
import test from '../../assets/landing/test.png';
import rating from '../../assets/landing/rating.png';




function LandingPage() {
    return (
        <div className='landing-body'>
            {/* <!-- header and navbar hero-1-section start  --> */}
            <section class="landing-page">
                <header>
                    <nav class="navbar1">
                        <div class="logo1">
                            <img src={img1} />
                        </div>
                        <div class="menu1">
                            <ul>
                                <p href="#"><li>Home</li></p>
                                <a href="#aboutus"><li>About</li></a>
                                <a href="#service"><li>Services</li></a>
                                <a href="#course"><li>Courses</li></a>
                                <a href="#testi"><li>Testimonial</li></a>
                            </ul>
                        </div>
                        <div class="navBtn">
                            <Link to='/login'><button class="btn-sign">Login Now</button></Link>
                        </div>
                    </nav>
                    <section class="hero-1">
                        <div class="hero-1-container">
                            <div class="hero-1-content">
                                <h1>All -in-one Study courses to easy learn and get certified</h1>
                                <div class="hero-1-btn">
                                    <Link to='/login'><button class="btn-1">Login Now</button></Link>
                                </div>
                                <div class="conten-img">
                                    <img src={content_img} class="img-1" />
                                    <img src={content_img1} class="content-img-2" />
                                </div>
                            </div>
                            <div class="hero-1-img">
                                <img src={hero_1} />
                            </div>
                        </div>
                    </section>
                </header>
            </section>
            {/* <!-- header and navbar hero-1-section end-->
            <!-- hero-2-section start --> */}
            <section class="hero-2">
                <div class="hero-2-container">
                    <div class="hero-2-img">
                        <img src={hero_2} />
                    </div>
                    <div class="hero-2-content">
                        <h1>Build The SkillsTo Drive Your Career.</h1>
                        <p>
                        Learn from the best. Our instructors are industry leaders, experts, and educators dedicated to your success.
                        </p>
                        <div class="hero-2-btn">
                            <Link to='/login'><button class="btn-2">Login Now</button></Link>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <!-- hero-2-section end -->

            <!-- hero-3-section start --> */}
            <section class="hero-3" id="aboutus">
                <div class="hero-3-container">
                    <div class="hero-3-content">
                        <h1>Find more E - Learning Experiance</h1>
                        <p>
                        Tailor your learning experience to your pace and preferences. Mix and match courses, and track your progress with ease.
                        </p>
                        <div class="hero-3-btn">
                            <button class="btn-3">Login Now</button>
                        </div>
                    </div>
                    <div class="hero-3-img">
                        <img src={hero_3} />
                    </div>
                </div>
            </section>
            {/* <!-- hero-3-section end -->

            <!-- hero-section-4 start --> */}
            <section class="hero-4" id="service">
                <div class="hero-4-container">
                    <div class="hero-cont-hed">
                    <br/><br/>
                        <h1>OUR SERVICES</h1>
                        <p>
                        Connect with peers, join study groups, and collaborate on projects.<br/> Learning is better when you do it together.
                        </p>
                    </div>
                    <div class="cards-box">
                        <div class="card1">
                            <div class="card-img-1">
                                <img src={serv_2} />
                            </div>
                            <div class="card-contnt">
                                <h3>Notification & Email</h3>
                                <p>24/7 Notification and remainder you</p>
                            </div>
                        </div>
                        <div class="card1">
                            <div class="card-img-2">
                                <img src={serv_3} />
                            </div>
                            <div class="card-contnt">
                                <h3>Certification</h3>
                                <p>learn and get certificate and or benifits</p>
                            </div>
                        </div>
                        <div class="card1">
                            <div class="card-img-3">
                                <img src={serv_1} />
                            </div>
                            <div class="card-contnt">
                                <h3>Azam Campus</h3>
                                <p>Learn from our pune's best campus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- hero-4-section end -->

            <!-- hero-5-section start --> */}
            <section class="hero-5" id="course">
                <div class="hero-5-container">
                    <div class="hero-5-cont-hed">
                        <h1>OUR COURSES</h1>
                        <p>
                        Access your courses on-the-go. Learn whenever, wherever, and however you want.
                        </p>
                    </div>
                    <div class="boxes">
                        <div class="box">
                            <div class="box-img">
                                <img src={cor_1} />
                            </div>
                            <div class="box-cont">
                                <p><i class="fa-solid fa-clock"></i> 1hr 30 min</p>
                                <h3>Data Science</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-img">
                                <img src={cor_2} />
                            </div>
                            <div class="box-cont">
                                <p><i class="fa-solid fa-clock"></i>  1hr 30 min</p>
                                <h3>UI Automation</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-img">
                                <img src={cor_3} />
                            </div>
                            <div class="box-cont">
                                <p><i class="fa-solid fa-clock"></i>  1hr 30 min</p>
                                <h3>Data Analytics</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-img">
                                <img src={cor_4} />
                            </div>
                            <div class="box-cont">
                                <p><i class="fa-solid fa-clock"></i> 1hr 30 min</p>
                                <h3>Cyber Security</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- hero-5-section end -->

           
            {/* <!-- hero-6-section end --> */}
        </div>
    );
}

export default LandingPage;