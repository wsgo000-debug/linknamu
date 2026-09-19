import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full">
        <Image src={avatarUrl} alt={`${name} 프로필 사진`} fill sizes="96px" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
