import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "When and where is the festival taking place?",
    answer:
      "The Music Festival will take place from July 15-17, 2023, at Festival Park in Music City. Gates open at 12:00 PM each day and performances continue until midnight.",
  },
  {
    question: "How do I purchase tickets?",
    answer:
      "Tickets can be purchased online through our official website or at authorized ticket vendors. We offer various ticket types including single-day passes, weekend passes, and VIP packages.",
  },
  {
    question: "What items are prohibited at the festival?",
    answer:
      "Prohibited items include outside food and beverages, glass containers, weapons, illegal substances, professional cameras/recording equipment, and pets (except service animals).",
  },
  {
    question: "Is there parking available at the venue?",
    answer:
      "Yes, there is paid parking available at designated lots near the festival grounds. We also strongly encourage using public transportation or ride-sharing services to reduce traffic congestion.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "The festival will proceed rain or shine. In case of severe weather conditions that may pose safety risks, performances may be temporarily paused or rescheduled. Please check our website and social media for real-time updates.",
  },
  {
    question: "Are there age restrictions for attending?",
    answer:
      "The festival is open to all ages, but attendees under 16 must be accompanied by an adult. Some areas like VIP lounges and bars are restricted to 21+ with valid ID.",
  },
  {
    question: "Can I bring my own food and drinks?",
    answer:
      "Outside food and drinks are not permitted. The festival offers a wide variety of food vendors and beverage options. Sealed water bottles (up to 1 liter) are allowed.",
  },
  {
    question: "What should I bring to the festival?",
    answer:
      "We recommend bringing sunscreen, a hat, comfortable shoes, a portable phone charger, and a small bag (subject to security check). Don't forget your ticket and ID!",
  },
];

const FAQ = () => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;