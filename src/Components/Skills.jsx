export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Professional Skills</h2>
      <div className="skills-wrapper">
        {[
          "Functional Testing",
          "Regression Testing",
          "Selenium WebDriver",
          "BDD Cucumber",
          "Page Object Model",
          "Playwright (Java)",
          "REST API Testing",
          "JUnit",
          "TestNG",
          "Maven",
          "Git",
          "GitHub",
          "Jenkins"
        ].map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
