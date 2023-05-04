
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis

## User Flow

O fluxo de interação do usuário pelas telas do sistema está presente no seguinte arquivo pdf. 
<br> [Acessar PDF 📁](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/blob/main/Projeto%20de%20interface%20fluxo%20de%20usuario.pdf)

Cada uma das telas do fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o ambiente MarvelApp do projeto.


## Wireframes

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura X. Nesta estrutura, existem 2 grandes blocos, descritos a seguir. São eles
 
> - Cabeçalho - local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);
> -	Conteúdo - apresenta o conteúdo da tela em questão;

<img src="https://user-images.githubusercontent.com/104398945/236335100-5edcd376-ae6c-4f27-90f9-0a59b5bfe5ea.jpeg">

### Tela cadastro

A tela de cadastro irá inserir o usuário na nossa plataforma para que ele consiga adicionar, adotar ou apadrinhar um pet. 
Essa tela contêm os seguintes campos:

- Nome completo: Nome completo do tutor, padrinho ou pessoa que quer adotar o pet.
- E-mail: E-mail válido.
- Quero: Esse campo tem como objetivo saber o que o usuário pretende fazer na plataforma (adotar, adicionar ou apadrinhar um pet) para que as configurações de sua conta sejam adaptadas para essa necessidade.
- Senha: Senha válida.

<img src="https://user-images.githubusercontent.com/104398945/236337314-2f315d79-41ed-4ca0-a50f-8bfd2c019491.jpeg">

### Tela login

A tela de login irá permitir o usuário entrar e sair da plataforma.

### Tela perfil do usuário

A tela de perfil do usuário contém todas as principais informações que o usuário informou. O usuário é levado para essa tela assim que terminar o cadastro para que o restante das informações sejam inseridas nessa etapa.
É importante ressaltar que os campos abaixo mencionados têm como objetivo:

- Cidade: Por meio da localização, o usuário terá mais precisão sobre os pets que estão próximos dele.
- Interesses: Dizer qual a finalidade do usuário: adotar, apadrinhar ou doar um pet.
- Meus pets: Essa seção irá aparecer apenas se o usuário tiver como interesse doar pets. Assim, será possível ver os pets cadastrados para adoção e apadrinhamento.
- Sobre mim: Espaço para o usuário contar um pouco da sua história, seus interesses e o que mais achar necessário.
