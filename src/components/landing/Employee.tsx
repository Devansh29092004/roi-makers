import React from "react";
import PixelTransition from "../PixelTransition";

const catProfiles = [
  {
    id: 1,
    name: "Pixel",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Whiskers",
    image: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Nebula",
    image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Comet",
    image: "https://images.unsplash.com/photo-1450849608880-6f787542c88a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Mochi",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Pixelina",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80",
  },
];

const Employee = () => {
  return (
    <section className="w-full text-black py-16 sm:py-20 px-6 sm:px-12 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-3xl font-bold  text-[#FFAA17]">Our Crew</p>
          <h2 className="text-5xl sm:text-4xl lg:text-5xl font-extrabold">Meet The Team</h2>
          <p className="text-2xl   text-[#000000] max-w-2xl mx-auto">
            A team which define the infinite ideas
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(160px,1fr)]">
          {catProfiles.map((cat) => (
            <div key={cat.id} className="w-full h-[180px] sm:h-[200px] lg:h-[220px]">
              <PixelTransition
                className="w-full h-full rounded-2xl overflow-hidden border border-black/10 shadow-xl"
                firstContent={
                  <img
                    src={cat.image}
                    alt={`${cat.name} the cat`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "1.75rem", color: "#ffffff" }}>{cat.name}</p>
                  </div>
                }
                gridSize={6}
                pixelColor="#ffffff"
                once={false}
                animationStepDuration={0.4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Employee;
