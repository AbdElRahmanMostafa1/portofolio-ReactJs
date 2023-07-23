import React from "react";
import "./Experience.css";
import Header from "../header/Header";
import ProjectContainer from "./project-container/ProjectContainer";

const Experience = () => {
  const allProjects = [
    {
      link: "https://ashourlegalgroup.com/",
      image: "https://ashourlegalgroup.com/assets/logo.jpeg",
      title: "Ashour Legal Group",
      techs: ["HTML/HTML5", "CSS/CSS3", "JavaScript"],
    },
    {
      link: "https://abdo-reataurent-website.netlify.app/",
      image:
        "https://media.istockphoto.com/vectors/grilled-chicken-sticker-label-or-logo-for-fast-food-and-restaurant-vector-id1180732569?k=20&m=1180732569&s=612x612&w=0&h=7PUDlSCZmo767VXNEVl1Uub0gIzwSibgvK7ZJZDLH8k=",

      title: "Restaurent Website",
      techs: ["html", "CSS/CSS3", "JS"],
    },
    {
      link: "https://play.google.com/store/apps/details?id=com.yallaemtehen&pli=1",
      image:
        "https://media.istockphoto.com/vectors/quiz-in-comic-style-quiz-brainy-game-vector-design-vector-id943481846?k=20&m=943481846&s=170667a&w=0&h=cpWho7jHNWegtB9na8ojCSsCM_BIlfLHKD6ql3ew2RI=",
      title: "Quiz App Android",
      techs: ["React Native", "Google Play Console"],
    },
    {
      link: "https://youtu.be/LEdSqv7wrGY",
      image: "https://portofolio-nu.vercel.app/assets/images/The%20Academy.jpg",
      title: "Teacher Academy",
      techs: ["ReactJs", "React-Bootstrap", "NodeJs", "Express", "MongoDB"],
    },
    {
      link: "https://abdo-restaurant.netlify.app/",
      image:
        "https://t3.ftcdn.net/jpg/01/17/01/48/360_F_117014878_tBedOsCmOExeF4Zuq43nGPU0qpBMsxfb.jpg",
      title: "Foodera App",
      techs: ["ReactJs", "React Bootstrap"],
    },
    {
      link: "https://abdo-movies-app.netlify.app/",
      image:
        "https://www.lifewire.com/thmb/WzpEftXT5jDd699KSY8RYN2WoLE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crackle-free-movie-app-92d686ed71a24934b472f348593be9ad.png",
      title: "Movies App Landing Page",
      techs: ["ReactJs", "Bootstrap"],
    },
    {
      link: "https://abdo-creative-design-company.netlify.app/",
      image:
        "https://img.freepik.com/premium-photo/creative-mind-3d-illustration-with-light-bulb-generative-ai_549702-683.jpg",
      title: "Creative Design Company Landing Page",
      techs: ["html", "CSS/CSS3", "JS"],
    },
    {
      link: "https://abdo-tesla.netlify.app/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      title: "Tesla Clone",
      techs: ["ReactJs", "CSS/CSS3"],
    },
    {
      link: "https://abdo-minig-city.netlify.app/",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wonzyofh6omt5q5ec591",
      title: "Desktop version Mining city",
      techs: ["HTML/HTML5", "CSS/CSS3", "JavaScript"],
    },
    {
      link: "https://abdo-breaking-bad.netlify.app/",
      image:
        "https://portofolio-nu.vercel.app/assets/images/breaking-bad-logo.jpg",
      title: "Breaking bad",
      techs: ["ReactJs", "CSS/CSS3"],
    },
  ];
  return (
    <section className="experience" id="projects">
      <Header header={"Projects"} />
      <article className="flex-center-center">
        {allProjects.map((project) => (
          <ProjectContainer
            key={project.title}
            link={project.link}
            image={project.image}
            title={project.title}
            techs={project.techs}
            imageAlt={`${project.title} image`}
          />
        ))}
      </article>
    </section>
  );
};

export default Experience;
