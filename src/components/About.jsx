import Section from "./Section";
// import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import { Gradient } from "./design/Roadmap";
import companyLogo from "../assets/image-2.webp";
import directorImage from "../assets/director.webp";

// ABOUT SECTION

const About = () => {
  return (
    <Section className="overflow-hidden" id="about">
      <div className="container relative z-2">
        {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
        <img
          src={smallSphere}
          className="relative z-1"
          width={255}
          height={255}
          alt="Sphere"
        />
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </div> */}

        <Heading
          tag="The roots of Raising Consciousness"
          title="Who we are"
          className="gradient-animation"
        />

        <Gradient />

        <h4 className="h4 flex justify-center text-n-2">About us </h4>
        <div className="flex justify-center mt-4">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-[150px] h-auto mb-4"
          />
        </div>
        <div className="container flex justify-center items-center">
          <p className="text-n-3">
            Many people think consciousness is some kind of highly evolved
            spiritual thing one achieves through a guru, and perhaps a trip to
            India and hours of meditating, or such like. <br />
            In fact, it is a simple thing. By looking at oneself and becoming
            aware of our behaviours, thoughts, attitudes and actions, and how
            they affect ourselves and others, we are becoming more conscious,
            and thereby raising our consciousness. <br />
            When we have a better understanding of what is, and what isn’t
            working for us in our lives, and why, then we are better able to
            find solutions and get into action. We encourage individuals to
            become the best version of themselves and encourage people to
            endeavour to improve themselves and their environment each day in
            one small way. When we improve ourselves, we improve our world.{" "}
            <br />
            Raising Consciousness is a platform set up to supply information,
            resources and solutions to assist the raising of consciousness in
            all areas of society, including the home, workplace, and schools.{" "}
            <br />
            We offer a series of life skills workshops and courses designed for
            adolescents and parents, to better equip them with living skills to
            enable them deal with the challenges of our current times and being
            human. <br />
            Because we understand and create awareness of the effect an
            individual has on a group, we have designed courses and workshops to
            assist companies and corporates with staff training and soft skills
            courses for the workplace. We assist corporations to build team
            cohesion and cooperation to create an optimum work environment. We
            also assist with mediation, group facilitation and intervention.{" "}
            <br />
            Established as an Non-Profit Company in 2019, Raising Consciousness
            has sponsored thousands of learners through their school programmes
            and trained facilitators in providing the training in English,
            Afrikaans and Xhosa. We aim to continue to spread the awareness
            through as many schools as possible and rely on donations to enable
            us to do this. If you would like to donate personally or through
            your company please push the donate button on our website or
            whatsapp us to discuss.
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
            In 2000, Taryn started working with an NGO which provided Substance
            Abuse Programmes and life skills training to learners, teachers and
            parents in a multitude of schools nationwide. Taryn was instrumental
            with the designing, co-ordination and facilitation of the
            programmes, and the workshopping and implementation of drug and
            alcohol policies in the areas of education and industry, as well as
            the training of educators, parents and community volunteers. She sat
            on the Western Cape Alcohol and Drug Abuse Forum, and on the
            committee for the recommendations on evaluating proposals for the
            United Nations community-based counselling, treatment and
            rehabilitation services for drug abusers in disadvantaged areas.{" "}
            <br />
            During this time Taryn worked closely with the Medical Research
            Council of South Africa, specifically with running focus groups with
            teens to measure the correlation between teenage drinking and the
            spread of HIV/AIDS. <br />
            Working in the schools, where many of the youngsters shared about
            trauma and other deep underlying issues, Taryn realised the need to
            further her studies at the South African College of Applied
            Psychology. This led to a natural progression of counselling and
            eventually working at some of the top Addiction Treatment Centres in
            South Africa, namely Dots Plot, Forest Lake Clinic, Stepping Stones,
            Harmony House and Kenilworth Clinic. Taryn developed an affinity for
            group therapy facilitation and the process that goes with it. She
            gained invaluable experience over 13yrs and attended many training
            programmes and had the privilege to work with many acclaimed mentors
            and experts in the therapeutic field. Taryn is au fait with many
            treatment modalities and therapeutic approaches, and has expertise
            in the treatment of co-dependency, eating disorders, gambling, sex,
            and gaming addictions, as well as drug and alcohol abuse and
            addiction. A large part of the treatment programmes Taryn has
            facilitated and designed include life skills training to replace any
            previously unhealthy coping skills. Many of the clients Taryn
            counselled struggled with emotional regulation, self-esteem,
            boundaries and healthy interpersonal communication. This planted the
            idea of taking the life skills programmes to schools to equip
            adolescents to live balanced and happier lives. <br />
            Whilst working at Kenilworth Clinic Outpatient unit, Taryn was asked
            to head up and design a programme for a secondary care facility for
            Kenilworth Clinic. During this time her partner was tragically
            killed and after successfully implanting and running the secondary
            care program and unit, Taryn took time out from the therapeutic
            field to give herself time and space to heal. This led to a
            successful run at selling property. When her son turned 21 years old
            Taryn questioned what makes an effective parent and balanced child
            that grows up to be a happy healthy and independent adult. This and
            a calling to live a more purposeful life, inspired her to design a
            set of life skills workshops for adolescents that would equip young
            people to handle life with greater ease and perhaps prevent them
            from having to learn these skills later on in life at a rehab
            facility. Incorporating this training with a group process assists
            adolescents with self-actualisation and emotional regulation and
            resilience. She designed a course of 8 workshops for teens and young
            adults that allows them to gain a sense of themselves and their
            identity and create a vision for living their lives to their full
            potential and purpose. <br />
            The vision is to make these programmes available to all communities,
            and inspire youngsters to make healthy choices, choose and be
            positive role models, gain a strong sense of identity and take
            responsibility to become the best versions of themselves. Taryn set
            up Raising Consciousness, an organisation that acts as a conduit to
            guide people to access a variety of services and resources to enable
            them to better themselves and live happier and healthier lives and
            take responsibility for the impact that their behaviours and
            attitudes have on themselves and others and to endeavour to keep
            that impact positive.
          </p>
        </div>

        {/* <div className="flex justify-center mt-10">
        <a
          className="text-xs font-code font-bold tracking-wider uppercase border-b"
          href="/pricing"
        >
          See the full details
        </a>
      </div> */}
      </div>
    </Section>
  );
};

export default About;
