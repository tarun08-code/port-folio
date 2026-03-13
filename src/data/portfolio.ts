import { Project, Experience } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'GitHub Actions Self-Hosted Runner on AWS EC2 (CI/CD Automation)',
    description: 'Deployed a self-hosted GitHub Actions runner on an AWS EC2 Ubuntu instance to execute CI workflows, authenticated using GitHub PAT, configured as a persistent Linux service, and integrated with GitHub Actions pipelines to automate builds while offloading jobs from GitHub-hosted runners.',
    image: 'https://i.pinimg.com/1200x/da/00/f9/da00f973a0f78acb10af5c0b8fed8b1b.jpg',
    techStack: ['GITHUB', 'GIT', 'AWS', 'DEVOPS', 'LINUX'],
    liveUrl: 'https://github.com/tarun08-code/Devops/tree/main/p7-githubactions-with-selfhosted-ec2-worker-node',
    githubUrl: 'https://github.com/tarun08-code'
  },
  {
    id: 1,
    title: 'Containerized CI/CD Pipeline for React Application using Jenkins & Docker',
    description: 'Developed a containerized Jenkins CI/CD pipeline using Docker to automate the build and deployment of a React application. Integrated GitHub webhooks with Jenkins declarative pipelines to trigger automated workflows, building the application in a Node.js environment and deploying it to Netlify.',
    image: 'https://i.pinimg.com/1200x/6e/dc/05/6edc05e872cf6d86de97232d1ac225ce.jpg',
    techStack: ['AWS', 'DOCKER', 'TERRAFORM', 'DEVOPS', 'JENKINS'],
    liveUrl: 'https://github.com/tarun08-code/jenkins-docker-pro',
    githubUrl: 'https://github.com/tarun08-code'
  },
   {
    id: 1,
    title: 'End-to-End AWS CI/CD Pipeline using Terraform, Jenkins & Docker',
    description: 'Designed and implemented an end-to-end DevOps pipeline on AWS using Terraform, Jenkins, and Docker to automate infrastructure provisioning, application build, and deployment. Integrated GitHub webhooks to trigger CI/CD workflows, enabling rapid and reproducible deployment of a containerized Flask + Nginx application.',
    image: 'https://i.pinimg.com/1200x/99/78/66/9978663d39f807ecb0f3d32505561eb4.jpg',
    techStack: ['AWS', 'GITHUB', 'TERRAFORM', 'DOCKER', 'JENKINS'],
    liveUrl: 'https://github.com/tarun08-code/aws-cicd-terraform-project',
    githubUrl: 'https://github.com/tarun08-code'
  },
  {
    id: 1,
    title: 'kollege-chat-app (Deployed)',
    description: '🎓 K-ollege Chat — Connect, Collaborate & Learn Together! 💬 Join anonymous, department-based chats with 🤖 AI-powered moderation by Hugging Face to ensure a safe, respectful, and bully-free space for every student.',
    image: 'https://i.pinimg.com/736x/e8/bf/f2/e8bff2f056e72b084a90ad385936a3ea.jpg',
    techStack: ['GCP', 'GITHUB-CO', 'AWS', 'HUGGING-FACE'],
    liveUrl: 'https://kollege-chat-app.firebaseapp.com/',
    githubUrl: 'https://github.com/tarun08-code'
  },
  {
    id: 2,
    title: 'Gym website 💪 (Deployed)',
    description: 'A Responsive Gym Website 🏋️‍♂️💪 built using React, designed for a client based in Andhra Pradesh, with my team.',
    image: 'https://i.pinimg.com/1200x/0f/2c/c0/0f2cc0b9e6ce149bab7c215ec775002c.jpg',
    techStack: ['React', 'Node.js', 'AWS', 'TypeScript'],
    liveUrl: 'https://futurefitnessgymnellore.com/',
    githubUrl: 'https://github.com/tarun08-code'
  },
  {
    id: 3,
    title: 'Date Project ❤️ (Deployed)',
    description: 'A fun and creative project to send cute date invites 💌. Built using HTML, CSS, and creative vibes 😎',
    image: 'https://i.pinimg.com/736x/29/38/17/2938173b8f45fa7e346bd8b3856fee38.jpg',
    techStack: ['GIT', 'GITHUB', 'GITHUB-PAGES',],
    liveUrl: 'https://github.com/tarun08-code/Date-project-1',
    githubUrl: 'https://github.com/tarun08-code'
  },
  {
    id: 4,
    title: 'Basic Student Management system',
    description: 'A Simple yet Working Student Management System 👨‍🎓📚💻 built using only Java ☕',
    image: 'https://i.pinimg.com/736x/fc/0e/97/fc0e97c2dc89a5f4ad18ac3a2846e302.jpg',
    techStack: ['GIT', 'GITHUB', 'JAVA',],
    liveUrl: 'https://github.com/tarun08-code/Student-Management-System-08',
    githubUrl: 'https://github.com/tarun08-code'
  },
  {
    id: 5,
    title: 'College programme metrix ERP solution',
    description: 'A College ERP System 🎓📚 built using Angular and Node.js to streamline academic and administrative tasks.',
    image: 'https://i.pinimg.com/1200x/3c/96/bc/3c96bcaf5a6d0efc79d54166833c09b8.jpg',
    techStack: ['ANGULAR', 'GITHUB', 'GIT','NODE.JS'],
    liveUrl: 'https://github.com/tarun08-code/college-frontend',
    githubUrl: 'https://github.com/tarun08-code'
  },
  {
    id: 6,
    title: 'share-again (Deployed)',
    description: '📚 ShareAgain — Simplify Studying Together! 🎓 A platform for college students to easily share previous year question papers, notes, and study materials — all in one place for smarter, faster, and collaborative learning.',
    image: 'https://i.pinimg.com/736x/2d/56/c7/2d56c732b1a9d033fe95e0d31bfa0eab.jpg',
    techStack: ['GCP', 'GITHUB', 'TAILWIND','TYPE-SCRIPT'],
    liveUrl: 'https://papershare.netlify.app/',
    githubUrl: 'https://github.com/tarun08-code'
  },
   {
    id: 7,
    title: 'Cake Store Management 🍰',
    description: 'A full-stack cake shop system 🎂 built completely using AI 🤖 to manage cakes, orders, and customers 🍰✨',
    image: 'https://i.pinimg.com/736x/9c/3a/1d/9c3a1d64dc5b96d1bb465a8a87a85e8f.jpg',
    techStack: ['GIT', 'GITHUB', 'CURSER','VIBE-CODE'],
    liveUrl: 'https://github.com/tarun08-code/cake-store-using-curser',
    githubUrl: 'https://github.com/tarun08-code'
  },
  {
    id: 8,
    title: 'Rock-Paper-Scissors 🎮',
    description: 'A fun JavaScript game 🕹️ built with HTML + JS where users play Rock ✊ Paper 📄 Scissors ✂️.',
    image: 'https://i.pinimg.com/736x/e5/f3/93/e5f3939098842f8581bed7203b9d2fd8.jpg',
    techStack: ['GIT', 'GITHUB', 'JAVA-SCRIPT',],
    liveUrl: 'https://github.com/tarun08-code/rock-paper-scissor-game-project-js',
    githubUrl: 'https://github.com/tarun08-code'
  },
];

export const experiences: Experience[] = [

   {
    id: 0,
    title: 'Freelance Web Developer',
    organization: 'Nellore Future Fitness Gym',
    period: 'Jun-2025 - Oct-2025',
    description: 'Developed and maintained responsive websites for local businesses using React, AWS, and TypeScript.'
  },
  {
    id: 1,
    title: 'Volunteer',
    organization: 'Google',
    period: 'Aug-2025 - Aug-2025',
    description: 'Volunteered at Google AI Labs 2025 in August, collaborating with peers and gaining valuable insights through hands-on experience and interactive AI lab sessions.'
  },
  {
    id: 2,
    title: 'Volunteer',
    organization: 'Google Cloud',
    period: 'July-2025 - July-2025',
    description: 'Assisted in event operations, registration, and participant coordination, part of the organizing team for a Guinness World Record event; helped manage registration and crowd flow for ~2700 participants under one roof.'
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    organization: 'Kristu Jayanti Software Development Centre',
    period: 'June 2025 - July 2026',
    description: 'Led the front-end development team for the College ERP “Program Matrix” project, ensuring timely delivery and high-quality standards. Designed and implemented responsive UI components using Angular and Tailwind CSS, integrating them with backend services. Worked independently on critical modules for the ERP system, contributing to enhanced user experience and functionality. Utilized multiple modern web technologies to build scalable and maintainable solutions in collaboration with cross-functional teams.'
  }
];

export const skills = [
  
  'AWS',
  'Docker',
  'Jenkins',
  'Git',
  'GitHub',
  'GCP',
  'AZURE',
  'PYTHON',
  'JAVA',
  'React',
  'Angular',
  'Node.js',
];
