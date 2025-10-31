import TeamShowcase, { TeamInfo } from "@/components/TeamShowcase";

const teamImages = [
  "/team/1.jpg",
  "/team/2.jpg",
  "/team/3.jpg",
  "/team/1.jpg",
  "/team/2.jpg",
  "/team/3.jpg",
  "/team/1.jpg",
];

const teamNames = [
  "Leads",
  "Aniruddh",
  "Atharva",
  "Anam",
  "Devansh",
  "Ketan",
  "Jigyarth",
  "Tanishka",
];

const teamInfo: TeamInfo[] = [
  {
    fullName: "Aniruddh Dubge",
    role: "Technical Lead",
    bio: "Aniruddh is the team lead and visionary.",
    fun: "Loves chess and coffee.",
  },
  {
    fullName: "Atharva Raj Singh Thakur",
    role: "Technical Lead",
    bio: "Atharva writes robust code and builds features.",
    fun: "Can solve a Rubik's cube in 30s.",
  },
  {
    fullName: "Anam Mansori",
    role: "Social Lead",
    bio: "Anam crafts beautiful user experiences.",
    fun: "Enjoys painting and hiking.",
  },
  {
    fullName: "Devansh Jagtap",
    role: "Operations & Logistics Lead",
    bio: "Devansh manages the server and APIs.",
    fun: "Fan of sci-fi movies.",
  },
  {
    fullName: "Ketan Thombare",
    role: "Out Reach Lead",
    bio: "Ketan brings designs to life in the browser.",
    fun: "Plays the guitar.",
  },
  {
    fullName: "Jigyarth Sharma",
    role: "Operations & Logistics Lead",
    bio: "Jigyarth ensures everything works perfectly.",
    fun: "Loves puzzles.",
  },
  {
    fullName: "Tanishka Sharma",
    role: "Social Lead",
    bio: "Ketan automates deployments and keeps things running.",
    fun: "Enjoys cycling.",
  },
];

export default function TeamPage() {
  return (
    <TeamShowcase
      teamNames={teamNames}
      teamImages={teamImages}
      teamInfo={teamInfo}
      title="{ Meet The }"
    />
  );
}