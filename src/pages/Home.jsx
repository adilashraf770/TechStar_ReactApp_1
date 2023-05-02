import React from 'react'
import vg from '../assets/logo.webp'
import { AiFillFacebook, AiFillAmazonCircle, AiFillYoutube, AiFillGoogleCircle } from 'react-icons/ai'
const Home = () => {
    return (
        <>
            {/* Home 1 */}
            <section className="home1" id="home">
                <div className="home1-content">
                    <div className="heading">
                        <h1>TechStar</h1>
                    </div>
                    <div className="sub-heading">
                        <p className="mb-0">Solution of all your problems</p>
                    </div>
                </div>
            </section>

            {/* Home 2 */}
            <section className="home2" id="home2">
                <div className="home2-content">
                    <div className="image">
                        <img src={vg} alt="vecter" />
                    </div>
                    <p className="mb-0">We are one and only solution to all of you problems everyday you face. we are leading tech companies who aims to increase the problems solving anilities in childrens.  </p>
                </div>
            </section>

            {/* Home 3 */}
            <section className="home3" id="about">
                <div className="home3-content">
                    <div className="heading">
                        <h1>Who we are?</h1>
                    </div>
                    <div className="sub-heading">
                        <p className="mb-0">Techstars is a global startup accelerator that was founded in 2006 by David Cohen, Brad Feld, Jared Polis, and David Brown in Boulder, Colorado. The company offers mentorship-driven accelerator programs, startup events, and funding opportunities to entrepreneurs worldwide. Since its inception, Techstars has helped launch over 2,200 companies in various industries, including technology, healthcare, energy, and retail. It has also expanded its operations to more than 30 countries and partnered with several global corporations to support startup innovation.Techstars' accelerator program provides early-stage startups with mentorship, funding, and resources to help them grow their businesses. The program lasts for three months and includes a demo day where startups can showcase their products to potential investors.</p>
                    </div>
                </div>
            </section>

            {/* Home 4 */}
            <section className="home4" id="brands">
                <div className="home4-content">
                    <h1>Brands</h1>
                    <article >
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazone</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillFacebook />
                            <p>Facebook</p>
                        </div>
                        <div style={{
                            animationDelay: "1s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </section >
        </>
    )
}

export default Home