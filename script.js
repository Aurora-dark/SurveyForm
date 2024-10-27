function alert() {





     let num1 = document.getElementById('num1').value;
     let num2 = document.getElementById('num2').value;
     num1 = parseFloat(num1);
     num2 = parseFloat(num2);
    let num=' ';
   if (isNaN(num1) || isNaN(num2)) {
  console.error("请输入有效的数字");
}else{
    num=num1+num2;
 document.getElementById('numMessage').innerText = num;
 
 console.log(num);
 }
}