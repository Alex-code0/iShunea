import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div className="AboutBackground">
            <div className="NavigationBar">
                <div className="AboutNavigationContainer">
                    <img src="./Images/Logo.png" alt="" />

                    <div className="AboutMenu">
                        <div className="FirstDropdownContainer">
                            <span className="AboutDropdownTrigger">company</span>
                            <span></span>
                            <div className="AboutDropdownContent">
                                <ul>
                                    <li><NavLink to="/about">about</NavLink></li>
                                    <li><NavLink to="/career">career</NavLink></li>
                                    <li><NavLink to="/blog">blog</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <a href="/services">services</a>
                        <a href="/works">works</a>
                        <a href="/contacts">contacts</a>

                        <div className="SecondDropdownContainer">
                            <span className="AboutCurrentLanguage">english</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Page">
                <div className="Gallery">
                    <div className="LeftGalleryContainer">
                        <span>What is iShunea</span>
                        <span>We are moving your ideas to digital by building the ultimate solutions for ERP systems, CRMs, mobile apps and web platforms</span>
                        <div className="GalleryImageContainer">
                            <div className="GalleryColumn1">
                                <img src="./Images/GalleryCard1.png" alt="" />
                                <img src="./Images/GalleryCard2.png" alt="" />
                            </div>

                            <div className="GalleryColumn1">
                                <img src="./Images/GalleryCard3.png" alt="" />
                                <img src="./Images/GalleryCard4.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="RightGalleryContainer">
                        <img src="./Images/GalleryCard5.png" alt="" />
                        <img src="./Images/GalleryCard6.png" alt="" />
                    </div>
                </div>

                <div className="AboutClients">
                    <div className="Clients">

                        <div className="ClientHeading">
                            <span>20+</span>
                            <span>companies already onboard</span>
                        </div>

                        <div className="ClientsList">

                            <div className="Row1">
                                <img src="./Images/Logo1.png" alt="" />
                                <img src="./Images/Logo2.png" alt="" />
                                <img src="./Images/Logo3.png" alt="" />
                                <img src="./Images/Logo4.png" alt="" />
                                <img src="./Images/Logo5.png" alt="" />
                                <img src="./Images/Logo6.png" alt="" />
                                <img src="./Images/Logo7.png" alt="" />
                            </div>

                            <div className="Row2">
                                <img src="./Images/Logo8.png" alt="" />
                                <img src="./Images/Logo9.png" alt="" />
                                <img src="./Images/Logo10.png" alt="" />
                                <img src="./Images/Logo11.png" alt="" />
                                <img src="./Images/Logo12.png" alt="" />
                                <img src="./Images/Logo13.png" alt="" />
                                <img src="./Images/Logo14.png" alt="" />
                                <img src="./Images/Logo15.png" alt="" />
                                <img src="./Images/Logo16.png" alt="" />
                                <img src="./Images/Logo17.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="AdvantagesContainer">
                    <div className="TextContainer">

                        <span>Simple at every stage</span>

                        <div className="AdvantagesList">

                            <div className="Box">
                                <img src="./Images/Icon1.png" alt="" />
                                <span>full cycle product development</span>
                            </div>

                            <div className="Box">
                                <img src="./Images/Icon2.png" alt="" />
                                <span>team of qualified professionals</span>
                            </div>
                                
                            <div className="Box">
                                <img src="./Images/Icon3.png" alt="" />
                                <span>transparent and individual approach</span>
                            </div>

                            <div className="Box">
                                <img src="./Images/Icon4.png" alt="" />
                                <span>high-level security of developed solution</span>
                            </div>

                            <div className="Box">
                                <img src="./Images/Icon5.png" alt="" />
                                <span>up-to-date with new technologies</span>
                            </div>

                            <div className="Box">
                                <img src="./Images/Icon6.png" alt="" />
                                <span>build long-term relationships</span>
                            </div>

                        </div>
                    </div>

                    <div className="ImageContainer" id="BoxImageContainer">
                        <img src="./Images/Screen.png" alt="" />
                    </div>
                </div>

                <div className="AboutTeam">
                    <span className="TeamTitle">Meet the team</span>
                    <div className="TeamDescription">

                        <div className="TeamCard">
                            <img src="./Images/Member1.png" alt="" />
                            <div className="TeamCardOverlay">
                                <div className="TeamCardHeader">
                                    <span>Alexandru Iaroslavschi</span>
                                    <span>CEO & Founder</span>
                                </div>
                                <div className="TeamCardFooter">
                                    <img src="./Images/SocialMediaIcon1.png" alt="" />
                                    <img src="./Images/SocialMediaIcon2.png" alt="" />
                                    <img src="./Images/SocialMediaIcon3.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="TeamCard">
                            <img src="./Images/Member2.png" alt="" />
                            <div className="TeamCardOverlay">
                                <div className="TeamCardHeader">
                                    <span>Elena Roșca</span>
                                    <span>Co-Founder</span>
                                </div>
                                <div className="TeamCardFooter">
                                    <img src="./Images/SocialMediaIcon1.png" alt="" />
                                    <img src="./Images/SocialMediaIcon2.png" alt="" />
                                    <img src="./Images/SocialMediaIcon3.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="TeamCard">
                            <img src="./Images/Member3.png" alt="" />
                            <div className="TeamCardOverlay">
                                <div className="TeamCardHeader">
                                    <span>Camelia Brashovsky</span>
                                    <span>Social Media Manager</span>
                                </div>
                                <div className="TeamCardFooter">
                                    <img src="./Images/SocialMediaIcon1.png" alt="" />
                                    <img src="./Images/SocialMediaIcon2.png" alt="" />
                                    <img src="./Images/SocialMediaIcon3.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="TeamCard">
                            <img src="./Images/Member4.png" alt="" />
                            <div className="TeamCardOverlay">
                                <div className="TeamCardHeader">
                                    <span>Nicolae Erhan</span>
                                    <span>Graphic Designer</span>
                                </div>
                                <div className="TeamCardFooter">
                                    <img src="./Images/SocialMediaIcon1.png" alt="" />
                                    <img src="./Images/SocialMediaIcon2.png" alt="" />
                                    <img src="./Images/SocialMediaIcon3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Divider">
                    <img src="./Images/BackgroundImage2.png" alt="" />
                    <div className="DividerTextContainer">
                        <div className="DividerCard">
                            <span>2019</span>
                            <span>established</span>
                        </div>
                        <div className="DividerCard">
                            <span>15+</span>
                            <span>outstanding</span>
                        </div>
                        <div className="DividerCard">
                            <span>7.5y</span>
                            <span>average team experience</span>
                        </div>
                        <div className="DividerCard">
                            <span>20+</span>
                            <span>happy partners</span>
                        </div>
                    </div>
                </div>

                <div className="Careers">
                    <div className="CareersHead">
                        <span>Be a part of our crew</span>
                        <span>Learn, make impact, have fun. We always support initiative, awareness, quality, spirit, creativity and eternal passion to learn new things. We love challenges. We say interesting instead of complicated, challenging instead of impossible.</span>
                    </div>

                    <div className="CareersContent">
                        <ul>
                            <li>
                                <div className="JobItem">
                                    <div>
                                        <span>Middle UX/UI Designer</span>
                                    </div>
                                    <div>
                                        <span>Moldova · Full-time</span>
                                        <span>2 days ago</span>
                                        <a href="/">
                                            <img src="./Images/ButtonArrow.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="JobItem">
                                    <div>
                                        <span>Senior Python Developer</span>
                                    </div>
                                    <div>
                                        <span>Israel · Freelance</span>
                                        <span>6 days ago</span>
                                        <a href="/">
                                            <img src="./Images/ButtonArrow.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="JobItem">
                                    <div>
                                        <span>Business Analyst</span>
                                    </div>
                                    <div>
                                        <span>Romania · Contract</span>
                                        <span>2 weeks ago</span>
                                        <a href="/">
                                            <img src="./Images/ButtonArrow.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="JobItem">
                                    <div>
                                        <span>Business Analyst</span>
                                    </div>
                                    <div>
                                        <span>Moldova · Full-time</span>
                                        <span>2 weeks ago</span>
                                        <a href="/">
                                            <img src="./Images/ButtonArrow.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="JobItem">
                                    <div>
                                        <span>Marketing Manager</span>
                                    </div>
                                    <div>
                                        <span>Israel · Full-time</span>
                                        <span>3 weeks ago</span>
                                        <a href="/">
                                            <img src="./Images/ButtonArrow.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="CareersActions">
                        <button>
                            <span>open positions</span>
                            <img src="./Images/Icon.png" alt="" />
                        </button>

                        <button>
                            <span>available internships</span>
                            <img src="./Images/Icon.png" alt="" />
                        </button>
                    </div>
                </div>

                <div className="AboutFooter">
                    <div className="AboutFooterContainer">
                        <div className="HeaderContainer">

                            <div className="Heading2">
                                <span className="HeaderText">info@ishunea.io</span>
                            <div className="ContactsContainer">

                            <div className="Contacts">
                                <span>+373 (78) 158 337</span>
                                <span>Moldova</span>
                            </div>

                            <div className="Contacts">
                                <span>+972 558-5556-42</span>
                                <span>Israel</span>
                            </div>

                            <div className="Contacts">
                                <span>Monday - Friday, 09:00 - 18:00</span>
                                <span>Working hours</span>
                            </div>

                        </div>

                        </div>
                        
                        <div className="ButtonContainer">
                            <a href="/">
                                <button>
                                    <span>request a call</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </button>
                            </a>
                        </div>

                    </div>

                    <div className="Copyright">
                        
                        <div className="Social">
                            <a href="/">Facebook</a>
                            <a href="/">Instagram</a>
                            <a href="/">LinkedIn</a>
                        </div>

                        <div className="Legal">
                            <a href="">Terms and Conditions</a>
                            <span>© 2019 - 2022 iShunea. All rights reserved</span>
                        </div>

                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default About;