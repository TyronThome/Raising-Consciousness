import Section from "./Section";
import Heading from "./Heading";
import { Gradient } from "./design/Roadmap";
import companyLogo from "../assets/logo.webp";
import directorImage from "../assets/director.webp";
import Carousel from "./Carousel";

const About = () => {
  return (
    <Section className="overflow-hidden" id="about">
      <div className="container relative z-2">
        <Heading
          tag="The roots of Raising Consciousness"
          title="Who we are"
          className="gradient-animation"
        />

        <Gradient />

        <h4 className="h4 flex justify-center text-n-2">About Us </h4>
        <div className="flex justify-center mt-4">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-[150px] h-auto mb-4"
          />
        </div>
        <div className="container flex justify-center items-center">
          <p className="text-n-3">
            Many people view consciousness as a highly evolved spiritual state
            achieved through a guru, a trip to India, or hours of meditation. In
            reality, it&apos;s a much simpler concept. By reflecting on
            ourselves—our behaviors, thoughts, attitudes, and actions—and
            understanding how they affect both ourselves and others, we begin to
            raise our consciousness. <br />
            <br />
            When we gain clarity about what is working and what isn’t in our
            lives, we are better equipped to find solutions and take action. We
            encourage individuals to become the best versions of themselves and
            to strive for daily improvements, no matter how small. When we
            enhance ourselves, we ultimately improve our world. <br />
            <br />
            Raising Consciousness is a platform dedicated to providing
            information, resources, and solutions to elevate consciousness
            across all areas of society, including homes, workplaces, and
            schools. <br />
            <br />
            We offer a series of life skills workshops and courses designed for
            adolescents and parents, equipping them with the tools needed to
            navigate the challenges of modern life. <br />
            <br />
            Recognizing the impact an individual can have on a group, we also
            design courses and workshops tailored for companies and
            organizations. Our staff training and soft skills programs foster
            team cohesion and cooperation, creating optimal work environments.
            Additionally, we provide mediation, group facilitation, and
            intervention services. <br />
            <br />
            Established as a Non-Profit Company in 2019, Raising Consciousness
            has sponsored thousands of learners through our school programmes
            and trained facilitators to deliver training in English, Afrikaans,
            and Xhosa. We aim to expand our reach into as many schools as
            possible and rely on donations to achieve this goal. If you would
            like to contribute personally or through your company, please click
            the donate button on our website or WhatsApp us to discuss. <br />
          </p>
        </div>

        <h4 className="h4 flex justify-center text-n-2 mt-6">
          About Our Director{" "}
        </h4>
        <div className="flex justify-center mt-4">
          <img
            src={directorImage}
            alt="Director"
            className="w-[150px] h-auto rounded-full mb-4"
          />
        </div>
        <div className="container flex justify-center items-center">
          <p className="text-n-3">
            Taryn&apos;s career has been deeply rooted in substance abuse
            programs, life skills training, and therapeutic work with both
            adolescents and adults. Her journey began in 2000 when she started
            working with an NGO, where she played a key role in designing,
            coordinating, and facilitating substance abuse programmes across
            schools in South Africa. She worked closely with teachers, learners,
            and parents, extending her expertise to policy design in education
            and industry regarding drug and alcohol abuse. Taryn also
            participated in notable committees, such as the Western Cape Alcohol
            and Drug Abuse Forum, and contributed to a UN-related program aimed
            at community-based rehabilitation services.
            <br />
            <br />
            In collaboration with the Medical Research Council of South Africa,
            Taryn conducted focus group research on the correlation between
            teenage drinking and the spread of HIV/AIDS. This exposure to youth
            trauma motivated her to further her studies at the South African
            College of Applied Psychology. With her newfound knowledge, she
            worked at prominent addiction treatment centers like Dots Plot,
            Forest Lake Clinic, Stepping Stones, Harmony House, and Kenilworth
            Clinic. Over 13 years, she developed expertise in various treatment
            approaches for co-dependency, eating disorders, gambling, sex,
            gaming, drug, and alcohol addictions.
            <br />
            <br />
            Taryn&apos;s affinity for group therapy facilitation allowed her to
            gain invaluable experience, particularly in addressing emotional
            regulation, self-esteem, boundaries, and interpersonal communication
            in her clients. She integrated life skills training into many of the
            treatment programmes she designed, believing that equipping people
            with healthy coping skills is essential for long-term recovery. Her
            experiences working with trauma and addiction sparked the idea that
            teaching life skills to adolescents early on could prevent the need
            for rehabilitation later in life.
            <br />
            <br />
            A personal tragedy, the loss of her partner, led Taryn to take a
            break from her therapeutic work. After successfully designing and
            running a secondary care program for Kenilworth Clinic, she took
            time away from the field to heal. During this period, she found
            success in property sales. However, as her son turned 21, Taryn
            began reflecting on what it takes to raise a balanced, healthy
            adult, and she felt called to return to a more purposeful path.
            <br />
            <br />
            Inspired by her reflections on parenting and personal growth, Taryn
            designed a series of workshops for adolescents focused on building
            life skills. These workshops aim to help young people manage
            emotions, develop resilience, and achieve self-actualization. She
            created an 8-workshop course that allows teens and young adults to
            gain a sense of identity and purpose, equipping them with tools to
            navigate life more effectively.
            <br />
            <br />
            To bring her vision to life, Taryn founded Raising Consciousness, an
            organization that provides access to resources and services aimed at
            helping people live happier, healthier lives. Through this
            initiative, she hopes to inspire young people to make healthy
            choices, act as positive role models, and take responsibility for
            their personal growth. Her ultimate goal is to make these life
            skills programs available to all communities, empowering adolescents
            to become the best versions of themselves.
          </p>
        </div>

        <Carousel />
      </div>
    </Section>
  );
};

export default About;
