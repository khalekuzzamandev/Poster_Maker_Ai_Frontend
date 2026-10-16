"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineSquares2X2,
  HiOutlineFlag,
  HiOutlineSparkles,
  HiOutlineCalendarDays,
  HiOutlineHeart,
  HiOutlineMegaphone,
  HiOutlineAcademicCap,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

const categories = [
  { name: "All Posters", icon: HiOutlineSquares2X2, color: "text-cyan-600" },
  { name: "Political", icon: HiOutlineFlag, color: "text-red-500" },
  { name: "Festival", icon: HiOutlineSparkles, color: "text-amber-500" },
  { name: "Events", icon: HiOutlineCalendarDays, color: "text-blue-500" },
  { name: "Birthday", icon: HiOutlineHeart, color: "text-pink-500" },
  { name: "Campaign", icon: HiOutlineMegaphone, color: "text-purple-500" },
  { name: "Education", icon: HiOutlineAcademicCap, color: "text-emerald-500" },
];

const posters = [
  {
    id: 1,
    title: "Political Campaign",
    category: "Political",
    image: "/posters/political-1.jpg",
  },
  {
    id: 2,
    title: "Festival Celebration",
    category: "Festival",
    image: "/posters/festival-1.jpg",
  },
  {
    id: 3,
    title: "Special Event",
    category: "Events",
    image: "/posters/event-1.jpg",
  },
  {
    id: 4,
    title: "Birthday Wishes",
    category: "Birthday",
    image: "/posters/birthday-1.jpg",
  },
  {
    id: 5,
    title: "Campaign Design",
    category: "Campaign",
    image: "/posters/campaign-1.jpg",
  },
  {
    id: 6,
    title: "Education Poster",
    category: "Education",
    image: "/posters/education-1.jpg",
  },
];

const PostersGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Posters");

  const filteredPosters =
    activeCategory === "All Posters"
      ? posters
      : posters.filter((poster) => poster.category === activeCategory);

  return (
    <section className="px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Explore Posters
            </h2>
            <p className="mt-1 text-sm opacity-70">
              Discover creative designs for every occasion
            </p>
          </div>

          <Link
            href="/posters"
            className="flex shrink-0 items-center gap-1 text-sm transition-opacity hover:opacity-60"
          >
            View All
            <HiOutlineArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Gallery Group Box */}
        <div className="rounded-2xl border border-gray-200/80 p-3 shadow-md transition-shadow hover:shadow-lg sm:p-5 lg:p-6">
          {/* Category Filters */}
          <div className="mb-5 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all sm:text-sm ${isActive
                      ? "border-current shadow-sm"
                      : "border-gray-200 hover:shadow-sm"
                    }`}
                >
                  <Icon className={`h-4 w-4 ${category.color}`} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Poster Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
            {filteredPosters.map((poster) => (
              <Link
                key={poster.id}
                href={`/posters/${poster.id}`}
                className="group overflow-hidden rounded-xl border border-gray-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={poster.image}
                    alt={poster.title}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 p-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold">
                      {poster.title}
                    </h3>
                    <p className="mt-1 text-xs opacity-60">
                      {poster.category}
                    </p>
                  </div>

                  <HiOutlineArrowUpRight className="h-4 w-4 shrink-0 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosters.length === 0 && (
            <p className="py-10 text-center text-sm opacity-60">
              No posters found in this category.
            </p>
          )}

          {/* Bottom Button */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/posters"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all hover:shadow-md"
            >
              Explore All Posters
              <HiOutlineArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostersGallery;