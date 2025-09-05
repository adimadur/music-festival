import { motion } from "framer-motion";
import { Check } from "lucide-react";
import TicketCard from "@/components/TicketCard";
import FAQ from "@/components/FAQ";
import { tickets } from "@/data/tickets";

const TicketsPage = () => {
  return (
    <div className="pt-16">
      <section className="relative py-24 bg-gradient-to-r from-primary to-festival">
        <div className="container px-4 text-center text-white">
          <h1 className="festival-heading-xl mb-4">Festival Tickets</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Secure your spot at the music event of the year
          </p>
        </div>
      </section>

      <section className="festival-section">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="festival-heading-lg mb-4">Choose Your Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From general admission to VIP packages, we have options for every festival-goer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tickets.map((ticket, index) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TicketCard
                  name={ticket.name}
                  price={ticket.price}
                  features={ticket.features}
                  isFeatured={ticket.isFeatured}
                  soldOut={ticket.soldOut}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="festival-section bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="festival-heading-lg mb-4">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All festival tickets include these amazing features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Access to All Stages</h3>
                <p className="text-muted-foreground">
                  Enjoy performances across multiple stages throughout the festival grounds.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Food & Drink Vendors</h3>
                <p className="text-muted-foreground">
                  Explore a variety of culinary options from local and international vendors.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Art Installations</h3>
                <p className="text-muted-foreground">
                  Experience immersive art displays and interactive installations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Merchandise Shops</h3>
                <p className="text-muted-foreground">
                  Shop for festival merchandise, artist goods, and unique crafts.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Chill-Out Zones</h3>
                <p className="text-muted-foreground">
                  Relax and recharge in designated areas throughout the festival.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Water Stations</h3>
                <p className="text-muted-foreground">
                  Free water refill stations available throughout the venue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="festival-section">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="festival-heading-lg mb-4">Ticket FAQs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about tickets and the festival experience
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketsPage;