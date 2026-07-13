import Image from "next/image";

const projects = [
  {
    index: "01",
    eyebrow: "Multimodal planning / 2026",
    title: "VisionRoute",
    description:
      "Camera-and-LiDAR trajectory prediction for autonomous driving, with route-overlay demos, quantitative evaluation, and reproducible Waymo tooling.",
    tags: ["PyTorch", "Waymo", "Sensor fusion", "ADE / FDE"],
    href: "https://github.com/nazar-110/vision-route-waymo",
    visual: "route",
    featured: true,
  },
  {
    index: "02",
    eyebrow: "Navigation benchmark / 2026",
    title: "ROS 2 Autonomy Stack",
    description:
      "A repeatable ROS 2 benchmark combining autonomous navigation, LiDAR safety telemetry, experiment logging, and mission-grade metrics.",
    tags: ["ROS 2 Jazzy", "Nav2", "Gazebo", "RViz"],
    href: "https://github.com/nazar-110/ros2-autonomous-navigation-stack",
    visual: "radar",
    featured: true,
  },
  {
    index: "03",
    eyebrow: "Perception prototype / 2026",
    title: "LiDAR SLAM Prototype",
    description:
      "An exploratory autonomy system using synthetic LiDAR scans and ICP odometry, built as a foundation for perception and planning experiments.",
    tags: ["Open3D", "ICP", "Python", "PyTorch"],
    href: "https://github.com/nazar-110/waymo",
    visual: "slam",
    featured: false,
  },
  {
    index: "04",
    eyebrow: "Interface system / 2026",
    title: "This Portfolio",
    description:
      "A fast, responsive portfolio built as a deployable product: editorial design, accessible interactions, and automated GitHub Pages delivery.",
    tags: ["Next.js", "TypeScript", "React", "GitHub Actions"],
    href: "https://github.com/nazar-110/joshua-nazareth-portfolio",
    visual: "interface",
    featured: false,
  },
];

const capabilities = [
  {
    index: "01",
    title: "Robotics & autonomy",
    body: "Navigation systems, motion planning, mission workflows, and safety-aware behaviors for machines operating in dynamic environments.",
  },
  {
    index: "02",
    title: "Perception & sensor fusion",
    body: "LiDAR, camera, ego-motion, SLAM, and multimodal pipelines that turn real-world signals into useful state.",
  },
  {
    index: "03",
    title: "Simulation & evaluation",
    body: "Repeatable experiments in ROS 2, Gazebo, and Waymo workflows with metrics, baselines, telemetry, and visual validation.",
  },
  {
    index: "04",
    title: "Applied machine learning",
    body: "PyTorch systems for trajectory prediction and decision-oriented modeling, carried from data preparation through evaluation.",
  },
];

function ProjectVisual({ type, title }: { type: string; title: string }) {
  return (
    <div className={`project-visual visual-${type}`} aria-label={`${title} abstract system diagram`}>
      <div className="visual-grid" aria-hidden="true" />

      {type === "route" && (
        <div className="route-system" aria-hidden="true">
          <span className="route-horizon" />
          <span className="route-line route-line-one" />
          <span className="route-line route-line-two" />
          <span className="route-line route-line-three" />
          <span className="route-node route-node-one" />
          <span className="route-node route-node-two" />
          <span className="route-node route-node-three" />
          <span className="route-reticle" />
          <span className="visual-caption caption-top">CAM + LiDAR / FUSION ACTIVE</span>
          <span className="visual-caption caption-bottom">PATH / 20 WAYPOINTS</span>
        </div>
      )}

      {type === "radar" && (
        <div className="radar-system" aria-hidden="true">
          <span className="radar-ring ring-one" />
          <span className="radar-ring ring-two" />
          <span className="radar-ring ring-three" />
          <span className="radar-axis axis-x" />
          <span className="radar-axis axis-y" />
          <span className="radar-sweep" />
          <span className="radar-target target-one" />
          <span className="radar-target target-two" />
          <span className="visual-caption caption-top">MISSION / COMPLETE</span>
          <span className="visual-caption caption-bottom">4.431 M / 61 S</span>
        </div>
      )}

      {type === "slam" && (
        <div className="slam-system" aria-hidden="true">
          <span className="slam-track track-one" />
          <span className="slam-track track-two" />
          <span className="slam-track track-three" />
          <span className="slam-track track-four" />
          <span className="slam-point point-one" />
          <span className="slam-point point-two" />
          <span className="slam-point point-three" />
          <span className="slam-point point-four" />
          <span className="visual-caption caption-top">ICP / ODOMETRY</span>
          <span className="visual-caption caption-bottom">POINT CLOUD / ALIGNED</span>
        </div>
      )}

      {type === "interface" && (
        <div className="interface-system" aria-hidden="true">
          <span className="interface-frame frame-one" />
          <span className="interface-frame frame-two" />
          <span className="interface-frame frame-three" />
          <span className="interface-pulse" />
          <span className="visual-caption caption-top">BUILD / DEPLOY</span>
          <span className="visual-caption caption-bottom">STATUS / LIVE</span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joshua Nazareth",
    url: "https://nazar-110.github.io/joshua-nazareth-portfolio/",
    sameAs: [
      "https://github.com/nazar-110",
      "https://www.linkedin.com/in/joshnazz/",
    ],
    knowsAbout: [
      "Robotics",
      "Autonomous navigation",
      "LiDAR",
      "ROS 2",
      "Machine learning",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="signal-bar">
        <span>Joshua Nazareth / Portfolio 2026</span>
        <span className="signal-bar-status">
          <i aria-hidden="true" /> Systems online
        </span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Joshua Nazareth, back to top">
          <span className="brand-mark">JN</span>
          <span className="brand-name">Joshua Nazareth</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
        </nav>

        <a
          className="header-cta"
          href="https://www.linkedin.com/in/joshnazz/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-grid">
            <div className="hero-eyebrow reveal-item">
              <span>Robotics</span>
              <span>Autonomy</span>
              <span>Applied ML</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">I build systems</span>
              <span className="title-line title-line-indent">that perceive, decide,</span>
              <span className="title-line title-line-accent">and move.</span>
            </h1>

            <div className="hero-summary reveal-item">
              <p>
                Joshua Nazareth builds robotics and autonomous-systems projects spanning
                ROS 2 navigation, LiDAR perception, multimodal trajectory prediction,
                simulation, and reproducible evaluation.
              </p>
              <a className="text-link" href="#work">
                Explore selected systems <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-index reveal-item" aria-label="Portfolio index">
              <span>Index / 001</span>
              <span>Open source work</span>
              <span>Open source / 2026</span>
            </div>
          </div>

          <div className="hero-system" aria-hidden="true">
            <div className="hero-system-grid" />
            <span className="hero-orbit orbit-a" />
            <span className="hero-orbit orbit-b" />
            <span className="hero-vector vector-a" />
            <span className="hero-vector vector-b" />
            <span className="hero-vector vector-c" />
            <span className="hero-point point-a" />
            <span className="hero-point point-b" />
            <span className="hero-point point-c" />
            <span className="hero-point point-d" />
            <span className="system-label label-a">INPUT / WORLD STATE</span>
            <span className="system-label label-b">MODEL / PREDICT</span>
            <span className="system-label label-c">OUTPUT / MOTION</span>
            <span className="system-coordinate">FRAME / WORLD COORDINATES</span>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading">
            <p className="section-kicker">01 / Selected work</p>
            <h2>Systems built for the real world.</h2>
            <p className="section-intro">
              A focused set of open-source projects across perception, planning,
              navigation, and engineering infrastructure.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.featured ? "project-featured" : ""}`}
                key={project.index}
              >
                <a href={project.href} target="_blank" rel="noreferrer">
                  <ProjectVisual type={project.visual} title={project.title} />
                  <div className="project-meta">
                    <span className="project-index">[{project.index}]</span>
                    <div className="project-copy">
                      <p className="project-eyebrow">{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <ul className="tag-list" aria-label={`${project.title} technologies`}>
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <a
            className="wide-link"
            href="https://github.com/nazar-110?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <span>View the complete GitHub profile</span>
            <span aria-hidden="true">All repositories ↗</span>
          </a>
        </section>

        <section className="capabilities-section" id="capabilities">
          <div className="section-shell">
            <div className="section-heading section-heading-light">
              <p className="section-kicker">02 / Areas of focus</p>
              <h2>From signal to action.</h2>
            </div>

            <div className="capabilities-list">
              {capabilities.map((capability) => (
                <article className="capability-row" key={capability.index}>
                  <span className="capability-index">{capability.index}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                  <span className="capability-plus" aria-hidden="true">+</span>
                </article>
              ))}
            </div>

            <div className="toolchain" aria-label="Project technologies">
              <span>Python</span>
              <span>ROS 2</span>
              <span>PyTorch</span>
              <span>LiDAR</span>
              <span>Nav2</span>
              <span>Gazebo</span>
              <span>Open3D</span>
              <span>Waymo</span>
            </div>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="section-heading">
            <p className="section-kicker">03 / Profile</p>
            <h2>A builder at the boundary between perception and motion.</h2>
          </div>

          <div className="about-grid">
            <figure className="portrait-frame">
              <Image
                src="https://avatars.githubusercontent.com/u/231134722?v=4"
                alt="Joshua Nazareth"
                width="460"
                height="460"
                sizes="(max-width: 760px) calc(100vw - 40px), 38vw"
              />
              <figcaption>
                <span>Joshua Nazareth</span>
                <span>Robotics / Autonomy</span>
              </figcaption>
            </figure>

            <div className="about-copy">
              <p className="about-lead">
                I’m interested in the moment a model leaves the notebook and has to
                make sense of a moving, imperfect world.
              </p>
              <p>
                My public work explores autonomous navigation, sensor fusion, LiDAR
                odometry, simulation, and measurable trajectory prediction. I care
                about systems that are not only capable, but observable, repeatable,
                and clear enough for others to build on.
              </p>
              <div className="profile-links">
                <a href="https://github.com/nazar-110" target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/joshnazz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-shell contact-grid">
            <p className="section-kicker">04 / Connect</p>
            <h2>Let’s make the next system move.</h2>
            <p>
              For project conversations, technical collaboration, or simply to compare
              notes on autonomy and robotics, connect with me on LinkedIn.
            </p>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/joshnazz/"
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">JN / 2026</div>
        <p>Designed and engineered for clarity, motion, and the open web.</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
