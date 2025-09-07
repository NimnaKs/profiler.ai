"use client";

type Pair = {
  id: string;
  beforeUrl: string;
  afterUrl: string;
  altBefore: string;
  altAfter: string;
};

const ITEMS: Pair[] = [
  {
    id: "001",
    beforeUrl: "/samples/001/before.jpg",
    afterUrl: "/samples/001/after.webp",
    altBefore: "Before headshot, light gray background",
    altAfter: "After headshot, light gray background",
  },
  {
    id: "002",
    beforeUrl: "/samples/002/before.jpg",
    afterUrl: "/samples/002/after.webp",
    altBefore: "Before headshot, charcoal background",
    altAfter: "After headshot, charcoal background",
  },
  {
    id: "003",
    beforeUrl: "/samples/003/before.jpg",
    afterUrl: "/samples/003/after.webp",
    altBefore: "Before headshot, office blur",
    altAfter: "After headshot, office blur",
  },
  {
    id: "004",
    beforeUrl: "/samples/004/before.jpg",
    afterUrl: "/samples/004/after.webp",
    altBefore: "Before headshot, light gradient",
    altAfter: "After headshot, light gradient",
  },
  {
    id: "005",
    beforeUrl: "/samples/005/before.jpg",
    afterUrl: "/samples/005/after.webp",
    altBefore: "Before headshot, neutral gray",
    altAfter: "After headshot, neutral gray",
  },
  {
    id: "006",
    beforeUrl: "/samples/006/before.jpg",
    afterUrl: "/samples/006/after.webp",
    altBefore: "Before headshot, studio light",
    altAfter: "After headshot, studio light",
  },
  {
    id: "007",
    beforeUrl: "/samples/007/before.jpg",
    afterUrl: "/samples/007/after.webp",
    altBefore: "Before headshot, soft gradient",
    altAfter: "After headshot, soft gradient",
  },
  {
    id: "008",
    beforeUrl: "/samples/008/before.jpg",
    afterUrl: "/samples/008/after.webp",
    altBefore: "Before headshot, white background",
    altAfter: "After headshot, white background",
  },
];

export default function SamplesGridSection() {
  return (
    <section id="samples" className="relative py-16 sm:py-24">
      {/* === Background (same style as your hero) === */}
      {/* Base vertical wash */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-white" />
      {/* Soft spotlight */}
      <div
        className="pointer-events-none absolute -z-10 left-1/2 -top-20 h-[30rem] w-[70rem] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(37,99,235,0.10), transparent 70%)",
        }}
      />
      {/* Faint dot grid, masked */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-700">
            Before & After — Gallery
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-lg leading-relaxed">
            See how everyday snapshots transform into{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
              polished, professional portraits
            </span>{" "}
            perfect for LinkedIn, CVs, and career growth.
          </p>
        </header>

        {/* 8 curved boxes */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.slice(0, 8).map((item) => (
            <SampleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SampleCard({ item }: { item: Pair }) {
  return (
    <figure className="group relative rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(2,6,23,0.08)] transition-shadow hover:shadow-[0_32px_90px_rgba(2,6,23,0.12)]">
      {/* two-column split inside a curved box */}
      <div className="relative grid grid-cols-2 overflow-hidden rounded-[28px]">
        {/* BEFORE */}
        <div className="relative">
          <img
            src={item.beforeUrl}
            alt={item.altBefore}
            className="aspect-[3/4] h-full w-full object-cover"
            draggable={false}
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
            Before
          </span>
        </div>

        {/* AFTER */}
        <div className="relative">
          <img
            src={item.afterUrl}
            alt={item.altAfter}
            className="aspect-[3/4] h-full w-full object-cover"
            draggable={false}
          />
          <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
            After
          </span>
        </div>
      </div>
    </figure>
  );
}
