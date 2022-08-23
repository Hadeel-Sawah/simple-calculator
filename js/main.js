
$(".equal").click(function(){
  let sum = document.calc.txt.value;
  if(sum){
    document.calc.txt.value = eval(sum)
  };
 
})
let btnClear =document.calc.txt;
function deleteData(){
    btnClear.value ='';
}
$(".delete").click(function(){
 let btnBack = document.calc.txt.value;
 document.calc.txt.value = btnBack.substring(0,btnBack.length-1)
})