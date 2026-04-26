/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Williams Alayode",
  title: "Hi all, I'm Williams",
  subTitle: emoji(
    "A Software Developer specializing in backend development with Django, while also building responsive and user-friendly frontend applications. I focus on creating scalable APIs and efficient web solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1N8dqXUW_s6uRzVioTLAVS9ZIkpsGvvqy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Williamscodes-max",
  linkedin: "https://www.linkedin.com/in/williams-alayode/",
  gmail: "walayode@gmail.com",
  Behance: "https://www.behance.net/williamsalayode007",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Software Developer focused on building scalable backend systems with Django and creating responsive frontend applications",
  skills: [
    emoji("⚡ Build scalable REST APIs using Django & Django REST Framework"),
    emoji("⚡ Design and manage databases (PostgreSQL, SQLite)"),
    emoji("⚡ Integrate frontend applications with backend APIs"),
    emoji("⚡ Develop responsive user interfaces with React")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Django", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Django REST", fontAwesomeClassname: "fas fa-server"},
    // { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    // { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ALX Africa",
      logo: require("./assets/images/alx2.png"),
      subHeader: "ALX Software Engineering Program",
      duration: "September 2025 - April 2026",
      desc: "Studied software development and built backend-focused applications."
    },

    {
      schoolName: "Udemy",
      logo: require("./assets/images/udemy.webp"),
      subHeader: "complete Python Bootcamp: Go from zero to hero in Python",
      duration: "August 2024 - August 2024",
      desc: "Completed the complete Python Bootcamp, gaining comprehensive knowledge of Python programming."
    },
    
    {
      schoolName: "Google",
      logo: require("./assets/images/Google.png"),
      subHeader: "Google UX Design Certificate",
      duration: "February 2022 - September 2022",
      desc: "Completed Google UX Design Certification, gaining hands-on experience in user research, wireframing, prototyping, and designing user-centered digital products."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer (Backend & Full-Stack)",
      company: "Software Developer",
      companylogo: require("./assets/images/freelance.webp"),
      date: "2024 – Present",
      desc: "Developing backend systems and full-stack applications using Django, Next.js, and Supabase.",
      descBullets: [
        "Built REST APIs using Django REST Framework",
        "Developed SaaS applications using Next.js and Supabase",
        "Implemented authentication and database systems",
        "Collaborated on software projects"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "SaaS applications and backend systems I have built using Django, Next.js, and modern web technologies",
  projects: [
    {
      image: require("./assets/images/djangoframe.png"),
      projectName: "Job Tracker API",
      projectDesc:
        "A Django REST API for managing job applications with authentication, role-based access, and full CRUD functionality.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Williamscodes-max/job-tracker-api"
        }
      ]
    },
    {
      image: require("./assets/images/dashboard.jpeg"),
      projectName: "SaaS Web Application",
      projectDesc:
        "A full-stack SaaS platform built with Next.js and Supabase featuring authentication, database management, and user dashboards.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/solobot-hq/solobotagency-v1.git"
        }
      ]
    }
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications & Achievements",
  subtitle:
    "Relevant certifications and accomplishments in software development and design",

  achievementsCards: [
    {
      title: "Google UX Design Certificate",
      subtitle:
        "Completed Google UX Design Certification, gaining experience in user research, wireframing, prototyping, and user-centered design.",
      image: require("./assets/images/Google.png"),
      imageAlt: "Google UX Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1jIf5C1UUt86k2HIM5lWzsa3LCLmmsS-v/view?usp=sharing"
        }
      ]
    },
    {
      title: "ALX Software Engineering Program",
      subtitle:
        "Completed intensive training in backend development and software engineering principles, with focus on real-world project collaboration.",
      image: require("./assets/images/alx2.png"),
      imageAlt: "ALX Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1SIKzFRoVGD6QiQjUZL2Dll0TbZwSxaxK/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  // resumeLink: "https://drive.google.com/file/d/1V6ePqOeQNwV79IjK742oDLSqiw3Zw8Xt/view?usp=sharing",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2348146212556",
  email_address: "walayode@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
