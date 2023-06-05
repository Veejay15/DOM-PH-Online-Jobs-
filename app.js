var list = document.querySelectorAll('#knowledge li .name ');
Array.from(list).forEach(function(knowledge){
     (knowledge.textContent += '(5 + years experence required)');
});

