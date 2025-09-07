import Image from "next/image";

export default function Logo({
  withWordmark = true,
}: {
  withWordmark?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-13 w-13 overflow-hidden rounded-md">
        <Image
          src="/avatar.png"
          alt="profiler.ai logo"
          width={100}
          height={100}
          className="h-full w-full object-cover"
          priority
        />
      </span>

      {withWordmark && (
        <span className="font-semibold tracking-tight leading-none">
          <span className="text-slate-600 text-[18px] sm:text-[20px]">
            Profiler.ai
          </span>
        </span>
      )}
    </div>
  );
}
