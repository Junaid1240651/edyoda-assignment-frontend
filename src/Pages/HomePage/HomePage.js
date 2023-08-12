import React from "react";
import "./HomePage.css";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Subscription from "../../Components/Subscription/Subscription";
import Navbar from "../../Components/Navbar/Navbar";
const HomePage = () => {
  return (
    <div className="ioaerwdf">
      <Navbar />
      <div className="homeContainer">
        <CourseDetails />
        <Subscription />
      </div>
    </div>
  );
};

export default HomePage;
