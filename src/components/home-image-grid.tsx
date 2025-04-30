"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeImageGrid() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* MOBILE: cuadrícula vertical de cuadrados */}
      <div className="flex flex-col md:hidden space-y-4">
        {/* OBRA */}
        <div className="relative group overflow-hidden w-full aspect-square">
          <Image
            src="https://ext.same-assets.com/4226829879/505759149.jpeg"
            alt="Obra de cerámica"
            fill
            className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm uppercase tracking-wider z-10">
            <Link
              href="/obra"
              className="
                flex items-center gap-2 px-10 py-5 bg-black text-white text-xl uppercase tracking-wider
                transition-colors duration-200
                hover:bg-white hover:text-black
                rounded-none
              "
            >
              OBRA
              <span className="text-xl">➔</span>
            </Link>
          </div>
        </div>
        {/* TIENDA */}
        <div className="relative group overflow-hidden w-full aspect-square">
          <Image
            src="https://ext.same-assets.com/4226829879/4208146399.jpeg"
            alt="Tienda de cerámica"
            fill
            className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm uppercase tracking-wider z-10">
            <Link
              href="/info"
              className="
                flex items-center gap-2 px-10 py-5 bg-black text-white text-xl uppercase tracking-wider
                transition-colors duration-200
                hover:bg-white hover:text-black
                rounded-none
              "
            >
              INFO
              <span className="text-xl">➔</span>
            </Link>
          </div>
        </div>
        {/* TALLER */}
        <div className="relative group overflow-hidden w-full aspect-square">
          <Image
            src="https://ext.same-assets.com/4226829879/821316787.jpeg"
            alt="Taller de cerámica"
            fill
            className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm uppercase tracking-wider z-10">
            <Link
              href="/taller"
              className="
                flex items-center gap-2 px-10 py-5 bg-black text-white text-xl uppercase tracking-wider
                transition-colors duration-200
                hover:bg-white hover:text-black
                rounded-none
              "
            >
              TALLER
              <span className="text-xl">➔</span>
            </Link>
          </div>
        </div>
        {/* BIO */}
        <div className="relative group overflow-hidden w-full aspect-square">
          <Image
            src="https://ext.same-assets.com/4226829879/125366376.jpeg"
            alt="Bio"
            fill
            className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm uppercase tracking-wider z-10">
            <Link
              href="/bio"
              className="
                flex items-center gap-2 px-10 py-5 bg-black text-white text-xl uppercase tracking-wider
                transition-colors duration-200
                hover:bg-white hover:text-black
                rounded-none
              "
            >
              BIO
              <span className="text-xl">➔</span>
            </Link>
          </div>
        </div>
      </div>
      {/* DESKTOP: layout original */}
      <div className="hidden md:flex flex-col w-full gap-4">
        {/* Fila superior */}
        <div className="flex w-full h-[50vh] gap-4">
          {/* OBRA - izquierda */}
          <div className="relative group overflow-hidden w-[40%] h-full">
            <Image
              src="https://ext.same-assets.com/4226829879/505759149.jpeg"
              alt="Obra de cerámica"
              fill
              className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm uppercase tracking-wider z-10">
              <Link
                href="/obra"
                className="
                  flex items-center gap-2 px-10 py-5 bg-black text-white text-xl uppercase tracking-wider
                  transition-colors duration-200
                  hover:bg-white hover:text-black
                  rounded-none
                "
              >
                OBRA
                <span className="text-xl">➔</span>
              </Link>
            </div>
          </div>
          {/* TIENDA - derecha */}
          <div className="relative group overflow-hidden w-[60%] h-full">
            <Image
              src="https://ext.same-assets.com/4226829879/4208146399.jpeg"
              alt="Tienda de cerámica"
              fill
              className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm uppercase tracking-wider z-10">
              <Link
                href="/info"
                className="
                  flex items-center gap-2 px-10 py-5 bg-black text-white text-xl uppercase tracking-wider
                  transition-colors duration-200
                  hover:bg-white hover:text-black
                  rounded-none
                "
              >
                INFO
                <span className="text-xl">➔</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Fila inferior */}
        <div className="flex w-full h-[50vh] relative">
          {/* TALLER - izquierda */}
          <div style={{ position: "absolute", left: "0%", width: "calc(65% - 0.5rem)", height: "100%" }} className="relative group overflow-hidden">
            <Image
              src="https://ext.same-assets.com/4226829879/821316787.jpeg"
              alt="Taller de cerámica"
              fill
              className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm uppercase tracking-wider z-10">
              <Link
                href="/taller"
                className="
                  flex items-center gap-2 px-10 py-5 bg-black text-white text-xl uppercase tracking-wider
                  transition-colors duration-200
                  hover:bg-white hover:text-black
                  rounded-none
                "
              >
                TALLER
                <span className="text-xl">➔</span>
              </Link>
            </div>
          </div>
          {/* BIO - derecha */}
          <div style={{ position: "absolute", left: "calc(65% + 0.5rem)", width: "calc(35% - 0.5rem)", height: "100%" }} className="relative group overflow-hidden">
            <Image
              src="https://ext.same-assets.com/4226829879/125366376.jpeg"
              alt="Bio"
              fill
              className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-sm uppercase tracking-wider z-10">
              <Link
                href="/bio"
                className="
                  flex items-center gap-2 px-10 py-5 bg-black text-white text-xl uppercase tracking-wider
                  transition-colors duration-200
                  hover:bg-white hover:text-black
                  rounded-none
                "
              >
                BIO
                <span className="text-xl">➔</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}