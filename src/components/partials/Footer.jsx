'use client'
import { useEffect } from "react";
import Link from "next/link";
const Footer = () => {
  // useEffect(() => {
  //   import("bootstrap").then((bootstrap) => {
  //     const modalElement = document.getElementById("myModal");

  //     if (modalElement) {
  //       const modal = new bootstrap.Modal(modalElement);

  //       setTimeout(() => {
  //         modal.show();
  //       }, 9000);
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 brd-1">
              <div className="footer-widget">
                <div className="footer-brand">
                  <img src="/images/logo-2.png" alt="img" />
                </div>
                <div className="location">
                  <p>
                    YWCA of Delhi, <br /> 01, Ashoka Road, New Delhi - 110001
                  </p>
                </div>
                <ul className="footer-socials">
                  <li>
                    <a href="tel:911123362975">
                      <i className="bi bi-telephone" />+91-11-23362975

                    </a>
                  </li>
                  <li>
                    <a href="tel:917011299042">
                      <i className="bi bi-telephone" />+91-7011299042

                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@ywcaofdelhi.org">
                      <i className="bi bi-envelope" />
                      info@ywcaofdelhi.org
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 brd-1">
              <div className="footer-widget">
                <ul className="quick-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/our-history">About Us</Link>
                  </li>
                  <li>
                    <Link href="/membership-and-programs">
                      Our Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/blue-triangle">Hotel Bookings</Link>
                  </li>
                  <li>
                    <Link href="/education-institute/contact">Course Inquiry</Link>
                  </li>
                  <li>
                    <Link href="/blue-triangle">Guest House Booking</Link>
                  </li>
                  <li>
                    <Link href="/career">Career</Link>
                  </li>
                  <li>
                    <Link href="/board-of-management">Leadership</Link>
                  </li>
                  <li>
                    <Link href="/executive-team">Team</Link>
                  </li>
                  <li>
                    <Link href="/news">News & Updates</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use">Terms of Use</Link>
                  </li>
                </ul>
                <div className="subscription-box">
                  <label>Subscribe to Newsletter</label>
                  <div className="subscription-form">
                    <input type="text" placeholder="Your email" />
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <div className="usefull-links">
                  <Link href="/fund-raising-publicity/donate">
                    <button>
                      Become a Donor <i className="bi bi-arrow-right-circle-fill" />
                    </button>
                  </Link>
                  <Link href="/join-us/become-a-member">
                    <button>
                      Become a Member <i className="bi bi-arrow-right-circle-fill" />
                    </button>
                  </Link>
                  <Link href="/contact-us">
                    <button>
                      Contact Us <i className="bi bi-arrow-right-circle-fill" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-socials">
        <a href="https://www.facebook.com/YWCAOFDELHI/" target="_blank" className="soc-icon">
          <img src="/images/facebook.png" alt="icon" />
        </a>
        <a href="https://www.linkedin.com/in/young-women-christian-association-of-delhi-42802a131/" target="_blank" className="soc-icon">
          <img src="/images/linkedin.png" alt="icon" />
        </a>
        <a href="https://www.instagram.com/ywcaofdelhi" target="_blank" className="soc-icon">
          <img src="/images/instagram.png" alt="icon" />
        </a>
      </div>
      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            {/* Social */}
            <div className="col-lg-4">
              <div className="social-row">

                <a href="https://www.facebook.com/YWCAOFDELHI/" target="_blank" className="soc-icon">
                  <img src="/images/facebook.png" alt="icon" />
                </a>
                <a href="https://www.linkedin.com/in/young-women-christian-association-of-delhi-42802a131/" className="soc-icon" target="_blank">
                  <img src="/images/linkedin.png" alt="icon" />
                </a>

                <a href="https://www.instagram.com/ywcaofdelhi" className="soc-icon" target="_blank">
                  <img src="/images/instagram.png" alt="icon" />
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-site-secure">
                <span>Secure Site</span>
                <img src="/images/secure.png" alt="icon" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-site-accept">
                <span>We Accept</span>
                <img src="/images/we-accespt.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p> Copyright © 2026 YWCA of Delhi | All Rights Reserved</p>
        </div>
      </div>
      <div
        className="modal fade"
        id="search"
        tabIndex={-1}
        aria-labelledby="searchLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="searchLabel">
                Search
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label>Keyword*</label>
                <input type="text" placeholder="search" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="seconderybtn-2"
                data-bs-dismiss="modal"
              >
                Advance Search
              </button>
              <button type="button" className="primarybtn-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="myModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body" style={{ padding: 0 }}>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              />
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval={2000}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/images/popupimg.jpg"
                      alt="img"
                      style={{ width: "100%" }}
                    />
                    <div className="carousel-caption carousel-caption-1 d-none d-md-block">
                      <a href="/">Register Now</a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/images/Popup-02.png"
                      alt="img"
                      style={{ width: "100%" }}
                    />
                    <div className="carousel-caption carousel-caption-2 d-none d-md-block">
                      <a href="http://wti.ywcaofdelhi.org/enquiry.aspx">
                        Course Enquiry
                      </a>
                      <a href="https://www.ywcaofdelhi.org/onCampusHybridCourse.html">
                        Courses Offered
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default Footer;