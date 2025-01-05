import project1 from '../../public/ReelRaveMockUp.png'
import project2 from '../../public/ChatterMockUp.png'
import project4 from '../../public/project4.png'

export const HERO_CONTENT = `I’m a Computer Engineering graduate from Sinhgad Institute of Technology and Science, Narhe, Pune, where I maintained a strong academic record with a CGPA of 8.9. My time at college not only provided me with a solid technical foundation but also shaped my problem-solving skills and ability to work collaboratively. I believe in balancing academics with real-world experience, and that mindset has driven my passion for continuous learning and growth in the field of software development.`;

export const ABOUT_PARA1 = `Hi, I’m Ganesh Nitalikar, a passionate software developer with a knack for solving complex problems through code. As a Computer Engineering graduate with hands-on experience in technologies like Java, React, and Flutter, I enjoy building innovative solutions that are both functional and visually appealing. My journey in software development has been shaped by projects that span from mobile apps to full-stack web applications, each adding a unique perspective to my skillset.`;
export const ABOUT_PARA2 = `My technical skills include proficiency in frontend technologies like React and JavaScript, as well as mobile app development with Flutter. I’m also well-versed in Java for backend development and use Firebase for real-time applications and database management. In addition, I actively use Git and GitHub for version control, collaborating with teams on projects, and ensuring smooth development workflows. My diverse skill set allows me to approach challenges from multiple angles and find the best solutions`
export const ABOUT_PARA3 = `I’m always eager to contribute to projects and take on new challenges. Whether it’s through internships, personal projects, or collaborations, I actively seek opportunities to apply my knowledge and learn from others. I believe in the power of hands-on experience and strive to stay updated with the latest technologies and industry trends. I’m committed to growing as a developer, and I’m excited to take on roles where I can continue to contribute and make a meaningful impact.`

export const PROJECTS = [
  {
    title: "ReelRave",
    image: project1,
    link : "https://github.com/ganeshnitalikar/ChatApp-in-Flutter-using-Firebase",
    description:
      "ReelRave is a short video-sharing platform inspired by TikTok. It allows users to create and upload videos with features such as liking, commenting, and sharing. The app ensures smooth performance through video compression and supports user authentication for a personalized experience. ReelRave is designed to provide an engaging and interactive platform for creators and viewers alike.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Chatter",
    image: project2,
    link: "https://github.com/ganeshnitalikar/ReelRave",
    description:
      "Chatter is a modern mobile chat application designed to connect users seamlessly. Built with Flutter and Firebase, the app supports features like user authentication, real-time messaging, and user search functionality. It provides a smooth and intuitive user experience, enabling people to stay connected with friends and family in a secure and reliable manner.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "CodeSphere",
    image: "https://placehold.co/600x400/orange/white",
    link: "",
    description:
      "CodeSphere is an online IDE built using the MERN stack, providing users with an efficient environment for coding and testing. The platform includes features such as user authentication, secure API integration, and live output display on the right side of the editor. With a clean and user-friendly interface, CodeSphere empowers developers to write, debug, and execute code directly in the browser.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Portfolio",
    image: project4,
    link: "https://ganeshnitalikar.vercel.app/",  
    description:
      "This Portfolio App is a sleek and responsive personal website built using React, Tailwind CSS, and JavaScript. It showcases the developer's skills, projects, and professional experience in a visually appealing layout. Designed with modern UI principles, the app provides an excellent way to present oneself to potential employers and collaborators.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Pune,India",
  email: "ganeshnitalikar@gmail.com",
};
