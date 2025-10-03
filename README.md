# Node Monitor Servers Call Phone

Esta API é destinada à realização de ligações telefônicas automáticas. Ela utiliza o serviço da [TotalVoice](https://totalvoice.com.br/) para efetuar as chamadas.

## Tecnologias utilizadas

- **Node.js** – Ambiente de execução para JavaScript server-side.
- **Express** – Framework para criação de APIs REST.
- **TotalVoice SDK/API** – Serviço de telefonia utilizado para envio e controle das ligações.
- **npm** – Gerenciador de pacotes do Node.js.

## Funcionalidades

- Realiza ligações telefônicas automáticas para números definidos.
- Integração com a plataforma TotalVoice para envio e controle das ligações.

## Como utilizar

1. Instale as dependências do projeto usando o comando:

   ```
   npm install
   ```

2. Configure as credenciais da TotalVoice conforme necessário.

3. Inicie a API:

   ```
   npm start
   ```

## Observações

- Certifique-se de possuir uma conta ativa na TotalVoice para utilizar o serviço de ligações.
- Não esqueça de adicionar informações sensíveis como tokens e chaves de API em variáveis de ambiente e nunca no código-fonte.

## Licença

Este projeto está sob a licença MIT.
