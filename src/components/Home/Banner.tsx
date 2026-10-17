
"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  LayoutGrid,
  ArrowRight,
  WandSparkles,
  Palette,
  Download,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden py-5">


      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5  sm:px-8  lg:grid-cols-2 lg:gap-10 ">
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold tracking-wider text-blue-600 shadow-sm sm:text-sm">
            <Sparkles size={16} />
            AI-POWERED DESIGN STUDIO
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Turn Your Ideas Into{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Stunning Posters With AI.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
            Create professional posters for your business, social media,
            events, and promotions in seconds using AI.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/generate"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <WandSparkles size={19} />
              Create Your Poster
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/templates"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50"
            >
              <LayoutGrid size={19} />
              Explore Templates
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-slate-600 lg:justify-start">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-600" />
              Easy to use
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-600" />
              AI-powered design
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-cyan-600" />
              Download your work
            </span>
          </div>
        </div>

        {/* Right Preview */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Floating Decoration */}
          <div className="absolute -right-3 top-0 hidden h-24 w-24 rounded-full border border-blue-200/70 sm:block" />
          <div className="absolute -bottom-5 left-0 hidden h-20 w-20 rounded-full bg-cyan-200/40 blur-2xl sm:block" />

          {/* Main Generator Card */}
          <div className="relative z-10 rounded-2xl border border-white bg-white/90 p-4 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <WandSparkles size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">
                    AI Poster Maker
                  </h3>
                  <p className="text-xs text-slate-500">
                    Create something amazing
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                AI Studio
              </span>
            </div>

            {/* Prompt Box */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Describe your poster
              </label>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-500">
                A modern promotional poster for a creative technology
                company, blue gradient background, clean typography...
              </div>
            </div>

            {/* Style Options */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 p-3">
                <p className="mb-2 text-xs font-medium text-slate-500">
                  Design Style
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  Modern
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-3">
                <p className="mb-2 text-xs font-medium text-slate-500">
                  Poster Size
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  Portrait · 4:5
                </p>
              </div>
            </div>

            {/* Color Palette */}
            <div className="mt-5">
              <p className="mb-3 text-xs font-semibold text-slate-600">
                Choose your color palette
              </p>
              <div className="flex items-center gap-3">
                {[
                  "bg-blue-600",
                  "bg-cyan-400",
                  "bg-violet-500",
                  "bg-rose-400",
                  "bg-amber-400",
                ].map((color) => (
                  <span
                    key={color}
                    className={`h - 7 w - 7 rounded - full ${ color } ring - 2 ring - white shadow - sm`}
                  />
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <Link
              href="/generate"
              className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:brightness-105"
            >
              <Sparkles size={18} />
              Generate Poster
            </Link>
          </div>

          {/* Floating Feature Cards */}
          <div className="relative z-20 mt-4 grid grid-cols-2 gap-3 sm:absolute sm:-bottom-7 sm:-left-7 sm:mt-0 sm:w-64">
            <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white p-3 shadow-lg shadow-blue-900/5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Palette size={19} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Creative Styles
                </p>
                <p className="text-[10px] text-slate-500">
                  Make it yours
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-cyan-100 bg-white p-3 shadow-lg shadow-blue-900/5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                <Download size={19} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Easy Export
                </p>
                <p className="text-[10px] text-slate-500">
                  Ready to share
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="absolute -right-2 bottom-16 z-20 hidden rounded-2xl border border-white bg-white p-3 text-blue-600 shadow-xl sm:block">
            <ImageIcon size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
