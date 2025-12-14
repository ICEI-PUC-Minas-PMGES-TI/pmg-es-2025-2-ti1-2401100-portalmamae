# Introdução
.
Informações básicas do projeto.

* **Projeto:** Portal Mamãe

* **Repositório GitHub:** https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti1-2401100-portalmamae.git

* **Membros da equipe:**

  * [Rafael Galileu Thales Oliveira](https://github.com/RafaelGalileu)
  * [Vinícius Matos Oliveira](https://github.com/vnmatos)
  * [Emanuelly Oliveira Arruda Cabral](https://github.com/Manu-Olliver)
  * [Davi Hermidas Lage Brandão](https://github.com/hermidas-wadac)
  * [Bernardo Caetano Rocha de Lima](https://github.com/beltrano) ⚠️ EXEMPLO ⚠️
  * [Victor Gabriel Soares Ananias](https://github.com/victorVT03)
  * [Pedro Henrique Dias Pereira](https://github.com/cicrano) ⚠️ EXEMPLO ⚠️

A documentação do projeto é estruturada da seguinte forma:

1. Introdução
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução
7. Referências Bibliográficas

✅ [Documentação de Design Thinking (MIRO)](/docs/files/DocumentaçãodeDesignThinking.pdf)

# Contexto

O pré-natal é uma das etapas mais importantes da saúde pública, crucial para garantir a saúde da gestante e do bebê. No entanto, o sistema público de saúde em muitas regiões enfrenta desafios significativos que levam a atrasos no atendimento, dificultando o acesso e a continuidade do cuidado. Tais atrasos podem gerar consequências graves, como o aumento do risco de complicações na gestação, partos de risco e, tragicamente, mortalidade materna e infantil. As causas variam desde a dificuldade da gestante em obter informações e agendar consultas até a sobrecarga crônica das unidades de saúde.

## Problema

O principal problema que o Portal Mamãe busca resolver é a fragmentação e lentidão do acesso ao pré-natal na saúde pública. A dificuldade em agendar a primeira consulta, a necessidade de deslocamento para obter resultados de exames e a falta de um prontuário eletrônico unificado resultam em:

  * **Atraso na Detecção de Risco:** A falta de acesso rápido ao histórico e aos resultados de exames pela equipe médica compromete a identificação precoce de gestações de alto risco.

    * **Difícil acesso a exames e informações médicas:** A ausência de um local unificado para armazenar exames e resultados obriga a gestante a acessar múltiplas plataformas de laboratórios ou a se deslocar até unidades de saúde para reunir informações por conta própria, aumentando o risco de perda, esquecimento ou desorganização dos dados.

  * **Desperdício de Tempo e Sobrecarga:** Pacientes perdem tempo com deslocamentos desnecessários e os médicos enfrentam burocracia para organizar agendamentos e acessar informações.

  * **Falta de Personalização e Confiança:** A gestante não tem garantia de atendimento em locais próximos ou informações prévias sobre o profissional, afetando a segurança e confiança na consulta.

  * **Falta de informações básicas sobre gestação:** Muitas gestantes, especialmente mães jovens ou de primeira viagem, não possuem acesso a informações sobre os cuidados básicos necessários durante a gravidez.

## Objetivos

A finalidade do Portal Mamãe é ser um software especializado no acompanhamento de gestantes no sistema público de saúde, oferecendo suporte e informação.

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
| RF-008 | O sistema deve mostrar os cuidados que a gestante precisa antes, durante e após a gestação.  | MÉDIA     |
| RF-009 | O sistema deve conter páginas para informar a gestante sobre os procesos de gestação.   | BAIXA     |

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

### Protótipos de Tela

Estes são os protótipos de telas do sistema.

##### Home-Page

Tela inicial do sistema. Apresentação da plataforma com seções para conferir Unidades próximas, informações sobre Saúde da gestação, Alimentação e Vacinação

![Home-Page](/docs/images/HomePage0001.jpg)


##### Tela de Login (Gestante)

Tela de acesso para a gestante.

![Tela de Login (Gestante)](/docs/images/TeladeLogin(Gestante).jpg)


##### Tela de Login (Prestador de Serviço)

Tela de acesso para o Prestador de Serviços.

![Tela de Login (Prestador de Serviço)](/docs/images/TeladeLogin(PrestadordeServiço).jpg)


##### Tela de Cadastro (Gestante)

Formulário para cadastro inicial da gestante.

![Tela de Cadastro (Gestante)](/docs/images/TeladeCadastro(Gestante).jpg)


##### Portal da Gestante (Perfil)

Tela de informações do perfil da gestante.

![Portal da Gestante (Perfil)](/docs/images/PortaldaGestante(Perfil).jpg)


##### Tela de Busca de Serviços/Profissional

Formulário para encontrar serviços ou médicos. Permite filtrar por localização, Tipo de Serviço e Especialidade.

![Tela de Busca de Serviços/Profissional](/docs/images/TeladeBuscadeServiçosProfissional.jpg)


##### Portal do Prestador de Serviços (Perfil)

Tela de perfil e acesso para o Prestador de Serviços.    

![Portal do Prestador de Serviços (Perfil)](/docs/images/PortaldoPrestador(Perfil).jpg)


##### Tela de Informações Médicas e Resultados de Exames

Mostra o Quadro médico e Resultados de exames com links para download de arquivos

![Tela de Informações Médicas e Resultados de Exames](/docs/images/TeladeInformaçõesMédicaseResultadosdeExames.jpg)


##### Prontuário e Informações

Tela de preenchimento e visualização do prontuário médico detalhado do paciente.

![Prontuário e Informações](/docs/images/ProntuárioeInformação.jpg)


##### Tela de Consultas e Exames Agendados para a Gestante

Exibe a lista de Consultas e Exames agendados junto com um calendário com os dias marcados. Possui um botão "AGENDE AQUI!" para marcar novos compromissos.

![Tela de Consultas e Exames Agendados para a Gestante](/docs/images/TeladeConsultaseExamesAgendadosparaaGestante.jpg)


##### Agenda do prestador de serviço

Agenda do Prestador de Serviço. Exibe a lista de consultas e/ou procedimentos agendados de seus pacientes,  junto com um calendário com os dias marcados.

![Agenda do prestador de serviço](/docs/images/AgendadoPrestadordeServiço.jpg)


##### Busca de Prontuários

Tela de acesso exclusiva do prestador de serviços para localizar prontuários de pacientes.

![Busca de Prontuários](/docs/images/BuscadeProntuários.jpg)


##### Duvidas e Curiosidades (Gestação)

Conteúdo informativo detalhado sobre a gravidez, dividido por trimestres.

![Duvidas e Curiosidades (Gestação)](/docs/images/DuvidaseCuriosidades(Gestação).jpg)


##### Duvidas e Curiosidades (Alimentação)

Conteúdo informativo sobre nutrição na gravidez

![Duvidas e Curiosidades (Alimentação)](/docs/images/DuvidaseCuriosidades(Alimentação).jpg)


##### Tela do Calendário Nacional de Vacinação

Conteúdo informativo sobre o Calendário Nacional de Vacinação. Apresenta a tabela de vacinas essenciais para a gestante e o bebê, separadas por faixa etária

![Tela do Calendário Nacional de Vacinação](/docs/images/TeladoCalendárioNacionaldeVacinação.jpg)


### User Flow

[User Flow](/docs/files/UserFlow.pdf)


### Protótipo Interativo

✅ [Protótipo Interativo (Figma)](https://www.figma.com/proto/9wZgUTGYPeOOI9tLe7QeH7/Untitled?node-id=0-1&t=QuG27JWyXK3J16Hv-1)


# Metodologia

Detalhes sobre a organização do grupo e o ferramental empregado.

## Ferramentas

Relação de ferramentas empregadas pelo grupo durante o projeto.

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Design Thinking | Miro       | https://miro.com/app/board/uXjVJSvRF1c=/    |
| Repositório de código     | GitHub     | https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti1-2401100-portalmamae.git  |
| Hospedagem do site          | Render     | https://site.render.com/XXXXXXX ⚠️ EXEMPLO ⚠️ |
| Protótipo Interativo | Figma  | https://www.figma.com/proto/9wZgUTGYPeOOI9tLe7QeH7/Untitled?node-id=0-1&t=QuG27JWyXK3J16Hv-1   |
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

### Funcionalidade 1 - Agendamento on-line de consultas e exames

Permite o agendamento de consultas e exames de forma on-line, reduzindo filas e deslocamentos desnecessários.

* **Estrutura de dados:** [Contatos](#ti_ed_contatos)
* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal e escolha a opção Agendar consulta
* **Tela da funcionalidade**:

![Tela de  Agendamento on-line](/docs/images/siteAgendarConsulta.png)

### Funcionalidade 2 - Consulta rápida de agendamentos para gestantes e médico

Permite consultar a agenda e acessar agendamentos.

* **Estrutura de dados:** [Contatos](#ti_ed_contatos)
* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal e escolha a opção Agendar consulta
  * depois, escolha a opção Sua Agenda
* **Tela da funcionalidade**:

![Tela de  Agendamento on-line](/docs\images\siteAgendaGestante.jpeg)
![Tela de  Agendamento on-line](/docs\images\siteAgendaPrestador.jpeg)

### Funcionalidade 3 - Centralização de informações para gestantes e médicos

Permite praticidade no acompanhamento da gestação, acesso rápido a exames
realizados e maior organização das informações médicas.

* **Estrutura de dados:**

```json
  {
      "id": "G00012",
      "nome_completo": "Rayssa Sthefany dos Santos",
      "idade": 28,
      "cpf": "176.270.001-38",
      "senha": "1010",
      "telefone": "(31) 99999-1234",
      "email": "rayssa@gmail.com",
      "endereco": {
        "cep": "30130-000",
        "logradouro": "Avenida Afonso Pena",
        "numero": "1000",
        "complemento": "Apto 101",
        "bairro": "Centro",
        "cidade": "Belo Horizonte",
        "estado": "MG"
      },
      "quadro_medico": {
        "portador_doencas_transmissiveis": false,
        "possui_diabetes": false,
        "possui_outras_doencas": "nenhuma",
        "utiliza_medicamentos_controlados": false,
        "em_tratamento": false,
        "alergia_a_medicamentos": true,
        "alergia_detalhe": "Dipirona"
      },
      "resultado_exames": [
        {
          "id_exame": "E273656",
          "nome_exame": "Sorologia (Toxoplasmose)",
          "data_exame": "07-11-2025",
          "status": "Finalizado",
          "arquivo_url": "http://localhost:3000/arquivos/laudo_Sorologia_(Toxoplasmose)_G00012_1762700013872.pdf"
        },
        {
          "id_exame": "E641268",
          "nome_exame": "Glicemia de Jejum",
          "data_exame": "07-11-2025",
          "status": "Finalizado",
          "arquivo_url": "http://localhost:3000/arquivos/laudo_Glicemia_de_Jejum_G00012_1762700022063.pdf"
        },
        {
          "id_exame": "E427045",
          "nome_exame": "Hemograma Completo",
          "data_exame": "07-11-2025",
          "status": "Finalizado",
          "arquivo_url": "http://localhost:3000/arquivos/laudo_Hemograma_Completo_G00012_1762700034710.pdf"
        }
      ]
    }
```

* **Instruções de acesso:**
  * Abra o site e efetue o login
* **Tela da funcionalidade**:

![Tela Portal Gestante](/docs\images\sitePortalGestante.jpeg)
![Tela Portal Prestador](/docs\images\sitePortalPrestador.jpeg)

### Funcionalidade 4 - Prontuário médico on-line

Unificação do sistema com todas as informações da gestante.

* **Estrutura de dados:**

```json
  {
      "id": "fadb",
      "cpf": "22233344455",
      "nome": "Andreia",
      "idade": "44",
      "motivo": "Dores de cabeça",
      "historia": "A paciente relata dores de cabeça des do inicio do dia",
      "exames": "ultrassom",
      "diagnostico": "enxaqueca",
      "dataRegistro": "2025-12-13T21:01:32.056Z"
  }
```

* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal e escolha a opção Prontuários e informações
  * Digite o CPF da gestante
* **Tela da funcionalidade**:

![Tela de  Prontuário on-line](/docs\images\siteProntuario.jpeg)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente cada uma das funcionalidades que a aplicação fornece tanto para os usuários quanto aos administradores da solução.
>
> Inclua, para cada funcionalidade, itens como: (1) titulos e descrição da funcionalidade; (2) Estrutura de dados associada; (3) o detalhe sobre as instruções de acesso e uso.

## Estruturas de Dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info

##### Estrutura de Dados - Gestantes

Gestantes da aplicação

```json
  {
      "id": "G00012",
      "nome_completo": "Rayssa Sthefany dos Santos",
      "idade": 28,
      "cpf": "176.270.001-38",
      "senha": "1010",
      "telefone": "(31) 99999-1234",
      "email": "rayssa@gmail.com",
      "endereco": {
        "cep": "30130-000",
        "logradouro": "Avenida Afonso Pena",
        "numero": "1000",
        "complemento": "Apto 101",
        "bairro": "Centro",
        "cidade": "Belo Horizonte",
        "estado": "MG"
      },
      "quadro_medico": {
        "portador_doencas_transmissiveis": false,
        "possui_diabetes": false,
        "possui_outras_doencas": "nenhuma",
        "utiliza_medicamentos_controlados": false,
        "em_tratamento": false,
        "alergia_a_medicamentos": true,
        "alergia_detalhe": "Dipirona"
      },
      "resultado_exames": [
        {
          "id_exame": "E273656",
          "nome_exame": "Sorologia (Toxoplasmose)",
          "data_exame": "07-11-2025",
          "status": "Finalizado",
          "arquivo_url": "http://localhost:3000/arquivos/laudo_Sorologia_(Toxoplasmose)_G00012_1762700013872.pdf"
        },
        {
          "id_exame": "E641268",
          "nome_exame": "Glicemia de Jejum",
          "data_exame": "07-11-2025",
          "status": "Finalizado",
          "arquivo_url": "http://localhost:3000/arquivos/laudo_Glicemia_de_Jejum_G00012_1762700022063.pdf"
        },
        {
          "id_exame": "E427045",
          "nome_exame": "Hemograma Completo",
          "data_exame": "07-11-2025",
          "status": "Finalizado",
          "arquivo_url": "http://localhost:3000/arquivos/laudo_Hemograma_Completo_G00012_1762700034710.pdf"
        }
      ]
    }
```

##### Estrutura de Dados - Médicos

Registro dos médicos do sistema utilizados para login e para o perfil do sistema

```json
  {
      "tipo": "medico",
      "id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
      "cpf": "222.333.444-55",
      "telefone": "(31) 96666-3333",
      "login": "Andreia44",
      "senha": "1234",
      "nome": "Andreia Silva",
      "email": "medica@abc.com",
      "admin": false,
      "endereco": "Não informado"
  }
```

##### Estrutura de Dados - Denúncias

Registro de denúncias do sistema

```json
  {
      "id": "0237",
      "cpfGestante": "176.270.001-38",
      "local": "xyz",
      "data": "01/12/2025",
      "anonima": true,
      "detalhes": "Enfermeira me desrespeitou",
      "criadaEm": "2025-12-14T17:09:23.630Z"
  }
```

##### Estrutura de Dados - Prontuários

Registro de prontuário das pacientes.

```json
  {
      "id": "fadb",
      "cpf": "22233344455",
      "nome": "Andreia",
      "idade": "44",
      "motivo": "Dores de cabeça",
      "historia": "A paciente relata dores de cabeça des do inicio do dia",
      "exames": "ultrassom",
      "diagnostico": "enxaqueca",
      "dataRegistro": "2025-12-13T21:01:32.056Z"
  }
```

## Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução

### Frameworks, Bibliotecas e Ambiente:

* **Node.js** - [https://nodejs.org/](https://nodejs.org/)
  * Ambiente de execução JavaScript (*runtime*) utilizado no backend para gerenciar a aplicação e executar as dependências do servidor.

* **Bootstrap** - [https://getbootstrap.com/](https://getbootstrap.com/)
  * Framework CSS utilizado para o desenvolvimento do frontend, garantindo responsividade, sistema de grid e componentes visuais padronizados.

* **Puppeteer** - [https://pptr.dev/](https://pptr.dev/)
  * Biblioteca Node.js que fornece uma API de alto nível para controlar o Chrome/Chromium, utilizada nesta solução para a geração automatizada de arquivos PDF.

### APIs

* **Google Gemini API** - [https://ai.google.dev/](https://ai.google.dev/)
  * Interface de programação utilizada para integrar recursos de Inteligência Artificial generativa, permitindo a criação de exames.

* **YouTube Data API** - [https://developers.google.com/youtube/v3](https://developers.google.com/youtube/v3)
  * API utilizada para acessar a base de dados do YouTube, permitindo a busca e exibição de vídeos e metadados diretamente na interface da solução.

* **Google Maps Platform** - [https://mapsplatform.google.com/](https://mapsplatform.google.com/)
  * Conjunto de APIs utilizado para incorporar mapas interativos e funcionalidades de geolocalização.

* **ViaCEP** - [https://viacep.com.br/](https://viacep.com.br/)
  * Web Service (API REST) gratuito utilizado para consultar códigos postais (CEP) e preencher automaticamente os dados de endereço nos formulários.

# Referências

As referências utilizadas no trabalho foram:

* **CarnaLivre - Hospedagem:** Repositório GitHub utilizado como base de estudo para a estrutura do projeto. Disponível em: [GitHub](https://github.com/Joao-Prado0/CarnaLivre-Hospedagem).

* **Doctoralia:** Plataforma utilizada como referência para o fluxo de busca de profissionais e agendamento de consultas. Disponível em: [doctoralia.com.br](https://www.doctoralia.com.br/).

* **Rede Hospitalar de Belo Horizonte (PBH):** Fonte oficial de dados sobre a rede de atenção à saúde e locais de atendimento. Disponível em: [Portal PBH](https://prefeitura.pbh.gov.br/saude/informacoes/atencao-a-saude/rede-hospitalar).

* **Caderneta da Gestante (Ministério da Saúde):** A principal referência para cronogramas de consultas e exames no SUS. Disponível em: [Cardeneta da Gestante](https://www.mds.gov.br/webarquivos/arquivo/crianca_feliz/Treinamento_Multiplicadores_Coordenadores/Caderneta-Gest-Internet(1).pdf).

* **FEBRASGO** (Federação Brasileira das Associações de Ginecologia e Obstetrícia). Calendário de consultas e exames.

* SCHWABER, K.; SUTHERLAND, J. **O Guia do Scrum: As Regras do Jogo.** Disponível em: [scrumguides](scrumguides.org).
