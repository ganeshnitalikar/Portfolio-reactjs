import project1 from "../../public/ReelRaveMockUp.png";
import project2 from "../../public/ChatterMockUp.png";
import project4 from "../../public/project4.png";
import talkify from "../../public/talkify.png";

export const HERO_CONTENT = `I’m a Full Stack Developer specializing in the MERN stack and Java, with a degree in Computer Engineering from Sinhgad Institute of Technology and Science, Pune. With a strong academic record and hands-on experience in building full-stack web applications, I am passionate about creating efficient and scalable solutions that cater to real-world needs. My journey has been defined by continuous learning, practical application, and a drive to make impactful contributions in the field of software development.`;

export const ABOUT_PARA1 = `Hi, I’m Ganesh Nitalikar, a Full Stack Developer skilled in the MERN stack (MongoDB, Express.js, React, Node.js) and Java. My academic background in Computer Engineering, coupled with practical experience, has enabled me to develop robust web applications and effective backend solutions.`;
export const ABOUT_PARA2 = `My technical skills encompass full-stack development with the MERN stack, allowing me to create dynamic web applications from scratch. Additionally, my proficiency in Java equips me with the ability to build efficient backend systems. I utilize Git and GitHub for version control, ensuring collaborative and seamless development processes.`;
export const ABOUT_PARA3 = `Driven by a passion for technology and innovation, I continually seek out opportunities to expand my knowledge and tackle challenging projects. Whether it's through personal projects, internships, or collaborative work, I am committed to leveraging my skills to deliver impactful solutions and grow as a developer.`;

export const PROJECTS = [
  {
    title: "Talkify",
    image: talkify,
    link: "https://github.com/ganeshnitalikar/talkify",
    description:
      "Talkify is a modern real-time chat application designed for seamless and instant communication. Built with React and Zustand for a responsive frontend and powered by Node.js, Express, and MongoDB on the backend, it ensures efficiency and scalability. Utilizing Socket.io, Talkify enables smooth bidirectional messaging, while JWT authentication with cookies keeps user sessions secure.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Zustand",
    ],
  },

  {
    title: "CodeSphere",
    image: "https://placehold.co/600x300/black/white",
    link: "https://github.com/ganeshnitalikar/CodeSphere",
    description:
      "CodeSphere is a feature-rich online IDE built using the MERN stack. It offers real-time coding, user authentication, and a seamless development environment directly in the browser, enabling developers to code efficiently from anywhere.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "ReelRave",
    image: project1,
    link: "https://github.com/ganeshnitalikar/ReelRave",
    description:
      "ReelRave is a short video-sharing platform inspired by TikTok. Built using Flutter and Firebase, it offers features like video uploading, liking, commenting, and user authentication for a personalized experience. ReelRave is designed for an engaging and interactive platform for creators and viewers.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Chatter",
    image: project2,
    link: "https://github.com/ganeshnitalikar/ChatApp-in-Flutter-using-Firebase",
    description:
      "Chatter is a real-time chat application built with Flutter and Firebase. It supports user authentication, real-time messaging, and a user-friendly interface, making it easy for users to stay connected securely and efficiently.",
    technologies: ["Flutter", "Firebase"],
  },

  {
    title: "Portfolio",
    image: project4,
    link: "https://ganeshnitalikar.vercel.app/",
    description:
      "This Portfolio App is a sleek and responsive personal website built using React, Tailwind CSS, and JavaScript. It showcases the developer's skills, projects, and professional experience in a visually appealing layout, offering a comprehensive overview to potential employers and collaborators.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Pune, India",
  email: "ganeshnitalikar@gmail.com",
};
