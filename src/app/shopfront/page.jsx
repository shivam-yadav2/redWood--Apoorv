import Navbar from "@/components/Navbar";
import React from "react";
import "./shopfront.css"
function page() {
  return (
    <div>
      <div className="page-wrapper" id="page">
        {/* Header Main Area */}
        <header className="site-header header-style-1">
          <Navbar />
        </header>
        {/* Header Main Area End Here */}
        {/* Title Bar */}
        <div className="pbmit-title-bar-wrapper">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title"> Minimalism</h1>
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
                        <span>Portfolio</span>
                      </a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-right" />
                    </span>
                    <span>
                      <a title href="#" className="home">
                        <span>Furniture</span>
                      </a>
                    </span>
                    <span className="sep">
                      <i className="pbmit-base-icon-angle-right" />
                    </span>
                    <span>
                      <span className="post-root post post-post current-item">
                        {" "}
                        Minimalism
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
          {/* Portfolio Detail Style 1 */}
          <section className="site-content">
            <div className="container">
              <article className="portfolio-single">
                <div className="pbmit-short-description">
                  <h3>Aluminum Shop Fronts</h3>
                  <p>
                    Shop fronts are designed to make the best possible utilization of the accessible space and light, and we might meet any.design which you come up with. Aluminum provides an exceptional solution in the construction industry. It resistant to the usual corrosion that’s caused by today’s atmospheric pollutants. It’s lightweight but in the same time lasting and strong, allowing architects to have a sizable repertoire of possible designs.
                  </p>
                </div>

                <div className="pbmit-featured-img-wrapper">
                  <div className="pf-img-box">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex image-container">
                          <div className="image-box left">
                            <img
                              src="images/portfolio/portfolio-detail-01.jpg"
                              className="img-fluid"
                              alt="Portfolio Detail 01"
                            />
                          </div>
                          <div className="image-box middle">
                            <img
                              src="images/portfolio/portfolio-detail-02.jpg"
                              className="img-fluid"
                              alt="Portfolio Detail 02"
                            />
                          </div>
                          <div className="image-box right">
                            <img
                              src="images/portfolio/portfolio-detail-03.jpg"
                              className="img-fluid"
                              alt="Portfolio Detail 03"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pbmit-entry-content">
                  <div className="pbmit-heading animation-style2">
                    <h2 className="pbmit-title">Design in Details</h2>
                  </div>
                  <p className="pbmit-firstletter">
                    We are make interior spaces functional, safe, and beautiful
                    for almost every type of building. Interior designers make
                    indoor spaces functional, safe, and beautiful by determining
                    space requirements and selecting essential and decorative
                    items,{" "}
                    <span className="pbmit-globalcolor">
                      <u>such as colors, lighting, and materials.</u>
                    </span>{" "}
                    Interior design can transform spaces, making them visually
                    appealing and functional. Improved functionality It
                    optimizes spaces for better use, ensuring efficient layouts
                    and maximizing functionality.
                  </p>
                  <p>
                    Our skilled designers and professionals are strive to
                    provide exceptional interior design services that exceed
                    your expectations. Interior designing is a highly lucrative
                    business, but it takes some time to build a high income from
                    this profession. Overall, interior design is an important
                    aspect of architecture that focuses on creating functional,
                    visually appealing, and comfortable interior spaces that
                    meet the needs of the building’s occupants.
                  </p>

                  <div className="portfolio-video-bg animated fadeInRight animated-slow">
                    <div className="play-button">
                      <a
                        className="pbmit-icon pbmin-lightbox-video"
                        href="https://www.youtube.com/watch?v=Sv2_JktdvmQ"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>

              </article>
            </div>
          </section>
          {/* Portfolio Detail Style 1 End */}
        </div>
        {/* Page Content End */}
      </div>
    </div>
  );
}

export default page;

