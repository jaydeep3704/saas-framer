import Tag from "@/components/Tag";
import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import Image from "next/image";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaLogo,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionLogo,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackLogo,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeLogo,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerLogo,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubLogo,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType=typeof integrations

export default function Integrations() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto lg:flex items-center lg:gap-16">
        <div>
        <Tag>Integrations</Tag>
        <h2 className="font-medium text-6xl mt-6">
          Plays well with <span className="text-lime-400">others</span>
        </h2>
        <p className="text-lg text-white/50 mt-6">
          Layers seamlessly connects with your favourite tools, making it easy
          to plug into any workflow and collaborate across platforms
        </p>

        </div>
       
        <div className="h-[400px] lg:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-8 lg:mt-0">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 pb-4  ">
           <IntegrationsColumn integrations={integrations} />
           <IntegrationsColumn integrations={integrations.slice().reverse()} className="hidden md:flex"/>

          </div>
        </div>
      </div>
    </section>
  );
}
