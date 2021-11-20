let vv_nome
let vv_senha

vv_nome = document.getElementById('P101_USERNAME').value
vv_senha = document.getElementById('P101_PASSWORD').value

if (vv_nome == 'csvictorfreire40') {
    alert('nomes iguais. Usuario: ' + vv_nome + ' Senha: ' + vv_senha);
}
else {
    alert('nomes diferentes');
}