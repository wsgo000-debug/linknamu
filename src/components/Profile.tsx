import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:ring-white/10">
        <Image
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          fill
          sizes="112px"
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
          {name}
        </h1>
        <p className="text-[15px] font-medium text-[#86868b]">{bio}</p>
      </div>
    </div>
  );
}
