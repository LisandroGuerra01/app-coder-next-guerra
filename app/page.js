'use client'
import Image from "next/image";
import styles from "./styles.module.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Boton from "./components/Boton";

export default function Home() {
  return (
    <div className="flex">      
    <Navbar />
    </div>
  );
}
