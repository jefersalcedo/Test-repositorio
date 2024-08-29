////// arreglos para agregar nombres

/*var listadoNombres : Array<string> = ["maria","juan","jose"];
console.log(listadoNombres);
console.log(listadoNombres[0]); 
listadoNombres[3]="andres",listadoNombres[4]="andrea",listadoNombres[5]="antonio";
console.log(listadoNombres);*/


function EntRandom (min:number,max:number):number
{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;// esto es una semilla 
}

/*
////listado NUMEROS genera 10 numeros aleatorios dentro de un arreglo 

var listadoNum:Array<number>=[];

for(var i:number=0;i<=9;i++)
{
    listadoNum[i]=EntRandom(1,10);
}

console.log(listadoNum);*/


//reciba en un vector 20 aleatorios en un rango del 1 al 15 y muetre solo los pares

/*var listadoNum:Array<number>=[];

for(var i:number=0;i<=15;i++)
{
    listadoNum[i]=EntRandom(1,20);
    if(listadoNum[i]%2==0) //la i ojo 
    {
        console.log(listadoNum[i]);
    }
}

console.log(listadoNum);*/

/// saque el promedio de 10 numeros aleatorios ingresados en un vector 

/*var listadoNum:Array<number>=[];
var sum:number=0;
var i:number=0;
var prom:number=0;


for(var i:number=0;i<=5;i++)
{
    listadoNum[i]=EntRandom(1,10);
    sum=sum+listadoNum[i];
}
prom=sum/i;
console.log(listadoNum);
console.log(prom);*/

//////  cual es porcentaje de los multiplos de 5 de un vector de numeros aleatoros con 40 numeros 


/*var listadoNum:Array<number>=[];
var i:number=0;
var conta:number=0;
var res:number=0;
for(var i:number=0;i<=39;i++)
{
    listadoNum[i]=EntRandom(1,100);
    if(listadoNum[i]%5==0)
    {
        conta+=1;
        console.log(listadoNum[i]);
    }
}
res=(conta/i)*100;
console.log(res);
console.log(listadoNum);*/

/*var listadoNum:Array<number>=[];

for(var i:number=0;i<=9;i++)
{
    listadoNum[i]=EntRandom(1,10);
}

console.log(listadoNum);

listadoNum.push(50,54,47);//push aumenta al final de los 10 numeros 

console.log(listadoNum);

listadoNum.splice(1,1); //eliminar elemntos (posicion,cantidad) la posicion siempre es en 0

console.log(listadoNum);

console.log(listadoNum.length);// cantidad de elementos del vector 

listadoNum.forEach((valor)=> // funcion flecha que reduce la programacion de un for con cualquier condicional 
{
    if(valor%2==0)
    {
        console.log(valor);
    }
}
)*/

/*var inversion = EntRandom(100000, 1000000);
var interes = EntRandom(1, 5);
var años = EntRandom(1, 10);
console.log("la inversion es $" + inversion + " ,su interes es " + interes + "% y la cantidad de años son " + años);

var interes_tot = interes * años;
console.log("el interes total es: " + interes_tot + "%");

var capital_inv = inversion * interes_tot;
console.log("el capital obtenido es: $" + capital_inv);*/


///solcicitar 4 nota aleatoria y sacar promedio 
/*var suma:number=0;
for(var nota:number=0;nota<=3;nota++)
{
    suma=suma+EntRandom(1,10);
}
var prom=suma/4;
console.log(prom);*/
 

/*var notas:number[]=[];
var suma:number=0;
var acumulado:number[]=[];
for(var i:number=0;i<=3;i++)
{
    notas[i]=EntRandom(1,10);
    suma=suma+notas[i];
    acumulado[i]=suma;
    console.log("la nota "+ (i+1) + " es " +notas[i]+ " su acumulado es: "+acumulado[i]);
}
var prom=suma/notas.length;
console.log(prom);*/

/*var int_total:number[]=[];
var inversion:number=EntRandom(100,900)*1000;
var interes:number=EntRandom(1,5)/4;
var años:number=EntRandom(1,10);
console.log("la inversion es $"+inversion+" ,su interes es "+interes+"% y la cantidad de años son "+años);

var interes_tot:number=interes*años;
console.log("el interes total es: "+interes_tot+"%");

var capital_inv:number=inversion*interes_tot;
console.log("el capital obtenido es: $"+capital_inv);

for(var i:number=0;i<(10*12);i++)
{
    int_total[i]=interes_tot[i]+interes;
}
console.log(interes_tot[i]);*/



//TALLER VECTORES 
var valor=1;
var Num_Aleatorios:any[]=[];var Almacena:any[]=[];//arreglos primer punto(case 1)
var Mayor_Menor:any[]=[];//arreglo segundo punto(case 2)
var Busca_Mayor:any[]=[];//arreglo tercer punto(case 3)
var cuenta:any[]=[];//arreglo cuarto punto(case 4)
switch(valor)
{
    case 1: 
        console.log("*")
        console.log("OPCION N°1-> IMPRIME NUMEROS ALEATORIOS Y SEPARA EN OTRO VECTOR LOS NUMEROS PARES")
        for(var i:number=0;i<=30;i++)
        {
            Num_Aleatorios.push(EntRandom(1,20));
            
            if(Num_Aleatorios[i]%2==0)
            {
                var conteo=Num_Aleatorios[i];
                Almacena.push(conteo); 
            }
        }
        console.log("VECTOR DE ALEATORIOS ↓");
        console.log(Num_Aleatorios); 
        console.log("VECTOR DE PARES ↓");
        console.log(Almacena);
        break;    
    case 2:
        console.log("*")
        console.log("OPCION N°2-> ORDENA DE MAYOR A MENOR LOS NUMEROS ALEATORIOS GENERADOS")
        for(var i:number=0;i<20;i++)
        {
            Mayor_Menor[i]=EntRandom(1,20);
        }
        console.log("VECTOR DE ALEATORIOS ↓");
        console.log(Mayor_Menor); 
            for(var i:number=0;i<19;i++)
            {
                for(var j:number=0;j<19-i;j++)
                {
                    if(Mayor_Menor[j]<Mayor_Menor[j+1])
                    {
                        var aux=Mayor_Menor[j];
                        Mayor_Menor[j]=Mayor_Menor[j+1];
                        Mayor_Menor[j+1]=aux;
                    }
                }
            }
            console.log("VECTOR ORDENADO DE MAYOR A MENOR ↓");
            console.log(Mayor_Menor); 
        break;
    case 3:
        console.log("*")
        console.log("OPCION N°3-> MUESTRA EL NUMERO MAYOR DEL VECTOR")
        for (var i:number= 0;i<30;i++) 
        {
            Busca_Mayor.push(EntRandom(1,50));
        }

        var num_Mayor=Busca_Mayor[0];//la variable num_mayor toma el valor del vector en la posicion 0
        for (var i:number=1;i<Busca_Mayor.length;i++) 
        {
            if(Busca_Mayor[i]>num_Mayor) 
            {
                num_Mayor=Busca_Mayor[i];
            }
        }
        console.log("VECTOR DE ALEATORIOS ↓");
        console.log(Busca_Mayor);
        console.log("EL NUMERO MAYOR DEL VECTOR ES ↓");
        console.log(num_Mayor);
        break;
    case 4:
        console.log("*")
        console.log("OPCION N°4-> GENERA UN NUMERO ALEATORIO A BUSCAR E IMPRIME CUANTAS VECES ESTA EN EL VECTOR")
        for (var i:number=0;i<20;i++) 
        {
            cuenta.push(EntRandom(1,20));
        }
        
        var x:number=EntRandom(1,20);//genera un numero aleatorio para buscar en el vector
        console.log("el valor a buscar en el vector es-> "+x);

        var contador=0;//cuenta cuantas veces esta la X(numero aleatorio) en el vector
        for (var i:number=0;i<cuenta.length;i++) 
        {
            if (cuenta[i]==x) 
            {
                contador++;
            }
        }
        console.log(cuenta);
        console.log("El número " +x+ " aparece " +contador+ " veces en el vector");
        break;
    default:
        console.log("no existe la opcion");
        break;
}
 
/*var Nombres:string[]=["maria","juan","jose","daniel","hector","antonio","victor","alan","bernardo",
"julio","carlos","victoria","marcela","karen","diana","rodrigo","andres","juliana","karol","mariana","lidia",
"omar","jefferson","miler","kevin","ricardo","alexander","david","sebastian","alejandro","alejandra","angela",
"angelica","erika","sofia","miguel","alicia","andrea","lina","rosario","paula","nicolas","monica","gerardo",
"gonzalo","gustavo","leandro","luis","marcelo","marcos"];
var Nombres2:string[]=[];
var edad:number[]=[];
var estado_civil:number[]=[];
var hijos:number[]=[];
var genero:number[]=[];
var aux2:number=0,contador:number=0,hombres:number=0,porc_casados:number=0,cont_casados:number=0;


for(var i:number=0;i<20;i++)
{
    var Pos_Aleatoria=EntRandom(0,Nombres.length-1);
    var Nom=Nombres[Pos_Aleatoria];
    Nombres2.push(Nom);
    //console.log("En la posición "+Pos_Aleatoria+" se encuentra el nombre "+Nom);
}
//console.log("Nuevo Vector-> "+Nombres2);
for(var i:number=0;i<20;i++)
{
    edad[i]=EntRandom(1,50);
    estado_civil[i]=EntRandom(1,4);
    hijos[i]=EntRandom(1,5);
    genero[i]=EntRandom(1,2);

    console.log("su nombres: "+Nombres2[i]+", su edad es: "+edad[i]+ ", su estado civil es: "+estado_civil[i]
    +", la cantidad de hijos es: "+hijos[i]+" y su genero es: "+genero[i]);
    
    var aux=edad[0];
    
    for (var i:number=1;i<edad.length;i++) 
    {
        if(edad[i]<aux) 
        {
            aux=edad[i];
            aux2=i;//llama todos los datos del resultado del que tiene menor edad
        }
    }

}
console.log("el nombre de la edad menor es: "+Nombres2[aux2]+" su edad es "+edad[aux2]+" estado civil "+estado_civil[aux2]+
" cantidad de hijos es "+hijos[aux2]+" y su genero es: "+genero[aux2] );

for(var i:number=0;i<20;i++) 
{
    if (estado_civil[i]==2 && hijos[i]>0) 
    {
        contador++;
    }
}
console.log("El número de personas solteras con hijos es: "+contador);


for(var i:number=0;i<20;i++) 
{
    if (genero[i]==1) 
    {
        hombres++;
        
    }
    if(estado_civil[i]==1)
    {
        cont_casados++;
    }
}
porc_casados=(cont_casados/hombres)*100;

console.log("El porcentaje de hombres casados sobre el total de todos los hombres es: " 
+porc_casados+"%");*/

/*var machos= ["david", "kevin","sebastian","santiago","Alejandro", "Fabricio", "Juan David", "Luis","Felipe"];
var hembras = ["maria", "juliana"," luisa", "laura", "Estefania", "Marcela", "Sofía", "Cristina"];
var estado=["casado","soltero","viudo","divorciado"];

var numeros=[]
var nombres=[]
var contador3=0

for (var i = 0; i < 8; i++) 
{
    numeros[i]=(EntRandom(1, 2)); 
    console.log(numeros[i]) 
    if(numeros[i]==1)
    {
      nombres[i]=machos[EntRandom(0,machos.length-1)] 
      contador3++
    }
    else
    {
        nombres[i]=hembras[EntRandom(0,hembras.length-1)]}
}*/