import Home2Header from "../components/Home2/Home2Header";
import Home2Hero from "../components/Home2/Home2Hero";
import ExcellenceSection from "../components/Home2/ExcellenceSection";
import ChooseUs from "../components/Home2/ChooseUs";
import FacilitiesRadial from "../components/Home2/FacilitiesRadial";
import GlobalStandards from "../components/Home2/GlobalStandards";
import StudentJourney from "../components/Home2/StudentJourney";
import CampusGallery from "../components/Home2/CampusGallery";
import ParentStories from "../components/Home2/ParentStories";
import NewsEvents from "../components/Home2/NewsEvents";
import PreFooterCTA from "../components/Home2/PreFooterCTA";
import Home2Footer from "../components/Home2/Home2Footer";
import MobileBottomNav from "../components/Home2/MobileBottomNav";
import "./home.css";

export default function Home() {
  return (
    <div className="home2-theme">
      <Home2Header />
      <Home2Hero />
      <ExcellenceSection />
      <ChooseUs />
      <FacilitiesRadial />
      <GlobalStandards />
      <StudentJourney />
      <CampusGallery />
      <ParentStories />
      <NewsEvents />
      <PreFooterCTA />
      <Home2Footer />
      <MobileBottomNav />
    </div>
  );
}
