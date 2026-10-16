"use client";

import React, { useState } from "react";
import {
  HiOutlineQuestionMarkCircle,
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineSparkles,
} from "react-icons/hi2";

const faqs = [
  {
    question: "What is PMA World?",
    answer:
      "PMA World is a poster design platform where you can explore templates and create posters for events, campaigns, festivals, birthdays, and more.",
  },
  {
    question: "How can I create a poster?",
    answer:
      "Choose a template, customize the design with your text and images, preview your result, and download your finished poster.",
  },
  {
    question: "Is PMA World free to use?",
    answer:
      "PMA World can offer free and premium templates. Available features and pricing depend on the plans provided by the platform.",
  },
  {
    question: "Can I customize poster templates?",
    answer:
      "Templates can be customized according to the editing tools available on the platform, such as changing text, images, and other design elements.",
  },
  {
    question: "Can I download high-quality posters?",
    answer:
      "Download quality depends on the export options available for your selected template and account plan.",
  },
  {
    question: "Can I use posters for commercial purposes?",
    answer:
      "Commercial use depends on the usage rights of each template, image, font, and other included design assets. Check the applicable license before using a poster commercially.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
            <HiOutlineQuestionMarkCircle className="h-6 w-6 text-cyan-600" />
          </div>

          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-1 text-sm opacity-70">
              Everything you need to know about PMA World
            </p>
          </div>
        </div>

        {/* FAQ Group Box */}
        <div className="rounded-2xl border border-gray-200/80 p-3 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-5 lg:p-6">
          <div className="mx-auto max-w-4xl divide-y divide-gray-200/70">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-4 rounded-lg px-3 py-4 text-left transition-all hover:shadow-sm sm:px-4"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <HiOutlineSparkles
                        className={`h-5 w-5 shrink-0 transition-colors ${isOpen
                            ? "text-cyan-600"
                            : "opacity-50 group-hover:text-cyan-600"
                          }`}
                      />

                      <span className="text-sm font-semibold sm:text-base">
                        {faq.question}
                      </span>
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border">
                      {isOpen ? (
                        <HiOutlineMinus className="h-4 w-4 text-cyan-600" />
                      ) : (
                        <HiOutlinePlus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-3 pb-4 pl-11 sm:px-4 sm:pl-12">
                      <p className="text-sm leading-6 opacity-70">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-5 border-t border-gray-200/70 pt-5 text-center">
            <p className="text-sm opacity-70">
              Still have questions?
            </p>

            <a
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
            >
              Contact Our Team
              <HiOutlineQuestionMarkCircle className="h-4 w-4 text-cyan-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;