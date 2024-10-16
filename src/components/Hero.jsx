import { curve, heroBackground } from "../assets";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h2 mb-8 gradient-animation">
            <span className="inline-block relative gradient-animation uppercase lg:mt-60 font-bold sm:mt-20">
              Raising Consciousness{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-4 text-n-2 lg:mb-8">
            Uplifting Youth and Communities by Providing Training , Awareness
            and Solutions to Social Issues
          </p>
        </div>

        <div className="absolute -top-[35%] left-0 h-screen">
          <img
            src={heroBackground}
            className="w-screen opacity-65"
            width={1440}
            height={1800}
            alt="hero"
          />
        </div>

        <BackgroundCircles />
      </div>
    </Section>
  );
};

export default Hero;
