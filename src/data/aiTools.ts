import { LucideIcon, HeartPulse, Heart, FileText, Brain } from "lucide-react";

export interface AITool {
  id: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  color: "accent" | "success" | "info" | "primary";
  description: string;
  details: string;
}

export const aiTools: AITool[] = [
  {
    id: "ramp",
    name: "RAMP",
    subtitle: "Watches Your Health 24/7",
    icon: HeartPulse,
    color: "accent",
    description: "RAMP watches your heart rate, breathing, and other health signs all day and night.",
    details: "If something looks wrong, RAMP tells your care team right away so they can help you fast."
  },
  {
    id: "impact-pro",
    name: "IMPACT Pro",
    subtitle: "Risk Assessment Tool",
    icon: Heart,
    color: "success",
    description: "IMPACT Pro helps doctors figure out when a patient is a high risk and has extra need for medical assistance, so they can be placed into a special program.",
    details: "It uses healthcare data such as past health history, current health status, and other factors to determine if a patient is at risk."
  },
  {
    id: "dax-copilot",
    name: "DAX Copilot",
    subtitle: "Smart Note Writer",
    icon: FileText,
    color: "info",
    description: "DAX Copilot listens to you and your doctor talk. Then it writes notes about your visit.",
    details: "This gives your doctor more time to look at you and talk to you instead of typing. Your doctor will ask if it's okay to use this tool. DAX Copilot will only write down things related to your visit and your health and never listens to or records any other conversations. You can see the notes in MyChart."
  },
  {
    id: "comet",
    name: "CoMet",
    subtitle: "Finds Health Risks Early",
    icon: Brain,
    color: "primary",
    description: "CoMet looks at your health information to find problems before they get big.",
    details: "This helps your doctor make a care plan that's just right for you."
  }
];

