import { useRef } from "react";
import ServiceCards from "./ServiceCards";
import Collaboration from "./Collaboration";

const ServicesPage = () => {
  const collaborationRef = useRef(null); // Ref for Collaboration component

  // Function to handle scrolling to a specific card
  const handleScrollToCard = (index) => {
    if (collaborationRef.current) {
      collaborationRef.current.scrollToCard(index); // Trigger scroll on Collaboration
    }
  };

  return (
    <>
      <ServiceCards onScrollToCard={handleScrollToCard} />
      <Collaboration ref={collaborationRef} />
    </>
  );
};

export default ServicesPage;
