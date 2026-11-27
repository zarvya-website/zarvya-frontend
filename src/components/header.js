import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";   

export default function Header() {
    return (
        <>
            <div className="top-header">
                <div className="container-fluid">
                    <div className="content-area">
                        <ul>
                            <li>Indian Handicrafts</li>
                            <li>Wholesale</li>
                            <li>Export</li>
                            <li>Custom Manufacturing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <header className="desktop-header">
                <div className="container-fluid">
                    <nav className="navbar p-0">
                        <div className="logo-box">
                            <Link href="/">
                                <Image src="/images/zarvya-logo.webp" alt="logo" className="img-fluid" width={165} height={83} />
                            </Link>
                        </div>
                        <div className="navigation">
                            <ul className="menu-inner">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/">Products <FontAwesomeIcon icon={faChevronDown} /></Link>
                                </li>
                                <li>
                                    <Link href="/">Export</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="/" className="header-button">Enquire Now</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}