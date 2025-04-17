import Image from "next/image";
import Welcome from "./components/Welcome";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#ffffff] via-[#c9f7ff] to-[#fef4cb]"> 
      <div className="container mt-20 lg:mt-25 mx-auto px-10 py-4">
        <Welcome/>
      </div>
    </main>
  );
}
