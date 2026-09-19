import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";

const links = [
  { id: "github", label: "GitHub", href: "https://github.com/wsgo000-debug", icon: "🐙" },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/lwon_sangl?stkn=MXRscDdhbjFnNHBnOQ==",
    icon: "📸",
  },
  { id: "email", label: "Email", href: "mailto:wsgo000@gmail.com", icon: "📧" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <Profile
          name="고원상"
          bio="세계최강의 남자가 될 남자"
          avatarUrl="/avatar-lego.svg"
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
