import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiNodedotjs,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90, icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", level: 85, icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", level: 85, icon: SiJavascript, color: "#F7DF1E" },
      { name: "React JS", level: 80, icon: SiReact, color: "#61DAFB", spin: true },
      { name: "Vue.js", level: 75, icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Tailwind CSS", level: 88, icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", level: 80, icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", level: 75, icon: SiLaravel, color: "#FF2D20" },
      { name: "CodeIgniter 4", level: 80, icon: SiCodeigniter, color: "#EF4223" },
      { name: "Node.js", level: 75, icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MySQL", level: 75, icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", level: 70, icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", level: 75, icon: SiSupabase, color: "#3ECF8E" },
    ]
  },
  {
    category: "Tools & Utilities",
    skills: [
      { name: "Git", level: 80, icon: SiGit, color: "#F05032" },
      { name: "GitHub", level: 85, icon: SiGithub, color: "#FFFFFF" },
      { name: "Figma", level: 75, icon: SiFigma, color: "#F24E1E" },
      { name: "VS Code", level: 90, icon: VscCode, color: "#007ACC" },
      { name: "Vercel", level: 80, icon: SiVercel, color: "#FFFFFF" },
    ]
  }
];