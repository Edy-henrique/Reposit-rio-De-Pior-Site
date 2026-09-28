# 🎨 Fila Fácil — A Pior Experiência de Usuário

## Sobre o Projeto

O Fila Fácil é um projeto desenvolvido para o desafio prático de UI, UX e Engenharia do Erro.

A proposta é criar uma interface de agendamento que funcione corretamente, mas apresente propositalmente problemas de usabilidade. O usuário consegue concluir o processo, porém encontra decisões de interface que tornam uma tarefa simples mais confusa.

## Fluxo

1. Tela inicial;
2. Cadastro com nome e e-mail;
3. Escolha de serviço, data e horário;
4. Tela final.

## Princípios e Heurísticas Violados

### Consistência e padrões
Os botões possuem destaque e textos pouco intuitivos, dificultando a identificação das ações.

### Visibilidade do status do sistema
As mensagens de retorno não explicam claramente o que aconteceu.

### Prevenção de erros
Algumas validações aparecem somente quando o usuário tenta avançar.

### Clareza dos botões
A ação principal não possui o destaque esperado e há textos contraditórios.

### Acessibilidade
Alguns textos possuem contraste propositalmente baixo, dificultando a leitura.

### Reconhecimento em vez de memorização
As informações e ações não são apresentadas da forma mais previsível possível.

## Proposta de Correção

Em uma versão profissional, os botões deveriam possuir hierarquia visual clara, as mensagens deveriam explicar os erros, os campos deveriam apresentar suas regras antes do envio e a interface deveria utilizar contraste e textos legíveis.

## Como Executar

Abra o arquivo `index.html` em um navegador.

O projeto também pode ser publicado usando GitHub Pages.

## Playtest

O usuário deve tentar completar o fluxo sem receber explicações prévias. Depois, o grupo pode registrar quais botões, mensagens ou campos causaram maior confusão.

## Conclusão

O projeto demonstra que uma aplicação pode funcionar corretamente e ainda proporcionar uma experiência ruim. A atividade permite perceber, na prática, por que consistência, clareza, acessibilidade e feedback são importantes em uma interface profissional.

## Tecnologias

- HTML5
- CSS3
- JavaScript
