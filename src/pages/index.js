import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import Contect from "@/components/Contect";
import Logo from "@/components/Logo";
import { Photos } from "@/utils/Photos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100" id="home">
        <Slider />
      </div>
      <div id="projects">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {
                Photos.map((url,index)=>(
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={url.url}
                    width={260}
                    height={420}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {url.name}
                  </h2>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
      <Logo />
      <Footer />
    </>
  );
}
