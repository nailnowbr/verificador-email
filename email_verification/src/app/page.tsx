export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-card">
        <div className="home-icon">💌</div>

        <h1>Validação de e-mail</h1>

        <p className="home-description">
          Esta página é usada para confirmar seu e-mail com um código de ativação.
        </p>

        <div className="home-info-box">
          <p>
            Para continuar, acesse o link de validação enviado para o seu e-mail.
          </p>
        </div>

        <p className="home-support-text">
          Está com dúvidas ou precisa de ajuda?
        </p>

        <a
          href="https://nailnow.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-support-button"
        >
          Falar com o suporte
        </a>
      </section>
    </main>
  );
}
