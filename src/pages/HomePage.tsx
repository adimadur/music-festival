import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Music, Calendar1 as Calendar, Ticket, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import ArtistCard from "@/components/ArtistCard";
import FestivalMap from "@/components/FestivalMap";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { artists } from "@/data/artists";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const festivalDate = new Date("2023-07-15T12:00:00");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredArtists = artists.filter((artist) => artist.featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-festival opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="Festival crowd"
            className="w-full h-full object-cover" />

        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6">

            <h1 className="festival-heading-xl text-glow">
              Music Festival 2023
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Experience three days of incredible music, art, and community
            </p>
            <div className="pt-6">
              <CountdownTimer targetDate={festivalDate} />
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white">

                <Link to="/tickets">Get Tickets</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white">

                <Link to="/lineup">View Lineup</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="festival-section bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="festival-heading-lg mb-4">Featured Artists</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get ready for unforgettable performances from these incredible headliners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtists.map((artist) =>
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              genre={artist.genre}
              image={artist.image}
              day={artist.day}
              time={artist.time}
              stage={artist.stage} />

            )}
          </div>
          
          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary-600 text-secondary-foreground">

              <Link to="/lineup" className="flex items-center gap-2">
                View Full Lineup <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="festival-section">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">July 15-17, 2023</h3>
              <p className="text-muted-foreground">
                Three days of non-stop music across multiple stages
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">50+ Artists</h3>
              <p className="text-muted-foreground">
                Featuring top performers from around the world
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Festival Park</h3>
              <p className="text-muted-foreground">
                Located in the heart of Music City
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-festival/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-festival" />
              </div>
              <h3 className="text-xl font-bold mb-2">25,000+ Attendees</h3>
              <p className="text-muted-foreground">
                Join music lovers from around the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets CTA Section */}
      <section className="festival-section bg-gradient-festival text-white">
        <div className="container px-4 text-center">
          <h2 className="festival-heading-lg mb-4">Get Your Tickets Now</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Don't miss out on the music event of the year. Early bird tickets are selling fast!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90">

            <Link to="/tickets" className="flex items-center gap-2">
              <Ticket className="h-5 w-5" /> Buy Tickets
            </Link>
          </Button>
        </div>
      </section>

      {/* Festival Map Section */}
      <section className="festival-section bg-muted/30" id="map">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="festival-heading-lg mb-4">Festival Map</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the festival grounds and plan your experience
            </p>
          </div>
          
          <FestivalMap />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="festival-section" id="faq">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="festival-heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about the festival
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="festival-section bg-muted/30" id="contact">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="festival-heading-lg mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-muted-foreground">
                      Festival Park, 123 Music Avenue, Music City
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Festival Dates</h4>
                    <p className="text-muted-foreground">
                      July 15-17, 2023, 12:00 PM - 12:00 AM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Music className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Booking Inquiries</h4>
                    <p className="text-muted-foreground">
                      booking@musicfestival.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default HomePage;