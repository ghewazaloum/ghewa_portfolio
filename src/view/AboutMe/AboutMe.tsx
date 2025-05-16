import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";


const skills = [
  { name: "React", level: 90 },
  { name: "Next", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "HTML5", level: 85 },
  { name: "CSS3", level: 85 },
  { name: "Redux", level: 85 },
  { name: "Git & GitHub", level: 80 },
  { name: "Responsive Design", level: 90 },
  { name: "REST APIs", level: 75 },
  { name: "styled component", level: 90 },
  { name: "Bootstrap", level: 75 },
];

export function AboutSection() {
  const [showAll, setShowAll] = useState(false);

  // On mobile show 6 skills, else all
  const skillsToShow = showAll ? skills : skills.slice(0, 6);

  return (
    <section id="about" className="bg-white py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-6 relative inline-block">
          About Me
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-indigo-600 rounded-full -mb-2"></span>
        </h2>
        <p className="text-gray-600 text-lg mb-14 leading-relaxed">
          I’m <span className="font-semibold text-indigo-600">Ghewa Zaloum</span>, a Front-End Developer passionate about crafting beautiful, performant, and user-friendly web applications. I specialize in React, TypeScript, and Tailwind CSS, and love bringing designs to life with clean and maintainable code.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-8">
          Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
          {skillsToShow.map(({ name, level }) => (
            <div key={name} className="space-y-1">
              <div className="flex justify-between items-center mb-1">
                <Badge variant="outline" className="border-indigo-400 text-indigo-600 px-3 py-1 rounded-full font-medium">
                  {name}
                </Badge>
                <span className="text-indigo-600 font-semibold text-sm tabular-nums">
                  {level}%
                </span>
              </div>
              <Progress
                value={level}
                className="h-2 rounded-full bg-indigo-100"
                style={{
                  background: "linear-gradient(to right, #e0e7ff, #c7d2fe)",
                }}
              />
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {skills.length > 6 && (
          <Button
          variant="link"
            onClick={() => setShowAll(!showAll)}
            className="mt-8 px-6 py-3 text-indigo-600  hover:text-indigo-700 transition"
          >
            {showAll ? "See Less" : "See More"}
          </Button>
        )}
      </div>
    </section>
  );
}
