import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <section className="zarvya-about-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-content">
                                <span className="banner-subtitle">Get in Touch</span>
                                <h1>We'd Love to Hear From You</h1>
                                <div className="zarvya-divider">
                                    <span></span>
                                    <Image src="/images/handcraft.webp" alt="handcraft" className="img-fluid" width={55} height={48} />
                                    <span></span>
                                </div>
                                <p>Share your thoughts or queries with us, <br/> and our team will get back to you shortly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content-area">
                                <p className="kicker">Custom & Bulk Solutions</p>
                                <h1>Handicraft Export Solutions for Your Business</h1>
                                <p>We believe every traditional art form has a story worth sharing with the world. India is a land of extraordinary history, culture and traditions. As Indian women, we feel deeply connected to our heritage and take immense pride in it's vibrant colors, artistic traditions and timeless craftsmanship.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-area">
                                <h2>Contact Our Design Team</h2>
                                <form>
                                    <h3 className="group-title">Business Details</h3>
                                    <div className="form-grid">
                                        <div className="field">
                                            <label>Company Name *</label>
                                            <input name="company" type="text" placeholder="Enter your registered business name" />
                                        </div>
                                        <div className="field">
                                            <label>Contact Person Name *</label>
                                            <input name="contact" type="text" placeholder="Enter your full name" />
                                        </div>
                                        <div className="field">
                                            <label>Business Email *</label>
                                            <input name="email" type="email" placeholder="Enter your business email" />
                                        </div>
                                        <div className="field">
                                            <label>Country *</label>
                                            <select name="country">
                                                <option>Select your country</option>
                                                <option>United States</option>
                                                <option>United Kingdom</option>
                                                <option>Canada</option>
                                                <option>Australia</option>
                                                <option>Germany</option>
                                                <option>France</option>
                                                <option>Italy</option>
                                                <option>Netherlands</option>
                                                <option>Spain</option>
                                                <option>United Arab Emirates</option>
                                                <option>Singapore</option>
                                                <option>Japan</option>
                                                <option>India</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>Phone / WhatsApp *</label>
                                            <div className="phone">
                                                <select name="dial">
                                                    <option value="+91">IN +91</option>
                                                    <option value="+1">US +1</option>
                                                    <option value="+44">UK +44</option>
                                                    <option value="+61">AU +61</option>
                                                    <option value="+49">DE +49</option>
                                                    <option value="+971">AE +971</option>
                                                </select>
                                                <input name="phone" type="tel" placeholder="Enter your phone number" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="group-title spaced">Order & Requirement Details</h3>
                                    <div className="form-grid">
                                        <div className="field">
                                            <label>Type of Inquiry *</label>
                                            <select name="type">
                                                <option>Bulk Order (50+ pieces)</option>
                                                <option>Sample Request</option>
                                                <option>Custom Design</option>
                                                <option>Catalog Request</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>Product Category Interested In *</label>
                                            <select name="category">
                                                <option>Select Product Category</option>
                                                <option>Wooden Elephant Showpieces</option>
                                                <option>Home Decor</option>
                                                <option>Table &; Desk Accents</option>
                                                <option>Gift & Corporate Items</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>Estimated Order Quantity *</label>
                                            <select name="qty">
                                                <option>Select Estimated Quantity</option>
                                                <option>50 - 100 pieces</option>
                                                <option>100 - 500 pieces</option>
                                                <option>500 - 1,000 pieces</option>
                                                <option>1,000+ pieces</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>Customization Required *</label>
                                            <select name="custom">
                                                <option>Select Customization Required</option>
                                                <option>No customization</option>
                                                <option>Size / color changes</option>
                                                <option>Custom design</option>
                                                <option>Private label / branding</option>
                                            </select>
                                        </div>
                                        <div className="field full">
                                            <label>Message *</label>
                                            <textarea name="message" placeholder="Share design references, market preferences, timelines, or any special requirements"></textarea>
                                        </div>
                                    </div>
                                    <div className="upload-row">
                                        <div className="field">
                                            <label>Upload Reference Files</label>
                                            <div className="file">
                                                <input type="file" name="files" multiple />
                                                <div className="box">
                                                    <span>Choose files (JPG, PNG, PDF, DOC, XLS)</span>
                                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#39352e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit">Submit Inquiry <FontAwesomeIcon icon={faArrowRight} /></button>
                                    </div>
                                    <p className="note">Our team typically responds within 24-48 business hours with next steps, catalogs, or quotations.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}