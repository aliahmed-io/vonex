import FashionLandingStrip from "./components/FashionLandingStrip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TheEthos from "./components/TheEthos";
import TheConstruct from "./components/TheConstruct";
import TheSyndicate from "./components/TheSyndicate";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-600 selection:text-white">
      <Navbar />
      <FashionLandingStrip />
      <TheEthos />
      <TheConstruct />
      <TheSyndicate />
      <Footer />
    </main>
  );
}
