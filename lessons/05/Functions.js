// Diferença Expression x Declaration

// para o Expression a escrita da função deve
// vir sempre antes do seu uso.
// Inicio --------
const avg = function (){
    return 1 + 1
}

console.log(avg());
// Fim -----------

// para o Declaration a escrita da função pode
// vir antes ou depois do seu uso.
// Inicio --------
console.log(sum(null,10));
function sum(value1 = 0, value2 = 0){
    return value1 + value2;
}
// Fim -----------




