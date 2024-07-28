'use client'
import Image from "next/image";
import styles from "./styles.module.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-3">

      </main>
      <Footer />
    </div>
  );
}
