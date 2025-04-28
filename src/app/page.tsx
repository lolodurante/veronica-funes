import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HomeImageGrid from "@/components/home-image-grid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* Hero Section with Image Grid */}
        <HomeImageGrid />
      </div>

      <Footer />
    </main>
  );
}
