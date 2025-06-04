import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Society PC",
  description: "Get in touch with Society PC for all your computer repair and tech service needs in Easton, PA.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}