import Image from "next/image";
import Welcome from "./components/Welcome";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#b9b3b3]" > 
      <Navbar/>
      <div className="container mt-25 mx-auto px-10 py-4">
        <Welcome/>
      </div>
    </main>
  );
}
