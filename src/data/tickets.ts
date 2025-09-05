export interface TicketFeature {
  text: string;
  included: boolean;
}

export interface Ticket {
  id: string;
  name: string;
  price: string;
  features: TicketFeature[];
  isFeatured?: boolean;
  soldOut?: boolean;
}

export const tickets: Ticket[] = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: "$149",
    features: [
      { text: "3-Day Festival Access", included: true },
      { text: "General Admission Areas", included: true },
      { text: "Access to All Stages", included: true },
      { text: "Food & Merchandise Discounts", included: false },
      { text: "Fast Lane Entry", included: false },
      { text: "VIP Viewing Areas", included: false },
      { text: "Exclusive Lounges", included: false },
      { text: "Artist Meet & Greets", included: false }
    ],
    soldOut: true
  },
  {
    id: "general",
    name: "General Admission",
    price: "$199",
    features: [
      { text: "3-Day Festival Access", included: true },
      { text: "General Admission Areas", included: true },
      { text: "Access to All Stages", included: true },
      { text: "Food & Merchandise Discounts", included: true },
      { text: "Fast Lane Entry", included: false },
      { text: "VIP Viewing Areas", included: false },
      { text: "Exclusive Lounges", included: false },
      { text: "Artist Meet & Greets", included: false }
    ]
  },
  {
    id: "vip",
    name: "VIP Experience",
    price: "$349",
    features: [
      { text: "3-Day Festival Access", included: true },
      { text: "General Admission Areas", included: true },
      { text: "Access to All Stages", included: true },
      { text: "Food & Merchandise Discounts", included: true },
      { text: "Fast Lane Entry", included: true },
      { text: "VIP Viewing Areas", included: true },
      { text: "Exclusive Lounges", included: true },
      { text: "Artist Meet & Greets", included: false }
    ],
    isFeatured: true
  },
  {
    id: "platinum",
    name: "Platinum Package",
    price: "$599",
    features: [
      { text: "3-Day Festival Access", included: true },
      { text: "General Admission Areas", included: true },
      { text: "Access to All Stages", included: true },
      { text: "Food & Merchandise Discounts", included: true },
      { text: "Fast Lane Entry", included: true },
      { text: "VIP Viewing Areas", included: true },
      { text: "Exclusive Lounges", included: true },
      { text: "Artist Meet & Greets", included: true }
    ]
  }
];