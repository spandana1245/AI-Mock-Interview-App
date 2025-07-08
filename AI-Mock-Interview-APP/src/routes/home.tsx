import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import MarqueImg from "@/components/marque-img";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      {/* Hero Section */}
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-blue-600">AI Mentor</span>
              <span className="block text-gray-700 dark:text-gray-300">
                - Train Smarter. Interview Better.
              </span>
            </h1>

            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Sharpen your skills, refine your answers, and boost your confidence with personalized mock interviews powered by AI.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link to="/generate">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Get Started <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/assets/img/img1.jpg"
              alt="Interview Preparation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>

      {/* Stats Section */}
      <Container className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600">250k+</p>
            <p className="text-muted-foreground text-sm">Offers Received</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">1.2M+</p>
            <p className="text-muted-foreground text-sm">Interviews Aced</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">97%</p>
            <p className="text-muted-foreground text-sm">Positive Feedback</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="text-muted-foreground text-sm">Access</p>
          </div>
        </div>
      </Container>

      {/* Marquee Logos */}
      <div className="w-full py-8 bg-gray-100 dark:bg-gray-800">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
        </Marquee>
      </div>

      {/* Info Section */}
      <Container className="py-16 space-y-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Unleash your potential with personalized AI insights.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div>
            <img
              src="/assets/img/img2.jpg"
              alt="Office"
              className="w-full rounded-lg object-cover shadow-md"
            />
          </div>

          {/* Text + CTA */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <p className="text-muted-foreground text-base">
              Transform the way you prepare - gain confidence, learn from instant feedback, and boost your chances of landing your dream job. Let AI Mentor be your competitive edge in today’s job market.
            </p>

            <Link to="/generate">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full md:w-auto">
                Start Practicing <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
