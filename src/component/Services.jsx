import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../asset/3.jpg";
import img2 from "../asset/4.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel> 

      <section class="project">
          <h1>Upcoming Programming Contests: Never Miss a Coding Challenge Again</h1>
          <p class="lo">
          Upcoming Programming Contests: Never Miss a Coding Challenge Again!" is a helpful guide for programmers and coding enthusiasts who want to stay up-to-date with the latest programming contests and challenges. It provides a comprehensive list of upcoming programming competitions along with their dates, time, and registration links. With this guide, programmers can stay on top of their game and make sure they never miss a chance to showcase their skills and compete with the best in the field.
          </p>
          <a class="ko" href="https://manashmodi.github.io/job-programing/code.html">View Upcoming Programming Contests</a>
        </section>
        <section class="project">
          <h1>Explore Your Future: View Upcoming Software Engineering Jobs Now</h1>
          <p class="lo">Looking for your next career move in software engineering? Don't miss out on any job opportunities. Explore your future by viewing upcoming software engineering jobs now. Stay ahead of the game and be the first to apply to the best job openings in the industry.</p>
          <a class="ko" href="https://manashmodi.github.io/job-programing/job.html">View Upcoming Software Engineering Jobs Now</a>
        </section>
    </div>
    
  );
};

export default Services;