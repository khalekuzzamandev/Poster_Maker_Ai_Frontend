import React from "react";
import {
  HiOutlinePhoto,
  HiOutlineSquares2X2,
  HiOutlineUsers,
  HiOutlineArrowDownTray,
} from "react-icons/hi2";

const Statistics = () => {
  const stats = [
    {
      title: "Posters Created",
      value: "10K+",
      description: "Creative posters made",
      icon: HiOutlinePhoto,
    },
    {
      title: "Templates",
      value: "500+",
      description: "Ready-to-use designs",
      icon: HiOutlineSquares2X2,
    },
    {
      title: "Happy Users",
      value: "5K+",
      description: "Creators using PMA World",
      icon: HiOutlineUsers,
    },
    {
      title: "Downloads",
      value: "20K+",
      description: "Posters downloaded",
      icon: HiOutlineArrowDownTray,
    },
  ];

  return (
    <section className="px-4 py-8 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-700">
            Our Impact
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Creativity in Number
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Everything you need to create beautiful posters,
            all in one place.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/50 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm font-semibold text-gray-800 sm:text-base">
                  {stat.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;