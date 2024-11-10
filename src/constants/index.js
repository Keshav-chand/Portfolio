// src/constants/index.js
import project11 from "../assets/project11.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";


export const HERO_CONTENT = `I’m a second-year student at SRM University, pursuing a Bachelor of Technology in Computer Science. I have a strong interest in Data Structures and Algorithms (DSA) and enjoy exploring how they can optimize problem-solving in programming. I actively practice coding challenges to improve my understanding and application of DSA concepts. Additionally, I am passionate about Machine Learning and Web Development, where I get to apply my skills in practical projects. My journey so far has helped me build a solid foundation in programming, and I’m excited to keep learning and developing my abilities in these fields.`;

export const ABOUT_TEXT = `I am dedicated to creating user-friendly web experiences and intuitive interfaces. I thrive in collaborative settings, using my leadership skills to support my team and drive projects forward. I’m always eager to learn about new web technologies and trends, which helps me contribute fresh ideas. I actively share my projects and progress on LinkedIn, Twitter, and GitHub to connect with others in the tech community and showcase my work. Outside of work, I enjoy playing football, as it reinforces the importance of teamwork and strategy. I aim to combine my technical abilities and creativity to develop innovative solutions that enhance user experiences.`;

export const PROJECTS = [
  
  {
    title: "Elab ",
    image: project5,
    description:
      "I have done DSA question in SRM elab website .",
    technologies: ["C,C++"],
    
  },
  {
    title: "HackerRank ",
    image: project6,
    description:
      "I have done DSA question on hacker rank  website .",
    githubLink:"https://drive.google.com/drive/folders/18S95KR7m-ROYS0AExHQBb-aHj9jP0_xr?usp=sharing",  
    technologies: ["C,C++"],
    
  },
  {
    title: "Min Delivery Time",
    image: project11,
    description:
      "Uses a priority queue to manage and process orders, calculates the minimum time required to fulfill all orders and handles different types of orders for various milkshakes.",
    technologies: ["Java"],
    githubLink: "https://github.com/Keshav-chand/mindeliverytime",
  },
  {
    title: "BST Deletion Program",
    image: project2,
    description:
      "This Java program implements a Binary Search Tree (BST) with functionalities to insert nodes, delete nodes, search for nodes, and perform in-order traversal.",
    technologies: ["Java"],
    githubLink: "https://github.com/Keshav-chand/BST-DELETE",
  },
  {
    title: "AVL Tree Implementation in Java",
    image: project3,
    description:
      "This project contains a simple implementation of an AVL Tree in Java, focusing specifically on left-right rotations to maintain tree balance.",
    technologies: ["Java"],
    githubLink: "https://github.com/Keshav-chand/AVLleftright",
  },
  {
    title: "Postorder Traversal",
    image: project4,
    description:
      "This project takes input from the user and gives output in postorder traversal.",
    technologies: ["Java"],
    githubLink: "https://github.com/Keshav-chand/postordertraversal",
  },
  
];

export const CONTACT = {
  email: "Keshavchand204@gmail.com",
};
