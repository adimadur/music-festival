import { useState } from "react";
import { Heart, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  id: string;
  artist: string;
  time: string;
  stage: string;
  duration: string;
}

interface ScheduleDayProps {
  items: ScheduleItem[];
}

const ScheduleDay = ({ items }: ScheduleDayProps) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "border-l-4 pl-4 py-3 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-shadow",
            favorites[item.id]
              ? "border-primary"
              : "border-muted hover:border-secondary"
          )}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="festival-schedule-artist">{item.artist}</p>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="festival-schedule-time">{item.time}</span>
                  <span className="text-xs ml-1">({item.duration})</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-secondary" />
                  <span className="festival-schedule-stage">{item.stage}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => toggleFavorite(item.id)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label={favorites[item.id] ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                className={cn(
                  "h-5 w-5 transition-colors",
                  favorites[item.id]
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                )}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleDay;