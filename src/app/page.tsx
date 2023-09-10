import Image from "next/image";
import Layout from "./components/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/text/AnimatedText";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full image-animation">
          <div className="w-1/2">
            <Image src={profilePic} alt="Image" className="w-full h-auto" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              className="!text-6xl !text-left"
              text="Turning Vision Into Reality With Code And Design"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into inovative web applications. Explore my latest projects and
              articles, showcasing my expertice in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/dummy.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold"
              >
                Resume
              </Link>
              <Link href="mailto:cuevasrodartej@gmail.com">Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
