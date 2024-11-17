import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import SuccessStories from "@/components/home/SuccessStories";
import MaxWidthWrapper from "@/components/wrapper/MaxWidthWrapper";
import MentorProfiles from "@/components/home/MentorProfile";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import JoinMentorConnect from "@/components/home/Join";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/Faq";
import { Variants } from "framer-motion";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };
  return (
    <main className="pt-20">
      <Hero fadeInUp={fadeInUp} staggerChildren={staggerChildren}/>
      <MaxWidthWrapper>
        <HowItWorks fadeInUp={fadeInUp} staggerChildren={staggerChildren}/>
        <SuccessStories fadeInUp={fadeInUp} staggerChildren={staggerChildren}/>
      </MaxWidthWrapper>
      <MentorProfiles fadeInUp={fadeInUp} staggerChildren={staggerChildren}/>
      <WhyChooseUs fadeInUp={fadeInUp} staggerChildren={staggerChildren}/>
      <JoinMentorConnect fadeInUp={fadeInUp} staggerChildren={staggerChildren}/>
      <Testimonials fadeInUp={fadeInUp} staggerChildren={staggerChildren}/>
      <FAQSection fadeInUp={fadeInUp} staggerChildren={staggerChildren}/>
    </main>
  );
}

