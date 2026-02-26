import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const contacts = [
  {
    icon: SiGithub,
    label: "Github",
    link: "https://github.com/Rafhael-Augusto",
  },
  {
    icon: SiLinkedin,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/rafhael-augusto/",
  },
  {
    icon: SiGmail,
    label: "Email",
    link: "RafhaelAugustoDev@gmail.com",
  },
];

export function Footer() {
  return (
    <div className="text-secondary">
      <ul className="flex items-center justify-center gap-8">
        {contacts.map((item) => (
          <li key={item.label}>
            <div className="flex items-center gap-2 text-lg underline">
              <item.icon />

              <a
                href={
                  item.link.includes("@") ? `mailto:${item.link}` : item.link
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
