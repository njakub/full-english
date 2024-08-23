import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Full English Explorer</h1>
            <p className="py-6">
              Your go-to platform for discovering and rating Full English
              breakfasts around the globe. Whether you&apos;re a seasoned pro
              seeking a hangover cure or a complete beginner ready to dive into
              a proper breakfast, our app connects you with a community of Full
              English enthusiasts. Explore reviews, rate your experiences, and
              contribute to a global breakfast movement. Embark on your
              gastronomic adventure with us today!
            </p>
            <button className="btn btn-primary">
              <Link href="/find">Start Exploring</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
