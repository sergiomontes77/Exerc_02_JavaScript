// Lista de estudantes com seus nomes e notas
let estudantes = [
  { nome: "sergio", nota01: 8.5, nota02: 7.5 },
  { nome: "flavia", nota01: 7.0, nota02: 9.0 },
  { nome: "Pedro", nota01: 6.5, nota02: 8.0 },
];

// Função para calcular a média das notas de um aluno
function calcularMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  return media;
}

// Percorrendo a lista de estudantes e verificando se cada um obteve sucesso ou não
for (let i = 0; i < estudantes.length; i++) {
  let aluno = estudantes[i];
  let media = calcularMedia(aluno.nota01, aluno.nota02);
  
  if (media >= 7) {
    alert(aluno.nome + " obteve média " + media.toFixed(1) + " e foi aprovado no concurso!");
  } else {
    aler(aluno.nome + " obteve média " + media.toFixed(1) + " e não foi aprovado no concurso.");
  }
}
