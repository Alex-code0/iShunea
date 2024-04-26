import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="Background">

            <div className="NavigationBar">
                <div className="NavigationContainer">
                    <img src="./Images/Logo.png" alt="" />

                    <div className="Menu">
                        <div className="FirstDropdownContainer">
                            <span className="DropdownTrigger">company</span>
                            <span></span>
                            <div className="DropdownContent">
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
                            <span className="CurrentLanguage">english</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Page">
                <div className="Hero">
                    <div className="Content">

                        <div className="Heading">
                            <span className="HeadingText1">Moving your ideas to digital</span>
                            <span className="HeadingText2">The ultimate solutions for ERP systems, CRMs, mobile apps and web platforms</span>
                        </div>

                        <div className="ButtonContent">
                            <a href="/">
                                <button>
                                    <span>contact us</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </button>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="Services">
                    <div className="HeadingText3">
                        <span>We help companies to grow digital</span>
                    </div>
                    
                    <div className="Row">

                        <div className="ServicesImageContainer">
                            <img src="./Images/MobileApplications.png" alt="" />
                            <div className="Overlay">
                                <span>Mobile Applications</span>
                                <img src="./Images/Icon.png" alt="" />
                            </div>
                        </div>

                        <div className="ServicesImageContainer">
                            <img src="./Images/UIDesign.png" alt="" />
                            <div className="Overlay">
                                <span>UX/UI Design</span>
                                <img src="./Images/Icon.png" alt="" />
                            </div>
                        </div>

                        <div className="ServicesImageContainer">
                            <img src="./Images/GraphicDesign.png" alt="" />
                            <div className="Overlay">
                                <span>Graphic Design</span>
                                <img src="./Images/Icon.png" alt="" />
                            </div>
                        </div>

                        <div className="ServicesImageContainer">
                            <img src="./Images/Maintenance.png" alt="" />
                            <div className="Overlay">
                                <span>Maintenance</span>
                                <img src="./Images/Icon.png" alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="Advantages">
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
                </div>

                <div className="Projects">
                    <div className="ProjectsContainer">

                        <span className="ProjectHeader">Projects highlights</span>

                        <div className="ProjectsList">
                            
                            <div className="ItemsContainer">
                                <img src="./Images/Carter.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Carter</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/Lusiton.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Lusiton TL</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/ALO.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>ALO.MD</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/Tesla.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Tesla</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/Xiaomi.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Xiaomi Store</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/PV.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>PV - Smart Hydroisolation</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/Apple.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Apple</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/USMF.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>USMF</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/Darwin.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Darwin</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/Samsung.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Samsung</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/Conex.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Agro Conex</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>

                            <div className="ItemsContainer">
                                <img src="./Images/Enter.png" alt="" />
                                <div className="OverlayProjects">
                                    <span>Enter</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="ProjectsFooter">
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

                    </div>
                </div>

                <div className="Progress">
                    <div className="ProgressItemsContainer">

                        <div className="ProgressHeader">
                            <span>How it works</span>
                            <span>Our processes are transparent so you will know what we are working on, and why</span>
                        </div>

                        <div className="Card">
                            <img src="./Images/ProgressIcon1.png" alt="" />
                            <span>Research & Wireframing</span>
                            <span>We set up a wireframe to establish the architecture of the product. This will give everyone the insight on the 'big picture' of your risks and opportunities.</span>
                        </div>

                        <div className="Card">
                            <img src="./Images/ProgressIcon2.png" alt="" />
                            <span>Product Design</span>
                            <span>Our design team create high-quality prototype of your solution based on the wireframes and going through all the screens and elements. Here we have an iterative process where we design a target blueprint of how your product should look like. We create engaging, user-friendly and stunning designs that will seamlessly communicate with end-users and make you stand out among your competitors.</span>
                        </div>

                        <div className="Card">
                            <img src="./Images/ProgressIcon3.png" alt="" />
                            <span>Analysis, Discussion & Offer</span>
                            <span>We analyse your objectives and expectations going through all the requirements. Then we have an estimation of the price & time for product development.</span>
                        </div>

                         <div className="Card">
                            <img src="./Images/ProgressIcon4.png" alt="" />
                            <span>Testing & Quality Assurance</span>
                            <span>The product goes through several testing phases to ensure that there are no bugs or lags and the product itself provides a good user experience. At this stage we prepare you with the documentation on how to manage and update the product. By leveraging a dedicated pool of professional QA engineers, we manage all aspects of testing to meet your objectives, improve quality, and increase release velocity.</span>
                        </div>

                        <div className="Card">
                            <img src="./Images/ProgressIcon5.png" alt="" />
                            <span>Solution Development</span>
                            <span>Our team of developers build your product using modern coding standards and proven technologies to ensure that it is quickly, secure and scalable.</span>
                        </div>

                        <div className="Card">
                            <img src="./Images/ProgressIcon6.png" alt="" />
                            <span>Product Launch</span>
                            <span>This is not the end of our commitment. We provide technical support for a period of time so you will not be on your own once the work is completed.</span>
                        </div>
                    </div>
                </div>

                <div className="CallToActionContainer">
                    <div className="InnerCallContainer">
                        <img src="./Images/CallToActionBackground.png" alt="" />
                        <div className="OverlayCall">
                            <span>Not sure about what you need?</span>
                            <span>Request a consultation so we offer our knowledge base to help you set up the best digital solution for your business</span>
                            <a href="/">
                                <button>
                                    <span>request now</span>
                                    <img src="./Images/Icon.png" alt="" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="Blog">
                    <div className="BlogContainer">
                        <span className="ArticleHeader">Latest article</span>
                        <div className="BlogList">

                            <div className="NewsCard">
                                <div className="ImageContainer">
                                    <img src="./Images/NewsImage1.png" alt="" />
                                    <div className="BlogOverlay">
                                        <span>insight</span>
                                    </div>
                                </div>
                                <span className="Description1">The Impact We Have on Our Customers and Our Community</span>
                                <span className="Description2">November 27, 2022</span>
                            </div>

                            <div className="NewsCard">
                                <div className="ImageContainer">
                                    <img src="./Images/NewsImage2.png" alt="" />
                                    <div className="BlogOverlay">
                                        <span>discount</span>
                                    </div>
                                </div>
                                <span className="Description1">Don't Forget to Catch Black Friday Free Consultation</span>
                                <span className="Description2">November 24, 2022</span>
                            </div>

                            <div className="NewsCard">
                                <div className="ImageContainer">
                                    <img src="./Images/NewsImage3.png" alt="" />
                                    <div className="BlogOverlay">
                                        <span>insight</span>
                                    </div>
                                </div>
                                <span className="Description1">What is The Role of Computer in Information Technology?</span>
                                <span className="Description2">November 03, 2022</span>
                            </div>

                            <div className="NewsCard">
                                <div className="ImageContainer">
                                    <img src="./Images/NewsImage4.png" alt="" />
                                    <div className="BlogOverlay">
                                        <span>partnership</span>
                                    </div>
                                </div>

                                <span className="Description1">New Partnership with Nicolae Testemițanu State University</span>
                                <span className="Description2">October 07, 2022</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="Footer">
                <div className="FooterContainer">
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
    );
};

export default Home;