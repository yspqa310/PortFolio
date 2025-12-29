export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <a href="https://www.stepchange.org" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project-card">
            <span className="domain-chip finance">Finance / Charity</span>
            <h3>Step Change Debt Charity</h3>
            <span className="project-role">Consultant QAA (Automation + Functional)</span>
            <p className="project-desc">
              Step change provides the advice and support for the customer in order to achieve long-term financial control.
              It offers free debt advice that is based on a comprehensive assessment of customer financial situation. It has
              both online journey and Telephone journey where customer can directly fill all the details of his financial
              situation or CSR will get in touch with customer and get his financial situation. Services it provides are listed
              a few below free debts help and advice, Bankruptcy, Mortgage
            </p>
          </div>
        </a>
        <a href="https://www.schroders.com" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project-card">
            <span className="domain-chip investment">Investment / Asset Management</span>
            <h3>Schroders Investment Services</h3>
            <span className="project-role">Consultant QAA (Automation)</span>
            <p className="project-desc">
              Schroders Investment Services Limited it is a British Multinational company provides the service for Asset
              management. Schroders provides different type of Asset management solutions to their customers.
              Schroders was responsible for assets worth £615.2 billion on behalf of clients including corporations,
              insurance companies, local and public authorities, charities, pension funds, high-net-worth individuals and
              retail investors. Schroders deals the business with their clients through the Managed entities, entity
              subtypes, appointing parties, and AML/KYC, Legal processes.
            </p>
          </div>
        </a>
        <a href="https://momrah.gov.sa" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project-card">
            <span className="domain-chip government">Government / Municipal</span>
            <h3>MOMRA – Saudi Arabia</h3>
            <span className="project-role">Senior Consultant QAA (Automation)</span>
            <p className="project-desc">
              Ministry of Municipal and Rural Affairs is a government ministry in Saudi Arabia that is responsible for the
              supervision and regulation of municipalities in the country. The supervises the administration of
              municipalities across the country, including cities, towns, and villages. It provides maintenance and
              development services for all municipalities. The ministry is also responsible for providing basic
              infrastructure and road development in the country.
              There are multiple applications are operating in order to provide the effective development, like CRM, CIS,
              CMS etc.
            </p>
          </div>
        </a>
        <a href="https://www.wellsfargo.com" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project-card">
            <span className="domain-chip banking">Banking / AI</span>
            <h3>Wells Fargo – Fargo AI</h3>
            <span className="project-role">Senior Software Engineer – QAA</span>
            <p className="project-desc">
              Fargo is an AI-powered virtual assistant integrated into the Wells Fargo (for consumer banking customers).
              It was introduced as part of Wells Fargo’s digital-transformation strategy to make everyday banking more
              intuitive and conversational. The assistant supports both text and voice input, letting users either type a
              question in the app or use their voice to ask for help and it supports both English and Spanish languages.
            </p>
            <p className="project-subtitle"><strong>Fargo can effectively give the insights to the customer about:</strong></p>
            <ul className="project-list">
              <li>Accounts related queries</li>
              <li>Money Movements</li>
              <li>Accounts Forecasting</li>
              <li>Spending Analysis overview</li>
              <li>Information related to various policies</li>
            </ul>

          </div>
        </a>

      </div>
    </section>

  );
}
