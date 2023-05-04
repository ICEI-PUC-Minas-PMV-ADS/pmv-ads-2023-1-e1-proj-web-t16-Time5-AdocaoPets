
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis

## User Flow

O fluxo de interação do usuário pelas telas do sistema está presente no seguinte arquivo pdf. 
<br> [Acessar PDF 📁](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/blob/main/Projeto%20de%20interface%20fluxo%20de%20usuario.pdf)

Cada uma das telas do fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o ambiente 
[MarvelApp do projeto 📁](https://marvelapp.com/prototype/bg4e2i1/screen/91547480)

## Wireframes

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura X. Nesta estrutura, existem 2 grandes blocos, descritos a seguir. São eles
 
> - Cabeçalho - local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);
> -	Conteúdo - apresenta o conteúdo da tela em questão;

<img src="https://user-images.githubusercontent.com/104398945/236341604-242a3914-7c44-471d-b301-cc7145771d3a.png">

### Tela cadastro

A tela de cadastro irá inserir o usuário na nossa plataforma para que ele consiga adicionar, adotar ou apadrinhar um pet. 
Essa tela contêm os seguintes campos:

- Nome completo: Nome completo do tutor, padrinho ou pessoa que quer adotar o pet.
- E-mail: E-mail válido.
- Quero: Esse campo tem como objetivo saber o que o usuário pretende fazer na plataforma (adotar, adicionar ou apadrinhar um pet) para que as configurações de sua conta sejam adaptadas para essa necessidade.
- Senha: Senha válida.

<img src="https://user-images.githubusercontent.com/104398945/236341800-40302c1b-9554-4d3f-9920-d77cda12b6a0.png">

### Tela login

A tela de login irá permitir o usuário entrar e sair da plataforma.

### Tela perfil do usuário

##### Usuário que quer doar pet

A tela de perfil do usuário contém todas as principais informações que o usuário informou. O usuário é levado para essa tela assim que terminar o cadastro para que o restante das informações sejam inseridas nessa etapa.
É importante ressaltar que os campos abaixo mencionados têm como objetivo:

- Cidade: Por meio da localização, o usuário terá mais precisão sobre os pets que estão próximos dele.
- Interesses: Dizer qual a finalidade do usuário: adotar, apadrinhar ou doar um pet.
- Meus pets: Essa seção irá aparecer apenas se o usuário tiver como interesse doar pets. Assim, será possível ver os pets cadastrados para adoção e apadrinhamento.
- Sobre mim: Espaço para o usuário contar um pouco da sua história, seus interesses e o que mais achar necessário.

<img src="https://user-images.githubusercontent.com/104398945/236341868-1531017b-3b33-409f-95a3-1e6d35574370.png">

##### Usuário que quer adotar um pet

Essa tela tem a mesma funcionalidade que a tela acima, porém ela simula a tela de um usuário que está buscando um pet para adotar.

<img src="https://user-images.githubusercontent.com/104398945/236341985-2bbbc523-10a2-4649-8280-24fcb63058d7.png">

### Tela perfil do pet

Após o usuário adicionar um pet, o animalzinho terá um perfil próprio contendo suas caractéristicas e necessidades. Além disso, o perfil do animal terá um link que redireciona para o perfil do tutor temporário.

<img src="https://user-images.githubusercontent.com/104398945/236342623-735902ce-be74-409c-a358-e13dee59917e.png">

### Tela explorar

A tela explorar possibilita o usuário navegar pelos cards que contém os pets que combinam com as características/necessidades do usuário. Nessa tela, o usuário poderá também ver as mensagens e as conexões (matches) que foram feitas.

<img src="https://user-images.githubusercontent.com/104398945/236343098-8e4b8704-3042-4286-a73c-7be7fd6c9ea7.png">
