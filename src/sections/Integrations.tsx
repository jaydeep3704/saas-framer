import Tag from "@/components/Tag";
import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import Image from "next/image";

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

export const integrationsType=typeof integrations

export default function Integrations() {
  return (
    <section className="py-24">
      <div className="container">
        <Tag>Integrations</Tag>
        <h2 className="font-medium text-6xl mt-6">
          Plays well with <span className="text-lime-400">others</span>
        </h2>
        <p className="text-lg text-white/50 mt-6">
          Layers seamlessly connects with your favourite tools, making it easy
          to plug into any workflow and collaborate across platforms
        </p>

        <div className="h-[400px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-8">
          <div className="flex flex-col gap-4 pb-4 ">
            {integrations.map((integration) => {
              return (
                <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 ">
                  <div className="flex justify-center">
                    <Image
                      src={integration.icon}
                      alt={integration.name}
                      className="size-24 "
                    />
                  </div>
                  <h3 className="text-3xl text-center mt-6">
                    {integration.name}
                  </h3>
                  <p className="text-center text-white/50 mt-2 text-md">
                    {integration.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
