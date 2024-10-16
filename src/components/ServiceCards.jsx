// Importing SVGs with relative paths
import card1 from "../assets/card-1.svg";
import card2 from "../assets/card-2.svg";
import card3 from "../assets/card-3.svg";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Gradient } from "./design/Roadmap";

const updatedBenefits = [
  {
    id: 1,
    backgroundUrl: card1,
    imageUrl: card1,
    title: "Community Programmes",
    text: "Equipping adolescents and parents with life skills workshops to navigate present-day challenges and human experiences. Learn healthy coping mechanisms, emotional regulation, and build strong foundations for individuals and families.",
    light: true,
  },
  {
    id: 2,
    backgroundUrl: card2,
    imageUrl: card2,
    title: "Counselling",
    text: "Our network of highly trained therapists provides individual, family, and group counselling. We address a wide range of concerns, including grief, anger management, addictions, trauma, and relationship issues. In-person and online sessions are available.",
    light: true,
  },
  {
    id: 3,
    backgroundUrl: card3,
    imageUrl: card3,
    title: "Courses",
    text: "We offer a variety of courses designed to raise consciousness in all aspects of life. Find workshops and training programs for individuals, families, businesses, and schools, including soft skills development, team building, and conflict resolution.",
    light: true,
  },
];

const ServiceCards = ({ onScrollToCard }) => {
  return (
    <Section id="services">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Living in the Solution, with Raising Consciousness"
        />
        <div className="flex flex-wrap gap-10 mb-10 lg:gap-8 lg:flex-row justify-center">
          {updatedBenefits.map((item, index) => (
            <div
              className="block relative p-1 w-full md:w-[48%] lg:w-[30%] max-w-[24rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-lg"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col h-full min-h-[22rem] p-[2.4rem]">
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
