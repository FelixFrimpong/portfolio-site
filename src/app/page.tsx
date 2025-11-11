export default function Home() {
  return (
    <main style={{
      fontFamily: "system-ui, sans-serif",
      padding: "2rem",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#2563eb" }}>Felix Frimpong</h1>
      <h2 style={{ fontWeight: 400, color: "#1e293b" }}>Full-Stack Engineer | AI Enthusiast</h2>

      <section style={{ marginTop: "2rem" }}>
        <h3>About Me</h3>
        <p>
          I’m a passionate engineer from Ghana focused on mastering full-stack JS/TS and AI.
          I build scalable web systems and intelligent applications that solve real problems.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Projects</h3>
        <ul>
          <li>Portfolio Website – Next.js + TypeScript (frontend foundation)</li>
          <li>AI Code Assistant – OpenAI API integration (project coming soon)</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Contact</h3>
        <p>
          📧 Email: elytemo88@gmail.com
        </p>
      </section>
    </main>
  );
}
