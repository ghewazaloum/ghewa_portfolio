"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Forms Easy Website",
    description:
    "Forms Easy is a lightweight form API that lets you collect submissions from your custom HTML forms — no backend coding required. Built with ReactJS and Styled Components, it’s designed for developers who want quick integration and full design control.",
    img: "/formseasy.svg",
    link: "https://forms-easy.com/",
  },
  {
    title: "Value Properties Web app",
    description:
      "Value Properties is a modern real estate web app that helps professionals streamline workflows, connect agents, proprietors, and leads, and manage property campaigns with ease. Built with TypeScript, React, Tailwind CSS, and shadcn/ui, it delivers a fast, responsive, and intuitive experience for all users.",
      img: "/valueProps.svg",
    link: "https://drive.google.com/file/d/13h4UjPws_qE_JFicro5i_PtuGZvDUZ_g/view?usp=sharing",
  },
];

export function ProjectsSection() {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="projects" className="bg-white py-20 px-6 md:px-16 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-indigo-800 mb-6 relative inline-block">
        My Projects
        <span className="absolute left-0 bottom-0 w-16 h-1 bg-indigo-600 rounded-full -mb-2"></span>
     </h2>
      <Carousel
        plugins={[autoplay.current]}
        className="max-w-5xl mx-auto relative"
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <CarouselContent className="gap-8 px-4 md:px-8">
          {projects.map(({ title, description, img, link }, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 flex-shrink-0"
            >
              <Card className="flex flex-col h-full shadow-md rounded-lg border border-indigo-200">
                <img
                  src={img}
                  alt={title}
                  className="rounded-t-lg object-cover h-52 w-full"
                  loading="lazy"
                />
                <CardContent className="flex flex-col flex-grow p-6 bg-indigo-50">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-2xl md:text-3xl font-semibold text-indigo-700">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-indigo-600 text-base">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-0 mt-auto">
                    <Button
                      asChild
                      variant="link"
                      className="w-full text-lg font-medium tracking-wide"
                    >
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-500 transition-colors"
                      >
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-3 shadow-md hover:bg-indigo-700 transition-colors z-10"
          aria-label="Previous Project"
        />
        <CarouselNext
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-3 shadow-md hover:bg-indigo-700 transition-colors z-10"
          aria-label="Next Project"
        />
      </Carousel>
    </section>
  );
}
