export const multiplicador = function multiplicador() {
    let n1 = parseFloat(document.getElementById("num1").value);//entrada
    let n2 = parseFloat(document.getElementById("num2").value);//entrada
    
    //validação
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").value = "Erro: Digite dois números!";
        return;
    }
     // Processamento e saída
    let resultadoVezes = n1 * n2;
    document.getElementById("resultado").value = resultadoVezes;
}