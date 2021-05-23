function calc_total() {
    var preto = Number(document.getElementById('cPreto').value) 
    totPreto = preto * 1500    
        document.getElementById('cPretoV').value = totPreto + ',00'
    var branco = Number(document.getElementById('cBranco').value) 
    totBranco = branco * 1600    
        document.getElementById('cBrancoV').value = totBranco + ',00'
    var vermelho = Number(document.getElementById('cVermelho').value) 
    totVermelho = vermelho * 1650    
        document.getElementById('cVermelhoV').value = totVermelho + ',00'
        document.getElementById('cTotal').value = totPreto + totBranco + totVermelho + ',00'
}