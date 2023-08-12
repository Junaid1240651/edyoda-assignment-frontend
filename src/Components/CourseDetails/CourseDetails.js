import React from "react";
import studyIcon from "../../Icons/study.png";
import adsIcon from "../../Icons/ads.png";
import bookIcon from "../../Icons/book.png";
import timerIcon from "../../Icons/timerr.png";
import tvIcon from "../../Icons/tv.png";
import "./CourseDetails.css";

const CourseDetails = () => {
  return (
    <div className="course-details-container">
      <div className="course-pricing">
        <p>Access curated courses worth</p>
        <p>
          <span className="cut-text">₹ 18,500</span> at just{" "}
          <span className="colored">₹ 99</span> per year!
        </p>
      </div>
      <div className="course-features">
        <div className="feature-icons">
          <img src={bookIcon} alt="Book" />
          <img src={timerIcon} alt="Timer" />
          <img src={tvIcon} alt="TV" />
          <img src={studyIcon} alt="Study" />
          <img src={adsIcon} alt="Ads" />
        </div>
        <div className="feature-descriptions">
          <p>
            <span className="colored">100+</span> Job relevant courses{" "}
          </p>
          <p>
            <span className="colored">20,000+</span> Hours of content{" "}
          </p>
          <p>
            <span className="colored">Exclusive</span> webinar access{" "}
          </p>
          <p>
            Scholarship worth <span className="colored">₹94,500</span>{" "}
          </p>
          <p>
            <span className="colored">Ad Free</span> learning experience{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
