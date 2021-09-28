import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jenny Moon',
  subtitle: '- Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "The way the tech industry transforms people's lives is fascinating, and I am passionate about being a part of this exciting industry. With over ten years of experience working in TransportEngineering, my previous career involved data analysis, building transport simulation models and data automation, which required a similar coding process - it was this work that initially sparked my interest in programming.",
  paragraphTwo:
    'I have recently completed the Full Stack developer course at Makers Academy in London, and I am looking for my first role as a software developer.',
  paragraphThree: 'Please see my CV and portfolio projects below.',
  resume: 'https://github.com/jen0828/CV', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Tutoroom',
    info: 'A tutoring web application built using Ruby on Rails backend with JavaScript/ React frontend.',
    info2:
      'Tech/ tools: Ruby, Rails, Javascript, React, Jest, RSpec, Insomnia, Axios, Amazon S3, Bootstrap',
    url: 'https://user-images.githubusercontent.com/79845719/134815371-7cc97143-2de0-4526-bdbe-3addb105f008.gif',
    repo: 'https://github.com/jen0828/tutoroom_fe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.jpg',
    title: 'Catbook',
    info: 'A full-stack social media application built with Ruby on Rails',
    info2: 'Tech/tools: Ruby, Rails, RSpec, Capybara, Heroku, HTML, CSS',
    url: 'https://gentle-wave-85477.herokuapp.com/',
    repo: 'https://github.com/jen0828/acebook-StringMeAlong', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.jpg',
    title: 'Makersbnb',
    info: 'An Air BnB inspired web application with a database that allows users to browse and book a space.',
    info2: 'Tech/tools: Ruby, PostgreSQL, Sinatra, RSpec, Capybara, Bootstrap, HTML, CSS',
    url: 'https://github.com/jen0828/MakerBnB',
    repo: 'https://github.com/jen0828/MakerBnB', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jenny0moon@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jenny-moon-4136b1221/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jen0828',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
