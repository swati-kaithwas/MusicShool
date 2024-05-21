"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
    {
      title: "Interactive Music Lessons",
      description:
        "Engage with our interactive music lessons designed to make learning enjoyable and effective. Whether you're a beginner or an advanced musician, our platform offers personalized instruction to help you reach your musical goals.",
    },
    {
      title: "Live Collaboration Sessions",
      description:
        "Join live collaboration sessions with fellow musicians and instructors. Experience the thrill of making music together in real time, no matter where you are. Our platform fosters a supportive community where you can share ideas, jam, and learn from each other.",
    },
    {
      title: "Real-time Feedback",
      description:
        "Receive instant feedback from our experienced instructors as you practice. With our platform, you'll get real-time guidance on technique, expression, and musicality, helping you improve faster and become a confident performer.",
    },
    {
      title: "Performance Showcase",
      description:
        "Showcase your musical talents in our virtual performance events. From solo recitals to ensemble performances, our platform provides a stage for you to share your passion with a global audience. Shine in the spotlight and celebrate your achievements with fellow musicians.",
    },
    {
      title: "Community Engagement",
      description:
        "Connect with fellow music enthusiasts in our vibrant community. Share your experiences, discuss music theory, and collaborate on projects. Our platform brings together students, teachers, and music lovers from around the world, creating a supportive environment for learning and growth.",
    },
  ];
  
const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
