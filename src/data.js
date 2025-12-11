import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ps.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/mysql.png";
import Tools13 from "/assets/tools/git.png";
import Tools14 from "/assets/tools/arduino.png";
import Tools15 from "/assets/tools/docker.png";
import Tools16 from "/assets/tools/postgresql.png";
import Tools17 from "/assets/tools/postman.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Photoshop",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "My SQL",
    ket: "Database",
    dad: "1200",
  },  
  {
    id: 13,
    gambar: Tools13,
    nama: "Git",
    ket: "Source Control",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Arduino",
    ket: "IoT",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Docker",
    ket: "DevOps",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "PostgreSQL",
    ket: "Database",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Postman",
    ket: "API Testing",
    dad: "1700",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";
import Proyek7 from "/assets/proyek/proyek7.png";


export const listProject = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Stuff Nudge",
    desk: "A simple and minimalist web activity planner for recording, organizing, and tracking daily tasks.",
    tools: ["HTML", "React.js", "Javascript", "Figma", "CSS", "Tailwind CSS", "Vite", "Vercel"],
    url: "https://stuff-nudge.vercel.app/",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Diletra 6.0",
    desk: "The Diletra 6.0 design concept draws inspiration from the world of Narnia, presenting magical, elegant, and adventurous visuals with harmoniously unified elements.",
    tools: ["Photoshop", "Canva", "Figma"],
    url: "https://drive.google.com/file/d/1USR1jGoFfb3BPYxSYMhvLW3K6hqIJ_s0/view?usp=sharing",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Diletra 5.0",
    desk: "The Diletra 5.0 design concept embraces a royal and tarot-inspired theme, featuring mystical, dramatic, and symbolic visuals that create an immersive and enchanting atmosphere.",
    tools: ["Canva", "Figma"],
    url: "https://drive.google.com/file/d/1USR1jGoFfb3BPYxSYMhvLW3K6hqIJ_s0/view?usp=sharing",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Sporty Buddy",
    desk: "An app that helps users find and book certified swimming coaches through clean, intuitive UI design.",
    tools: ["Canva", "Figma"],
    url: "https://drive.google.com/file/d/1USR1jGoFfb3BPYxSYMhvLW3K6hqIJ_s0/view?usp=sharing",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Digivathon 2024",
    desk: "An innovation competition by the Digital Business program, designed with a retro pixel-game theme for all event materials.",
    tools: ["Canva", "Figma", "Ibis Paint"],
    url: "https://drive.google.com/file/d/1USR1jGoFfb3BPYxSYMhvLW3K6hqIJ_s0/view?usp=sharing",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Feeds Dapoer Nyi Iteung",
    desk: "A culinary brand combining Chinese and Sundanese flavors, supported by visual designs that highlight cultural warmth and tradition.",
    tools: ["Canva"],
    url: "https://drive.google.com/file/d/1USR1jGoFfb3BPYxSYMhvLW3K6hqIJ_s0/view?usp=sharing",
    dad: "600",   
  },
 {
    id: 7,
    gambar: Proyek7,
    nama: "Runsisment",
    desk: "A safety app for women to avoid harassment, featuring emergency tools, location tracking, and quick-access protection features.",
    tools: ["Canva", "Figma"],
    url: "https://drive.google.com/file/d/1USR1jGoFfb3BPYxSYMhvLW3K6hqIJ_s0/view?usp=sharing",
    dad: "600",
  },
  
];
