import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-tagline">
                            <h2>Where heritage meets <br/> <em>timeless elegance.</em></h2>
                        </div>

                        <div className="footer-newsletter">
                            <h3>Join the ZARVYA Family</h3>
                            <p>Subscribe to discover handcrafted treasures and exclusive collections.</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Enter your email address..." />
                                <button type="submit">Subscribe <span>→</span></button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-divider"></div>
                    <div className="footer-main">
                        <div className="footer-about">
                            <Link href="/">
                                <Image src="/images/zarvya-logo-light.webp" alt="logo" className="img-fluid" width={120} height={68} />
                            </Link>
                            <p>
                                Celebrating India's rich heritage through thoughtfully
                                handcrafted creations. Bringing traditional artistry
                                and contemporary elegance together.
                            </p>
                        </div>
                        <div className="footer-column">
                            <h4>GET IN TOUCH</h4>
                            <ul>
                                <li><Link href="mailto:info@zarvya.com">Email Us</Link></li>
                                <li><Link href="#">Contact Us</Link></li>
                                <li><Link href="#">Our Location</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>ABOUT ZARVYA</h4>
                            <ul>
                                <li><Link href="#">Our Story</Link></li>
                                <li><Link href="#">Our Artisans</Link></li>
                                <li><Link href="#">Our Mission</Link></li>
                                <li><Link href="#">FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>COLLECTIONS</h4>
                            <ul>
                                <li><Link href="#">Juttis & Mojris</Link></li>
                                <li><Link href="#">Potli Bags</Link></li>
                                <li><Link href="#">Bangles</Link></li>
                                <li><Link href="#">Home Décor</Link></li>
                                <li><Link href="#">Tableware</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>QUICK LINKS</h4>
                            <ul>
                                <li><Link href="#">Shipping Policy</Link></li>
                                <li><Link href="#">Returns & Refunds</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-divider bottom-divider"></div>
                    <div className="footer-bottom">
                        <p>© 2026 <span>ZARVYA</span>. All Rights Reserved.</p>
                        <div className="footer-social">
                            <Link href='/'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link href='/'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link href='/'>
                                <FontAwesomeIcon icon={faPinterest} />
                            </Link>
                        </div>
                        <p>Crafted with heritage & heart.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}