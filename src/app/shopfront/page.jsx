import React from "react";

function page() {
  return (
    <div>
      <div className="page-wrapper">
        {/* Header Main Area */}
        <header className="site-header header-style-1">
          <div className="pbmit-header-overlay">
            <div className="pbmit-main-header-area">
              <div className="container-fluid">
                <div className="pbmit-header-content d-flex justify-content-between align-items-center">
                  <div className="pbmit-logo-button-area d-flex justify-content-between align-items-center">
                    <div className="site-branding">
                      <h1 className="site-title">
                        <a href="index-2.html">
                          <img
                            className="logo-img"
                            src="images/logo.svg"
                            alt="Xinterio"
                          />
                        </a>
                      </h1>
                      <div className="pbmit-sticky-corner  pbmit-top-right-corner">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20 20V0C20 16 16 20 0 20H20Z" fill="red" />
                        </svg>
                      </div>
                      <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20 20V0C20 12 12 20 0 20H20Z" fill="red" />
                        </svg>
                      </div>
                    </div>
                    <div className="pbmit-button-box">
                      <div className="pbmit-header-button">
                        <a href="tel:+1(212)%20255-511">
                          <span className="pbmit-header-button-text-1">
                            +1(212) 255-511
                          </span>
                          <span className="pbmit-header-button-text-2">
                            tel:+1(212) 255-511
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="site-navigation">
                    <nav className="main-menu navbar-expand-xl navbar-light">
                      <div className="navbar-header">
                        {/* Toggle Button */}
                        <button className="navbar-toggler" type="button">
                          <i className="pbmit-base-icon-menu-1" />
                        </button>
                      </div>
                      <div className="pbmit-mobile-menu-bg" />
                      <div
                        className="collapse navbar-collapse clearfix show"
                        id="pbmit-menu"
                      >
                        <div className="pbmit-menu-wrap">
                          <span className="closepanel">
                            <svg
                              className="qodef-svg--close qodef-m"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.163"
                              height="20.163"
                              viewBox="0 0 26.163 26.163"
                            >
                              <rect
                                width={36}
                                height={1}
                                transform="translate(0.707) rotate(45)"
                              />
                              <rect
                                width={36}
                                height={1}
                                transform="translate(0 25.456) rotate(-45)"
                              />
                            </svg>
                          </span>
                          <ul className="navigation clearfix">
                            <li className="dropdown">
                              <a href="index-2.html">Home</a>
                              <ul>
                                <li>
                                  <a href="index-2.html">Homepage 01</a>
                                </li>
                                <li>
                                  <a href="homepage-2.html">Homepage 02</a>
                                </li>
                                <li>
                                  <a href="homepage-3.html">Homepage 03</a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="#">Pages</a>
                              <ul>
                                <li>
                                  <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                  <a href="our-history.html">Our History</a>
                                </li>
                                <li>
                                  <a href="our-team.html">Our Team</a>
                                </li>
                                <li>
                                  <a href="team-single-details.html">
                                    Team Single Details
                                  </a>
                                </li>
                                <li>
                                  <a href="faq.html">Faq</a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown active">
                              <a href="#">Services</a>
                              <ul>
                                <li className="active">
                                  <a href="service-details.html">
                                    Service Detail
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="#">Portfolio</a>
                              <ul>
                                <li className="dropdown">
                                  <a href="#">Masonry View</a>
                                  <ul>
                                    <li>
                                      <a href="portfolio-m-grid-col-2.html">
                                        Grid Col 2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-m-grid-col-3.html">
                                        Grid Col 3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-m-grid-col-4.html">
                                        Grid Col 4
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-m-grid-col-wide.html">
                                        Grid Wide
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown">
                                  <a href="#">Grid View</a>
                                  <ul>
                                    <li>
                                      <a href="portfolio-grid-col-2.html">
                                        Grid Col 2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-grid-col-3.html">
                                        Grid Col 3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-grid-col-4.html">
                                        Grid Col 4
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-grid-no-gap.html">
                                        Grid No Gap
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown">
                                  <a href="#">Sortable View</a>
                                  <ul>
                                    <li>
                                      <a href="portfolio-sortable-grid-col-2.html">
                                        Grid Col 2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-sortable-grid-col-3.html">
                                        Grid Col 3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-sortable-grid-col-4.html">
                                        Grid Col 4
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown">
                                  <a href="#">Single Detail Style</a>
                                  <ul>
                                    <li>
                                      <a href="portfolio-detail-style-1.html">
                                        Portfolio Detail Style 1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-detail-style-2.html">
                                        Portfolio Detail Style 2
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="#">Blogs</a>
                              <ul>
                                <li className="dropdown">
                                  <a href="#">Blog Masonry View</a>
                                  <ul>
                                    <li>
                                      <a href="blog-m-grid-col-2.html">
                                        Grid Col 2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-m-grid-col-3.html">
                                        Grid Col 3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-m-grid-col-4.html">
                                        Grid Col 4
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-masonry-wide.html">
                                        Masonry Wide
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown">
                                  <a href="#">Blog Grid View</a>
                                  <ul>
                                    <li>
                                      <a href="blog-grid-col-2.html">
                                        Grid Col 2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-grid-col-3.html">
                                        Grid Col 3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-grid-col-4.html">
                                        Grid Col 4
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-sortable-grid-view.html">
                                        Sortable Grid View
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="blog-classic.html">Blog Classic</a>
                                </li>
                                <li>
                                  <a href="blog-single-details.html">
                                    Blog Single Details
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="contact-us.html">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="pbmit-right-box d-flex align-items-center">
                    <div className="pbmit-header-search-btn">
                      <a href="#" title="Search">
                        <i className="pbmit-base-icon-search-1" />
                      </a>
                    </div>
                    <div className="pbmit-button-box-second">
                      <a className="pbmit-btn" href="contact-us.html">
                        <span className="pbmit-button-content-wrapper">
                          <span className="pbmit-button-text">
                            Book Consult
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header Main Area End Here */}
        {/* Title Bar */}
        <div className="pbmit-title-bar-wrapper">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title"> Design &amp; Planning</h1>
                  </div>
                </div>
                <div className="pbmit-breadcrumb">
                  <div className="pbmit-breadcrumb-inner">
                    <span>
                      <a title href="#" className="home">
                        <span>Xinterio</span>
                      </a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-right" />
                    </span>
                    <span>
                      <a title href="#" className="home">
                        <span>Services</span>
                      </a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-right" />
                    </span>
                    <span>
                      <a title href="#" className="home">
                        <span>Kitchen</span>
                      </a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-right" />
                    </span>
                    <span>
                      <span className="post-root post post-post current-item">
                        {" "}
                        Design &amp; Planning
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Title Bar End*/}
        {/* Page Content */}
        <div className="page-content">
          {/* Service Details */}
          <section className="site-content service-details">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 service-right-col">
                  <div className="pbmit-service-feature-image">
                    <img
                      src="images/service/service-det-01.jpg"
                      className="img-fluid w-100"
                      alt
                    />
                  </div>
                  <div className="pbmit-entry-content">
                    <div className="pbmit-service-content">
                      <div className="pbmit-heading animation-style2">
                        <h3 className="pbmit-title mb-3">
                          Our Goal is to Create Incredible Custom Interior
                          Design
                        </h3>
                      </div>
                      <p className="pbmit-firstletter">
                        Monsidering the physical, mental, and emotional needs of
                        people, interior designers use human-centered approaches
                        to address how we live today. Creating novel approaches
                        to promoting health, safety, and welfare, contemporary
                        interiors are increasingly inspired by biophilia as a
                        holistic approach to promoting health, safety, and
                        welfare, contemporary interiors are increasingly
                        inspired by biophilia as a holistic approach to design.
                        By definition, interior design encompasses diverse
                        aspects of our environment. The discipline extends to
                        building materials and finishes; casework, furniture.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xinterio-icon pbmit-xinterio-icon-tick-mark"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Experienced, time-served engineers
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xinterio-icon pbmit-xinterio-icon-tick-mark"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Commitment to customer service
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xinterio-icon pbmit-xinterio-icon-tick-mark"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Commitment to taking the stress out of your
                                project.
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xinterio-icon pbmit-xinterio-icon-tick-mark"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Flexible with any structure of the building
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xinterio-icon pbmit-xinterio-icon-tick-mark"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Experienced, time-served engineers
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xinterio-icon pbmit-xinterio-icon-tick-mark"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Commitment to customer service
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xinterio-icon pbmit-xinterio-icon-tick-mark"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Commitment to taking the stress out of your
                                project.
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="pbmit-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xinterio-icon pbmit-xinterio-icon-tick-mark"
                                />
                              </span>
                              <span className="pbmit-icon-list-text">
                                Flexible with any structure of the building
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="service-det-img">
                        <div className="row">
                          <div className="col-md-6 text-center">
                            <div className="pbmit-animation-style1">
                              <img
                                src="images/service/service-det-02.jpg"
                                className="img-fluid"
                                alt
                              />
                            </div>
                          </div>
                          <div className="col-md-6 text-center">
                            <div className="pbmit-animation-style2">
                              <img
                                src="images/service/service-det-03.jpg"
                                className="img-fluid"
                                alt
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        In design, we bring characteristics of the natural world
                        into built spaces, such as water, greenery, and natural
                        light, or elements like wood and stone. Encouraging the
                        use of natural systems and processes in design allows
                        for exposure to nature, and in turn, these design
                        approaches improve health and wellbeing. There are a
                        number of possible benefits, including reduced heart
                        rate variability and pulse rates, decreased blood
                        pressure, and increased activity in our nervous systems,
                        to name a few.
                      </div>
                      <div className="fid-style-rea">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="pbminfotech-ele-fid-style-3">
                              <div className="pbmit-fld-contents">
                                <div
                                  className="pbmit-circle-outer"
                                  data-digit={87}
                                  data-fill="#bb9a65"
                                  data-emptyfill
                                  data-before
                                  data-after="<span>%</span>"
                                  data-thickness="1.5"
                                  data-size={153}
                                >
                                  <div className="pbmit-circle">
                                    <div className="pbmit-fid-inner">
                                      <span className="pbmit-fid-before" />
                                      <span
                                        className="pbmit-number-rotate numinate"
                                        data-appear-animation="animateDigits"
                                        data-from={0}
                                        data-to={87}
                                        data-interval={5}
                                        data-before
                                        data-before-style
                                        data-after
                                        data-after-style
                                      >
                                        87
                                      </span>
                                      <span className="pbmit-fid">
                                        <span>%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="pbmit-fid-sub">
                                  <h3 className="pbmit-fid-title">
                                    3D modeling
                                  </h3>
                                  <div className="pbmit-heading-desc">
                                    Studio provides a full range of 3D interior
                                    modeling
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pbminfotech-ele-fid-style-3">
                              <div className="pbmit-fld-contents">
                                <div
                                  className="pbmit-circle-outer"
                                  data-digit={57}
                                  data-fill="#bb9a65"
                                  data-emptyfill
                                  data-before
                                  data-after="<span>%</span>"
                                  data-thickness="1.5"
                                  data-size={153}
                                >
                                  <div className="pbmit-circle">
                                    <div className="pbmit-fid-inner">
                                      <span className="pbmit-fid-before" />
                                      <span
                                        className="pbmit-number-rotate numinate"
                                        data-appear-animation="animateDigits"
                                        data-from={0}
                                        data-to={57}
                                        data-interval={5}
                                        data-before
                                        data-before-style
                                        data-after
                                        data-after-style
                                      >
                                        57
                                      </span>
                                      <span className="pbmit-fid">
                                        <span>%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="pbmit-fid-sub">
                                  <h3 className="pbmit-fid-title">
                                    Room Measurement
                                  </h3>
                                  <div className="pbmit-heading-desc">
                                    Studio provides a full range of 3D interior
                                    modeling
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="pbminfotech-ele-fid-style-3">
                              <div className="pbmit-fld-contents">
                                <div
                                  className="pbmit-circle-outer"
                                  data-digit={99}
                                  data-fill="#bb9a65"
                                  data-emptyfill
                                  data-before
                                  data-after="<span>%</span>"
                                  data-thickness="1.5"
                                  data-size={153}
                                >
                                  <div className="pbmit-circle">
                                    <div className="pbmit-fid-inner">
                                      <span className="pbmit-fid-before" />
                                      <span
                                        className="pbmit-number-rotate numinate"
                                        data-appear-animation="animateDigits"
                                        data-from={0}
                                        data-to={99}
                                        data-interval={5}
                                        data-before
                                        data-before-style
                                        data-after
                                        data-after-style
                                      >
                                        99
                                      </span>
                                      <span className="pbmit-fid">
                                        <span>%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="pbmit-fid-sub">
                                  <h3 className="pbmit-fid-title">
                                    2d planning
                                  </h3>
                                  <div className="pbmit-heading-desc">
                                    Studio provides a full range of 3D interior
                                    modeling
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-heading animation-style2">
                        <h3 className="pbmit-title">
                          Frequently asked questions
                        </h3>
                      </div>
                      <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud laboris nisi ut aliquip ex ea
                        commodo consequat. fugiat nulla pariatur. Nemo enim
                        ipsam voluptatem quia voluptas voluptatem.
                      </p>
                      <div className="accordion" id="accordionExample1">
                        <div className="accordion-item active">
                          <h2 className="accordion-header" id="heading1">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                              aria-expanded="false"
                              aria-controls="collapse1"
                            >
                              <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                <span className="pbmit-accordion-icon-closed">
                                  <svg
                                    className="e-font-icon-svg e-fas-plus"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </span>
                                <span className="pbmit-accordion-icon-opened">
                                  <svg
                                    className="e-font-icon-svg e-fas-minus"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </span>
                              </span>
                              <span className="pbmit-accordion-title">
                                What is 3D design and how it work?
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="heading1"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don’t look even slightly
                                believable
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse2"
                              aria-expanded="false"
                              aria-controls="collapse2"
                            >
                              <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                <span className="pbmit-accordion-icon-closed">
                                  <svg
                                    className="e-font-icon-svg e-fas-plus"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </span>
                                <span className="pbmit-accordion-icon-opened">
                                  <svg
                                    className="e-font-icon-svg e-fas-minus"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </span>
                              </span>
                              <span className="pbmit-accordion-title">
                                How interior design is cost?
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapse2"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading2"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              <p>
                                If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there isn’t anything
                                embarrassing hidden in the middle of text. All
                                the Lorem Ipsum generators.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading3">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse3"
                              aria-expanded="false"
                              aria-controls="collapse3"
                            >
                              <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                <span className="pbmit-accordion-icon-closed">
                                  <svg
                                    className="e-font-icon-svg e-fas-plus"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </span>
                                <span className="pbmit-accordion-icon-opened">
                                  <svg
                                    className="e-font-icon-svg e-fas-minus"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </span>
                              </span>
                              <span className="pbmit-accordion-title">
                                How much time I will spend on planning?
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapse3"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading3"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don’t look even slightly
                                believable
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="heading4">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapse4"
                            >
                              <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                                <span className="pbmit-accordion-icon-closed">
                                  <svg
                                    className="e-font-icon-svg e-fas-plus"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </span>
                                <span className="pbmit-accordion-icon-opened">
                                  <svg
                                    className="e-font-icon-svg e-fas-minus"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </span>
                              </span>
                              <span className="pbmit-accordion-title">
                                Can I create custom design?
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapse4"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading4"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              <p>
                                If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there isn’t anything
                                embarrassing hidden in the middle of text. All
                                the Lorem Ipsum generators.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 service-left-col sidebar">
                  <aside className="service-sidebar">
                    <aside className="widget post-list">
                      <h2 className="widget-title">Our Service</h2>
                      <div className="all-post-list">
                        <ul>
                          <li>
                            <a href="service-details.html">
                              {" "}
                              Transforming Rooms{" "}
                            </a>
                          </li>
                          <li>
                            <a href="service-details.html"> Weaving Dreams </a>
                          </li>
                          <li>
                            <a href="service-details.html">
                              {" "}
                              Interior Decorator{" "}
                            </a>
                          </li>
                          <li>
                            <a href="service-details.html">
                              {" "}
                              Professional Interior{" "}
                            </a>
                          </li>
                          <li>
                            <a href="service-details.html">
                              {" "}
                              Interior Work Plan{" "}
                            </a>
                          </li>
                          <li>
                            <a href="service-details.html"> 2D/3D Layouts </a>
                          </li>
                        </ul>
                      </div>
                    </aside>
                    <aside className="widget pbmit-service-ad">
                      <div className="textwidget">
                        <div className="pbmit-service-ads">
                          <h5 className="pbmit-ads-subheding">
                            Our Newsletter
                          </h5>
                          <h4 className="pbmit-ads-subtitle">
                            Ready to start learn ?
                          </h4>
                          <h3 className="pbmit-ads-title">Sign up now!</h3>
                          <div className="pbmit-ads-desc">
                            <i className="pbmit-base-icon-phone-call-1" />
                            +(123) 1234-567-8901
                          </div>
                          <a
                            className="pbmit-btn pbmit-btn-hover-white"
                            href="#"
                          >
                            <span className="pbmit-button-content-wrapper">
                              <span className="pbmit-button-text">
                                Register now
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </aside>
                    <aside className="widget pbmit-download-content">
                      <h2 className="widget-title">Company profile</h2>
                      <div className="textwidget">
                        <div className="download">
                          <div className="item-download">
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="pbmit-download-content">
                                <i className="pbmit-base-icon-pdf-file-format-symbol-1" />{" "}
                                Download Pdf File
                              </span>
                              <span className="pbmit-download-item">
                                <i className="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-download" />
                              </span>
                            </a>
                          </div>
                          <div className="item-download">
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="pbmit-download-content">
                                <i className="pbmit-base-icon-pdf-file-format-symbol-1" />{" "}
                                Download Word File
                              </span>
                              <span className="pbmit-download-item">
                                <i className="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-download" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* Service Details End */}
        </div>
        {/* Page Content End */}
        {/* footer */}
        <footer className="site-footer footer-style-1 pbmit-bg-color-secondary">
          <div className="footer-wrap pbmit-footer-widget-area">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <aside className="widget pbmit-two-column-menu">
                    <ul>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="our-team.html">Our Team</a>
                      </li>
                      <li>
                        <a href="our-history.html">Our History</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="blog-grid-col-4.html">Blog</a>
                      </li>
                      <li>
                        <a href="service-details.html">Service</a>
                      </li>
                      <li>
                        <a href="team-single-details.html">Team Member</a>
                      </li>
                      <li>
                        <a href="portfolio-detail-style-1.html">Project</a>
                      </li>
                    </ul>
                  </aside>
                </div>
                <div className="col-md-4">
                  <aside className="widget">
                    <div className="textwidget">
                      <div className="pbmit-footer-logo">
                        <img src="images/favicon.svg" alt />
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="col-md-4">
                  <aside className="widget pbmit-two-column-menu">
                    <ul>
                      <li>
                        <a href="#">Style Guide</a>
                      </li>
                      <li>
                        <a href="#">Instructions</a>
                      </li>
                      <li>
                        <a href="#">Licenses</a>
                      </li>
                      <li>
                        <a href="#">Changelog</a>
                      </li>
                      <li>
                        <a href="#">Error 404</a>
                      </li>
                      <li>
                        <a href="#">Password</a>
                      </li>
                      <li>
                        <a href="#">Protected</a>
                      </li>
                      <li>
                        <a href="#">Coming Soon</a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="pbmit-footer-big-area-wrapper">
            <div className="footer-wrap pbmit-footer-big-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4 pbmit-footer-left">
                    <span className="pbmit-email-text"> hello@example.com</span>
                    <span className="pbmit-phone-number"> +79 2589 63598</span>
                  </div>
                  <div className="col-md-4 pbmit-footer-right">
                    <span className="pbmit-address">
                      {" "}
                      Chicago HQ Estica cop, <br />
                      Macomb,MI 48042
                    </span>
                  </div>
                  <div className="col-md-4 pbmit-footer-right-social">
                    <ul className="pbmit-social-links">
                      <li className="pbmit-social-li pbmit-social-facebook">
                        <a title="Facebook" href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-facebook-f" />
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-twitter">
                        <a title="Twitter" href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-twitter-2" />
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-linkedin">
                        <a title="LinkedIn" href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-linkedin-in" />
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-instagram">
                        <a title="Instagram" href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-instagram" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pbmit-footer-text-area">
            <div className="container">
              <div className="pbmit-footer-text-inner">
                <div className="row">
                  <div className="col-md-12">
                    <div className="pbmit-footer-copyright-text-area">
                      {" "}
                      Copyright © 2024 <a href="index-2.html">Xinterio Demo1</a>
                      , All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer End */}
      </div>
    </div>
  );
}

export default page;
