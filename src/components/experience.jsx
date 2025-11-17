import './experience.css'
import askuslogo from '../assets/logo-ask-us.png'

function Experience() {
    return (
        <>
            <h1 id="experience" className="title">Experience</h1>

            <div className="company">
                <div className="comp-logo">
                    <a
                        href="https://www.askussolution.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={askuslogo} alt="askus-logo" />
                    </a>
                </div>

                <div className="txt-cont">
                    <div className="heading">AskUs Solutions</div>
                    <div className="role">Intern Software Engineer</div>
                    <div className="duration">Mar 2024 — June 2024</div>
                </div>

                <div className="description">
                    <div>Built responsive and structured UIs using HTML, CSS, and JavaScript.</div>
                    <div>Learned and implemented React to create dynamic, component-based frontend applications.</div>
                    <div>Developed backend functionality using Django, including user authentication and database integration.</div>
                    <div>Used Git for version control and collaborated on code using Git-based workflows.</div>
                </div>
            </div>
        </>
    )
}

export default Experience
