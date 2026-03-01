import { Project, Experience } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cloud Infrastructure Automation',
    description: 'Automated AWS infrastructure deployment using Terraform and Jenkins CI/CD pipeline with automated testing and monitoring.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['AWS', 'Terraform', 'Jenkins', 'Docker'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Full Stack E-Commerce Platform',
    description: 'Responsive e-commerce application with user authentication, product management, and payment integration using modern web technologies.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Containerized Microservices',
    description: 'Microservices architecture deployed on Kubernetes with automated scaling, monitoring, and logging capabilities.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Docker', 'Kubernetes', 'Angular', 'Git'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    period: '2024',
    description: 'Completed comprehensive AWS certification covering cloud computing fundamentals, core services, security, and architecture best practices.'
  },
  {
    id: 2,
    title: 'DevOps Internship',
    organization: 'Tech Solutions Inc.',
    period: '2023 - 2024',
    description: 'Worked on CI/CD pipeline automation, containerization, and cloud infrastructure management. Gained hands-on experience with Docker, Jenkins, and AWS services.'
  },
  {
    id: 3,
    title: 'Full Stack Development Bootcamp',
    organization: 'Code Academy',
    period: '2023',
    description: 'Intensive program covering modern web development technologies including React, Node.js, MongoDB, and RESTful API design.'
  }
];

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Node.js',
  'MongoDB',
  'AWS',
  'Docker',
  'Jenkins',
  'Git'
];
