import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/4be84671-c80d-403d-a6b7-8040fdec9891-removebg-preview.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={700}
          height={700}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129,00
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/9b380442-c7b4-44a2-8d85-fe002d597153-removebg-preview.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={400}
          height={400}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129,00
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/b322e7c5-3d74-4b68-a60a-4f50a5a9240f-removebg-preview.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={400}
          height={400}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129,00
          </span>
        </div>
      </Link>
    </div>
  );
}
