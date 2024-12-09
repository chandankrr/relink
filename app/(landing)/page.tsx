import { ArrowRightIcon, Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Icons } from "@/components/icons";
import chatImage from "@/public/chat.png";

const features = [
  {
    id: 1,
    title: "Automate Direct Messages to Followers",
    description:
      "Send personalized welcome messages to new followers, follow-up messages to leads, and replies to inquiries, saving time while boosting engagement.",
    icon: Icons.chat,
  },
  {
    id: 2,
    title: "Smart Comment Replies & Interactions",
    description:
      "Automatically respond to comments on your posts with pre-set or AI-generated replies to keep the conversation alive and engage your audience effectively.",
    icon: Icons.robot,
  },
  {
    id: 4,
    title: "Hashtag and Keyword Monitoring",
    description:
      "Track and engage with posts mentioning specific hashtags or keywords relevant to your niche to increase visibility and attract potential followers.",
    icon: Icons.hashtag,
  },
];

const plans = [
  {
    id: 1,
    plan: "Free",
    description:
      "Get started with access to Slide basic features to engage with your audience FREE OF CHARGE:",
    price: "0",
    text: "Get started",
    required: "No credit/debit card required",
    color: "#edf2ed", // bg-[#edf2ed]
  },
  {
    id: 2,
    plan: "Pro",
    description:
      "Grow your engagement with access to all advanced Pro features, starting at a cost of:",
    price: "15",
    text: "Become pro",
    required: "Credit/debit card required",
    color: "#007232", // bg-[#007232]
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mt-16 md:mt-20 lg:mt-32">
        <div className="container text-center">
          <div>
            <Heading className="mt-24 md:mt-28 lg:mt-0">
              Unleash the Power of Instagram Automation
            </Heading>

            <p className="mx-auto mt-5 max-w-xl text-xl leading-6 md:max-w-lg lg:max-w-xl">
              Harness the power of AI to boost engagement, grow your audience,
              and save countless hours. Experience seamless comments, DMs, and
              more.
            </p>

            <Button variant="primary" className="mt-5 tracking-widest">
              Start Automating Now
            </Button>
          </div>
          <div className="mt-12 text-center">
            <Image
              src={chatImage}
              className="mx-auto select-none pointer-events-none size-[95%] md:size-[75%] lg:size-[60%] shadow-sm"
              alt="Image of product demo"
            />
            <p className="mx-auto mt-6 max-w-xs text-base font-semibold tracking-wide uppercase md:text-lg md:max-w-none lg:text-xl">
              Trusted by many Users Worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-20 md:mt-28 lg:mt-40">
        <div className="container text-center">
          <Heading className="bg-[#e1e091] inline">
            Enhance Instagram Engagement with Powerful Automation Tools
          </Heading>

          <div className="grid grid-cols-1 gap-5 mx-auto mt-10 md:mt-16 lg:grid-cols-3 lg:max-w-none md:max-w-lg">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#edf2ed] text-left p-4 duration-200 transition-transform hover:scale-105"
              >
                <div className="mt-3 mb-5">
                  {feature.icon && feature.icon({})}
                </div>
                <h3 className="text-2xl font-medium">{feature.title}</h3>
                <p className="mt-4 text-base leading-6 text-gray-800">
                  {feature.description}
                </p>
                <p className="flex gap-2 items-center mt-4 mb-6 text-sm font-light tracking-widest underline uppercase cursor-pointer group underline-offset-3">
                  Learn more
                  <ArrowRightIcon className="duration-200 size-4 group-hover:translate-x-1" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mt-20 md:mt-28 lg:mt-40">
        <div className="container text-center">
          <Heading className="inline">Simple no-tricks Pricing</Heading>

          <div className="grid grid-cols-1 gap-10 mx-auto mt-10 lg:max-w-none md:max-w-lg md:mt-16 lg:mx-0 lg:grid-cols-2">
            {plans.map((plan) => {
              const isPro = plan.id === 2;
              return (
                <div
                  key={plan.id}
                  className={`px-8 py-12 bg-[${plan.color}] ${isPro ? "text-white" : "text-black"}`}
                >
                  <h3 className="font-semibold text-3xl/8">{plan.plan}</h3>
                  <p className="mx-auto mt-2 text-base max-w-80 text-pretty">
                    {plan.description}
                  </p>
                  <div className="flex gap-2 justify-center items-baseline mt-10 mb-6">
                    <p className="text-7xl font-heading">${plan.price}</p>
                    <span>/mo</span>
                  </div>
                  <button
                    className={`py-3 w-full text-lg bg-white transition-all duration-200 max-w-60 hover:bg-black hover:text-white ${isPro && "text-black"}`}
                  >
                    {plan.text}
                  </button>
                  <p className="mt-6">
                    {isPro && <sup>*</sup>}
                    {plan.required}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section className="mt-20 md:mt-28 lg:mt-40">
        <div className="container text-center">
          <Heading className="inline">What our Customers say</Heading>

          <div className="grid grid-cols-1 mx-auto mt-10 divide-y divide-gray-200 lg:max-w-none md:max-w-lg md:mt-16 lg:mx-0 lg:grid-cols-2 lg:divide-y-0 lg:divide-x">
            {/* first customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-[#F8F9FD] p-6 sm:p-8 lg:p-16">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-[#4B76C9] text-[#4B76C9]"
                  />
                ))}
              </div>

              <p className="text-base text-center text-gray-950 lg:text-left text-pretty">
                Slide is a great tool for automating messages and staying on top
                of interactions. It's made managing my social media much simpler
                and more effective.
              </p>

              <div className="flex flex-col gap-4 justify-center items-center mt-2 lg:justify-start sm:flex-row sm:items-start">
                <Image
                  src="/user-1.png"
                  className="object-cover rounded-full"
                  alt="Random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="flex items-center font-semibold">
                    Gurjeet Singh
                    <Icons.verificatinBadge className="size-4 ml-1.5 inline-block" />
                  </p>
                  <p className="text-sm text-gray-600">@imgurjeet</p>
                </div>
              </div>
            </div>

            {/* second customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-[#F8F9FD] p-6 sm:p-8 lg:p-16">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-[#4B76C9] text-[#4B76C9]"
                  />
                ))}
              </div>

              <p className="text-base text-center text-gray-950 lg:text-left text-pretty">
                Using Slide has been a game-changer. The automated replies and
                hashtag tracking features help me save time while engaging
                better with my audience.
              </p>

              <div className="flex flex-col gap-4 justify-center items-center mt-2 lg:justify-start sm:flex-row sm:items-start">
                <Image
                  src="/user-2.png"
                  className="object-cover rounded-full"
                  alt="Random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="flex items-center font-semibold">
                    Shweta Singh
                    <Icons.verificatinBadge className="size-4 ml-1.5 inline-block" />
                  </p>
                  <p className="text-sm text-gray-600">@shweta11</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
