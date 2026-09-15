import instagramLogo from "@/assets/logos/instagram.jpeg.asset.json";
import linkedinLogo from "@/assets/logos/linkedin.png.asset.json";
import hubspotLogo from "@/assets/logos/hubspot.jpeg.asset.json";
import metaLogo from "@/assets/logos/meta.jpeg.asset.json";
import googleLogo from "@/assets/logos/google.jpeg.asset.json";
import canvaLogo from "@/assets/logos/canva.jpeg.asset.json";
import openaiLogo from "@/assets/logos/openai.jpeg.asset.json";
import anthropicLogo from "@/assets/logos/anthropic.png.asset.json";
import geminiLogo from "@/assets/logos/gemini.png.asset.json";

export type ToolLogo = {
  name: string;
  url: string;
};

export const toolLogos: ToolLogo[] = [
  { name: "Instagram", url: instagramLogo.url },
  { name: "LinkedIn", url: linkedinLogo.url },
  { name: "HubSpot", url: hubspotLogo.url },
  { name: "Meta", url: metaLogo.url },
  { name: "Google", url: googleLogo.url },
  { name: "Canva", url: canvaLogo.url },
  { name: "OpenAI", url: openaiLogo.url },
  { name: "Anthropic", url: anthropicLogo.url },
  { name: "Google Gemini", url: geminiLogo.url },
];
