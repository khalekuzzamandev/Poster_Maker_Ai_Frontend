import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineArrowUpRight,
  HiOutlineHeart,
  HiOutlinePhoto,
} from "react-icons/hi2";

const templates = [
  {
    id: 1,
    title: "Political Campaign",
    category: "Political",
    image: "/posters/political-1.jpg",
    iconColor: "text-red-500",
  },
  {
    id: 2,
    title: "Festival Celebration",
    category: "Festival",
    image: "/posters/festival-1.jpg",
    iconColor: "text-amber-500",
  },
  {
    id: 3,
    title: "Birthday Wishes",
    category: "Birthday",
    image: "/posters/birthday-1.jpg",
    iconColor: "text-pink-500",
  },
  {
    id: 4,
    title: "Business Promotion",
    category: "Business",
    image: "/posters/business-1.jpg",
    iconColor: "text-cyan-600",
  },
];

const FeaturedTemplates = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <HiOutlineSparkles className="h-5 w-5 text-amber-500" />
              <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
                Handpicked Designs
              </span>
            </div>

            <h2 className="text-xl font-bold sm:text-2xl">
              Featured Templates
            </h2>

            <p className="mt-1 text-sm opacity-70">
              Discover our popular poster templates
            </p>
          </div>

          <Link
            href="/templates"
            className="group flex shrink-0 items-center gap-1 text-sm transition-opacity hover:opacity-60"
          >
            View All
            <HiOutlineArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Featured Templates Group Box */}
        <div className="rounded-2xl border border-gray-200/80 p-3 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-5 lg:p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {templates.map((template) => (
              <Link
                key={template.id}
                href={`/templates/${template.id}`}
                className="group overflow-hidden rounded-xl border border-gray-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Template Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Featured Badge */}
                  <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full border border-white/60 bg-white/90 px-2 py-1 text-xs font-medium text-gray-900 shadow-sm">
                    <HiOutlineSparkles className="h-3.5 w-3.5 text-amber-500" />
                    Featured
                  </div>

                  {/* Preview Icon */}
                  <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-gray-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                    <HiOutlineArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Template Details */}
                <div className="p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="truncate text-xs opacity-60">
                      {template.category}
                    </span>

                    <HiOutlinePhoto
                      className={`h-4 w-4 shrink-0 ${template.iconColor}`}
                    />
                  </div>

                  <h3 className="truncate text-sm font-semibold">
                    {template.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between border-t border-gray-200/70 pt-3">
                    <span className="text-xs opacity-70">
                      Use Template
                    </span>

                    <HiOutlineArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-5 flex justify-center">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all hover:shadow-md"
            >
              Explore All Templates
              <HiOutlineArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;