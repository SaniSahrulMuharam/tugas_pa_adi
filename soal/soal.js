var soal1 = prompt("1. 100 x 5:")
var poin = 0

if(soal1 == 500){
  poin += 2
  alert(`jawaban anda benar, poin anda sekarang ${poin}`);
  var soal2 = prompt("2. ibukota jakarta adalah:")
  if(soal2 == "jakarta"){
    poin += 2
    alert(`jawaban anda benar, poin anda sekarang ${poin}`);
  var soal3 = prompt("3. 10 + 10:")
  if(soal3 == 20){
    poin += 2
    alert(`jawaban anda benar, poin anda sekarang ${poin}`);
  }else{
    poin += 0
    alert(`jawaban salah,poin anda sekarang${poin}`);
  }
  }else{
    poin += 0
    alert(`jawaban salah,poin anda sekarang${poin}`);
  }
  }else{
    poin += 0
    alert(`jawaban salah,poin anda sekarang${poin}`);
  }

