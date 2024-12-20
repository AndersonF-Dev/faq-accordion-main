# Frontend Mentor - FAQ accordion solution


Esta é uma solução para o [FAQ accordion challenge no Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação construindo projetos realistas.
### Screenshot



![](./assets/images/Animação.gif)

### Link


- URL do site ativo: [link aqui](https://andersonf-dev.github.io/faq-accordion-main/)

# Trecho de código usado js
```js
/*jslint es6, browser */

const acordeonTriggers = document.querySelectorAll('.acordion .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');

        if  (isOpen ) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }
    });
});
```
### Criado com
- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- JavaScript

### O que aprendi

- Aprendi a criar um card, posicionar elementos na tela centralizar, consultar o HTML através do DOM com JavaScript.
- Exibir e esconder enformações no HTML pelo JavaScript. 
- Adicionar e remover o ativo.
- Capturar e exibir dado de a cordo com o clique na lista e exibir o mesmo valor em outro lugar

### Desenvolvimento contínuo

Este é apenas mais um de muitos dos projetos de front end que fiz. Continuarei fazendo e me desenvolvendo ainda mais. Estou aprendendo cada dia mais, fazendo esses desafios, 