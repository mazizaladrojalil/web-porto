import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/navbar/Nav";
import Project from "@/components/portofolio/Porto";


export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Project/>
      <Contact/>
    </div>
  );
}
