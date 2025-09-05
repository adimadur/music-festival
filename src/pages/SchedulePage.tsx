import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduleDay from "@/components/ScheduleDay";
import { scheduleData } from "@/data/schedule";

const SchedulePage = () => {
  const [activeDay, setActiveDay] = useState("friday");

  return (
    <div className="pt-16">
      <section className="relative py-24 bg-gradient-stage">
        <div className="container px-4 text-center text-white">
          <h1 className="festival-heading-xl mb-4">Festival Schedule</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Plan your festival experience with our day-by-day schedule
          </p>
        </div>
      </section>

      <section className="festival-section">
        <div className="container px-4">
          <Tabs
            defaultValue="friday"
            value={activeDay}
            onValueChange={setActiveDay}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="friday" className="text-base">
                  Friday
                </TabsTrigger>
                <TabsTrigger value="saturday" className="text-base">
                  Saturday
                </TabsTrigger>
                <TabsTrigger value="sunday" className="text-base">
                  Sunday
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="friday" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h2 className="festival-heading-md mb-6 text-center">Friday, July 15</h2>
                <ScheduleDay items={scheduleData.friday} />
              </div>
            </TabsContent>

            <TabsContent value="saturday" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h2 className="festival-heading-md mb-6 text-center">Saturday, July 16</h2>
                <ScheduleDay items={scheduleData.saturday} />
              </div>
            </TabsContent>

            <TabsContent value="sunday" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h2 className="festival-heading-md mb-6 text-center">Sunday, July 17</h2>
                <ScheduleDay items={scheduleData.sunday} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="festival-section bg-muted/30">
        <div className="container px-4 text-center">
          <h2 className="festival-heading-lg mb-6">Stage Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Main Stage</h3>
              <p className="text-muted-foreground mb-4">
                Our largest stage featuring headline acts and spectacular production.
              </p>
              <p className="text-sm text-secondary">
                Open from 4:00 PM to 12:00 AM
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Second Stage</h3>
              <p className="text-muted-foreground mb-4">
                Alternative and indie acts with an intimate atmosphere.
              </p>
              <p className="text-sm text-secondary">
                Open from 3:00 PM to 11:00 PM
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Electronic Stage</h3>
              <p className="text-muted-foreground mb-4">
                Dance and electronic music with immersive light shows.
              </p>
              <p className="text-sm text-secondary">
                Open from 6:00 PM to 2:00 AM
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Global Stage</h3>
              <p className="text-muted-foreground mb-4">
                World music and cultural performances from around the globe.
              </p>
              <p className="text-sm text-secondary">
                Open from 2:00 PM to 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;