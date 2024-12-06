import Image from "next/image";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import chatImage from "@/public/chat.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mt-16 md:mt-20 lg:mt-32">
        <div className="container text-center">
          <div>
            <Heading className="mt-24 md:mt-28 lg:mt-0">
              Unleash the power of chat marketing
            </Heading>

            <p className="mx-auto mt-5 max-w-xl text-xl leading-6 md:max-w-lg lg:max-w-xl">
              Harness the power of AI to boost engagement, grow your audience,
              and save countless hours. Experience seamless comments, DMs, and
              more.
            </p>

            <Button variant="primary" className="mt-5 tracking-widest">
              Get Started For Free
            </Button>
          </div>
          <div className="mt-12 text-center">
            <Image
              src={chatImage}
              className="mx-auto select-none pointer-events-none size-[95%] md:size-[75%] lg:size-[60%]"
              alt="Image of product demo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
