# Projeto de Ordenação de Livros

## Descrição

Este projeto é uma aplicação Angular que permite aos usuários visualizar e ordenar uma lista de livros por diferentes critérios, como título, autor e edição.

## Características

- Ordenação de livros por título, autor e edição.
- Capacidade de alternar entre ordenação ascendente e descendente.
- Interface do usuário construída com Angular e estilizada com Bootstrap.

## Estrutura do Projeto

### Componentes

- `BooksListComponent`: Componente principal que exibe a lista de livros. Inclui botões para alternar a ordem de classificação.

### Serviços

- `BooksService`: Serviço que gerencia a lógica de ordenação dos livros.

### Modelos

- `Book`: Modelo que representa um livro com título, autor e edição.

## Funcionamento

### Ordenação

A ordenação é realizada pelo `BooksService`, que aceita critérios de ordenação e direções (ascendente/descendente). O serviço é utilizado pelo `BooksListComponent` para ordenar e exibir os livros.

### Interface do Usuário

O `BooksListComponent` apresenta uma tabela com livros que podem ser ordenados. Botões permitem alternar a ordem de classificação para cada campo (título, autor e edição).

## Executando o Projeto

Para executar o projeto localmente, siga estes passos:

1. Clone o repositório.
2. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar o servidor de desenvolvimento.
4. Abra `http://localhost:4200` no seu navegador.

## Testes

Este projeto inclui testes de unidade e integração para garantir a correta funcionalidade da lógica de ordenação e da interface do usuário.

- Execute `ng test` para rodar os testes.

## Contribuições

Contribuições para o projeto são bem-vindas. Para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas mudanças.
3. Faça suas alterações.
4. Envie um pull request.

## Descrição Detalhada

### Lógica de Implementação

O projeto é estruturado em torno de componentes Angular e serviços para gerenciar a exibição e a lógica de negócios:

- **BooksService**: Este serviço é o coração da lógica de ordenação. Ele aceita um ou mais critérios de ordenação juntamente com as direções (ascendente ou descendente) e aplica esta lógica para ordenar a lista de livros. A flexibilidade de aceitar múltiplos critérios de ordenação permite uma experiência de usuário mais rica e personalizada.

- **BooksListComponent**: Este componente interage com o `BooksService` para obter e exibir os livros ordenados. Ele oferece uma interface interativa com botões que permitem aos usuários mudar a ordenação dos livros com base em diferentes critérios.

### Escolhas de Design

- **Uso do Angular**: Optamos pelo Angular por sua capacidade de criar aplicativos web interativos e estruturados. O uso de componentes e serviços facilita a organização do código e a reutilização de lógicas.

- **Integração com Bootstrap**: Para garantir uma interface do usuário atraente e responsiva, utilizamos o Bootstrap. Ele oferece uma ampla gama de componentes estilizados que melhoram a experiência do usuário e aceleram o processo de desenvolvimento.

### Como Usar o Aplicativo

1. **Visualização da Lista de Livros**: Ao iniciar o aplicativo, os usuários são apresentados com a lista completa de livros. Por padrão, os livros são ordenados por título em ordem ascendente.

2. **Alterando a Ordenação**: Os usuários podem alterar a ordenação clicando nos botões correspondentes. Cada botão alterna a ordenação do campo específico (Título, Autor ou Edição) entre ascendente e descendente.

3. **Visualização Responsiva**: O layout responsivo garante que o aplicativo seja facilmente acessível em dispositivos de diferentes tamanhos.

### Documentação do Projeto

A documentação do código segue as melhores práticas, com comentários claros e concisos onde necessário. Isso facilita a compreensão e manutenção do código por outros desenvolvedores.

## Conclusão

Este projeto exemplifica a construção de um aplicativo Angular para a ordenação e visualização de dados. As escolhas de design e a implementação visam criar uma experiência de usuário intuitiva e eficiente, ao mesmo tempo que mantêm o código organizado e fácil de manter.

