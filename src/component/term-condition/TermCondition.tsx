"use client";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* HEADER SECTION */}
      <div
        className="h-[45vh] flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/our3.webp')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-white text-lg">
          <Link href="/" className="underline hover:text-orange-300">
            Home
          </Link>{" "}
          / Terms & Conditions
        </p>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 leading-relaxed space-y-6">
        <h2 className="text-3xl font-bold text-[#185e9a]">
          Welcome to MABSOL INFOTECH!
        </h2>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of MABSOL INFOTECH PRIVATE LIMITED’s website,
          <span className="text-blue-600 font-semibold">
            {" "}
            https://mabsolinfotech.in/
          </span>.
        </p>

        <p>
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use MABSOL INFOTECH if you do not agree
          with all of the terms and conditions stated on this page.
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a] ">Terminology</h3>
        <p>
          “Client”, “You”, “Your” refers to you, the person visiting this
          website. “Company”, “We”, “Our”, refers to MABSOL INFOTECH PRIVATE
          LIMITED.
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">Cookies</h3>
        <p>
          We use cookies. By accessing this website, you agreed to use cookies
          in accordance with our Privacy Policy.
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">License</h3>
        <p>
          Unless stated otherwise, MABSOL INFOTECH PRIVATE LIMITED owns all
          intellectual property rights for material on this site.
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>Republish material from MABSOL INFOTECH</li>
          <li>Sell or sub-license material</li>
          <li>Reproduce or copy material</li>
          <li>Redistribute content</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#185e9a]">Comments</h3>
        <p>
          We do not review comments posted by users before they appear on the
          site. Comments reflect the views of the person posting them.
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>The Comments do not violate any intellectual property rights</li>
          <li>The Comments are not defamatory or unlawful</li>
          <li>The Comments do not promote illegal activity</li>
        </ul>

        <p>
          You grant us a non-exclusive right to use, reproduce and edit your
          comments.
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">
          Hyperlinking to Our Content
        </h3>

        <p>The following can link to our website without approval:</p>

        <ul className="list-disc ml-6 space-y-2">
          <li>Government agencies</li>
          <li>Search engines</li>
          <li>News organizations</li>
          <li>Directory distributors</li>
        </ul>

        <p>Other organizations may be approved upon request.</p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">iFrames</h3>
        <p>
          Without written permission, you may not create frames that alter the
          visual appearance of our website.
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">
          Content Liability
        </h3>
        <p>
          We are not responsible for content appearing on your website. You
          agree to protect us against claims arising on your website.
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">
          Your Privacy
        </h3>
        <p>
          Please read our{" "}
          <Link href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">
          Reservation of Rights
        </h3>
        <p>
          We may request removal of any links to our site. By linking to our
          site, you agree to follow our terms.
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">
          Removal of Links
        </h3>
        <p>
          If you find any link offensive, you can contact us anytime. We will
          consider removing it but are not obligated to respond directly.
        </p>

        <h3 className="text-2xl font-semibold text-[#185e9a]">Disclaimer</h3>
        <p>
          We exclude all warranties and conditions relating to the website to
          the maximum extent permitted by law.
        </p>
      </section>
    </div>
  );
}
