import React, { useMemo, useState } from 'react';
import './App.css';

// Put your headshot at: src/assets/Suhaan-Headshot.jpg
import Headshot from './assets/Suhaan-Headshot.jpg';

type ExperienceItem = {
  org: string;
  role: string;
  location?: string;
  dates: string;
  bullets: string[];
  tags?: string[];
};

type ProjectItem = {
  name: string;
  techLine: string;
  bullets: string[];
  tech: string[];
  links?: { label: string; href: string }[];
};

type EducationItem = {
  school: string;
  program: string;
  dates: string;
  details: string[];
};


type SkillGroup = {
  title: string;
  items: string[];
};

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const profile = useMemo(
    function () {
      return {
        name: 'Suhaan Baru',
        title: 'Software Engineer Intern • Full-Stack',
        tagline:
          'I build reliable, user-focused web applications—clean UI, strong fundamentals, and end-to-end ownership.',
        locationLine: 'University of Maryland • Open to Summer SWE Internships',
        email: 'barusuhaan@gmail.com',
        phone: '(908) 391-6177',
        links: [
          // Replace these with your real URLs from your resume
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suhaan-baru-347881321/' },
          { label: 'GitHub', href: 'https://github.com/sbaru123' }
        ]
      };
    },
    []
  );

  const skillGroups: SkillGroup[] = useMemo(
    function () {
      return [
        {
          title: 'Languages',
          items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL']
        },
        {
          title: 'Frameworks',
          items: ['React', 'Node.js', 'Express', 'FastAPI', 'OpenCV']
        },
        {
          title: 'Concepts',
          items: ['Data Structures', 'Algorithms', 'OOP', 'Debugging', 'SDLC']
        },
        {
          title: 'Tools',
          items: ['Git', 'AWS (beginner)', 'CI/CD', 'VS Code', 'Figma']
        }
      ];
    },
    []
  );

  const education: EducationItem[] = useMemo(
    function () {
      return [
        {
          school: 'University of Maryland, College Park',
          program: 'B.S. in Computer Science',
          dates: 'Expected May 2028',
          details: [
            'Coursework: Data Structures, OOP I & II, Algorithms, Computer Systems, Linear Algebra'
          ]
        }
      ];
    },
    []
  );

  const experience: ExperienceItem[] = useMemo(
    function () {
      return [
        {
          org: 'App Dev Club – Amazon Project Leo',
          role: 'Frontend Engineer',
          location: 'University of Maryland',
          dates: 'Sept 2025 – Present',
          bullets: [
            'Contribute to a web application for analyzing satellite imagery and geospatial data.',
            'Develop UI components integrated with backend and AWS-based services using React, TypeScript, and REST APIs.',
            'Troubleshoot frontend–backend data flow issues and optimize rendering performance.'
          ],
          tags: ['React', 'TypeScript', 'REST APIs', 'AWS']
        },
        {
          org: 'Maryland Masti',
          role: 'Technology Chair',
          location: 'University of Maryland',
          dates: 'Sept 2025 – Present',
          bullets: [
            'Develop full-stack features for registration, scheduling, and live event updates.',
            'Perform debugging and cross-browser testing to ensure stable deployments.',
            'Adapt quickly to new tools and frameworks to meet evolving event requirements.'
          ],
          tags: ['Full-Stack', 'Testing', 'Deployment']
        },
        {
          org: 'Big Think AI Club – Medical Report Summarizer',
          role: 'Full Stack Engineer',
          location: 'University of Maryland',
          dates: 'Sept 2025 – Present',
          bullets: [
            'Work on an application that summarizes complex medical reports using an AI model and a secure processing pipeline.',
            'Implement secure upload and processing features using Python, FastAPI, and React.',
            'Design tests to validate model outputs and ensure backend–frontend integration.'
          ],
          tags: ['Python', 'FastAPI', 'React', 'Testing']
        },
        {
          org: 'Harvard University',
          role: 'CS50: Introduction to Computer Science (Online)',
          dates: 'Jun 2025 – Aug 2025',
          bullets: [
            'Completed projects in C, algorithms, memory management, and debugging.',
            'Implemented data-structure–based solutions and command-line tools.',
            'Strengthened algorithmic thinking through weekly problem sets.'
          ],
          tags: ['C', 'Algorithms', 'Systems']
        },
        {
          org: 'Shertech Industries',
          role: 'Software Intern',
          location: 'Remote',
          dates: 'Jun 2024 – Aug 2024',
          bullets: [
            'Developed the BEAM analytics website: a multi-page dashboard with complex forms, stateful components, and data persistence.',
            'Integrated frontend modules with Express and MySQL APIs and ran end-to-end testing for reliability.',
            'Debugged UI issues, optimized database communication, and improved performance across workflows.'
          ],
          tags: ['React', 'Express', 'MySQL', 'E2E Testing']
        }
      ];
    },
    []
  );

  const projects: ProjectItem[] = useMemo(
    function () {
      return [
        {
          name: 'Facial Recognition App',
          techLine: 'React • Python • OpenCV',
          bullets: [
            'Built a facial detection pipeline with webcam input using OpenCV.',
            'Implemented functional testing and data handling to improve recognition accuracy and stability.',
            'Diagnosed and fixed integration issues between the Python backend and React frontend.'
          ],
          tech: ['React', 'Python', 'OpenCV']
        },
        {
          name: 'Movie Website',
          techLine: 'React • Node.js • TMDB API',
          bullets: [
            'Implemented movie search with full details (release date, description, ratings).',
            'Built a favorites system to save and remove movies.',
            'Created a fast, responsive UI for desktop and mobile using API-based rendering.'
          ],
          tech: ['React', 'Node.js', 'APIs']
        }
      ];
    },
    []
  );

  function onNavClick(sectionId: string) {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderTagPills(tags?: string[]) {
    if (!tags || tags.length === 0) return null;

    return (
      <div className='pills'>
        {tags.map(function (t) {
          return (
            <span className='pill' key={t}>
              {t}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className='app'>
      <header className='header'>
        <div className='container header-inner'>
          <a
            className='brand'
            href='#home'
            onClick={function (e) {
              e.preventDefault();
              onNavClick('home');
            }}
          >
            <span className='brand-mark'>SB</span>
            <span className='brand-text'>{profile.name}</span>
          </a>

          <nav className='nav'>
            <button
              className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={function () {
                onNavClick('about');
              }}
              type='button'
            >
              About
            </button>
            <button
              className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'}
              onClick={function () {
                onNavClick('skills');
              }}
              type='button'
            >
              Skills
            </button>
            <button
              className={activeSection === 'experience' ? 'nav-link active' : 'nav-link'}
              onClick={function () {
                onNavClick('experience');
              }}
              type='button'
            >
              Experience
            </button>
            <button
              className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
              onClick={function () {
                onNavClick('projects');
              }}
              type='button'
            >
              Projects
            </button>
            <button
              className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
              onClick={function () {
                onNavClick('contact');
              }}
              type='button'
            >
              Contact
            </button>
          </nav>

          <div className='header-actions'>
            <a className='btn btn-ghost' href={profile.links[1].href} target='_blank' rel='noreferrer'>
              GitHub
            </a>
            <a className='btn btn-primary' href={'mailto:' + profile.email}>
              Email
            </a>
          </div>
        </div>
      </header>

      <main className='main'>
        {/* ABOUT (with headshot) */}
        <section id='about' className='section about-intro'>
          <div className='container'>
            <div className='section-head'>
              <h2 className='section-title'>About Me</h2>
            </div>

            <div className='grid about-grid'>
              <div className='card about-card'>
                <div className='about-photo-wrap'>
                  <img className='about-photo' src={Headshot} alt='Suhaan Baru headshot' />
                </div>

                <div className='about-content'>
                  <div className='about-name'>{profile.name}</div>
                  <div className='muted'>Computer Science @ University of Maryland, College Park</div>

                  <div className='about-education'>
                    {education.map(function (e) {
                      return (
                        <div key={e.school} className='about-education-item'>
                        <div className='muted'>{e.program}</div>
                          <div className='muted'>{e.dates}</div>
                          <ul className='list about-list'>
                            {e.details.map(function (d) {
                              return <li key={d}>{d}</li>;
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>


                  <div className='about-actions'>
                    <a className='btn btn-primary' href={'mailto:' + profile.email}>
                      Contact
                    </a>
                    <button
                      className='btn btn-ghost text-white'
                      onClick={function () {
                        onNavClick('skills');
                      }}
                      type='button'
                    >
                      View Skills
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id='home' className='hero'>
          <div className='container hero-inner'>
            <div className='hero-left'>
              <h1 className='hero-title'>{profile.title}</h1>
              <p className='hero-tagline'>{profile.tagline}</p>

              <div className='hero-meta'>
                <div className='meta-item'>
                  <span className='meta-label'>Now</span>
                  <span className='meta-value'>{profile.locationLine}</span>
                </div>
                <div className='meta-item'>
                  <span className='meta-label'>Core Stack</span>
                  <span className='meta-value'>React • TypeScript • Express • FastAPI • MySQL</span>
                </div>
              </div>

              <div className='hero-cta'>
                <button
                  className='btn btn-primary'
                  onClick={function () {
                    onNavClick('projects');
                  }}
                  type='button'
                >
                  View Projects
                </button>
                <button
                  className='btn btn-ghost'
                  onClick={function () {
                    onNavClick('experience');
                  }}
                  type='button'
                >
                  See Experience
                </button>
              </div>

              <div className='social-row'>
                {profile.links.map(function (l) {
                  return (
                    <a key={l.label} className='social-link' href={l.href} target='_blank' rel='noreferrer'>
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className='hero-right'>
              <div className='hero-card'>
                <div className='hero-card-title'>Highlights</div>
                <ul className='hero-bullets'>
                  <li>Frontend + full-stack delivery across multiple orgs and projects.</li>
                  <li>Strong debugging and integration focus (frontend ↔ backend).</li>
                  <li>Comfortable shipping production-style features with clean UI.</li>
                </ul>
                <div className='hero-card-footer'>
                  <span className='badge'>React</span>
                  <span className='badge'>TypeScript</span>
                  <span className='badge'>Node/Express</span>
                  <span className='badge'>FastAPI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='skills' className='section'>
          <div className='container'>
            <div className='section-head'>
              <h2 className='section-title'>Skills</h2>
              <p className='section-subtitle'>Tools and fundamentals I use to ship.</p>
            </div>

            <div className='grid four'>
              {skillGroups.map(function (g) {
                return (
                  <div className='card' key={g.title}>
                    <h3 className='card-title'>{g.title}</h3>
                    <div className='chips'>
                      {g.items.map(function (s) {
                        return (
                          <span className='chip' key={s}>
                            {s}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id='experience' className='section'>
          <div className='container'>
            <div className='section-head'>
              <h2 className='section-title'>Experience</h2>
              <p className='section-subtitle'>
                Work across clubs, internships, and engineering projects.
              </p>
            </div>

            <div className='stack'>
              {experience.map(function (item) {
                return (
                  <div className='card' key={item.org + item.role}>
                    <div className='exp-top'>
                      <div>
                        <div className='exp-role'>{item.role}</div>
                        <div className='exp-company'>
                          <span>{item.org}</span>
                          <span className='dot'>•</span>
                          <span className='muted'>{item.dates}</span>
                          {item.location ? (
                            <span className='muted'>
                              <span className='dot'>•</span>
                              {item.location}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      {renderTagPills(item.tags)}
                    </div>

                    <ul className='list'>
                      {item.bullets.map(function (b) {
                        return <li key={b}>{b}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id='projects' className='section'>
          <div className='container'>
            <div className='section-head'>
              <h2 className='section-title'>Projects</h2>
              <p className='section-subtitle'>
                Selected builds demonstrating full-stack execution and debugging strength.
              </p>
            </div>

            <div className='grid two'>
              {projects.map(function (p) {
                return (
                  <div className='card' key={p.name}>
                    <div className='project-head'>
                      <div>
                        <h3 className='card-title'>{p.name}</h3>
                        <div className='muted'>{p.techLine}</div>
                      </div>
                      <div className='chips chips-tight'>
                        {p.tech.map(function (t) {
                          return (
                            <span className='chip' key={t}>
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <ul className='list'>
                      {p.bullets.map(function (b) {
                        return <li key={b}>{b}</li>;
                      })}
                    </ul>

                    {p.links && p.links.length > 0 ? (
                      <div className='project-links'>
                        {p.links.map(function (l) {
                          return (
                            <a className='link' href={l.href} target='_blank' rel='noreferrer' key={l.label}>
                              {l.label}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id='contact' className='section'>
          <div className='container'>
            <div className='section-head'>
              <h2 className='section-title'>Contact</h2>
              <p className='section-subtitle'>Reach out — I’m open to Summer SWE internships.</p>
            </div>

            <div className='grid two'>
              <div className='card'>
                <h3 className='card-title'>Get in touch</h3>

                <div className='contact-row'>
                  <span className='contact-label'>Email</span>
                  <a className='link' href={'mailto:' + profile.email}>
                    {profile.email}
                  </a>
                </div>

                <div className='contact-row'>
                  <span className='contact-label'>Phone</span>
                  <span className='contact-value'>{profile.phone}</span>
                </div>

                <div className='contact-row'>
                  <span className='contact-label'>Links</span>
                  <div className='contact-links'>
                    {profile.links.map(function (l) {
                      return (
                        <a key={l.label} className='link' href={l.href} target='_blank' rel='noreferrer'>
                          {l.label}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className='contact-cta'>
                  <a className='btn btn-primary' href={'mailto:' + profile.email}>
                    Email Me
                  </a>
                  <button
                    className='btn btn-ghost'
                    onClick={function () {
                      onNavClick('home');
                    }}
                    type='button'
                  >
                    Back to Top
                  </button>
                </div>
              </div>

              <div className='card'>
                <h3 className='card-title'>What I’m looking for</h3>
                <p className='card-text'>
                  A Summer Software Engineering Internship where I can contribute to real product features, ship
                  production-quality UI, and work across frontend + backend systems.
                </p>

                <div className='callout'>
                  <div className='callout-title'>Best fit roles</div>
                  <ul className='list'>
                    <li>Frontend / Full-stack intern (React + TypeScript)</li>
                    <li>Backend integrations (REST, FastAPI/Node)</li>
                    <li>Projects needing strong debugging + reliability mindset</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='container footer-inner'>
          <div className='muted'>© {new Date().getFullYear()} {profile.name}</div>
          <div className='footer-links'>
            <a
              className='link muted'
              href='#home'
              onClick={function (e) {
                e.preventDefault();
                onNavClick('home');
              }}
            >
              Home
            </a>
            <a
              className='link muted'
              href='#projects'
              onClick={function (e) {
                e.preventDefault();
                onNavClick('projects');
              }}
            >
              Projects
            </a>
            <a className='link muted' href={'mailto:' + profile.email}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
