"use client";
import { Banner } from "@/components/Banner";
import { RelatedNews } from "@/components/RelatedNews/RelatedNews";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main/Main";

export default function Home() {
  return (
    <main
      className="bg-center bg-no-repeat bg-cover h-screen max-w-full mx-auto "
      style={{
        backgroundImage: `url('/bgimage.svg')`,
      }}
    >
      <Banner />
      <Header />
      <div className="flex justify-center">
        <Main />
      </div>
      <hr className="bg-white opacity-20 mx-25 mb-12"></hr>
      <RelatedNews />
    </main>
  );
}
