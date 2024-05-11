import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = ["JavaScript", "React", "Node JS", "Express", "MongoDB"];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/80767a04-a8f0-4006-9c1f-4151297db4b4/kv0kQT809n.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white ">
            Hello! My Name is Ishwar kumar .I enjoy creating things that live on
            the internet . My interest in web development started back in 2022
            when I decided to try editing custom Tumbir themes - turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="text-white ">
            Fast-forwarding to today, and I've had the privilege of working at
            an advertising agency ,a start-up , a huge corporation ,and a
            student-led design studio.My main focus these days is building
            accessible ,inclusive products and digital experiences at
            Upstatement for a variety of clients. i also recently launched a
            course that covers everything you need to build a web app with the
            Spotify API using Node & React. Here are a few technologies I'Ve
            been working with recently
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, idx) => (
            <div className="border border-tertiary py-3 px-10" key={idx}>
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
