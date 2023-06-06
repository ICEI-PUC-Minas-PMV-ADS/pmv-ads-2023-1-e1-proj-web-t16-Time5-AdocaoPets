# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. 

#### Instruções de acesso
1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2. Descompacte o arquivo em uma pasta específica;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra um navegador de Internet e informe a seguinte URL:http://127.0.0.1:5500/AdocaoPets/create.html;

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

####  Integrante do grupo responsável:

- Bárbara Sena

### RF-06 O sistemas deve oferecer cadastro de ONGs parceiras
O sistema deve mostrar o perfil das Ongs cadastradas, o cadastro é feito pela própria Ong responsável e possui algumas informações importantes. Como o nome da Ong, cidade e serviços oferecidos, além dos pets disponivéis para adoção e uma descrição sobre a Ong.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/124728653/2fa4fc34-a84a-4fe0-94eb-1809c806de90)

####  Integrante do grupo responsável:

- Andréia Borges

####  Artefatos da funcionalidade: <br>
- perfil_ong.html <br>

### RF-09 O Sistema deve permitir o compartilhamento  dos perfis para fora da plataforma

O compartilhamento de perfis será feito via URL direta da página. Será possível também entrar em contato direto com o responsável pelo animal cadastrado usando o botão no canto inferior da tela como mostrado abaixo.

![Exemplo botao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/128713645/27bbf28a-1322-469e-8d61-ae46ce82bf34)

####  Integrante do grupo responsável:

- Lucas Ayala

#### Estrutura de dados: 

![HTML botao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/128713645/88258057-fb7f-407c-a11b-060fa054b134)
![CSS botao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-Time5-AdocaoPets/assets/128713645/2b4abe4f-b2c5-49d3-9bb2-2cf30410636c)


####  Artefatos da funcionalidade: <br>
- Não gerou artefato
