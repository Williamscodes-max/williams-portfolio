// Adapted for selected project case studies / write-ups.
// You can expand these later with more detail or real external links.

export type Category =
  | "Full-Stack"
  | "Backend"
  | "Frontend"
  | "UX/UI Design"
  | "APIs";

export type Article = {
  slug: string;
  title: string;
  category: Category;
  date: string;
  readTime: string;
  excerpt: string;
  externalUrl: string | null;
};

export const CATEGORY_SLUGS: Record<Category, string> = {
  "Full-Stack": "full-stack",
  "Backend": "backend",
  "Frontend": "frontend",
  "UX/UI Design": "ux-ui-design",
  "APIs": "apis",
};

export const CATEGORIES: Category[] = [
  "Full-Stack",
  "Backend",
  "Frontend",
  "UX/UI Design",
  "APIs",
];

export const ARTICLES: Article[] = [
  {
    slug: "building-edunaija-learning-management-system",
    title: "Building EduNaija: A Learning Management System",
    category: "Full-Stack",
    date: "2025",
    readTime: "5 min",
    excerpt:
      "A look at building EduNaija, a modern Learning Management System designed to make online learning more accessible. The platform brings together course discovery, learner accounts, structured learning content, assessments and a seamless digital learning experience.",
    externalUrl: "https://edunaija-kohl.vercel.app/",
  },
  {
    slug: "building-ojawa-ecommerce-platform",
    title: "Building Ojawa: A Modern E-Commerce Experience",
    category: "Frontend",
    date: "2025",
    readTime: "4 min",
    excerpt:
      "Exploring the development of Ojawa, a modern e-commerce platform focused on product discovery, intuitive navigation, responsive design and creating a smooth online shopping experience across devices.",
    externalUrl: "https://ojawa-mart.vercel.app/",
  },
  {
    slug: "building-inventory-management-api",
    title: "Building an Inventory Management API with Django",
    category: "Backend",
    date: "2025",
    readTime: "5 min",
    excerpt:
      "A backend project built with Python, Django and Django REST Framework, focusing on database modelling, serializers, CRUD operations and structured REST API endpoints for managing inventory data.",
    externalUrl: null,
  },
  {
    slug: "from-ux-ui-design-to-production",
    title: "From UX/UI Design to Production",
    category: "UX/UI Design",
    date: "2025",
    readTime: "4 min",
    excerpt:
      "My approach to turning ideas into digital products — from understanding user needs and creating information architecture, user flows, wireframes and prototypes in Figma to developing responsive interfaces with React and Next.js.",
    externalUrl: null,
  },
  {
    slug: "building-scalable-saas-applications",
    title: "Building Modern SaaS Applications",
    category: "Full-Stack",
    date: "2025",
    readTime: "5 min",
    excerpt:
      "Exploring the architecture behind modern SaaS applications, including authentication, protected dashboards, subscription plans, access control, APIs, databases and payment workflows using technologies such as Next.js, Node.js, Clerk, Stripe and PostgreSQL.",
    externalUrl: null,
  },
  {
    slug: "react-nextjs-and-modern-web-development",
    title: "Building Modern Web Applications with React & Next.js",
    category: "Frontend",
    date: "2025",
    readTime: "4 min",
    excerpt:
      "A practical look at building responsive and maintainable web applications with React, Next.js, TypeScript and Tailwind CSS, with a focus on reusable components, clean interfaces and strong user experiences.",
    externalUrl: null,
  },
];