function sumarNumeros (n){
    let sum=0;
    for (let i=0;i<n;i++){
        let numero=parseInt(prompt('Ingresa el numero:'));
        sum=sum+numero;
    }
    return sum;
}
function primo (num){
    let cont=0;
    for (let i=1;i<=num;i++){
        if (num%i==0){
            cont=cont+1;
        }
    }
    if (cont===2){
        alert('El numero es primo'); 
    } else {
        alert('El numero NO es primo'); 
    }
}
let nombre=prompt('Hola! Cual es tu nombre?');
do{
    let u= parseInt(prompt('Hola '+nombre+'! Ingrese una opcion (numero):1-Buscar mayor entre 2 numeros, 2-Par o impar, 3-Sumar numeros, 4-Saber si un numero es primo'));
    switch(u) {
        case 1:{
            let num1=parseInt(prompt('Ingrese el primer numero:'));
            let num2=parseInt(prompt('Ingrese el segundo numero:'));
            if (num1===num2){
                alert('Son iguales'); 
            } else {
                if (num1>num2){
                    alert('El mayor es '+num1); 
                } else {
                    alert('El mayor es '+num2); 
                }
            }
            break;
        }
        case 2:{
            let num=parseInt(prompt('Ingrese el numero:'));
            if (num%2===0){
                alert('El numero es par'); 
            } else {
                alert('El numero es impar'); 
            }
            break;
        }
        case 3:{
            let n=parseInt(prompt('Cuantos numeros deseas sumar?'));
            alert('La suma total es: '+sumarNumeros(n));
            break; 
        }    
        case 4:{
            let num=parseInt(prompt('Ingrese el numero:'));
            primo (num);
            break;
        }
    }
    condicion = prompt ('Si desea continuar ponga "si", sino ponga lo que quiera');
}while(condicion==='si');