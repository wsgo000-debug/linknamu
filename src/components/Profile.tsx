type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-12 w-12 text-zinc-400 dark:text-zinc-600"
        >
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z" />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
