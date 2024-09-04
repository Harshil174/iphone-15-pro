import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animations";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", {
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
    });

    animateWithGsap(".link", {
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="h-full w-screen overflow-hidden common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex justify-between items-center">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex gap-5 items-center flex-wrap">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right-arrow" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
