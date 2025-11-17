import './experience.css'
import askuslogo from '../assets/logo-ask-us.png'
import React from 'react'

const experiences = [
  {
    id: 1,
    companyName: 'AskUs Solutions',
    role: 'Intern Software Engineer',
    duration: 'Mar 2024 — June 2024',
    logo: askuslogo,
    href: 'https://www.askussolution.tech/',
    bullets: [
      'Built responsive and structured UIs using HTML, CSS, and JavaScript.',
      'Learned and implemented React to create dynamic, component-based frontend applications.',
      'Developed backend functionality using Django, including user authentication and database integration.',
      'Used Git for version control and collaborated on code using Git-based workflows.'
    ]
  },

  // Example: add more entries here
  // {
  //   id: 2,
  //   companyName: 'Another Co',
  //   role: 'Frontend Developer',
  //   duration: 'Jul 2024 — Present',
  //   logo: '/path/to/logo.png',
  //   href: 'https://example.com',
  //   bullets: ['Worked on X', 'Improved Y']
  // }
]

function Experience() {
  return (
    <section className="experience-section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="title">Experience</h2>

      <div className="cards">
        {experiences.map(exp => (
          <article className="company-card" key={exp.id}>
            <a
              className="logo-link"
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${exp.companyName} website`}
            >
              <img src={exp.logo} alt={`${exp.companyName} logo`} className="comp-logo" />
            </a>

            <div className="card-main">
              <div className="card-header">
                <div className="heading">{exp.companyName}</div>
                <div className="meta">
                  <span className="role">{exp.role}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
              </div>

              <ul className="description" aria-label={`${exp.companyName} responsibilities`}>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
