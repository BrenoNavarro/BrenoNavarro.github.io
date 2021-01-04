# Case Técnico da DP6

Implementação de uma coleta de dados para o Google Analytics.

Este ambiente foi implementado em HTML5, CSS3 e Javascript, a execução é realizada utilizando o Node.Js. 

### Instalação do NodeJs

O <i>[download](https://www.google.com)</i> do Node.Js pode ser feito no site oficial. Após o <i>download</i>, realize a instalação do pacote <i>Serve</i> usando:

npm install -g serve

Depois de instalado, execute o comando <i>serve</i> em alguma terminal, cmd, powershell ou terminal do editor de código.

### Google Analytics Debugger

Além disso, para debuggar foi utilizado a extensão <i>[Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)</i>, por onde, a quem interessar possa conferir os envios dos dados. 

## Case

Os dados foram enviados utilizando seguindo a biblioteca do <i>[analytics.js](https://developers.google.com/analytics/devguides/collection/analyticsjs?hl=pt-br)</i> com auxílio dos disparos de envento do <i>JavaScript</i>.

#### Todas as páginas

Em todas as páginas há o envio de "visualização de página", caso o usuário clique, no menu, em "entre em contato" e/ou "Download PDF".

#### Na página análise

Na página de análise, o envio ocorre caso o usuário clique em um ou mais <i>cards</i> contidos na página, além disso o rótulo a ser enviado contém o texto do <i>card</i> específico.

#### Na página sobre

Na página sobre, o envio ocorre em cada campo do formulário preenchido pelo usuário, a ação contida no envio depende do id do campo em específico. Outro envio ocorrerá quando o usuário utilizar o botão enviar.

## Github pages

A aplicação também pode ser acessada pelo Github pages através de [https://brenonavarro.github.io/case-dp6/index.html](index.html)
