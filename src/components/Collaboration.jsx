import { services } from "../constants";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useRef, forwardRef, useImperativeHandle } from "react";

const Collaboration = forwardRef((props, ref) => {
  const cardRefs = useRef([]);

  useImperativeHandle(ref, () => ({
    scrollToCard: (index) => {
      if (cardRefs.current[index]) {
        cardRefs.current[index].scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Card ref not found for index:", index);
      }
    },
  }));

  return (
    <Section crosses>
      <div className="container w-full flex flex-wrap flex-row gap-10">
        {services.map((item, index) => (
          <div
            key={item.id}
            id={`card-${item.id}`}
            ref={(el) => (cardRefs.current[index] = el)}
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] bg-gradient-to-r from-orange-300 via-green-500 to-blue-500 rounded-lg"
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h4 className="h4 mb-5 gradient-animation text-center">
                {item.title}
              </h4>
              <p className="body-2 mb-6 text-n-2 whitespace-pre-line">
                {item.text}
              </p>
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
    </Section>
  );
});

Collaboration.displayName = "Collaboration";

export default Collaboration;
