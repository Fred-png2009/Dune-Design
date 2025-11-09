import React from 'react'

export default function App(){
  const assets = {
    logo: '/assets/logo.jpg',
    project1: '/assets/sokita.png',
    project2: '/assets/colors.png',
    project3: '/assets/community.png' 
  }

  return (
    <div className="site">
      <header className="hero">
        <img src={assets.logo} alt="Dune Design logo" className="logo" />
        <h1>DUNE DESIGN</h1>
        <p className="lead">Nous aidons les entreprises en Éthiopie à se démarquer par le design. Notre mission : payer nos employés et soutenir des associations locales.</p>
        <a className="cta" href="https://mail.google.com/mail/?view=cm&fs=1&to=dunedesigns99@gmail.com&su=Contact%20Dune%20Design&body=Bonjour%2C%0A%0A"
  target="_blank"
  rel="noopener noreferrer">Contact Us</a>
      </header>

      <section className="about">
        <h2>Who are we?</h2>
        <p>Dune Design accompagne les PME et start-ups locales en leur proposant des solutions visuelles innovantes et sur mesure, alliant modernité et efficacité. Nos créations graphiques, allant du branding aux supports numériques et imprimés, sont conçues pour refléter l’identité unique de chaque entreprise tout en répondant aux attentes du marché éthiopien. Nous mettons un point d’honneur à traduire la vision de nos clients en éléments visuels percutants, favorisant leur visibilité, leur crédibilité et leur croissance dans un environnement concurrentiel.</p>
      </section>

      <section className="projects">
        <div className="card">
          <img src={assets.project1} alt="Sokita project" />
          <h3>Sokita Juice Brand</h3>
          <p>Identité vive et colorée pour un restaurant de jus naturel.</p>
        </div>

        <div className="card">
          <img src={assets.project2} alt="Colors" />
          <h3>Brand Colors & Simplicity</h3>
          <p>Palette verte/blanche minimaliste : fraîcheur, confiance, croissance.</p>
        </div>

        <div className="card">
          <img src={assets.project3} alt="Community" />
          <h3>Community Commitment</h3>
          <p>Une partie de nos revenus finance des associations locales.</p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Dune Design — Designed with purpose in Ethiopia.
      </footer>

      {/* Contact Modal */}
      <div id="modal" className="modal" aria-hidden="true">
        <div className="modal-inner">
          <button className="close" onClick={()=>document.getElementById('modal').classList.remove('open')}>✕</button>
          <h2>Contactez Dune Design</h2>
          <p>Envoie-nous un message — nous te répondrons rapidement.</p>
          <label>Ton nom<input id="name" /></label>
          <label>Ton e-mail<input id="email" type="email" /></label>
          <label>Message<textarea id="message" rows="5"></textarea></label>
          <div className="modal-actions">
            <button onClick={()=>{
              const name = encodeURIComponent(document.getElementById('name').value || '—')
              const email = encodeURIComponent(document.getElementById('email').value || '—')
              const msg = encodeURIComponent(document.getElementById('message').value || '—')
              const to = 'contact@dunedesign.com'
              const subject = encodeURIComponent('Contact depuis site Dune Design — ' + name)
              const body = 'Nom : ' + decodeURIComponent(name) + '\nEmail : ' + decodeURIComponent(email) + '\n\nMessage :\n' + decodeURIComponent(msg)
              window.location.href = `mailto:${to}?subject=${subject}&body=${encodeURIComponent(body)}`
              document.getElementById('modal').classList.remove('open')
            }}>Envoyer (ouvrir email)</button>
            <button onClick={()=>document.getElementById('modal').classList.remove('open')}>Annuler</button>
          </div>
        </div>
      </div>
    </div>
  )
}
