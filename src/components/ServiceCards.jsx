import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Gradient } from "./design/Roadmap";

const ServiceCards = ({ onScrollToCard }) => {
  return (
    <Section id="services">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Living in the Solution, with Raising Consciousness"
        />
        <div className="flex flex-wrap gap-10 mb-10 lg:flex-row">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5 gradient-animation">{item.title}</h5>
                <p className="body-2 lg:mb-6 mb-2 text-n-3">{item.text}</p>
                <button
                  className="mt-auto py-2 px-4 bg-color-1 text-n-1 rounded-lg hover:bg-color-5 hover:text-black transition-colors"
                  onClick={() => onScrollToCard(index)}
                >
                  More Info
                </button>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default ServiceCards;
