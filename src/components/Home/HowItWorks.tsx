import React from "react";
import Link from "next/link";
import {
  HiOutlineRectangleStack,
  HiOutlinePencilSquare,
  HiOutlineArrowDownTray,
  HiOutlineArrowRight,
  HiOutlineSparkles,
} from "react-icons/hi2";

const steps = [
  {
    id: "01",
    title: "Choose a Template",
    description:
      "Explore our collection and select a poster template for your needs.",
    icon: HiOutlineRectangleStack,
    color: "text-cyan-600",
  },
  {
    id: "02",
    title: "Customize Your Design",
    description:
      "Add your text, images, and personal touch to make it unique.",
    icon: HiOutlinePencilSquare,
    color: "text-violet-500",
  },
  {
    id: "03",
    title: "Download Your Poster",
    description:
      "Preview your design and download your finished poster.",
    icon: HiOutlineArrowDownTray,
    color: "text-emerald-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <HiOutlineSparkles className="h-5 w-5 text-amber-500" />
              <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
                Simple & Easy
              </span>
            </div>

            <h2 className="text-xl font-bold sm:text-2xl">
              How It Works
            </h2>

            <p className="mt-1 text-sm opacity-70">
              Create your perfect poster in three simple steps
            </p>
          </div>
        </div>

        {/* Steps Group Box */}
        <div className="rounded-2xl border border-gray-200/80 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative">
                  <div className="group flex h-full gap-4 rounded-xl border border-gray-200/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm sm:p-5">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200/70 transition-transform duration-300 group-hover:scale-110">
                      <Icon className={`h-6 w-6 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-xs font-bold opacity-50">
                          STEP {step.id}
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold sm:text-base">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 opacity-70 sm:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
                      <HiOutlineArrowRight className="h-5 w-5 opacity-40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-gray-200/70 pt-5 sm:flex-row">
            <p className="text-center text-sm opacity-70 sm:text-left">
              Ready to bring your ideas to life?
            </p>

            <Link
              href="/templates"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all hover:shadow-md"
            >
              Start Creating
              <HiOutlineArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;