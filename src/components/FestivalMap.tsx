import { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface MapLocation {
  id: string;
  name: string;
  type: "stage" | "food" | "restroom" | "entrance" | "vip";
  x: number;
  y: number;
}

const FestivalMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  const locations: MapLocation[] = [
    { id: "main-stage", name: "Main Stage", type: "stage", x: 30, y: 40 },
    { id: "second-stage", name: "Second Stage", type: "stage", x: 70, y: 30 },
    { id: "electronic-stage", name: "Electronic Stage", type: "stage", x: 50, y: 70 },
    { id: "food-court", name: "Food Court", type: "food", x: 20, y: 60 },
    { id: "restroom-1", name: "Restrooms", type: "restroom", x: 40, y: 20 },
    { id: "restroom-2", name: "Restrooms", type: "restroom", x: 60, y: 60 },
    { id: "main-entrance", name: "Main Entrance", type: "entrance", x: 50, y: 10 },
    { id: "vip-lounge", name: "VIP Lounge", type: "vip", x: 80, y: 50 },
  ];

  const getLocationColor = (type: MapLocation["type"]) => {
    switch (type) {
      case "stage":
        return "bg-primary";
      case "food":
        return "bg-accent";
      case "restroom":
        return "bg-secondary";
      case "entrance":
        return "bg-festival";
      case "vip":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="relative w-full h-[500px] bg-muted rounded-xl overflow-hidden">
      {/* Map background with grid */}
      <div className="absolute inset-0 bg-[url('/festival-map-bg.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="border border-muted-foreground/10"
          ></div>
        ))}
      </div>

      {/* Map locations */}
      {locations.map((location) => (
        <div
          key={location.id}
          className={cn(
            "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300",
            selectedLocation === location.id ? "z-20 scale-125" : "z-10 hover:scale-110"
          )}
          style={{ left: `${location.x}%`, top: `${location.y}%` }}
          onClick={() => setSelectedLocation(location.id === selectedLocation ? null : location.id)}
        >
          <div className="flex flex-col items-center">
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center shadow-lg",
              getLocationColor(location.type),
              selectedLocation === location.id ? "animate-pulse-glow" : ""
            )}>
              <MapPin className="h-4 w-4 text-white" />
            </div>
            {selectedLocation === location.id && (
              <div className="mt-2 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs font-medium shadow-lg">
                {location.name}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Map legend */}
      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <h4 className="text-sm font-bold mb-2">Map Legend</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span>Stages</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
            <span>Food & Drinks</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
            <span>Restrooms</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-festival mr-2"></div>
            <span>Entrances</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <span>VIP Areas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalMap;