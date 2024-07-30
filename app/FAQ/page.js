'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-3 text-center">
        PAG EN CONSTRUCCION!!!
      </div>
      <Footer />
    </div>
  );
}