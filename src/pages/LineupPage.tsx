import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ArtistCard from "@/components/ArtistCard";
import { artists } from "@/data/artists";

const LineupPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dayFilter, setDayFilter] = useState("all");
  const [genreFilter, setGenreFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");

  // Extract unique values for filters
  const days = [...new Set(artists.map((artist) => artist.day))];
  const genres = [...new Set(artists.map((artist) => artist.genre))];
  const stages = [...new Set(artists.map((artist) => artist.stage))];

  // Filter artists based on search and filters
  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDay = dayFilter === "all" || artist.day === dayFilter;
    const matchesGenre = genreFilter === "all" || artist.genre === genreFilter;
    const matchesStage = stageFilter === "all" || artist.stage === stageFilter;

    return matchesSearch && matchesDay && matchesGenre && matchesStage;
  });

  return (
    <div className="pt-16">
      <section className="relative py-24 bg-gradient-festival">
        <div className="container px-4 text-center text-white">
          <h1 className="festival-heading-xl mb-4">Festival Lineup</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover all the amazing artists performing at this year's festival
          </p>
        </div>
      </section>

      <section className="festival-section">
        <div className="container px-4">
          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search artists..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={dayFilter} onValueChange={setDayFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Filter by day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Days</SelectItem>
                  {days.map((day) => (
                    <SelectItem key={day} value={day}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={genreFilter} onValueChange={setGenreFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Filter by genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={stageFilter} onValueChange={setStageFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Filter by stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  {stages.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredArtists.length > 0 ? (
              filteredArtists.map((artist, index) => (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ArtistCard
                    id={artist.id}
                    name={artist.name}
                    genre={artist.genre}
                    image={artist.image}
                    day={artist.day}
                    time={artist.time}
                    stage={artist.stage}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No artists found matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LineupPage;