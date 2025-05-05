import Navigator from '../Components/Navigator.jsx'
import PositionDescription from '../Components/PositionDescription.jsx'
import '../assets/homepage.css'

function Home() {
    const tkd_freelance = [
        `Developed and developed a cross-platform desktop application 
        using Electron-Vite and ReactJS.`,

        `Created a responsive and user-friendly interface tailored for 
        Taekwondo athletes, coaches, and enthusiasts.`,

        `Implemented real-time hit counting functionality to track 
        technique execution during training or competitions.`,

        `Developed a system to log and analyze hit data, providing 
        users with performance feedback.`,

        `Collaborated with users during testing phases to gather 
        feedback and iteratively improve UX and emphasized clean code 
        practices, documentation, and maintainability for long-term application support.`
    ]

    const software_app_intern = [
        `Contributed to the maintenance and enhancement of an application 
        to improve the judicial system, utilizing C# and ReactJS.`,

        `Maintained new implemented code or existing code to correct reported problems.`,
        `Collaborated with the development team to implement new features, 
        optimize performance, and ensure a user-friendly interface.`
    ]

    const ar_app_intern = []

    return(
        <>
        <header>
            <Navigator />

            <div className='container-fluid text-center'>
                <h2>Hello Everyone!</h2>
                <h1>I'm Camila Guzman</h1>
                <h4 id='occupation'>| <span>Programmer</span> |</h4>
            </div>
        </header>

        <div className='container' id='resume-body'>
            <div className='row'>
                <div className='col-12 col-lg-8 pe-lg-4'>
                    <section id='resume-summary'>
                        <h3 className='resume-section-header'>
                            <img id='avatar' src='/images/avatar.jpeg' alt='Camila Guzman photo' />
                            ABOUT ME
                        </h3>
                        <p>Summarise your career profile here lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa. 
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                    </section>

                    <hr />

                    <section id='resume-work-experience'>
                        <h3 className='resume-section-header'>
                            <i className='bi bi-briefcase-fill resume-icon'></i>
                            Work Experience
                        </h3>
                        <PositionDescription 
                            year='Jan 2025 - Aug 2025' 
                            company= 'Cyberjustice Laboratory, UdeM'
                            position='AR Developer Intern'
                            desc={software_app_intern}
                        />

                        <PositionDescription 
                            year='Sept 2024 - Dec 2024' 
                            company= 'Cyberjustice Laboratory, UdeM'
                            position='Software Developer Part-Time Intern'
                            desc={software_app_intern}
                        />

                        <PositionDescription 
                            year='May 2024 - Aug 2024' 
                            company= 'HLD Taekwondo'
                            position='Software Developer Freelancer'
                            desc={tkd_freelance}
                        />
                    </section>
                </div>
                <div className='col-12 col-lg-4 ps-lg-4'>
                    <section id='tech-stack'>
                        <h3 className='resume-section-header'>
                            <i className='bi bi-gear resume-icon'></i>
                            TECH STACK
                        </h3>
                        <ul>
                            <li>ReactJs</li>
                            <li>C/C++</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                        </ul>
                    </section>

                    <hr />

                    <section id='projects'>
                        <h3 className='resume-section-header'>
                            <i className='bi bi-code-slash resume-icon'></i>
                            PROJECTS
                        </h3>
                        <ul>
                            <li>My Webpage</li>
                            <li>Taekwondo Hit Counter App</li>
                            <li>COMP353 - DB Web Application</li>
                        </ul>
                    </section>

                    <hr />

                    <section id='education'>
                        <h3 className='resume-section-header'>
                            <i className='bi bi-book resume-icon'></i>
                            EDUCATION
                        </h3>
                        <ul>
                            <li>
                                <div className='resume-degree'>BCompSc in Computer Science</div>
                                <div className='resume-degree-school'>Concordia University</div>
                                <div v>2022-2026</div>
                            </li>
                            <li>
                                <div className='resume-degree'>Webmaster of the Engineering & Computer Science Association</div>
                                <div className='resume-degree-school'>Concordia University</div>
                                <div className='resume-degree-year'>2024-2025</div>
                            </li>
                        </ul>                      
                    </section>

                    <hr />

                    <section id='languages'>
                        <h3 className='resume-section-header'>
                            <i className='bi bi-translate resume-icon'></i>
                            LANGUAGES
                        </h3>
                        <ul>
                            <li>
                                <p>Spanish - Native</p>
                                <div className='progress' style={{ height:'10px' }}>
                                    <div className='progress-bar' style={{ width:'100%' }}>100%</div>
                                </div>
                            </li>
                            <li>
                                <p>English</p>
                                <div className='progress' style={{ height:'10px' }}>
                                    <div className='progress-bar' style={{ width:'100%' }}>100%</div>
                                </div>
                            </li>
                            <li>
                                <p>French</p>
                                <div className='progress' style={{ height:'10px' }}>
                                    <div className='progress-bar' style={{ width:'90%' }}>90%</div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home