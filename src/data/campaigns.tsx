// Single source of truth for the Product Studio.
// These now represent selected product & design-focused work.

export type Campaign = {
  slug: string;
  name: string;
  tag: string;
  brief: string;
  prompts: string[];
  stills: string[];
  videoSrc: string;
  posterSrc: string;
};

export const CAMPAIGNS: Campaign[] = [
  {
    slug: "inventory-management-system",
    name: "Inventory Management System",
    tag: "Product Design / Backend",
    brief:
      "A practical inventory management solution designed to help businesses efficiently manage products, stock levels, and inventory operations through a structured digital system.",
    prompts: [
      "Defined the core inventory management requirements and user needs",
      "Designed the information architecture and user flow for managing products and stock",
      "Created intuitive interfaces for viewing, adding, editing, and managing inventory",
      "Developed the backend using Python, Django, and Django REST Framework",
      "Designed relational database models and implemented structured CRUD API endpoints",
    ],
    stills: [],
    videoSrc: "",
    posterSrc: "inventory.jpg",
  },
  {
  slug: "edunaija",
  name: "EduNaija",
  tag: "UX/UI / Full-Stack / LMS",
  brief:
    "EduNaija is a Learning Management System designed to provide learners with an accessible and intuitive platform for discovering courses, enrolling in programs, learning through structured lessons, taking quizzes, and tracking their progress.",
  prompts: [
    "UX/UI Design — designed intuitive learning experiences, course pages, learner dashboards, navigation, and responsive interfaces",
    "Product Design — structured the learning experience around course discovery, enrollment, lessons, quizzes, progress tracking, and certificates",
    "Frontend Development — built responsive interfaces using Next.js, TypeScript, and modern component-based development",
    "Backend Development — developed application functionality and APIs using Node.js",
    "Authentication — implemented secure user authentication and protected learning areas using Clerk",
    "Database Development — worked with PostgreSQL to manage users, courses, enrollments, learning data, and application records",
    "Payment Integration — integrated Stripe for paid course and subscription payment workflows",
    "Full-Stack Development — connected the UX/UI, frontend, backend, authentication, database, and payment functionality into a working LMS",
  ],
  stills: [],
  videoSrc: "",
  posterSrc: "edu.png",
},
  {
  slug: "ojawa",
  name: "Ojawa",
  tag: "E-Commerce / UX/UI",
  brief:
    "Ojawa is a modern e-commerce platform designed to provide customers with a simple, intuitive, and responsive online shopping experience, from discovering products to exploring product details and making purchases.",
  prompts: [
    "UX/UI Design — created a clean and intuitive shopping interface with clear navigation and product presentation",
    "Product Discovery — designed an easy-to-use experience for browsing and discovering products",
    "Product Experience — structured product information and layouts to help customers make informed decisions",
    "Responsive Design — designed and developed interfaces that work seamlessly across desktop and mobile devices",
    "Frontend Development — built the platform using React, Next.js, TypeScript, and Tailwind CSS",
    "Component Design — created reusable UI components for a consistent and maintainable e-commerce experience",
    "User Experience — focused on creating a smooth journey from product discovery through the purchasing process",
  ],
  stills: [],
  videoSrc: "",
  posterSrc: "ojawa.png",
},
];