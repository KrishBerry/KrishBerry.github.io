const projects = [
  {
    number: "01", eyebrow: "Mechanical systems · 2025–present", title: "MCAV Autonomous Vehicle",
    description: "Mechanical design and multidisciplinary integration for an autonomous vehicle platform built by Monash Connected Autonomous Vehicle.",
    contributions: ["Designed suspension, steering, transmission and gearbox components", "Prototyped parts in PLA, ABS and PETG and evaluated performance", "Integrated LiDAR and vehicle electronics with the mechanical platform"],
    tags: ["SOLIDWORKS", "Mechanical design", "3D printing", "Testing"], accent: "blue",
  },
  {
    number: "02", eyebrow: "Mechanism design · 2024", title: "Warman Competition Robot",
    description: "A competition robot developed to capture six objects within one minute through a purpose-built collection mechanism.",
    contributions: ["Led CAD design and component development", "Developed the ball-capture mechanism and directed system assembly", "Coordinated team activity, integration and safety compliance"],
    tags: ["CAD", "Mechanisms", "Prototyping", "Leadership"], accent: "orange",
  },
  {
    number: "03", eyebrow: "Autonomous robotics · 2025", title: "PenguinPi SLAM & Navigation",
    description: "An autonomous mobile robot combining computer vision, localisation, mapping, path planning and obstacle avoidance.",
    contributions: ["Built fruit and obstacle detection with Python and OpenCV", "Implemented SLAM localisation and A* grid-based path planning", "Integrated perception and navigation into autonomous behaviour"],
    tags: ["Python", "OpenCV", "SLAM", "A* planning"], accent: "green",
  },
];

const skillGroups = [
  { number: "01", title: "Mechanical design", skills: "SOLIDWORKS, CAD assemblies, component design, design reviews" },
  { number: "02", title: "Manufacturing", skills: "3D printing, machining safety, MIG and ARC welding, prototyping" },
  { number: "03", title: "Robotics", skills: "SLAM, autonomous navigation, sensor fusion, LiDAR and radar" },
  { number: "04", title: "Software", skills: "Python, C, C++, MATLAB, OpenCV and machine learning" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Krish Berry home">KB<span className="brand-dot">.</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="kicker">Robotics &amp; Mechatronics Engineer</p>
          <h1>Designing systems that move, sense and <em>think.</em></h1>
          <p className="hero-intro">I&apos;m Krish Berry, a final-year Monash Engineering student specialising in mechanical CAD and autonomous systems integration.</p>
          <div className="actions"><a className="button primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a><a className="button secondary" href="#contact">Get in touch</a></div>
        </div>
        <div className="hero-visual" aria-label="Engineering disciplines graphic">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="core"><span>MECH</span><strong>+</strong><span>AUTO</span></div>
          <span className="visual-label label-cad">CAD</span><span className="visual-label label-build">BUILD</span><span className="visual-label label-test">TEST</span>
        </div>
        <div className="hero-meta"><span>Melbourne, Australia</span><span>Available for graduate opportunities</span></div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading"><p className="section-number">01 / About</p><h2>From requirements to a working system.</h2></div>
        <div className="about-copy">
          <p className="lead">I enjoy taking an engineering problem from its first sketch through CAD, manufacturing, integration and testing.</p>
          <p>My experience spans mechanical systems for an autonomous vehicle, competition robotics, computer vision and SLAM navigation. I am CSWA-certified and complement my design work with practical training in machining, 3D printing and welding.</p>
          <div className="facts" aria-label="Quick facts"><div><strong>2026</strong><span>Expected graduation</span></div><div><strong>CSWA</strong><span>SOLIDWORKS certified</span></div><div><strong>3</strong><span>Core disciplines</span></div></div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading project-heading"><p className="section-number">02 / Selected work</p><h2>Engineering in practice.</h2><p>Three projects across mechanical design, integration and autonomy.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.accent}`}><span className="project-index">{project.number}</span><div className="technical-motif" aria-hidden="true"><span /><span /><span /></div><p>Replace with project image or CAD render</p></div>
              <div className="project-content"><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading"><p className="section-number">03 / Experience</p><h2>Technical depth with team leadership.</h2></div>
        <div className="timeline">
          <article><div className="timeline-date">Feb 2026 — Present</div><div><h3>Co-founder &amp; Chief Marketing/Operating Officer</h3><p className="organisation">Monash VISTA</p><p>Established a new student team, built recruitment and operational documentation, and developed industry and sponsorship relationships.</p></div></article>
          <article><div className="timeline-date">Feb 2025 — Present</div><div><h3>Mechatronics Engineer</h3><p className="organisation">Monash Connected Autonomous Vehicle</p><p>Designed, prototyped and tested mechanical subsystems while coordinating interfaces with electronics and perception teams.</p></div></article>
          <article><div className="timeline-date">Nov 2022 — Present</div><div><h3>Sales Assistant</h3><p className="organisation">Tommy Hilfiger</p><p>Developed customer communication, commercial awareness and inventory coordination in a fast-paced retail environment.</p></div></article>
        </div>
      </section>

      <section className="skills section">
        <div className="section-heading"><p className="section-number">04 / Capabilities</p><h2>Tools for the whole engineering cycle.</h2></div>
        <div className="skills-grid">{skillGroups.map((group) => <article key={group.number}><span>{group.number}</span><h3>{group.title}</h3><p>{group.skills}</p></article>)}</div>
        <div className="certifications"><p>Certifications &amp; training</p><div><span>Certified SOLIDWORKS Associate</span><span>Monash Motorsport Industry Skills</span><span>Introduction to Welding — MIG &amp; ARC</span></div></div>
      </section>

      <footer id="contact">
        <p className="section-number">05 / Contact</p><h2>Let&apos;s build something reliable.</h2>
        <p>I&apos;m interested in graduate opportunities across mechanical design, robotics and systems integration.</p>
        <div className="contact-links"><a href="mailto:Krishberry1234@gmail.com">Email Krish ↗</a><a href="#" aria-label="Replace this link with Krish's LinkedIn URL">LinkedIn ↗</a><a href="#" aria-label="Replace this link with Krish's GitHub URL">GitHub ↗</a></div>
        <div className="footer-bottom"><span>Krish Berry</span><span>Melbourne, Australia · 2026</span></div>
      </footer>
    </main>
  );
}
