
"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import {
  FaMagic,
  FaCut,
  FaImage,
  FaFont,
  FaThLarge,
  FaDownload,
  FaUniversity,
  FaBriefcase,
  FaFlag,
  FaBirthdayCake,
  FaShareAlt,
  FaGraduationCap,
  FaUser,
  FaPrayingHands,
  FaCalendarAlt,
  FaFutbol,
  FaUserTie,
  FaHome,
  FaUtensils,
  FaHeartbeat,
  FaLaptop,
  FaBullhorn,
  FaEnvelope,
  FaTags,
  FaYoutube,
  FaLightbulb,
  FaGift,
  FaDollarSign,
  FaCrown,
  FaUsers,
  FaBook,
  FaPalette,
  FaQuestionCircle,
  FaNewspaper,
  FaRobot,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

type MenuItem = {
  title: string;
  desc?: string;
  icon: IconType;
};

type NavDropdownProps = {
  label: string;
  items: MenuItem[];
  width?: "small" | "large";
};

const features: MenuItem[] = [
  {
    title: "AI Poster Generator",
    desc: "Create posters using AI",
    icon: FaMagic,
  },
  {
    title: "Background Remover",
    desc: "Remove image backgrounds",
    icon: FaCut,
  },
  {
    title: "AI Image Editor",
    desc: "Edit images with AI",
    icon: FaImage,
  },
  {
    title: "Text & Typography",
    desc: "Customize text and fonts",
    icon: FaFont,
  },
  {
    title: "Ready-Made Templates",
    desc: "Start with pre-designed layouts",
    icon: FaThLarge,
  },
  {
    title: "Download & Export",
    desc: "Export your finished designs",
    icon: FaDownload,
  },
];

const templates: MenuItem[] = [
  { title: "Political Posters", icon: FaUniversity },
  { title: "Business & Marketing", icon: FaBriefcase },
  { title: "National & Tribute", icon: FaFlag },
  { title: "Birthday & Events", icon: FaBirthdayCake },
  { title: "Social Media", icon: FaShareAlt },
  { title: "Education", icon: FaGraduationCap },
  { title: "Personal Branding", icon: FaUser },
  { title: "Religious Posters", icon: FaPrayingHands },
  { title: "Festival & Celebration", icon: FaCalendarAlt },
  { title: "Sports & Gaming", icon: FaFutbol },
  { title: "Job & Recruitment", icon: FaUserTie },
  { title: "Real Estate", icon: FaHome },
  { title: "Food & Restaurant", icon: FaUtensils },
  { title: "Health & Medical", icon: FaHeartbeat },
  { title: "Technology", icon: FaLaptop },
  { title: "Event Promotion", icon: FaBullhorn },
  { title: "Awareness Campaign", icon: FaBullhorn },
  { title: "Invitation Cards", icon: FaEnvelope },
  { title: "Sale & Discounts", icon: FaTags },
  { title: "YouTube Thumbnails", icon: FaYoutube },
  { title: "Motivational Posters", icon: FaLightbulb },
  { title: "Wedding & Anniversary", icon: FaGift },
];

const pricing: MenuItem[] = [
  {
    title: "Free Plan",
    desc: "Create posters with basic features",
    icon: FaDollarSign,
  },
  {
    title: "Pro Plan",
    desc: "Unlock premium templates and tools",
    icon: FaCrown,
  },
  {
    title: "Enterprise Plan",
    desc: "Advanced tools for teams and businesses",
    icon: FaUsers,
  },
];

const learning: MenuItem[] = [
  {
    title: "Documentation",
    desc: "Learn how to use PMA World",
    icon: FaBook,
  },
  {
    title: "Tutorials",
    desc: "Step-by-step poster creation guides",
    icon: FaGraduationCap,
  },
  {
    title: "Design Tips",
    desc: "Improve your poster design skills",
    icon: FaPalette,
  },
  {
    title: "FAQs",
    desc: "Answers to common questions",
    icon: FaQuestionCircle,
  },
];

const blogs: MenuItem[] = [
  {
    title: "Latest Articles",
    desc: "Explore the latest posts",
    icon: FaNewspaper,
  },
  {
    title: "Design Inspiration",
    desc: "Discover creative poster ideas",
    icon: FaPalette,
  },
  {
    title: "Design Tips & Tricks",
    desc: "Learn to create better posters",
    icon: FaLightbulb,
  },
  {
    title: "AI & Technology",
    desc: "Explore AI design trends",
    icon: FaRobot,
  },
];

const DropdownItem = ({
  item,
  onSelect,
}: {
  item: MenuItem;
  onSelect: () => void;
}) => {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full min-w-0 items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors hover:bg-gray-100"
    >
      <Icon className="shrink-0 text-base text-gray-500" />

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-gray-800">
          {item.title}
        </span>

        {item.desc && (
          <span className="mt-0.5 block text-xs leading-4 text-gray-500">
            {item.desc}
          </span>
        )}
      </span>
    </button>
  );
};

const NavDropdown = ({
  label,
  items,
  width = "small",
}: NavDropdownProps) => {
  const [open, setOpen] = useState(false);

  const itemStyles =
    "flex items-center justify-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition-colors hover:text-black";

  return (
    <div
      className="group relative shrink-0"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className={itemStyles}
      >
        {label}

        <RiArrowDropDownLine
          className={`text-xl transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 sm:left-1/2 sm:-translate-x-1/2 ${width === "large"
            ? "w-[min(88vw,560px)]"
            : "w-[min(88vw,290px)]"
          } ${open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0"
          }`}
      >
        <div
          className={`max-h-[65vh] overflow-y-auto rounded-lg border border-gray-200 bg-white p-2 shadow-lg ${width === "large" ? "grid grid-cols-1 gap-1 sm:grid-cols-2" : ""
            }`}
        >
          {items.map((item) => (
            <DropdownItem
              key={item.title}
              item={item}
              onSelect={() => setOpen(false)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MiddleNav = () => {
  return (
    <nav className="w-full min-w-0">
      <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-7 lg:gap-x-10">
        <NavDropdown label="Features" items={features} />

        <NavDropdown
          label="Templates"
          items={templates}
          width="large"
        />

        <NavDropdown label="Pricing" items={pricing} />

        <NavDropdown label="Learn" items={learning} />

        <NavDropdown label="Blog" items={blogs} />
      </div>
    </nav>
  );
};

export default MiddleNav;
