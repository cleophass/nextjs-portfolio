"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "../../locales/client";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        e.currentTarget.reset(); // Réinitialiser le formulaire après une soumission réussie
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong.');
      }
    } catch (error) {
      setError('Failed to send the email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const t = useI18n();

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          {t("connect")}
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {t("connectcontent")}
        
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/cleophass">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/cleophasfournier/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : error ? (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        ) : null}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t("mail")}
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              {t("subject")}
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder=              {t("subjectplaceholder")}

            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder=              {t("messageplaceholder")}

            />
          </div>
          <button
  type="submit"
  className="bg-blue-400 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
  disabled={loading}
>
  {loading ? 'Sending...' : t("send")}
</button>

        </form>
      </div>
    </section>
  );
};

export default EmailSection;
