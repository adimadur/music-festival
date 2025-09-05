import { useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ArtistCardProps {
  id: string;
  name: string;
  genre: string;
  image: string;
  day: string;
  time: string;
  stage: string;
}

const ArtistCard = ({
  id,
  name,
  genre,
  image,
  day,
  time,
  stage,
}: ArtistCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group festival-artist-card">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-white hover:text-primary bg-black/20 hover:bg-black/40"
          onClick={toggleFavorite}
        >
          <Heart
            className={cn("h-5 w-5", isFavorite ? "fill-primary text-primary" : "")}
          />
          <span className="sr-only">Favorite</span>
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="festival-heading-sm group-hover:text-primary transition-colors truncate">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{genre}</p>
        <div className="space-y-1">
          <p className="festival-schedule-time">{day}, {time}</p>
          <p className="festival-schedule-stage">{stage}</p>
        </div>
      </CardContent>
    </div>
  );
};

export default ArtistCard;