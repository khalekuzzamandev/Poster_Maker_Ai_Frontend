import React from "react";
import Link from "next/link";
import {
  HiOutlineFlag,
  HiOutlineSparkles,
  HiOutlineCalendarDays,
  HiOutlineHeart,
  HiOutlineMegaphone,
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2,
  HiOutlineEllipsisHorizontal,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

const categories = [
  {
    name: "Political",
    icon: HiOutlineFlag,
    color: "text-red-500",
    href: "/categories/political",
  },
  {
    name: "Festival",
    icon: HiOutlineSparkles,
    color: "text-amber-500",
    href: "/categories/festival",
  },
  {
    name: "Events",
    icon: HiOutlineCalendarDays,
    color: "text-blue-500",
    href: "/categories/events",
  },
  {
    name: "Birthday",
    icon: HiOutlineHeart,
    color: "text-pink-500",
    href: "/categories/birthday",
  },
  {
    name: "Campaign",
    icon: HiOutlineMegaphone,
    color: "text-purple-500",
    href: "/categories/campaign",
  },
  {
    name: "Education",
    icon: HiOutlineAcademicCap,
    color: "text-emerald-500",
    href: "/categories/education",
  },
  {
    name: "Business",
    icon: HiOutlineBuildingOffice2,
    color: "text-cyan-600",
    href: "/categories/business",
  },
  {
    name: "Others",
    icon: HiOutlineEllipsisHorizontal,
    color: "text-orange-500",
    href: "/categories/others",
  },
];

const PosterCategories = () => {
  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Poster Categories
            </h2>
            <p className="mt-1 text-sm opacity-70">
              Explore posters for every occasion.
            </p>
          </div>

          <Link
            href="/categories"
            className="group flex shrink-0 items-center gap-1 text-sm transition-opacity hover:opacity-60"
          >
            View All
            <HiOutlineArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* All Categories Group Box */}
        <div className="rounded-2xl border border-gray-200/80 p-3 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-5 lg:p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group flex min-w-0 items-center gap-2 rounded-xl border border-gray-200/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm sm:gap-2.5 sm:p-3.5"
                >
                  {/* Colorful Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-current/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      className={`h-5 w-5 ${category.color}`}
                    />
                  </div>

                  {/* Category Name */}
                  <span className="min-w-0 flex-1 truncate text-xs font-medium sm:text-sm">
                    {category.name}
                  </span>

                  {/* Arrow */}
                  <HiOutlineArrowUpRight className="hidden h-3.5 w-3.5 shrink-0 opacity-50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterCategories;