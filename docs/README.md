# Introdução
.
Informações básicas do projeto.

* **Projeto:** Portal Mamãe

* **Repositório GitHub:** https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti1-2401100-portalmamae.git

* **Membros da equipe:**

  * [Rafael Galileu Thales Oliveira](https://github.com/RafaelGalileu)
  * [Vinícius Matos Oliveira](https://github.com/beltrano) ⚠️ EXEMPLO ⚠️
  * [Emanuelly Oliveira Arruda Cabral](https://github.com/cicrano) ⚠️ EXEMPLO ⚠️
  * [Davi Hermidas Lage Brandão](https://github.com/fulano) ⚠️ EXEMPLO ⚠️
  * [Bernardo Caetano Rocha de Lima](https://github.com/beltrano) ⚠️ EXEMPLO ⚠️
  * [Victor Gabriel Soares Ananias](https://github.com/cicrano) ⚠️ EXEMPLO ⚠️
  * [Pedro Henrique Dias Pereira](https://github.com/cicrano) ⚠️ EXEMPLO ⚠️

A documentação do projeto é estruturada da seguinte forma:

1. Introdução
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução
7. Referências Bibliográficas

✅ [Documentação de Design Thinking (MIRO)](files/processo-dt.pdf)

# Contexto

O pré-natal é uma das etapas mais importantes da saúde pública, crucial para garantir a saúde da gestante e do bebê. No entanto, o sistema público de saúde em muitas regiões enfrenta desafios significativos que levam a atrasos no atendimento, dificultando o acesso e a continuidade do cuidado. Tais atrasos podem gerar consequências graves, como o aumento do risco de complicações na gestação, partos de risco e, tragicamente, mortalidade materna e infantil. As causas variam desde a dificuldade da gestante em obter informações e agendar consultas até a sobrecarga crônica das unidades de saúde.

## Problema

O principal problema que o Portal Mamãe busca resolver é a fragmentação e lentidão do acesso ao pré-natal na saúde pública. A dificuldade em agendar a primeira consulta, a necessidade de deslocamento para obter resultados de exames e a falta de um prontuário eletrônico unificado resultam em:

  * **Atraso na Detecção de Risco:** A falta de acesso rápido ao histórico e aos resultados de exames pela equipe médica compromete a identificação precoce de gestações de alto risco.

  * **Desperdício de Tempo e Sobrecarga:** Pacientes perdem tempo com deslocamentos desnecessários e os médicos enfrentam burocracia para organizar agendamentos e acessar informações.

  * **Falta de Personalização e Confiança:** A gestante não tem garantia de atendimento em locais próximos ou informações prévias sobre o profissional, afetando a segurança e confiança na consulta.


## Objetivos

A finalidade do Portal Mamãe é ser um software especializado no acompanhamento de gestantes no sistema público de saúde.

Nesse contexto, os objetivos específicos são:

  * **Reduzir Atrasos no Atendimento:** Permitir que a gestante agende consultas e exames (como ultrassom) de forma rápida e online, com indicação de unidades de saúde próximas.

  * **Otimizar o Fluxo de Informações:** Criar um Prontuário Eletrônico que centralize resultados de exames e histórico para acesso imediato por gestantes e médicos.

  * **Garantir Atendimento Personalizado e Seguro:** Disponibilizar informações sobre profissionais e condições de saúde prévias, permitindo que o médico ofereça atenção personalizada e melhore a fluidez das operações.

  * **Aumentar a Adesão ao Pré-Natal:** Enviar alertas e lembretes de consultas marcadas para o médico e para a gestante e estabelecer um canal de comunicação direta.


## Justificativa

O desenvolvimento do Portal Mamãe é justificado pela necessidade urgente de modernizar o acesso ao pré-natal e mitigar o risco de mortalidade materna e infantil, um grave problema de saúde pública.

Acreditamos que a tecnologia pode quebrar as barreiras de acesso e informação que hoje tornam o acompanhamento das gestantes ineficiente. Ao oferecer um sistema que:

  * **Centraliza a Informação:** Garante que o médico tenha conhecimento prévio da situação geral.

  * **Reduz Burocracia:** Permite que o médico se concentre na qualidade e na segurança do atendimento.

  * **Empodera a Paciente:** Oferece praticidade para agendar e ver resultados de exames rapidamente.


## Público-Alvo

O Portal Mamãe é voltado principalmente para dois públicos essenciais dentro do sistema de saúde pública:

  1. **As Gestantes (Usuárias Finais):** Este é o público mais abrangente, buscando facilidade no acesso a informações, agendamentos práticos e a segurança de ter seu histórico de saúde acessível. Elas utilizarão o sistema para agendar consultas, receber resultados e se comunicar com a equipe.

  2. **Os Profissionais de Saúde (Médicos, Enfermeiros, Unidades de Saúde):** Inclui médicos obstetras e outros profissionais envolvidos no pré-natal. Eles utilizarão a plataforma para visualizar e organizar agendamentos, acessar prontuários e exames anteriores, e gerenciar a comunicação com as pacientes para um atendimento mais humanizado e eficiente.

Ambos os grupos se beneficiam, pois o sistema promove uma comunicação clara, otimiza o fluxo de trabalho do profissional e, o mais importante, eleva a qualidade e a segurança do atendimento prestado à gestante.


# Product Discovery

## Etapa de Entendimento

Nessa etapa, vamos trabalhar com a metodologia de Design Thinking para compreender com maior profundidade o problema a ser tratado. Nesse processo, vamos elaborar:

* **Matriz CSD**: também conhecida por Matriz de Alinhamento, é uma ferramenta utilizada no Design Thinking para organizar informações e facilitar o processo de tomada de decisão e solução de problemas;

![MatrizCSD](/docs/images/MatrizCSD.png)

* **Mapa de stakeholders**: ferramenta que nos permite compreender o grupo de pessoas e entidades que devemos estudar e conversar para entender mais sobre o problema;

![MapaStakeholders](/docs/images/MapaStakeholders.png)

* **Entrevistas qualitativas**: série de entrevistas qualitativas para validar suposições e solucionar as dúvidas com as principais pessoas envolvidas;

![Entrevistas qualitativas](/docs/images/EntrevistaQualitativa.png)

* **Highlights de pesquisa**: um compilado do levantamento realizado por meio das entrevistas.

![Highlights de Pesquisa](/docs/images/HighlightsDePesquisa.png)


## Etapa de Definição

### Personas

| Persona 1 | Persona 2 |
|---------- | -------- |
| ![Persona1](/docs/images/Persona1.png) | ![Persona2](/docs/images/Persona2.png) |

| Persona 3 | Persona 4 |
|---------- | -------- |
| ![Persona3](/docs/images/Persona3.png) | ![Persona4](/docs/images/Persona4.png) |

| Persona 5 | Persona 6 |
|---------- | -------- |
| ![Persona5](/docs/images/Persona5.png) | ![Persona6](/docs/images/Persona6.png) |

| Persona 7 | 
|---------- |
| ![Persona7](/docs/images/Persona7.png) |


# Product Design

Nesse momento, vamos transformar os insights e validações obtidos em soluções tangíveis e utilizáveis. Essa fase envolve a definição de uma proposta de valor, detalhando a prioridade de cada ideia e a consequente criação de wireframes, mockups e protótipos de alta fidelidade, que detalham a interface e a experiência do usuário.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`        | PARA ...`MOTIVO/VALOR`               |
| --------------------- | ------------------------------------------ | -------------------------------------- |
| Usuário: Gestante   | Agendar consultas presenciais sem sair de casa.  | Não preciso me deslocar e é mais prático.             |
| Usuário: Gestante         | Receber resultados de exames online.       | Não preciso me deslocar e tenho acesso aos resultados, mais rápido. |
| Usuário: Gestante   | atendimento em locais próximos a mim.  | Otimizar tempo da consulta.             |
| Usuário: Gestante   | Ter conhecimento e escolha do médico(a) que irá me atender.   | Segurança e confiança na consulta.             |
| Usuário: Gestante   | atendimento em locais próximos a mim.  | Otimizar tempo da consulta.             |
| Usuário: Gestante   | Marcar meu exame de ultrassom rapidamente.  | Preciso avaliar a posição do meu bebê antes do parto.           |
| Usuário: Médico obstetra   | Atenção personalizada no atendimento.   | Qualidade e segurança no atendimento.            |
|Usuário: Médico obstetra|Acessar uma plataforma simples para organizar agendamentos.|Reduzir burocracia e evitar sobrecarga de pacientes.|
|Usuário: Médico obstetra|Receber alertas de consultas e ter comunicação rápida com as pacientes.|Garantir atendimento eficiente e humanizado.|
|Usuário: Médico obstetra|Ter acesso fácil a informações prévias de saúde e preferências.|Melhorar a fluidez e a segurança do atendimento.|
|Usuário: Médico obstetra|Visualizar o histórico de exames anteriores das pacientes.|Ter conhecimento prévio e acelerar o atendimento.|

## Proposta de Valor

##### Proposta de valor para Persona William

![Proposta de valor 1](/docs/images/Proposta1.png)

##### Proposta de valor para Persona Rayssa 

![Proposta de valor 2](/docs/images/Proposta2.png)

##### Proposta de valor para Persona Ricardo 

![Proposta de valor 3](/docs/images/Proposta3.png)

##### Proposta de valor para Persona Adriana

![Proposta de valor 4](/docs/images/Proposta4.png)

##### Proposta de valor para Persona Ana Cláudia

![Proposta de valor 5](/docs/images/Proposta5.png)

##### Proposta de valor para Persona Ana Oliveira

![Proposta de valor 6](/docs/images/Proposta6.png)

##### Proposta de valor para Persona Rafael Martins

![Proposta de valor 7](/docs/images/Proposta7.png)


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                   | Prioridade |
| ------ | ---------------------------------------------------------- | ---------- |
| RF-001 | O sistema deve mostrar horários e profissionais disponíveis para agendar consultas.  | ALTA       |
| RF-002 | O sistema deve mostrar resultados de exames. | ALTA     |
| RF-003 | O sistema deve mostrar locais de atendimento próximos ao usuário. | ALTA     |
| RF-004 | O sistema deve permitir que o médico acesse os exames anteriores da paciente. | MÉDIA     |
| RF-005 | O sistema deve permitir que o médico visualize e organize os agendamentos das suas pacientes. | MÉDIA     |
| RF-006 | O sistema deve enviar alertas sobre consultas marcadas para o médico e a gestante.  | BAIXA     |
| RF-007 | O sistema deve ter um canal de comunicação para a gestante e o médico.  | BAIXA     |
### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                              | Prioridade |
| ------- | ------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deverá estar disponível 7 dias por semana, 24 horas por dia. | ALTA     |
| RNF-002 | O desenvolvimento deverá usar HTML, CSS e Javascript.          | BAIXA      |
| RNF-003 | O site deve ser publicado em um ambiente acessível publicamente na internet.  | ALTA     |
| RNF-004 | O site não deverá ter nenhum custo para os usuários.         | ALTA      |
| RNF-005 | O sistema deve possuir um login com usuário e senha para cada usuário. | ALTA     |
| RNF-006 | O sistema deve ser seguro e proteger a privacidade dos dados das gestantes.          | ALTA      |


## Projeto de Interface

Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.

### Wireframes

Estes são os protótipos de telas do sistema.

**✳️✳️✳️ COLOQUE AQUI OS PROTÓTIPOS DE TELAS COM TÍTULO E DESCRIÇÃO ✳️✳️✳️**

##### TELA XPTO ⚠️ EXEMPLO ⚠️

Descrição para a tela XPTO

![Exemplo de wireframe](images/exemplo-wireframe.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante ao layout de elementos fundamentais na interface.
>
> **Orientações**:
>
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)

### User Flow

**✳️✳️✳️ COLOQUE AQUI O DIAGRAMA DE FLUXO DE TELAS ✳️✳️✳️**

![Exemplo de fluxo de telas](images/exemplo-userflow.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.
>
> **Orientações**:
>
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools &amp; Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)

### Protótipo Interativo

**✳️✳️✳️ COLOQUE AQUI UM IFRAME COM SEU PROTÓTIPO INTERATIVO ✳️✳️✳️**

✅ [Protótipo Interativo (MarvelApp)](https://marvelapp.com/prototype/4hd6091?emb=1&iosapp=false&frameless=false)  ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Um protótipo interativo apresenta o projeto de interfaces e permite ao usuário navegar pelas funcionalidades como se estivesse lidando com o software pronto. Utilize as mesmas ferramentas de construção de wireframes para montagem do seu protótipo interativo. Inclua o link para o protótipo interativo do projeto.

# Metodologia

Detalhes sobre a organização do grupo e o ferramental empregado.

## Ferramentas

Relação de ferramentas empregadas pelo grupo durante o projeto.

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Design Thinking | Miro       | https://miro.com/app/board/uXjVJSvRF1c=/    |
| Repositório de código     | GitHub     | https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti1-2401100-portalmamae.git  |
| Hospedagem do site          | Render     | https://site.render.com/XXXXXXX ⚠️ EXEMPLO ⚠️ |
| Protótipo Interativo       | MarvelApp  | https://marvelapp.com/XXXXXXX ⚠️ EXEMPLO ⚠️   |
|                             |            |                                                    |

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Liste as ferramentas empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível. Inclua itens como: (1) Editor de código, (2) )ferramentas de comunicação, (3) )ferramentas de diagramação, (4) )plataformas de hospedagem, entre outras.

## Gerenciamento do Projeto

Divisão de papéis no grupo e apresentação da estrutura da ferramenta de controle de tarefas (Kanban).

![Exemplo de Kanban](images/exemplo-kanban.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Nesta parte do documento, você deve apresentar  o processo de trabalho baseado nas metodologias ágeis, a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
>
> **Orientações**:
>
> - [Sobre Projects - GitHub Docs](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
> - [Gestão de projetos com GitHub | balta.io](https://balta.io/blog/gestao-de-projetos-com-github)
> - [(460) GitHub Projects - YouTube](https://www.youtube.com/playlist?list=PLiO7XHcmTsldZR93nkTFmmWbCEVF_8F5H)
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

# Solução Implementada

Esta seção apresenta todos os detalhes da solução criada no projeto.

## Vídeo do Projeto

O vídeo a seguir traz uma apresentação do problema que a equipe está tratando e a proposta de solução. ⚠️ EXEMPLO ⚠️

[![Vídeo do projeto](images/video.png)](https://www.youtube.com/embed/70gGoFyGeqQ)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> O video de apresentação é voltado para que o público externo possa conhecer a solução. O formato é livre, sendo importante que seja apresentado o problema e a solução numa linguagem descomplicada e direta.
>
> Inclua um link para o vídeo do projeto.

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.Info

##### Funcionalidade 1 - Cadastro de Contatos ⚠️ EXEMPLO ⚠️

Permite a inclusão, leitura, alteração e exclusão de contatos para o sistema

* **Estrutura de dados:** [Contatos](#ti_ed_contatos)
* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal e escolha a opção Cadastros
  * Em seguida, escolha a opção Contatos
* **Tela da funcionalidade**:

![Tela de Funcionalidade](images/exemplo-funcionalidade.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente cada uma das funcionalidades que a aplicação fornece tanto para os usuários quanto aos administradores da solução.
>
> Inclua, para cada funcionalidade, itens como: (1) titulos e descrição da funcionalidade; (2) Estrutura de dados associada; (3) o detalhe sobre as instruções de acesso e uso.

## Estruturas de Dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info

##### Estrutura de Dados - Contatos   ⚠️ EXEMPLO ⚠️

Contatos da aplicação

```json
  {
    "id": 1,
    "nome": "Leanne Graham",
    "cidade": "Belo Horizonte",
    "categoria": "amigos",
    "email": "Sincere@april.biz",
    "telefone": "1-770-736-8031",
    "website": "hildegard.org"
  }
  
```

##### Estrutura de Dados - Usuários  ⚠️ EXEMPLO ⚠️

Registro dos usuários do sistema utilizados para login e para o perfil do sistema

```json
  {
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    email: "admin@abc.com",
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    login: "admin",
    nome: "Administrador do Sistema",
    senha: "123"
  }
```

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente as estruturas de dados utilizadas na solução tanto para dados utilizados na essência da aplicação quanto outras estruturas que foram criadas para algum tipo de configuração
>
> Nomeie a estrutura, coloque uma descrição sucinta e apresente um exemplo em formato JSON.
>
> **Orientações:**
>
> * [JSON Introduction](https://www.w3schools.com/js/js_json_intro.asp)
> * [Trabalhando com JSON - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)

## Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução

**Images**:

* Unsplash - [https://unsplash.com/](https://unsplash.com/) ⚠️ EXEMPLO ⚠️

**Fonts:**

* Icons Font Face - [https://fontawesome.com/](https://fontawesome.com/) ⚠️ EXEMPLO ⚠️

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) ⚠️ EXEMPLO ⚠️
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente os módulos e APIs utilizados no desenvolvimento da solução. Inclua itens como: (1) Frameworks, bibliotecas, módulos, etc. utilizados no desenvolvimento da solução; (2) APIs utilizadas para acesso a dados, serviços, etc.

# Referências

As referências utilizadas no trabalho foram:

* SOBRENOME, Nome do autor. Título da obra. 8. ed. Cidade: Editora, 2000. 287 p ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
>
> **Orientações**:
>
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
