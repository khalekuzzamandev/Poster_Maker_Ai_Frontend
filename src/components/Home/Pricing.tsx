import React from "react";
import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineRocketLaunch,
  HiOutlineStar,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    period: "/ forever",
    icon: HiOutlineSparkles,
    iconColor: "text-cyan-600",
    features: [
      "Basic poster templates",
      "Standard customization",
      "Basic image downloads",
      "Access to free designs",
    ],
    buttonText: "Get Started",
    href: "/templates",
    featured: false,
  },
  {
    name: "Pro",
    description: "For creators who want more",
    price: "$9",
    period: "/ month",
    icon: HiOutlineRocketLaunch,
    iconColor: "text-violet-500",
    features: [
      "All premium templates",
      "Advanced customization",
      "High-resolution downloads",
      "No watermark",
      "Priority support",
    ],
    buttonText: "Get Pro",
    href: "/pricing/pro",
    featured: true,
  },
  {
    name: "Business",
    description: "For teams and businesses",
    price: "$19",
    period: "/ month",
    icon: HiOutlineStar,
    iconColor: "text-amber-500",
    features: [
      "Everything in Pro",
      "Business poster templates",
      "Commercial usage rights",
      "Team collaboration",
      "Dedicated support",
    ],
    buttonText: "Get Business",
    href: "/pricing/business",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-6 flex items-center gap-2">
          <HiOutlineSparkles className="h-5 w-5 text-amber-500" />

          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Simple & Transparent Pricing
            </h2>

            <p className="mt-1 text-sm opacity-70">
              Choose the right plan for your creativity
            </p>
          </div>
        </div>

        {/* Pricing Group Box */}
        <div className="rounded-2xl border border-gray-200/80 p-3 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 ${plan.featured
                      ? "border-violet-300 shadow-sm"
                      : "border-gray-200/80"
                    }`}
                >
                  {/* Popular Badge */}
                  {plan.featured && (
                    <span className="absolute -top-3 right-4 rounded-full border px-3 py-1 text-xs font-semibold">
                      Most Popular
                    </span>
                  )}

                  {/* Plan Header */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200/70">
                      <Icon className={`h-5 w-5 ${plan.iconColor}`} />
                    </div>

                    <div>
                      <h3 className="text-base font-bold">
                        {plan.name}
                      </h3>
                      <p className="mt-0.5 text-xs opacity-70">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="my-5 border-b border-gray-200/70 pb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">
                        {plan.price}
                      </span>
                      <span className="text-xs opacity-60">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <HiOutlineCheckCircle
                          className={`mt-0.5 h-4 w-4 shrink-0 ${plan.iconColor}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={plan.href}
                    className="mt-6 flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all hover:shadow-sm"
                  >
                    {plan.buttonText}
                    <HiOutlineArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <p className="mt-5 text-center text-xs leading-5 opacity-60">
            Flexible plans for every creator. Choose the plan that works for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;