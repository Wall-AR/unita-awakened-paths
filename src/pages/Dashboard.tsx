
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserProgressCard from "@/components/dashboard/UserProgressCard";
import CurrentPathCard from "@/components/dashboard/CurrentPathCard";
import RecommendedCoursesCard from "@/components/dashboard/RecommendedCoursesCard";
import CurrentMissionCard from "@/components/dashboard/CurrentMissionCard";
import MasterGuidanceCard from "@/components/dashboard/MasterGuidanceCard";
import DailyPracticeCard from "@/components/dashboard/DailyPracticeCard";
import CommunityUpdatesCard from "@/components/dashboard/CommunityUpdatesCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-heading mt-8 mb-6">Seu Caminho Espiritual</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <UserProgressCard />
              <CurrentMissionCard />
              <RecommendedCoursesCard />
              <CommunityUpdatesCard />
            </div>
            
            <div className="space-y-6">
              <MasterGuidanceCard />
              <CurrentPathCard />
              <DailyPracticeCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
