import {
  SiCsharp,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiSolidity,
} from "react-icons/si";

const icons = [
  {
    icon: (className: string) => <SiTypescript className={className} />,
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    icon: (className: string) => <SiJavascript className={className} />,
    name: "JavaScript",
    href: "https://www.javascript.com/",
  },
  {
    icon: (className: string) => <SiCsharp className={className} />,
    name: "C#",
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    icon: (className: string) => <SiPython className={className} />,
    name: "Python",
    href: "https://www.python.org/",
  },
  {
    icon: (className: string) => <SiSolidity className={className} />,
    name: "Solidity",
    href: "https://docs.soliditylang.org/en/v0.8.6/",
  },
];

export default function Languages() {
  return icons.map((icon, index) => (
    <a
      href={icon.href}
      target="_blank"
      className="flex flex-col items-center justify-center p-4"
      key={icon.name}
    >
      {icon.icon("w-10 h-10")}
      <p className="text-2xl font-bold">{icon.name}</p>
    </a>
  ));
}
