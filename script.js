const conselhos =[
    "acredite em voce mesmo .","o primeiro passo é o mais importante.",
    "a persistencia realiza o impossivel .","aprenda algo novo hoje.",
    "seja gentil com todos que encontra ."
]
const conselhotexto = document.getElementById('conselho');
const novoconselhobtn = document.getElementById('novoconselhobtn');
function gerarconselho() {
    //BUG INTENCIONAL AQUI 
    const indice = Math.floor(Math.random() * (conselhos.length));
    conselhotexto,textcontent = conselhos [indice];
}
novoconselhobtn.addeventlistener('click', gerarconcelho);
