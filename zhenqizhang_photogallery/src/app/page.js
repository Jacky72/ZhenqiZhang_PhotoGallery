import Image from "next/image";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#b9b3b3]" > 
      <div className="container mt-24 mx-auto px-10 py-4">
        <Welcome/>
      </div>
    </main>
  );
}
