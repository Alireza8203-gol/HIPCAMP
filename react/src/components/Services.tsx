import fireSvg from "@/assets/Images/svgs/fire.svg";
import fishSvg from "@/assets/Images/svgs/fish.svg";
import paperSvg from "@/assets/Images/svgs/paper.svg";
import ticketsSvg from "@/assets/Images/svgs/tickets.svg";
import ServiceCard from "@/components/Service-card.tsx";

interface Service {
  title: string;
  imageSrc: string;
  caption: string;
}

const servicesDetails: Service[] = [
  {
    title: "Camping & Day Use",
    imageSrc: fireSvg,
    caption:
      "Return to your favorite spot or discover a new one that’s right for you.",
  },
  {
    title: "Tours & Tickets",
    imageSrc: ticketsSvg,
    caption: "Reserve tours and tickets to participate in events.",
  },
  {
    title: "Permits",
    imageSrc: paperSvg,
    caption: "Obtain permits for access to high-demand locations.",
  },
  {
    title: "Recreation Activities",
    imageSrc: fishSvg,
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
