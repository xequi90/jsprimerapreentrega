
var peso  = (prompt("Ingrese su peso en KG"))
var altura = (prompt("Ingrese su altura (Ejemplo 1.50, 1.65, etc.)"))

var imc = (peso / (altura * altura)).toFixed(1)

alert(imc)
alert(mensajefinal(imc))



function mensajefinal (imc){
    if (imc < 18.5) {
        return("Usted tiene un peso bajo")
        
    }else if(imc >= 18.5 && imc <= 24.9) { 
        return("Usted tiene un peso normal")
        
    }else if(imc >= 25 && imc <= 29.9) { 
        return("Usted tiene sobrepeso")
        
    }else if(imc >= 30 && imc <= 34.9) {
        return("Usted tiene obesidad tipo 1")
        
    }else if(imc >= 35 && imc <= 39.9) { 
        return("Usted tiene obesidad tipo 2")
        
    }else  { 
        return("Usted tiene obesidad tipo 3")
        
    }
}
