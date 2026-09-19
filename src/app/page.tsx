import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";

const links = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/wsgo000-debug",
    icon: "🐙",
    iconBg: "bg-[#1d1d1f] text-white",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/lwon_sangl?stkn=MXRscDdhbjFnNHBnOQ==",
    icon: "📸",
    iconBg: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:wsgo000@gmail.com",
    icon: "📧",
    iconBg: "bg-[#0071e3] text-white",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#f5f5f7] px-4 py-20 dark:bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-orange-300/40 blur-3xl dark:bg-orange-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-blue-300/40 blur-3xl dark:bg-blue-500/15"
      />
      <main className="relative flex w-full max-w-sm flex-col items-center gap-10">
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
