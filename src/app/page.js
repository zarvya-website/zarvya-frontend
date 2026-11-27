'use client'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
    return (
        <>
            <section className="hero-section">
                <Swiper  slidesPerView={1} pagination={{
                    clickable: true,
                }} modules={[Pagination]} className="heroSwiper">
                    <SwiperSlide>
                        <div className="img-box">
                            <Image src="/images/slider-01.webp" alt="slider-1" className="img-fluid" width={1600} height={600} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img-box">
                            <Image src="/images/slider-02.webp" alt="slider-2" className="img-fluid" width={1600} height={600} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="section-padding intro">
                <div className="container p-0">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center p-0">
                            <div className="content-area">
                                <Image src="/images/flower.webp" alt="flower" className="img-fluid" width={58} height={65} />
                                <p>Discover a world of handcrafted juttis, exquisite mojris, elegant potli bags and timeless ethnic accessories. Each creation brings together intricate craftsmanship, beautiful detailing and the richness of Indian artistry, thoughtfully designed to complement every occasion.</p>
                                <span>Explore the ZARVYA collection, where heritage, creativity and contemporary style come together in every detail.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 p-0">
                            <div className="content-area">
                                <Image src="/images/leaf.webp" alt="leaf" className="img-fluid" width={200} height={133} />
                                <h2>About Zarvya</h2>
                                <p>Zarvya is a women-led handicrafts and lifestyle brand founded by <b>Ms Barkha Garg</b> and <b>Ms Aarti Gomes Vaid.</b> Dedicated to promoting and to bring forth to the world, India's rich heritage, through a vast array of premium handcrafted products. Our collection includes traditional <b>juttis, mojris, potli bags, clutches, Banjara bags,</b> other <b>handcrafted fashion accessories</b> and a lot more.</p>
                                <Link href="/">Know more</Link>
                            </div>
                        </div>
                        <div className="col-md-5 img-box">
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding product-sec">
                <div className="container-fluid">
                    <div className="section-heading">
                        <h2>Trending & New</h2>
                    </div>
                    <div className="product-grid">
                        <Link href="/" className="product-box">
                            <div className="img-box">
                                <Image src="/images/product-01.webp" alt="product-image" className="img-main" width={333} height={444} />
                                <Image src="/images/women-jutties.webp" alt="product-image" className="img-hover" width={333} height={444} />
                            </div>
                            <div className="content-area">
                                <h3>Product Name</h3>
                            </div>
                        </Link>
                        <Link href="/" className="product-box">
                            <div className="img-box">
                                <Image src="/images/product-02.webp" alt="product-image" className="img-main" width={333} height={444} />
                                <Image src="/images/product-03.webp" alt="product-image" className="img-hover" width={333} height={444} />
                            </div>
                            <div className="content-area">
                                <h3>Product Name</h3>
                            </div>
                        </Link>
                        <Link href="/" className="product-box">
                            <div className="img-box">
                                <Image src="/images/product-03.webp" alt="product-image" className="img-main" width={333} height={444} />
                                <Image src="/images/men-juttis.webp" alt="product-image" className="img-hover" width={333} height={444} />
                            </div>
                            <div className="content-area">
                                <h3>Product Name</h3>
                            </div>
                        </Link>
                        <Link href="/" className="product-box">
                            <div className="img-box">
                                <Image src="/images/product-04.webp" alt="product-image" className="img-main" width={333} height={444} />
                                <Image src="/images/bangles.webp" alt="product-image" className="img-hover" width={333} height={444} />
                            </div>
                            <div className="content-area">
                                <h3>Product Name</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="usp-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="usp-box">
                                <Image src="/images/exclusive.webp" alt="exclusive" className="img-fluid" width={55} height={48} />
                                <span>Curated <br/> Exclusivity</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="usp-box">
                                <Image src="/images/handcraft.webp" alt="handcraft" className="img-fluid" width={55} height={48} />
                                <span>Age-old <br/> Crafts</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="usp-box">
                                <Image src="/images/contemporary.webp" alt="contemporary" className="img-fluid" width={45} height={34} />
                                <span>Heritage Meets <br/> Modernity</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="usp-box">
                                <img src="/images/artisan.webp" alt="artisan" className="img-fluid" width={45} height={28} />
                                <span>Empowering Artisan <br/> Communities</span>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>

            <section className="vision-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-11 text-center">
                            <div className="content-area">
                                <Image src="/images/top-line.webp" alt="top-line" className="img-fluid mb-4" width={500} height={103} />
                                <h2>Our Vision</h2>
                                <p>To become a globally recognized Indian handicrafts and contemporary lifestyle brand that <br/> celebrates traditional craftsmanship and empowers women artisans from all corners of India. </p>
                            </div>
                            <div className="img-grid">
                                <div className="vision-box">
                                    <div className="img-box">
                                        <Image src="/images/global.webp" alt="global" className="img-fluid" width={278} height={200} />
                                    </div>
                                    <span className="d-block">A Global Indian Brand</span>
                                    <Image src="/images/bottom-line.webp" alt="top-line" className="img-fluid design-img" width={100} height={10} />
                                </div>
                                <div className="vision-box">
                                    <div className="img-box">
                                        <Image src="/images/traditional.webp" alt="traditional" className="img-fluid" width={278} height={200} />
                                    </div>
                                    <span className="d-block">Preserving Traditional Craft</span>
                                    <Image src="/images/bottom-line.webp" alt="top-line" className="img-fluid design-img" width={100} height={10} />
                                </div>
                                <div className="vision-box">
                                    <div className="img-box">
                                        <Image src="/images/empowering.webp" alt="empowering" className="img-fluid" width={278} height={200} />
                                    </div>
                                    <span className="d-block">Empowering Women Artisans</span>
                                    <Image src="/images/bottom-line.webp" alt="top-line" className="img-fluid design-img" width={100} height={10} />
                                </div>
                                <div className="vision-box">
                                    <div className="img-box">
                                        <Image src="/images/heritage.webp" alt="heritage" className="img-fluid" width={278} height={200} />
                                    </div>
                                    <span className="d-block">Bridging Heritage & Modern Living</span>
                                    <Image src="/images/bottom-line.webp" alt="top-line" className="img-fluid design-img" width={100} height={10} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="artisans-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 p-0">
                            <div className="content-area">
                                <h2>Celebrating the Hands That Keep Traditions Alive</h2>
                                <p>Behind every handcrafted creation is a woman whose hands carry generations of artistry, patience and passion. From intricate embroidery to traditional decorative crafts, our women artisans transform cultural heritage into timeless expressions of beauty.</p>
                                <p>We believe in creating meaningful opportunities for women, celebrating their skills, supporting their livelihoods and helping their craftsmanship reach homes across the world.</p>
                                <span>Every creation tells a story. Every woman artisan makes it extraordinary.</span>
                            </div>
                        </div>
                        <div className="col-md-5 p-0">
                            <Swiper slidesPerView={1} modules={[Autoplay]} autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }} speed={1000} className="imageSwiper">
                                <SwiperSlide>
                                    <div className="img-box">
                                        <Image src="/images/artisan-01.webp" alt="artisan-01" className="img-fluid" width={550} height={540} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img-box">
                                        <Image src="/images/artisan-02.webp" alt="artisan-01" className="img-fluid" width={550} height={540} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img-box">
                                        <Image src="/images/artisan-03.webp" alt="artisan-03" className="img-fluid" width={550} height={540} />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section className="zarvya-trends section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <Link href="/" className="trend-card">
                                <Image src="/images/side-img.webp" alt="Zarvya New Trends Collection" width={923} height={450} />
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <div className="trend-categories">
                                <Link href="/" className="category-card">
                                    <Image src="/images/side-img-02.webp" alt="Tableware Collection" width={215} height={215} />
                                </Link>
                                <Link href="/" className="category-card">
                                    <Image src="/images/juttis-mojiris.webp" alt="Home Decor Collection" width={215} height={215} />
                                </Link>
                                <Link href="/" className="category-card">
                                    <Image src="/images/bangles-img.webp" alt="Juttis and Mojris" width={215} height={215} />
                                </Link>
                                <Link href="/" className="category-card">
                                    <Image src="/images/side-03.webp" alt="Potli Bags Collection" width={215} height={215} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="view-product">
                <div className="container-fluid p-0">
                    <div className="view-grid">
                        <div className="left-side product-scene">
                            <Image src="/images/product-scene-1.webp" alt="Handcrafted home decor" className="img-fluid" width={506} height={560} />
                            <div className="product-hotspot" style={{
                                top: '35%',
                                left: '55%'
                            }}>
                                <button className="hotspot-btn">+</button>
                                <Link href="#" className="product-card">
                                    <Image src="/images/product-scene-1.webp" alt="Brass Decor" width={70} height={70} />
                                    <div className="product-info">
                                        <h4>Handcrafted Brass Decor</h4>
                                        <span>VIEW PRODUCT ↗</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="product-hotspot" style={{
                                top: '70%',
                                left: '28%'
                            }}>
                                <button className="hotspot-btn">+</button>
                                <Link href="#" className="product-card">
                                    <Image src="/images/product-scene-1.webp" alt="Brass Decor" width={70} height={70} />
                                    <div className="product-info">
                                        <h4>Handcrafted Brass Decor</h4>
                                        <span>VIEW PRODUCT ↗</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="content-area text-center">
                            <Image src="/images/top-line.webp" alt="top-line" className="img-fluid mb-4" width={500} height={103} />
                            <h2>Where tradition finds a home.</h2>
                            <p> From timeless handcrafted treasures to thoughtfully designed lifestyle accents, every creation carries a story of artistry, culture and care.</p>
                            <p> Discover the beauty of handmade, where heritage meets contemporary living and every detail is made to be cherished.</p>
                        </div>
                        <div className="right-side product-scene">
                            <Image src="/images/product-scene-2.webp" alt="Indian handcrafted fashion" className="img-fluid" width={506} height={560} />
                            <div className="product-hotspot" style={{
                                bottom: '10%',
                                left: '65%'
                            }}>
                                <button className="hotspot-btn">+</button>
                            </div>
                            <div className="product-hotspot" style={{
                                top: '51%',
                                left: '47%'
                            }}>
                                <button className="hotspot-btn">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 pe-5">
                            <h2 className="mb-4 head">Frequently Asked Questions</h2>
                            <Image src="/images/heritage.webp" alt="heritage" className="img-fluid" width={490} height={276} />
                        </div>
                        <div className="col-md-7">
                            <div className="accordion accordion-flush" id="accordionFaq">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" >Q1. What makes your products special?</button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec lorem tincidunt feugiat. Curabitur sed magna at erat consequat tincidunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" >Q2. What makes your products special?</button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec lorem tincidunt feugiat. Curabitur sed magna at erat consequat tincidunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" >Q3. What makes your products special?</button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec lorem tincidunt feugiat. Curabitur sed magna at erat consequat tincidunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" >Q4. What makes your products special?</button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec lorem tincidunt feugiat. Curabitur sed magna at erat consequat tincidunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" >Q5. What makes your products special?</button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec lorem tincidunt feugiat. Curabitur sed magna at erat consequat tincidunt.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="guarantees-sec section-padding">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Our <em>Promise</em></h2>
                        <p>Thoughtfully crafted. Beautifully delivered.</p>
                    </div>
                    <div className="guarantees-grid">
                        <div className="guarantee-card">
                            <div className="guarantee-icon">
                                <Image src="/images/exclusive.webp" alt="Craftsmanship" className="img-fluid" width={30} height={30} />
                            </div>
                            <h3>Made with Care</h3>
                            <p>Every creation reflects thoughtful detailing and skilled craftsmanship.</p>
                        </div>
                        <div className="guarantee-card">
                            <div className="guarantee-icon">
                                <Image src="/images/contemporary.webp" alt="Indian Heritage" className="img-fluid" width={30} height={30} />
                            </div>
                            <h3>Rooted in Heritage</h3>
                            <p>Celebrating India's rich traditions through timeless handcrafted artistry.</p>
                        </div>
                        <div className="guarantee-card">
                            <div className="guarantee-icon">
                                <Image src="/images/artisan.webp" alt="Customer Experience" className="img-fluid" width={30} height={30} />
                            </div>
                            <h3>Thoughtfully Yours</h3>
                            <p>Bringing you a seamless and memorable experience, every step of the way.</p>
                        </div>
                    </div>
                    <div className="guarantees-bottom">
                        <span className="bottom-line"></span>
                        <p>Every creation carries a story — <strong>made with heritage, crafted with heart.</strong></p>
                        <span className="bottom-line"></span>
                    </div>
                </div>
            </section>
        </>
    )
}