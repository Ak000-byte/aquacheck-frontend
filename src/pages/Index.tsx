import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PredictionForm from "@/components/PredictionForm";
import ResultsDashboard from "@/components/ResultsDashboard";
import AIReportGenerator from "@/components/AIReportGenerator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PredictionForm />
      <ResultsDashboard />
      <AIReportGenerator />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
