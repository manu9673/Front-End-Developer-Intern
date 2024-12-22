import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Header = () => {

  const jobs = [
    {
      title: "Security Sales Engineer",
      company: "Aline HR Consultancy",
      type: "Full Time - Permanent",
      experience: "4 Years",
      location: "Mumbai (All Areas) / India",
    },
  ];
  const jobs1 = [
    {
      title: "Security Sales Engineer",
      company: "Aline HR Consultancy",
      type: "Full Time - Permanent",
      experience: "4 Years",
      location: "Mumbai (All Areas) / India",
    },
  ];
  const jobs2 = [
    {
      title: "Security Sales Engineer",
      company: "Aline HR Consultancy",
      type: "Full Time - Permanent",
      experience: "4 Years",
      location: "Mumbai (All Areas) / India",
    },
  ];
  const socialLinks = [
    {
      href: "https://whatsapp.com/channel/0029VaL3vjg0LKZJrpFc440L",
      icon: "fa-whatsapp",
      label: "WhatsApp",
    },
    {
      href: "https://www.facebook.com/pages/category/Business-Service/Jobringer-111164147355159/",
      icon: "fa-facebook",
      label: "Facebook",
    },
    {
      href: "https://twitter.com/jobs_jobringer",
      icon: "fa-twitter",
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com/jobringerjobs",
      icon: "fa-instagram",
      label: "Instagram",
    },
    {
      href: "https://in.linkedin.com/company/jobringer",
      icon: "fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/channel/UCE2yLiRuBlfAEVVVEidbzdg",
      icon: "fa-youtube",
      label: "YouTube",
    },
    {
      href: "https://telegram.me/jobs_jobringer",
      icon: "fa-telegram",
      label: "Telegram",
    },
  ];

  return (
// nav bar ---------------------------
<div className="container-fluid">
      <div className="mobilerightheader appmenu">
       

        {/* Dropdown Menu */}
        <ul className="dropdown-menu top dropdown_login">
          <li className="list-hover">
            <a
              href="https://www.jobringer.com/employer/login?signup"
              target="_blank"
              rel="noreferrer"
            >
              Login as Employer
            </a>
          </li>
          <li className="list-hover">
            <a
              href="https://www.jobringer.com/jobseeker/registration"
              target="_blank"
              rel="noreferrer"
            >
              Login as Jobseeker
            </a>
          </li>
        </ul>

        {/* Navigation Links */}
        <a href="https://www.jobringer.com"></a>
        <a href="https://www.jobringer.com/jobs"></a>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg" role="navigation">
        <div className="mobile_navbar">
          <div className="navbar-header">
            <a className="navbar-brand" href="https://www.jobringer.com">
              <img
                src="https://www.jobringer.com/images/logonew.svg"
                alt="jobRinger"
                width="180"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="nav navbar-nav main-menu">
            <li className="list-hover menulihide9">
              <a href="https://www.jobringer.com/jobs">Jobs</a>
            </li>
            <li className="list-hover">
              <a href="https://www.jobringer.com/employers-list.php">
                Active Employers
              </a>
            </li>
            <li className="list-hover">
              <a href="https://www.jobringer.com/blogs">Job Blogs</a>
            </li>
            <li className="dropdown menulihide7 list-hover">
              <a
                className="dropdown-toggle headerprofileanchorbox list-hover"
                data-toggle="dropdown"
                href="#"
              >
                Pricing
              </a>
              <ul className="dropdown-menu">
                <li className="list-hover">
                  <a
                    href="https://www.jobringer.com/employer/pricing-plan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Employer Pricing Plan
                  </a>
                </li>
                <li className="list-hover">
                  <a
                    href="https://www.jobringer.com/jobseeker/pricing-plan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jobseeker Pricing Plan
                  </a>
                </li>
              </ul>
            </li>
            <li className="login-btn menulihide11">
              <a href="https://www.jobringer.com/jobseeker/login">
                Jobseeker Login
              </a>
            </li>
            <li className="employer-login-btn menulihide12">
              <a href="https://www.jobringer.com/employer/login">
                Employer Login
              </a>
            </li>
          </ul>
        </div>
      </nav>



      {/* section second */}
      

      <div className="job-seeker-container" background color="linear-gradient(125deg,#27dadb 0,#001b85 100%)" 
      >
  {/* Top Section */}
  
  <div className="employee-div">
      <div className="holder">
        <h2 className="titile1">Employers</h2>
        <h2 className="titile2">Recruit smart, Recruit right</h2>
      </div>

      <div className="textholder">
        <p className="text-anim"><strong>WELCOME OFFER - </strong> FREE Job Postings and Much More.</p>
      </div>

      <div className="btn-log">
        <a href="https://www.jobringer.com/employer/login?signup" className="blue-btn-sm">Register for FREE</a>
        <a href="https://www.jobringer.com/employer/post-a-job" className="purple-btn-sm">Post A Job</a>
        <a className="salesbtn1" href="contact-us">Sales Enquiry</a>
      </div>
    </div>


    

    <div className="job-seeker-div container py-4">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="titile1 mb-2" style={{ fontSize: "20px", marginTop: "10px" }}>
          Bringing you the Perfect Job!
        </h1>
        <h2
          className="titile1 mb-4"
          style={{ fontSize: "17px", fontWeight: "500", textTransform: "none" }}
        >
          11,000+ JOBS to Apply
        </h2>
      </div>

      {/* Search Section */}
      <div className="flex-holder-parent d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
        <div className="form-login d-flex flex-column align-items-center">
          <form className="form-inline d-flex align-items-center">
            <input
              type="text"
              className="form-control mr-sm-2 home-search mb-2 mb-md-0"
              placeholder="Search Jobs Now"
              style={{ minWidth: "200px" }}
            />
            <button
              type="button"
              className="btn btn-outline-success my-2 my-sm-0 ml-md-2 yello-btn-sm"
            >
              Search
            </button>
          </form>
          <div className="btn-log mt-3">
            <a id="js-Login" href="https://www.jobringer.com/jobs" className="btn purple-btn-sm mr-2">
              View Jobs
            </a>
            <a
              href="https://www.jobringer.com/jobseeker/registration?signup"
              className="btn yello-btn-sm"
            >
              Register For FREE
            </a>
          </div>
        </div>
      </div>

      {/* Quick Job Search Section */}
      <div className="flex-holder1">
        <div className="most-search text-center">
          <p className="mb-2">
            <strong>Quick Job Search</strong>{" "}
            <i className="fa-solid fa-magnifying-glass" style={{ margin: "0px 5px" }}></i>
          </p>
          <div className="keyHolder d-flex flex-wrap justify-content-center">
            {[
              { label: "#Fresher", link: "https://www.jobringer.com/jobs-for-fresher" },
              { label: "#Work From Home", link: "https://www.jobringer.com/jobs-for-WFH" },
              { label: "#WFH", link: "https://www.jobringer.com/jobs-for-WFH" },
              { label: "#IT", link: "https://www.jobringer.com/jobs-in-information-technology" },
              { label: "#HR", link: "https://www.jobringer.com/jobs-in-Human-Resources" },
              { label: "#Back Office", link: "https://www.jobringer.com/jobs-for-back-office" },
              { label: "#BPO Jobs", link: "https://www.jobringer.com/jobs-for-BPO" },
              { label: "#ITES", link: "https://www.jobringer.com/jobs-in-ITES" },
              { label: "#Finance", link: "https://www.jobringer.com/jobs-in-finance" },
              { label: "#Accounts", link: "https://www.jobringer.com/jobs-in-accounts" },
              { label: "#Medical", link: "https://www.jobringer.com/jobs-in-medical" },
              { label: "#Pharma", link: "https://www.jobringer.com/jobs-in-pharma" },
              { label: "#Manager", link: "https://www.jobringer.com/jobs-for-manager" },
              { label: "#Developer", link: "https://www.jobringer.com/jobs-for-developer" },
              { label: "#Marketing", link: "https://www.jobringer.com/jobs-for-Marketing" },
              { label: "#Engineering", link: "https://www.jobringer.com/jobs-in-Engineering" },
              { label: "#Non Government Jobs", link: "https://www.jobringer.com/jobs" },
            ].map((job, index) => (
              <a
                key={index}
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link m-1"
                style={{ textDecoration: "none" }}
              >
                {job.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>







<div class="swiper mySwiper swiper-initialized swiper-horizontal"></div>
    <h2  marginTop>Featured Jobs</h2>


    

    <div>
      <div className="row w-100 m-0 p-0">
        <div className="col-12">
          <div className="featured-name">Featured Jobs</div>
        </div>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className={`box${index + 1}`}>
                {jobs.map((job, idx) => (
                  <div className="featured-box1" key={idx}>
                    <div className="designer-name">{job.title}</div>
                    <div className="aline-hr">{job.company}</div>
                    <div className="full-time">{job.type}</div>
                    <div className="year">#{job.experience}</div>
                    <div className="location">{job.location}</div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-primary" type="button">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>







    <span class="fly-po"><span class="black-lg">Featured</span> <span class="blue-bg">Employers</span></span>






    {/* add section featurn */}






    <section className="job-download">
      <div className="container">
        <div className="row psame1">
          <div className="col-md-8">
            <h2 className="apply-app">Apply to JOBS On-The-Go</h2>
            <p className="apply-app-text">
              <span>Jobringer Mobile App</span>
            </p>
            <div className="appbtnbox">
              <a
                href="https://play.google.com/store/apps/details?id=com.jobringer.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src="https://www.jobringer.com/images/anroid.png"
                  alt="Google Play Img"
                  className="img-play"
                />
              </a>
              <a>
                <img
                  loading="lazy"
                  src="https://www.jobringer.com/images/ios.png"
                  alt="Apple Store Img"
                  className="img-play"
                />
              </a>
            </div>
            <h3 className="mobilecs">
              Mobile App{" "}
              <span>
                <a
                  style={{ color: "blue" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.jobringer.app"
                >
                  Download
                </a>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>





    



    <footer id="footer">
      <div className="whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=919321405978&amp;text=Hi"
          id="float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>
      </div>

      




      {/* Job City Section */}
      <section className="job-city">
      <div className="container-fluid flex-holder">
        <div className="column city-div">
          <h2 className="title-center">Jobs in India</h2>
          <div className="city-job">
            <ul>
              <a href="/jobs-in-mumbai" target="_blank" rel="noopener noreferrer">
                <li>#Mumbai</li>
              </a>
              <a href="/jobs-in-Delhi" target="_blank" rel="noopener noreferrer">
                <li>#Delhi</li>
              </a>
              <a href="/jobs-in-Ajmer" target="_blank" rel="noopener noreferrer">
                <li>#Ajmer</li>
              </a>
              <a href="/jobs-in-Pune" target="_blank" rel="noopener noreferrer">
                <li>#Pune</li>
              </a>
              <a href="/jobs-in-Hyderabad" target="_blank" rel="noopener noreferrer">
                <li>#Hyderabad</li>
              </a>
              <a href="/jobs-in-Agra" target="_blank" rel="noopener noreferrer">
                <li>#Agra</li>
              </a>
              <a href="/jobs-in-Chennai" target="_blank" rel="noopener noreferrer">
                <li>#Chennai</li>
              </a>
              <a href="/jobs-in-Kolkata" target="_blank" rel="noopener noreferrer">
                <li>#Kolkata</li>
              </a>
              <a href="/jobs-in-Indore" target="_blank" rel="noopener noreferrer">
                <li>#Indore</li>
              </a>
              <a href="/jobs-in-Gurugram" target="_blank" rel="noopener noreferrer">
                <li>#Gurugram</li>
              </a>
              <a href="/jobs-in-Jaipur" target="_blank" rel="noopener noreferrer">
                <li>#Jaipur</li>
              </a>
              <a href="/jobs-in-Ahmedabad" target="_blank" rel="noopener noreferrer">
                <li>#Ahmedabad</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="column city-div">
          <h2 className="title-center">International Jobs</h2>
          <div className="city-job">
            <ul>
              <a href="/jobs-in-Africa" target="_blank" rel="noopener noreferrer">
                <li>#Africa</li>
              </a>
              <a href="/jobs-in-united-states" target="_blank" rel="noopener noreferrer">
                <li>#USA</li>
              </a>
              <a href="/jobs-in-united-kingdom" target="_blank" rel="noopener noreferrer">
                <li>#UK</li>
              </a>
              <a href="/jobs-in-Australia" target="_blank" rel="noopener noreferrer">
                <li>#Australia</li>
              </a>
              <a href="/jobs-in-Canada" target="_blank" rel="noopener noreferrer">
                <li>#Canada</li>
              </a>
              <a href="/jobs-in-Singapore" target="_blank" rel="noopener noreferrer">
                <li>#Singapore</li>
              </a>
              <a href="/jobs-in-united-arab-emirates" target="_blank" rel="noopener noreferrer">
                <li>#Dubai</li>
              </a>
              <a href="/jobs-in-saudi-arabia" target="_blank" rel="noopener noreferrer">
                <li>#Saudi Arabia</li>
              </a>
              <a href="/jobs-in-new-zealand" target="_blank" rel="noopener noreferrer">
                <li>#New Zealand</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>






      {/* Statistics Section */}
      <section className="recruit-right">
        <div className="container">
          <div className="row">
            <div className="counter-list">
              <ul>
                <li className="match">
                  <span className="counter-text">Jobs Posted</span>
                  <span className="count-number">32523</span>
                </li>
                <li className="match">
                  <span className="counter-text">Jobs Filled</span>
                  <span className="count-number">15153</span>
                </li>
                <li className="match">
                  <span className="counter-text">Employers</span>
                  <span className="count-number">20613</span>
                </li>
                <li className="match">
                  <span className="counter-text">Active Users</span>
                  <span className="count-number">1299415</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </footer>

    {/* last se */}
{/* fotter */}





    <section className="footer-section">
        <div className="container">
          <div className="row contact-top">
            <div className="footer-flex">
              <p className="disclaimer">
                <span className="bold">Disclaimer</span>: All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purposes. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.
              </p>

              <div className="recognized-by">
                <a
                  href="https://www.jobringer.com/uploads/startup_india.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Recognized By</p>
                  <img
                    src="https://www.jobringer.com/images/startuplogo.png"
                    alt="Startup India Logo"
                    className="startup-logo"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-12 foll-info pl0 socislfts text-center py-4">
      <p className="mb-3">Follow us on</p>
      <div className="d-flex justify-content-center">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link mx-2"
            aria-label={link.label}
          >
            <i className={`fa-brands ${link.icon}`} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </div>
          </div>
        </div>
      </section>

      <section className="footer-menu-section">
        <div className="container">
          <div className="row footer-menu">
            <div className="col-md-12 text-center">
              <ul className="footer-links">
                <li><a href="https://www.jobringer.com/terms&amp;condition" target="_blank">Terms and conditions</a></li>
                <li><a href="https://www.jobringer.com/privacy-policy" target="_blank">Privacy Policy</a></li>
                <li><a href="https://www.jobringer.com/refund-policy" target="_blank">Refund / Cancellation Policy</a></li>
                <li><a href="https://www.jobringer.com/about-us">About Us</a></li>
                <li><a href="https://www.jobringer.com/contact-us">Contact Us</a></li>
                <li><a href="https://www.jobringer.com/faq">FAQ</a></li>
                <li><a href="https://www.jobringer.com/blogs">Blogs</a></li>
              </ul>
              <p className="footer-copyright">
                © All Rights Reserved @ {new Date().getFullYear()} Jobtech Ventures Private Limited.
              </p>
            </div>
          </div>
        </div>
      </section>




    </div>

    
</div>

    
  );
};

export default Header;
