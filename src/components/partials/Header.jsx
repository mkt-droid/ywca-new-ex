'use client'
import { useEffect } from "react";

const Header = () => {

  // useEffect(() => {
  //   const cursor = document.querySelector(".cursor");

  //   const moveCursor = (e) => {
  //     cursor.style.top = `${e.pageY - 18}px`;
  //     cursor.style.left = `${e.pageX - 18}px`;
  //   };

  //   const clickCursor = () => {
  //     cursor.classList.add("expand");

  //     setTimeout(() => {
  //       cursor.classList.remove("expand");
  //     }, 500);
  //   };

  //   document.addEventListener("mousemove", moveCursor);
  //   document.addEventListener("click", clickCursor);

  //   return () => {
  //     document.removeEventListener("mousemove", moveCursor);
  //     document.removeEventListener("click", clickCursor);
  //   };
  // }, []);

  return (
    <>
      {/* <div className="cursor"></div> */}

      {/* ════════════════════ NAVBAR ════════════════════ */}


      <nav className="top-nav">
        <div className="header-top">
          <div className="nav-container-top">
            <div className="marquee-wrapper">

              <div className="marquee">
                <span>BY LOVE SERVE ONE ANOTHER.</span>
                <span>BY LOVE SERVE ONE ANOTHER.</span>
                <span>BY LOVE SERVE ONE ANOTHER.</span>
              </div>

              <div className="marquee">
                <span>BY LOVE SERVE ONE ANOTHER.</span>
                <span>BY LOVE SERVE ONE ANOTHER.</span>
                <span>BY LOVE SERVE ONE ANOTHER.</span>
              </div>

            </div>
          </div>
        </div>
        <div className="nav-container">

          <a href="/" className="nav-brand">
            <img src="/images/logo-ywca.jpg" alt="brand" />
          </a>

          <button
            className="nav-toggle"
            onClick={() =>
              document.getElementById("mainMenu").classList.toggle("open")
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className="nav-menu" id="mainMenu">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              onClick={(e) => e.currentTarget.classList.toggle("open")}
            >
              <a className="nav-link" href="#">
                About Us
                <span className="chevron">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </a>

              <div className="dropdown">
                <div className="dropdownInner">
                  <div className="dropdownLeft">
                    <h3>About Us</h3>
                    <p>We work to Advance gender equity by responding to urgent need in communities, through national advocasy and grassroots initiatives.</p>
                  </div>
                  <div className="dropdownRight">
                    <a className="dropdown-item" href="/our-history">
                      History

                    </a>

                    <a className="dropdown-item" href="/vision-mission">
                      Vision/ Mission

                    </a>

                    <a className="dropdown-item" href="/board-of-management">
                      Board of Management

                    </a>

                    <a className="dropdown-item" href="message-from-president">
                      Message from President

                    </a>

                    <a className="dropdown-item" href="/message-from-general-secretary">
                      Message from General Secretary

                    </a>

                    <a className="dropdown-item" href="/executive-team">
                      Executive Team
                    </a>


                  </div>
                </div>

              </div>
            </li>

            <li
              className="nav-item"
              onClick={(e) => e.currentTarget.classList.toggle("open")}
            >
              <a className="nav-link" href="#">
                Programs
                <span className="chevron">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </a>

              <div className="dropdown dropdown-simple">
                <a className="dropdown-item" href="#">
                  Community Development Programs
                </a>

                <a className="dropdown-item" href="/fund-raising-publicity">
                  Fund raising & Publicity (FRAP)
                </a>

                <a className="dropdown-item" href="/membership-and-programs">
                  Membership and Programs
                </a>

                <a className="dropdown-item" href="/public-affairs-and-social-issues">
                  Public Affairs and Social Issues
                </a>

                <a className="dropdown-item" href="/religious-education-committee">
                  Religious Education Committee
                </a>

                <a className="dropdown-item" href="/shelter-homes">
                  Shelter Homes
                </a>

                <a className="dropdown-item" href="/youth-department">
                  Youth
                </a>
              </div>
            </li>

            <li
              className="nav-item"
              onClick={(e) => e.currentTarget.classList.toggle("open")}
            >
              <a className="nav-link" href="#">
                Services
                <span className="chevron">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </a>

              <div className="dropdown dropdown-simple">
                <a className="dropdown-item" href="/blue-triangle">
                  Blue Triangle (Guest House)
                </a>

                <a className="dropdown-item" href="/day-care">
                  Day Care
                </a>

                <a className="dropdown-item" href="/education-institute">
                  Education Institutes
                </a>

                <a className="dropdown-item" href="/working-women-hostel">
                  Working Women Hostels
                </a>
              </div>
            </li>

            {/* <li
              className="nav-item"
              onClick={(e) => e.currentTarget.classList.toggle("open")}
            >
              <a className="nav-link" href="#">
                Booking
                <span className="chevron">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </a>

              <div className="dropdown">
                <a className="dropdown-item" href="#">
                  Working Women Hostel
                </a>

                <a className="dropdown-item" href="#">
                  Guest House
                </a>

                <a className="dropdown-item" href="#">
                  Conference Facilities
                </a>
              </div>
            </li> */}

            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Course Enquiry
              </a>
            </li> */}

            <li
              className="nav-item"
            //   onClick={(e) => e.currentTarget.classList.toggle("open")}
            >
              <a className="nav-link" href="/insights-publications">
                Insights & Publications
                {/* <span className="chevron">
                  <i className="bi bi-chevron-down"></i>
                </span> */}
              </a>

              {/* <div className="dropdown">
                <a className="dropdown-item" href="#">
                  Newsletters
                </a>

                <a className="dropdown-item" href="#">
                  Annual Reports
                </a>

                <a className="dropdown-item" href="#">
                  Blog
                </a>

                <a className="dropdown-item" href="#">
                  Publications
                </a>

                <a className="dropdown-item" href="#">
                  Adamya Nari Samman Year Book
                </a>

                <a className="dropdown-item" href="#">
                  Media Presence
                </a>

                <a className="dropdown-item" href="#">
                  Financials
                </a>
              </div> */}
            </li>

            <li
              className="nav-item"
            //   onClick={(e) => e.currentTarget.classList.toggle("open")}
            >
              <a className="nav-link" href="#">
                Join Us
                {/* <span className="chevron">
                  <i className="bi bi-chevron-down"></i>
                </span> */}
              </a>

              {/* <div className="dropdown">
                <a className="dropdown-item" href="#">
                  Be a Member
                </a>

                <a className="dropdown-item" href="#">
                  Be a Volunteer
                </a>

                <a className="dropdown-item" href="#">
                  Donate
                </a>

                <a className="dropdown-item" href="#">
                  Work With Us
                </a>

                <a className="dropdown-item" href="#">
                  Intern With Us
                </a>
              </div> */}
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact Us
              </a>
            </li>

          </ul>

        </div>

      </nav>
    </>
  );
};

export default Header;