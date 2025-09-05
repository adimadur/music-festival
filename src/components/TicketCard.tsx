import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TicketFeature {
  text: string;
  included: boolean;
}

interface TicketCardProps {
  name: string;
  price: string;
  features: TicketFeature[];
  isFeatured?: boolean;
  soldOut?: boolean;
}

const TicketCard = ({
  name,
  price,
  features,
  isFeatured = false,
  soldOut = false,
}: TicketCardProps) => {
  return (
    <div
      className={cn(
        "relative",
        isFeatured ? "festival-ticket-tier-featured" : "festival-ticket-tier"
      )}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-full">
          BEST VALUE
        </div>
      )}
      <h3 className="festival-ticket-name">{name}</h3>
      <p className="festival-ticket-price">{price}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center",
              !feature.included && "text-muted-foreground line-through"
            )}
          >
            <Check
              className={cn(
                "h-5 w-5 mr-2",
                feature.included ? "text-primary" : "text-muted-foreground"
              )}
            />
            {feature.text}
          </li>
        ))}
      </ul>
      <Button
        className={cn(
          "mt-6 w-full",
          isFeatured
            ? "bg-primary hover:bg-primary-600 text-primary-foreground"
            : "bg-secondary hover:bg-secondary-600 text-secondary-foreground",
          soldOut && "opacity-50 cursor-not-allowed"
        )}
        disabled={soldOut}
      >
        {soldOut ? "Sold Out" : "Buy Now"}
      </Button>
    </div>
  );
};

export default TicketCard;