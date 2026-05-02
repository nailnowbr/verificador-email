# 📩 Email Activation - NailNow

Aplicação web desenvolvida com **Next.js (App Router)** para validação de e-mail via código de ativação.

O usuário acessa uma URL contendo um código (ex: `/PA4BZA`), e a aplicação realiza a validação automática através de uma API externa.

---

## 🚀 Funcionalidades

-  Rota dinâmica baseada em código (`/[code]`)
-  Integração com API externa de ativação
-  Proxy interno via API Route (evita problemas de CORS)
-  Feedback visual de:
  - carregamento
  - sucesso
  - erro (código inválido ou expirado)
-  UI moderna com animações e feedback visual
-  Uso de variáveis de ambiente (`.env`)

---

##  Como funciona

1. O usuário acessa um link como:

```bash
link/o código