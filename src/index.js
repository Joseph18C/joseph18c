//Variables de Operacion
let col=document.getElementsByClassName("col")
let colConteiner=document.getElementsByClassName("col--conteiner")
let ecua1=document.getElementsByClassName("ecua1")
let ecua2=document.getElementsByClassName("ecua2")
let ecua3=document.getElementsByClassName("ecua3")
let btn=document.getElementsByClassName("btn");

//Variables de Resolucion
let results=document.getElementById("resolution--value")

//Ejecucion e inteligencia de las ecuaciones
let valores=document.getElementsByClassName("values")
let valuesCont=document.getElementsByClassName("values-ex")

class sistemEcuacion{
  matrizOne(){
    let value1=ecua1[0].value
    let value2=ecua2[0].value
    let value3=ecua3[0].value
    return [value1,value2,value3]
  }
  matrizTwo(){
    let value1=ecua1[1].value
    let value2=ecua2[1].value
    let value3=ecua3[1].value
    return [value1,value2,value3]
  }
  matrizThree(){
    let value1=ecua1[2].value
    let value2=ecua2[2].value
    let value3=ecua3[2].value
    return [value1,value2,value3]
  }
  matrixVolt(){
    let value1=ecua1[3].value
    let value2=ecua2[3].value
    let value3=ecua3[3].value
    return [value1,value2,value3]
  }
  resolveDeter(array1,array2,array3){
    let IxOne=Number(array1[0])*(Number(array2[1])*Number(array3[2])-Number(array2[2])*Number(array3[1]));
    let IyOne=-Number(array2[0])*(Number(array1[1])*Number(array3[2])-Number(array1[2])*Number(array3[1]));
    let IzOne=Number(array3[0])*(Number(array1[1])*Number(array2[2])-Number(array1[2])*Number(array2[1]));
    return IxOne+IyOne+IzOne;
  }
  deterEcuation(array1,array2,array3,volt,callback){
    let matrixPrincipal=callback(array1,array2,array3);
    let matrixIx=callback(volt,array2,array3);
    let matrixIy=callback(array1,volt,array3);
    let matrixIz=callback(array1,array2,volt);
    return {
      Ix:matrixIx/matrixPrincipal,
      Iy:matrixIy/matrixPrincipal,
      Iz:matrixIz/matrixPrincipal
    }
  }
  resolveMatrix(){
    const VecIx=this.matrizOne();
    const VecIy=this.matrizTwo();
    const VecIz=this.matrizThree();
    const VecTension=this.matrixVolt();
    let determinante=this.deterEcuation(VecIx,VecIy,VecIz,VecTension,this.resolveDeter)
    valuesCont[0].innerHTML=`l<sub>x</sub> = ${determinante.Ix.toFixed(2)}`
    valuesCont[1].innerHTML=`l<sub>y</sub> = ${determinante.Iy.toFixed(2)}`
    valuesCont[2].innerHTML=`l<sub>z</sub> = ${determinante.Iz.toFixed(2)}`
    
  }
}
let matrix= new sistemEcuacion();

btn[0].onclick= ()=>{
  matrix.resolveMatrix();
}

let names="323"
console.log(Number(names))