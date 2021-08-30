console.log('lev1_2: Objects')

const person={
    name:'Ella', 
    alter:46,
    sagNameAlter:function(){
        alert(` ${this.name} ist ${this.alter} Jahre alt.`);
    }
};
console.log(person.name);
console.log(person.alter);

person.sagNameAlter();//**Rufe die Funktion sagNameAlter aus dem Objekt auf.


console.log('lev1_4: Objects Accessing')