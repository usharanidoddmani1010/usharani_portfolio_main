import { createFileRoute } from "@tanstack/react-router";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Usharani_Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Usharani — Computer Science Engineering student at BMSCE, MERN stack developer, and problem solver. Projects, skills, and contact.",
      },
      { property: "og:title", content: "Usharani — CSE Student & MERN Stack Developer" },
      {
        property: "og:description",
        content: "Premium personal portfolio of Usharani — projects, skills, achievements.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Usharani",
          jobTitle: "Computer Science Engineering Student",
          alumniOf: "BMS College of Engineering",
          email: "usharanidoddmani018@gmail.com",
          url: "/",
          sameAs: [
            "https://github.com/usharanidoddmanil010",
            "https://linkedin.com/in/usharani-s-39a397374",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
