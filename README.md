Projeto Fullstack de Gerenciamento de Tarefas
Este é um projeto fullstack que permite aos usuários se cadastrarem, fazerem login e adicionarem tarefas com prioridade. O projeto utiliza as tecnologias Spring Boot para o backend (API) e Angular para o frontend.

Funcionalidades Principais
Cadastro de Usuário: Os usuários podem se cadastrar fornecendo um nome de usuário único e uma senha segura.
Login de Usuário: Os usuários registrados podem fazer login usando suas credenciais de acesso.
Adicionar Tarefa: Os usuários autenticados podem adicionar tarefas à sua lista pessoal, fornecendo um título e selecionando uma prioridade.
Visualizar Tarefas: Os usuários podem ver uma lista de suas tarefas ordenadas por prioridade.
Marcar Tarefa como Concluída: Os usuários podem marcar uma tarefa como concluída, removendo-a da lista.
Atualizar Tarefa: Os usuários podem editar o título ou a prioridade de uma tarefa existente.
Logout: Os usuários podem fazer logout da aplicação.
Tecnologias Utilizadas
O projeto utiliza as seguintes tecnologias:

Backend (API):

Linguagem: Java
Framework: Spring Boot
Gerenciador de Dependências: Maven ou Gradle
Banco de Dados: MySQL (ou qualquer outro banco de dados de sua preferência)
Frontend:

Linguagem: TypeScript
Framework: Angular
Gerenciador de Pacotes: npm ou Yarn
Configuração do Ambiente
Siga as etapas abaixo para configurar o ambiente de desenvolvimento:

Certifique-se de ter o Java JDK, o MySQL e o Node.js instalados em sua máquina.
Clone este repositório para o seu ambiente local.
Navegue até o diretório raiz do projeto.
Configuração do Backend (API)
No diretório raiz do projeto, navegue até a pasta do backend: cd backend.
Configure as informações do banco de dados no arquivo src/main/resources/application.properties.
Execute o comando mvn install ou gradle build para instalar as dependências e compilar o projeto.
Inicie o servidor backend executando o comando mvn spring-boot:run ou gradle bootRun.
Configuração do Frontend
No diretório raiz do projeto, navegue até a pasta do Projeto-To-Do-List-Front: cd Projeto-To-Do-List-Front.
Instale as dependências do frontend executando o comando npm install ou yarn install.
Abra o arquivo src/environments/environment.ts e atualize a URL da API do backend, se necessário.
Inicie o servidor frontend executando o comando npm start ou yarn start.
Acesso à Aplicação
Após iniciar o backend e o frontend, você pode acessar a aplicação abrindo o navegador e visitando a URL http://localhost:4200.

Considerações Finais
Este é um exemplo básico de um projeto fullstack para gerenciamento de tarefas
