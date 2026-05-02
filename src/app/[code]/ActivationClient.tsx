'use client';

import { useEffect, useState } from 'react';

type ActivationClientProps = {
  code: string;
};

type StatusType = 'loading' | 'success' | 'error';

type ActivateResponse = {
  success: boolean;
  message: string;
};

export default function ActivationClient({
  code,
}: ActivationClientProps) {
  const [status, setStatus] = useState<StatusType>('loading');
  const [message, setMessage] = useState('Validando seu e-mail...');

  useEffect(() => {
    const activateUser = async () => {
      const normalizedCode = code?.trim() ?? '';

      if (!normalizedCode) {
        setStatus('error');
        setMessage(
          'Código inválido. Será necessário inserir o e-mail novamente e solicitar um novo código de ativação.'
        );
        return;
      }

      try {
        setStatus('loading');
        setMessage('Validando seu e-mail...');

        const response = await fetch('/api/activate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: normalizedCode }),
        });

        const data = (await response.json()) as ActivateResponse;

        if (response.ok && data.success) {
          setStatus('success');
          setMessage('Seu e-mail foi validado com sucesso.');
          return;
        }

        setStatus('error');
        setMessage(
          data.message ||
            'O código de ativação falhou ou expirou. Será necessário inserir o e-mail novamente e solicitar um novo código de ativação.'
        );
      } catch (error) {
        console.error('Erro ao ativar usuário:', error);

        setStatus('error');
        setMessage(
          'Não foi possível validar o e-mail agora. Tente novamente mais tarde ou solicite um novo código de ativação.'
        );
      }
    };

    activateUser();
  }, [code]);

  return (
    <main className="validation-page">
      <div className="background-blur blur-one" />
      <div className="background-blur blur-two" />

      <section className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAdE6FH1jk2aJjdB3y-iSkHfKQopPEZ5VOg&s"
          alt="Logo"
          className="logo"
        />

        {status === 'loading' && (
          <>
            <div className="success-icon-wrapper">
              <div className="pulse-ring" />
              <div className="success-icon loading-icon">⏳</div>
            </div>
            <h1 className="title">Validando e-mail</h1>
            <p className="subtitle">{message}</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="success-icon-wrapper">
              <div className="pulse-ring" />
              <div className="success-icon">✅</div>
            </div>
            <h1 className="title">E-mail validado com sucesso</h1>
            <p className="subtitle">{message}</p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="success-icon-wrapper">
              <div className="pulse-ring error-ring" />
              <div className="success-icon error-icon">❌</div>
            </div>
            <h1 className="title">Falha na validação</h1>
            <p className="subtitle">{message}</p>
          </>
        )}

        <div className="code-box">
          <span className="code-label">Código recebido</span>
          <strong className="code-value">{code}</strong>
        </div>
      </section>
    </main>
  );
}