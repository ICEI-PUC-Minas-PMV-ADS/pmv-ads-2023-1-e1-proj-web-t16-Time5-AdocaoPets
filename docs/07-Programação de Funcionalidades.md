# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. 

### Instruções de acesso
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra um navegador de Internet e informe a seguinte URL:http://127.0.0.1:5500/AdocaoPets/create.html;


### RF-01 O sistema deve oferecer cadastro de usuário
O usuário consegue se cadastrar na plataforma e fazer login para ter acesso a seu próprio perfil.

#### Cadastro
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/104398945/47ce3b91-99f5-4eaa-90a1-3ba90d058891)


#### Login
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/104398945/7cda16bd-b5d5-44d7-b6ea-daa7eb7f6c95)

#### Requisitos atendidos: <br>
- RF-01

####  Artefatos da funcionalidade: <br>
- cadastro-pessoa-fisica.html  <br>
- cadastro.js <br>
- login.js <br>
- login.html   <br>

####  Estrutura de dados:

#### Cadastro
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/104398945/185dc58b-f60c-4c1a-b1c5-6ab5666a2996" width="600px">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/104398945/72c64f04-71aa-4bfc-b4e8-6785af569f51" width="600px">

#### Login
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/104398945/266287eb-c099-4610-8b40-1dcd7c711fc0" width="600px">


####  Integrante responsável: <br>
- Bárbara Sena

### RF-02	- O sistema deve oferecer cadastro de gatos e cachorros

O cadastro é feito pelo usuário responsável pelo pet e possui alguns campos importantes que devem ser preenchidos. O campo "espécie" oferece a opção de escolher entre "gato" e "cachorro".  A lista de pets aparesentada no perfil, em forma de tabela, é apenas para a visualização do professor-orientador e será excluída conforme o projeto for avançando.
Os dados são armazenadas no LocalStorage com estruturas dados baseada em JSON. Um exemplo da tela é apresentada na figura abaixo.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/104398945/cd618a38-7ae9-4ac5-bd79-e037c2f06a93">
<br><br>

#### Requisitos atendidos: <br>
- RF-02

####  Artefatos da funcionalidade: <br>
- create.html  <br>
- script.js <br>
- create_style.css <br>

####  Estrutura de dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/104398945/7e0c30db-5a4d-4c37-a38b-458541485cd7" width="600px">

#### Instruções de acesso
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra um navegador de Internet e informe a seguinte URL:http://127.0.0.1:5500/AdocaoPets/create.html;

####  Integrante responsável: <br>
- Bárbara Sena
 
### RF-06 O sistemas deve oferecer cadastro de ONGs parceiras
O sistema deve mostrar o perfil das Ongs cadastradas, o cadastro é feito pela própria Ong responsável e possui algumas informações importantes. Como o nome da Ong, cidade e serviços oferecidos, além dos pets disponivéis para adoção e uma descrição sobre a Ong.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/124728653/2fa4fc34-a84a-4fe0-94eb-1809c806de90)

#### Requisitos atendidos: <br>
- RF-06

####  Artefatos da funcionalidade: <br>
- perfil_ong.html <br>

####  Estrutura de dados: <br>
- Não gerou estrutura de dados <br>

####  Integrante responsável: <br>
- Andreia Moura

### RF-08 O sistema deve permitir que usuários denunciem comportamentos abusivos, perfis falsos ou quaisquer ações que ponham a segurança do usuário em risco.

O sistema deve ser capaz de receber possíveis denúncias sobre comportamenos abusivos e usuários suspeitos. Na página de cada usúario, sendo ele pessoa física ou entidade (Ong), há um botão que abre uma área de texto que pode receber uma denúncia anônima sobre o perfil em questão. A denúncia atualmente fica salva em local storage.

![report](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/75049187/0b75a8f1-f54f-4bb0-832c-d4fbad08868f)

#### Requisitos atendidos: <br>
- RF-08

####  Artefatos da funcionalidade: <br>
- perfil_ong.html <br>
- perfil_usuario.html <br>
- perfil_pet.html <br>

####  Estrutura de dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/104398945/f80625cb-9555-48a7-a609-1895f9ff4465" width="600px">

####  Integrante responsável: <br>
- Bruno Nogueira

### RF-09 O Sistema deve permitir o compartilhamento  dos perfis para fora da plataforma

O compartilhamento de perfis será feito via URL direta da página. Será possível também entrar em contato direto com o responsável pelo animal cadastrado usando o botão no canto inferior da tela como mostrado abaixo.

![Exemplo botao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/128713645/27bbf28a-1322-469e-8d61-ae46ce82bf34)

#### Requisitos atendidos: <br>
- RF-09

####  Artefatos da funcionalidade: <br>
- perfil_ong.html <br>
- perfil_usuario.html <br>
- perfil_pet.html <br>

#### Estrutura de dados: <br>

![HTML botao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/128713645/88258057-fb7f-407c-a11b-060fa054b134)
![CSS botao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/128713645/2b4abe4f-b2c5-49d3-9bb2-2cf30410636c)

####  Integrante responsável: <br>
- Lucas Ayala
