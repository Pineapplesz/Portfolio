import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate frontend developer with a foundation in crafting robust and scalable web applications. Although I don't have professional work experience, I have gained substantial practical experience through personal projects and intensive courses from CyberBionic Systematics. I have honed my skills in front-end technologies like React, TypeScript, and Tailwind, and I also have some experience with Angular. In the future, I would like to become a full stack developer. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I studied at the National Transport University, where I earned a Bachelor's degree in Software Engineering, followed by a Master's degree in the same field. Among various programming disciplines, web development captivated me the most. Throughout my studies, my focus remained on this area, and I actively explored and practiced it. However, feeling stuck, I decided to enhance my skills through formal courses.

After completing a comprehensive front-end specialist course that covered everything from basics to working with the Angular framework, I explored the React library. Its appeal led me to shift my focus to React, where I continue to develop my expertise.

I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const PROJECTS = [
  {
    title: "Nike Website",
    image: project1,
    description:
      "Building a copy of the Nike website layout with a responsive design",
    technologies: ["React", "Tailwind", "JavaScript"],
    link: ["https://github.com/Pineapplesz/Nike"],
  },
  {
    title: "Weather-API",
    image: project2,
    description:
      "An applications for viewing the weather forecast for the selected region. Сonnected to the Weather API service to pull up current data",
    technologies: ["React", "TypeScript", "API", "Weather-API"],
    link: ["https://github.com/Pineapplesz/Weather-API"],
  },
  {
    title: "DAT Original Clothing Website",
    image: project3,
    description:
      "Angular application with the implementation of a product section and a homemade database. ",
    technologies: [
      "Angular",
      "TypeScript",
      "Database",
      "Angular material",
      "SCSS",
    ],
    link: ["https://github.com/Pineapplesz/DAT"],
  },
];

export const CONTACT = {
  address: "Kyiv region, Brovary, 07400 ",
  phoneNo: "+380-63-860-9085",
  email: "danilka1337d1@gmail.com",
};
