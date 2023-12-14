import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div
        className="flex flex-col lg:flex-row
      items-center bg-[#1E1919] dark:bg-slate-800"
      >
        <div
          className="p-10 flex flex-col
         bg-[#2B2929] dark:bg-slate-800
          text-white space-y-5"
        >
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br />
            <br />
            Storing everything for you and your business needs. All in pne place
          </h1>
          <p className="pb-20">
            This is NOT a component library. It's a collection of re-usable
            components that you can copy and paste into your apps. What do you
            mean by not a component library? I mean you do not install it as a
            dependency. It is not available or distributed via npm. Pick the
            components you need. Copy and paste the code into your project and
            customize to your needs. The code is yours. Use this as a reference
            to build your own component libraries.
          </p>
          <Link
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
            href="/dashboard"
          >
            Try it for free !
            <ArrowRight className="ml-10" />
          </Link>{" "}
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag
          </video>
        </div>
      </div>
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        this video is made for informational and education purposes only. We do
        not own or affiliate with Dropbox or/ and any of its subsidiaries in any
        form . Copyright Disclaimer under section 107 of the Copyright act 1976,
        allowance is made for "fair use" of this video for educational purposes.
      </p>
    </main>
  );
}
