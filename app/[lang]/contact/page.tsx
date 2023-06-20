import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact me through the contact page of my Next.js portfolio. Let's discuss potential collaborations, project inquiries, or any questions you may have. I'm excited to connect with you and explore how we can work together to create remarkable web solutions.",
};

function page() {
  return (
    <a href="mailto:hello@adeir.me">
      <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-medium text-center">
        hello@adeir.me
      </h3>
    </a>
  );
}

export default page;
