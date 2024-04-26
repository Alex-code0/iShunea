import { NavLink } from "react-router-dom";

const Career = () => {
    return (
        <div className="CareersBackground">
            <div className="NavigatioBar">
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
    
            <div className="CareersGallery">
                <div>
                    <div className="GalleryHeader">
                        <span>The heart of iShunea</span>
                        <span>The future of our world is digital. There are plenty of great opportunities and we want you to be a part of something new</span>
                        <div>
                            <a href="">
                                open positions
                                <img src="./Images/Icon.png" alt="" />
                            </a>
                            <a href="">
                                available internships
                                <img src="./Images/Icon.png" alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="GalleryGridLeft">
                        <div>
                            <div>
                                <img src="./Images/CareersGalleryCard1.png" alt="" />
                            </div>
                            <div>
                                <img src="./Images/CareersGalleryCard3.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <img src="./Images/CareersGalleryCard2.png" alt="" />
                            <img src="./Images/CareersGalleryCard4.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="GalleryGridRight">
                    <img src="./Images/CareersGalleryCard5.png" alt="" />
                    <img src="./Images/CareersGalleryCard6.png" alt="" />
                </div>
            </div>

            <div className="GalleryImageContainer2">
                <img src="./Images/GalleryImage.png" alt="" />
                <div className="GalleryImageOverlay">
                    <span></span>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;