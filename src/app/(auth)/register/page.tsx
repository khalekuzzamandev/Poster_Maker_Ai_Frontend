
"use client";

import { authClient } from "@/lib/auth-client";
import {
  Eye,
  EyeOff,
  UserRound,
  Mail,
  Image as ImageIcon,
  LockKeyhole,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import React, { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      imageUrl: string;
    };

    try {
      const result = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.imageUrl || undefined,
      });

      if (result.error) {
        setError(result.error.message || "Registration failed.");
        return;
      }

      console.log("Registration successful", result);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 sm:px-6">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-200/60 md:grid-cols-2">
        {/* Left Side - Branding */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-sky-900 p-10 text-white md:flex lg:p-12">
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-12 top-36 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
                <Sparkles size={26} />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight">
                  Poster Maker AI
                </h1>
                <p className="text-xs text-cyan-100">
                  Create. Design. Inspire.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-cyan-50">
                <Sparkles size={15} />
                Your creativity starts here
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight lg:text-5xl">
                Bring your
                <br />
                ideas to life
                <br />
                with <span className="text-cyan-200">AI.</span>
              </h2>

              <p className="mt-6 max-w-sm text-base leading-7 text-cyan-50/85">
                Design stunning posters in minutes. Explore creative
                templates and turn your imagination into beautiful designs.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-700 bg-cyan-100 text-sm font-bold text-cyan-800">
                  D
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-700 bg-sky-100 text-sm font-bold text-sky-800">
                  C
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-700 bg-white text-sm font-bold text-cyan-700">
                  +
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Made for creative minds
                </p>
                <p className="mt-1 text-xs text-cyan-100">
                  Your next great design starts today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side - Registration Form */}
        <section className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 md:hidden">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-200">
                <Sparkles size={25} />
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                Poster Maker AI
              </h1>
            </div>

            <div className="mb-8">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700">
                <Sparkles size={14} />
                Start creating for free
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Join us and start creating amazing posters with AI.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full name
                </label>

                <div className="group flex items-center rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition-all focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-500/10">
                  <UserRound
                    size={19}
                    className="shrink-0 text-slate-400 transition-colors group-focus-within:text-cyan-600"
                  />
                  <input
                    id="name"
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="group flex items-center rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition-all focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-500/10">
                  <Mail
                    size={19}
                    className="shrink-0 text-slate-400 transition-colors group-focus-within:text-cyan-600"
                  />
                  <input
                    id="email"
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label
                  htmlFor="imageUrl"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Profile image{" "}
                  <span className="font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <div className="group flex items-center rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition-all focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-500/10">
                  <ImageIcon
                    size={19}
                    className="shrink-0 text-slate-400 transition-colors group-focus-within:text-cyan-600"
                  />
                  <input
                    id="imageUrl"
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    name="imageUrl"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="group flex items-center rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition-all focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-500/10">
                  <LockKeyhole
                    size={19}
                    className="shrink-0 text-slate-400 transition-colors group-focus-within:text-cyan-600"
                  />
                  <input
                    id="password"
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    name="password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 shrink-0 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition-all hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? "Creating account..." : "Create account"}
                {!loading && (
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">
                OR CONTINUE WITH
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Google Sign Up */}
            <button
              type="button"
              
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-cyan-300 hover:bg-cyan-50/50"
            >
              <FcGoogle size={21} />
              Continue with Google
            </button>

            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-bold text-cyan-700 transition-colors hover:text-cyan-900"
              >
                Sign in
              </a>
            </p>

            <p className="mt-6 text-center text-xs leading-5 text-slate-400">
              By creating an account, you agree to our{" "}
              <a
                href="/terms"
                className="font-medium text-slate-600 underline underline-offset-2 hover:text-cyan-700"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="font-medium text-slate-600 underline underline-offset-2 hover:text-cyan-700"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
