import Image from "next/image";

export default function Page() {
    return (
        <>
            <section className="zarvya-about-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-content">
                                <span className="banner-subtitle">About us</span>
                                <h1>Tradition with a <br/><em>Modern Soul</em></h1>
                                <div className="zarvya-divider">
                                    <span></span>
                                    <Image src="/images/handcraft.webp" alt="handcraft" className="img-fluid" width={55} height={48} />
                                    <span></span>
                                </div>
                                <p>Celebrating India's timeless artistry<br/>through contemporary design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding our-story">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-11 mb-5">
                            <Image src="/images/flower.webp" alt="flower" className="img-fluid top-img" width={70} height={66} />
                            <span className="top">Inspired by this rich legacy we bring together the beauty of traditional Indian art with the elegance of modern design to create products that complement contemporary global lifestyles.</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <Image src="/images/about-img.webp" alt="flower" className="img-fluid" width={526} height={680} style={{
                                height: '680px'
                            }} />
                        </div>
                        <div className="col-md-7">
                            <div className="content">
                                <h2>Our Story</h2>
                                <p>We believe every traditional art form has a story worth sharing with the world. India is a land of extraordinary history, culture and traditions. As Indian women, we feel deeply connected to our heritage and take immense pride in it’s vibrant colors, artistic traditions and timeless craftsmanship.</p>
                                <p>Inspired by this rich legacy we bring together the beauty of traditional Indian art with the elegance of modern design to create products that complement contemporary global lifestyles.</p>
                                <p>Our evolving range includes Punjabi Juttis, Mojaris, Contemporary Footwear , Potlis, Clutches, Bags, Accessories and other Lifestyle Products. Every collection reflects a blend of heritage, creativity and individuality, with an emphasis on quality, design and value. Making them versatile, fashionable and appealing to people of all ages and generations, so that they can enjoy using our creations for a longtime.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row last-row">
                        <div className="col-md-6">
                            <div className="content">
                                <p>We are deeply passionate about supporting and providing a platform to skilled artisans, particularly women. Creating meaningful opportunities for showcasing their craft and artistry to a larger worldwide audience.</p>
                                <p>We also collaborate with international retailers, boutiques, wholesalers and businesses to develop customised collections suited to their unique brand identities and markets. </p>
                                <q>Every traditional art form has a story worth sharing with the world.</q>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-div">
                                <Image src="/images/women-jutties.webp" alt="flower" className="img-fluid" width={303} height={542} />
                                <div>
                                    <Image src="/images/artisan-03.webp" alt="flower" className="img-fluid" width={303} height={454} />
                                    <span>Zarvya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="heritage-sec">
                <div className="container-fluid p-0 m-0">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="content-div text-center">
                                <Image src="/images/rose-flower.webp" alt="rose-flower" className="img-fluid top-img" width={120} height={80} />
                                <h2>Beyond Products, Into Stories</h2>
                                <p>Through Zarvya, we want the world to experience India not only through our products- but also through the stories behind the rich cultural legacy, that have transcended and evolved through time and travelled through generations, reflecting and touching each of our creations. We want the world to explore the endless possibilities such an amalgamation can create. </p>
                            </div>
                        </div>
                        <div className="col-md-7 p-0">
                            <div className="video-box">
                                <video autoPlay muted loop playsInline>
                                    <source src="/videos/video.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-architect">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="about-image">
                                <Image src="/images/artisan-02.webp" alt="about-architect" className="img-fluid w-100 mb-5" width={746} height={419} />
                            </div>
                            <p>Our vision is to make Indian artistry relevant to today's world, while preserving its originality and cultural footprint. To carry India's timeless craftsmanship beyond borders, weaving the soul of Indian tradition and the aspirations of the craftsmen with the spirit of modern design and giving Indian artistry a home in contemporary lifestyles across the world. </p>
                            <q>Carrying India's timeless craftsmanship beyond borders, giving Indian artistry a home in contemporary lifestyles across the world.</q>
                        </div>
                        <div className="col-md-5">
                            <div className="content">
                                <div className="vision-heading">
                                    <h2>Our Inspiration, Our Vision.</h2>
                                    <span>Rooted in heritage, inspired by creativity, designed for the world.</span>
                                </div>
                                <div className="about-video">
                                        <video autoplay muted loop playsInline controls preload="auto" className="about-video__media">
                                        <source src="/videos/about-video.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mision-sec">
                <Image src="/images/leaf.webp" alt="leaf" className="top-leaf" width={350} height={233} />
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-5 p-0">
                            <div className="img-side">
                                <Image src="/images/mission-img.webp" alt="mission-img" class="img-fluid" width={514} height={587} />
                            </div>
                        </div>
                        <div className="col-md-7 p-0">
                            <div className="content">
                                <h2>Our Mission</h2>
                                <span className="sub">Bridging Heritage & Modern Living</span>
                                <ul>
                                    <li><span><Image src="/images/contemporary.webp" alt="contemporary" className="img-fluid" width={30} height={22} /></span> Promote Indian handicrafts worldwide.</li>
                                    <li><span><Image src="/images/contemporary.webp" alt="contemporary" className="img-fluid" width={30} height={22} /></span> Create India inspired goods that are relevant to modern global lifestyles.</li>
                                    <li><span><Image src="/images/contemporary.webp" alt="contemporary" className="img-fluid" width={30} height={22} /></span> Support and empower women artisans through employment opportunities.</li>
                                    <li><span><Image src="/images/contemporary.webp" alt="contemporary" className="img-fluid" width={30} height={22} /></span> Export high-quality handmade products to international markets.</li>
                                    <li><span><Image src="/images/contemporary.webp" alt="contemporary" className="img-fluid" width={30} height={22} /></span> Preserve India's traditional art and craftsmanship.</li>
                                    <li><span><Image src="/images/contemporary.webp" alt="contemporary" className="img-fluid" width={30} height={22} /></span>Environmentally sustainable products and ethical practices.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding founder-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <Image src="/images/leaf-top-img.webp" alt="flower" className="img-fluid top-img" width={100} height={53} />
                            <span>About the Founder</span>
                            <h2> The Women <em>Behind Zarvya</em></h2>
                            <div className="founder-line"></div>
                            <p> Zarvya is a women-led handicrafts and lifestyle brand founded by Ms Barkha Garg and Ms Aarti Gomes Vaid. Dedicated to promoting and bringing India's rich heritage to the world through a vast array of premium handcrafted products. </p>
                        </div>
                        <div className="col-md-7">
                            <div className="founder-grid">
                                <div className="founder-card">
                                    <div className="founder-div">
                                        <div className="founder-image">
                                            <Image src="/images/bangles.webp" alt="Ms Barkha Garg" width={321} height={387} />
                                        </div>
                                    </div>
                                    <div className="founder-name">
                                        <h3>Ms Barkha Garg</h3>
                                    </div>
                                </div>
                                <div className="founder-card">
                                    <div className="founder-div">
                                        <div className="founder-image">
                                            <Image src="/images/bangles.webp" alt="Ms Barkha Garg" width={321} height={387} />
                                        </div>
                                    </div>
                                    <div className="founder-name">
                                        <h3>Ms Aarti Gomes Vaid</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding promise-sec">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-8 text-center">
                            <Image src="/images/leaf-top-img.webp" alt="flower" className="img-fluid top-img" width={100} height={53} />
                            <h2>The Zarvya Promise</h2>
                            <p>We bring India's timeless artistry into contemporary living through thoughtfully curated handcrafted products that celebrate heritage, creativity and individuality.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className="icon-box">
                                <Image src="/images/exclusive.webp" alt="flower" className="img-fluid" width={42} height={37} />
                            </div>
                            <h3>Rooted in Heritage</h3>
                            <span>Celebrating India's rich traditions and timeless craftsmanship.</span>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="icon-box">
                                <Image src="/images/contemporary.webp" alt="flower" className="img-fluid" width={42} height={37} />
                            </div>
                            <h3>Crafted with Care</h3>
                            <span>Thoughtfully designed and made by skilled artisans.</span>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="icon-box">
                                <Image src="/images/artisan.webp" alt="flower" className="img-fluid" width={42} height={37} />
                            </div>
                            <h3>Empowering Artisans</h3>
                            <span>Supporting artisans, especially women, and their artistry.</span>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="icon-box">
                                <Image src="/images/handcraft.webp" alt="flower" className="img-fluid" width={42} height={37} />
                            </div>
                            <h3>Tradition Meets Modernity</h3>
                            <span>Blending Indian heritage with contemporary design.</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}