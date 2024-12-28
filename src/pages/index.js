import RootLayoutIndex from "@/layouts/layout-index";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide spinner after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <RootLayoutIndex>
      {loading ? (
        <div className="flex bg-gradient-to-r from-[#212329] to-[#C18843] via-[#252B39] w-screen h-screen items-center justify-center content-center align-center">
          <div class="flex w-56 h-56 border-[10px] border-slate-100 border-t-transparent rounded-full animate-spin-slow">
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gradient-to-r from-[#212329] to-[#C18843] via-[#252B39] w-screen h-screen">
            <div className="flex items-center justify-center h-full w-full">
              <Image
                src='/images/BLP_halloween_PC_wallpaper.png'
                alt='blp-main-image'
                layout="responsive"
                width={1920}
                height={1080}
                className="object-cover min-h-[80vh] filter brightness-50"
              />
            </div>
          </div>
          <div className="absolute top-0 items-center justify-center content-center justify-items-center h-full w-full ">
            <div className="flex md:text-[50px] sm:text-[32px] text-[24px] text-white font-serif text-center mx-2">
              BLINDING LIGHTS PROJECT
            </div>
            <div className="flex font-kanit md:text-[24px] sm:text-[18px] text-[14px] text-white text-center mx-2">
              ด้วยอำนาจของโชคชะตาทำให้พวกเรามาพบกัน
            </div>
            <div className="flex font-kanit md:text-[24px] sm:text-[18px] text-[14px] text-white text-center mx-2">
              บังเกิดเป็นการเดินทางสุดปั่นป่วน
            </div>
            <div className="flex w-full items-center content-center lg:w-48 sm:w-40 w-32 lg:mt-8 mt-4">
              <Image
                src='/images/button-start.png'
                alt='blp-main-image'
                layout="responsive"
                width={200}
                height={200}
                className="object-cover cursor-pointer"
                onClick={() => { window.location.href = '/home' }}
              />
            </div>
          </div>
        </>
      )}
    </RootLayoutIndex>
  );
}
