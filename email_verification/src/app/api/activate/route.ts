import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!API_BASE_URL) {
      throw new Error('API_BASE_URL não definida no .env');
    }

    const response = await fetch(
      `${API_BASE_URL}/v1/users/activate`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        cache: 'no-store',
      }
    );

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: 'E-mail validado com sucesso.' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          'O código de ativação falhou ou expirou. Será necessário inserir o e-mail novamente e solicitar um novo código de ativação.',
      },
      { status: response.status }
    );
  } catch (error) {
    console.error('Erro na rota /api/activate:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          'Não foi possível validar o e-mail agora. Tente novamente mais tarde ou solicite um novo código de ativação.',
      },
      { status: 500 }
    );
  }
}