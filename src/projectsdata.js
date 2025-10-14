import streamlit from './assets/streamlit.png'
import gptpic from './assets/chatgpt.png'
import portfolio from './assets/portfolio-pic.jpg'
import askus from './assets/askus.jpg'
import shalimar from './assets/shalimar.png'

const projectData = [

  {
    Name: 'Shalimar Optical',
    source: shalimar,  
    picLink: 'https://shalimar-optical.vercel.app/',
    github: 'https://github.com/codeczar00/shalimar-optical',
    description: 'Full-Stack Ecommerce and Responsive application developed using React, Django & PostgreSQL',
    skills: ['React', 'Django', 'PostgreSQL', 'REST API']
  },
  {
    Name: 'ChatGPT Clone',
    source: gptpic,
    picLink: 'https://chat-gpt-clone-gamma-wine.vercel.app/',
    github: 'https://github.com/codeczar00/ChatGPT-clone',
    description: 'Designed and Developed a ChatGPT clone using React and OpenAI API without Mobile Responsiveness!',
    skills: ['React', 'OpenAI API', 'CSS']
  },
  {
    Name: 'Portfolio Website',
    source: portfolio,
    picLink: 'https://codeczar00.vercel.app/',
    github: 'https://github.com/codeczar00/portfolio-website',
    description: 'Designed and Developed responsive personal portfolio website using React and CSS.',
    skills: ['React', 'CSS']
  },
  {
    Name: 'Upthyme',
    source: askus,
    picLink: 'https://upthyme.com/',
    github: 'https://github.com/molvops',
    description: 'Designed and developed frontend for an Employee Shift Management system.',
    skills: ['React', 'TailwindCSS']
  },
  {
    Name: 'Schedule Generator',
    source: streamlit,
    picLink: 'https://dps-app.streamlit.app/',
    github: 'https://github.com/mrcreamio/dps-usama',
    description: 'A Streamlit app that processes an uploaded Excel file to generate class-wise and teacher-wise schedules using Pandas.',
    skills: ['Python', 'Pandas']
  }
]

export default projectData
