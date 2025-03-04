import ServiceCard from "@/components/Service-card.tsx";

// Types
interface Service {
  title: string;
  imageSrc: string;
  caption: string;
}

const servicesDetails: Service[] = [
  {
    title: "Camping & Day Use",
    imageSrc: "/Images/svgs/fire.svg",
    caption:
      "Return to your favorite spot or discover a new one that’s right for you.",
  },
  {
    title: "Tours & Tickets",
    imageSrc: "/Images/svgs/tickets.svg",
    caption: "Reserve tours and tickets to participate in events.",
  },
  {
    title: "Permits",
    imageSrc: "/Images/svgs/paper.svg",
    caption: "Obtain permits for access to high-demand locations.",
  },
  {
    title: "Recreation Activities",
    imageSrc: "/Images/svgs/fish.svg",
    caption:
      "Find the best spots for hunting, fishing & recreational shooting.",
  },
];

const Services = () => {
  return (
    <section className="services">
      {servicesDetails.map((service) => (
        <ServiceCard
          title={service.title}
          imageSrc={service.imageSrc}
          caption={service.caption}
        />
      ))}
    </section>
  );
};

export default Services;
