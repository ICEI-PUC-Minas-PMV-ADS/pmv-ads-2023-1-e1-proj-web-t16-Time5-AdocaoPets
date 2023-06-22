# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

## Tela de Cadastro Usuário
| Caso de teste | CT-01 - Cadastro de usuário | 
| ------------- | ------------- |
| Requisitos Associados	| RF-01	O sistema deve oferecer cadastro de usuário  | 
| Objetivo do teste	  | Verificar se a conta está sendo criada corretamente  |  
| Passo 1	  | Clicar no botão "Cadastrar |
| Passo 2  | Preencher os campos | 
| Passo 3  | Clicar no botão "Cadastrar" | 
| Critérios de Êxito | O usuário é redirecionado para a página de login |

## Tela de Cadastro Usuário / Sem sucesso
| Caso de teste | CT-01 - Cadastro de usuário | 
| ------------- | ------------- |
| Requisitos Associados	| RF-01	O sistema deve oferecer cadastro de usuário  | 
| Objetivo do teste	  | Verificar se a conta está sendo criada corretamente  |  
| Passo 1	  | Clicar no botão "Cadastrar |
| Passo 2  | Preencher os campos | 
| Passo 3  | Clicar no botão "Cadastrar" | 
| Critérios de Êxito | O usuário recebe um alert de erro ou um alert de que já existe um cadastro com esse e-mail |

## Tela de Cadastro de pets
| Caso de teste | CT-02 - Cadastro de pets | 
| ------------- | ------------- |
| Requisitos Associados	| RF-02	O sistema deve oferecer cadastro de gatos e cachorros | 
| Objetivo do teste	  | Verificar se o perfil de pets está sendo criado corretamente  |  
| Passo 1	  | Ter uma conta que tenha "quero doar" como interesse |
| Passo 2  | Clicar no ícone "+" ao lado da seção "Meus pets" | 
| Passo 3  | Preencher os campos |
| Passo 4  | Clicar em "cadastrar" | 
| Critérios de Êxito | O pet é adicionado a seção de "meus pets" |

## Tela de Cadastro de pets / Sem sucesso
| Caso de teste | CT-02 - Cadastro de pets | 
| ------------- | ------------- |
| Requisitos Associados	| RF-02	O sistema deve oferecer cadastro de gatos e cachorros | 
| Objetivo do teste	  | Verificar se o perfil de pets está sendo criado corretamente  |  
| Passo 1	  | Ter uma conta que tenha "quero doar" como interesse |
| Passo 2  | Clicar no ícone "+" ao lado da seção "Meus pets" | 
| Passo 3  | Preencher os campos |
| Passo 4  | Clicar em "cadastrar" | 
| Critérios de Êxito | O usuário recebe um alert de erro ao adicionar pet |

## Tela de Login
| Caso de teste | CT-01 - Cadastro de usuário | 
| ------------- | ------------- |
| Requisitos Associados	| RF-01	O sistema deve oferecer cadastro/login de usuário  | 
| Objetivo do teste	  | Verificar se a conta está sendo criada corretamente  |  
| Passo 1	  | Clicar no botão "Login |
| Passo 2  | Preencher os campos | 
| Passo 3  | Clicar no botão "Login" | 
| Critérios de Êxito | O usuário recebe um alert de login bem sucedido e é redirecionado para o seu perfil |

## Tela de Login / Sem sucesso
| Caso de teste | CT-01 - Cadastro de usuário | 
| ------------- | ------------- |
| Requisitos Associados	| RF-01	O sistema deve oferecer cadastro/login de usuário  | 
| Objetivo do teste	  | Verificar se a conta está sendo criada corretamente  |  
| Passo 1	  | Clicar no botão "Login |
| Passo 2  | Preencher os campos | 
| Passo 3  | Clicar no botão "Login" | 
| Critérios de Êxito | O usuário recebe um alert de login inválido |
