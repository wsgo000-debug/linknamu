import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { BlogIcon, GithubIcon, LinkedinIcon } from "@/components/icons";

const links = [
  { label: "GitHub", href: "https://github.com/username", icon: <GithubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/username", icon: <LinkedinIcon /> },
  { label: "Blog", href: "https://username.blog", icon: <BlogIcon /> },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <Profile name="고원상" bio="세계최강의 남자가 될 남자" />
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.label} href={link.href} label={link.label} icon={link.icon} />
          ))}
        </div>
      </main>
    </div>
  );
}
