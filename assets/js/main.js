console.log('lev1_2: Objects')

const person={
    name:'Ella', 
    alter:100,
    sagNameAlter:function(){
        // alert(` ${this.name} ist ${this.alter} Jahre alt.`);
    }
};
console.log(person.name);
console.log(person.alter);

person.sagNameAlter();//**Rufe die Funktion sagNameAlter aus dem Objekt auf.



console.log('')
console.log('')
console.log('lev1_4: Objects Accessing')

let unsereHaustiere = [
    {
      tiertyp: "Katze",
      names: [
        "Gipsy",
        "Nala", //1
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",// 3
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"//2
      ]
    }
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

unsereHaustiere.push("Knöpfen","pinselchen","droopy");
console.log(unsereHaustiere); // nicht erfolgreich. an Trainer fragen !!


console.log('')
console.log('')
console.log('lev1_5: Objects Accessing')

let unserLager = {
schreibtisch: {
schublade: "Hefter" //3
},
schrank: {
"Obere Schublade": {
Ordner1: "Dokumente",
Ordner2: "Geheimnisse" //1
},
"Untere Schublade": "Cola"//2
}
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

console.log('')
console.log('')
console.log('lev1_6: Objects Arrays Accessing')

let myMusic = [
{
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
},
{
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true
},
{
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true
},
{
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
}
];

myMusic.push(
    {
    artist: "Johann Sebastian Bach",
    title: "Concerto for two violins in D minor",
    medium: ["CS", "LP", "Download"],
    gold: true
    }
);
console.log(myMusic);
console.log(myMusic[0].artist)
console.log(myMusic[1].medium[3])
console.log(myMusic[1].gold)
console.log(myMusic[2].release_year )
console.log(myMusic[3].release_year )
console.log(myMusic[3].medium[2])
console.log(myMusic[2].title.split(" ")[2]);
console.log(myMusic[1].artist.split(" ")[1]);


console.log('')
console.log('')
console.log('lev1_7: Objects Arrays Loop Accessing')

myMusic.forEach(elt=>(
console.log(elt.artist)))

myMusic.forEach(elt=>(
console.log(elt.title)

))
myMusic.forEach(elt=>(
console.log(elt.medium)

))
myMusic.forEach(elt=>{
if(elt.release_year <1975){
    console.log(elt.release_year )
    }
});

console.log('')
console.log('')
console.log('lev1_8: Objects Arrays Loop Accessing')

let studentData = [
    {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
  ];
  studentData .forEach(elt=>(
    console.log(elt.name)
 
 ))
 studentData .forEach(elt=>(
    console.log(elt.coop)
 
 ))
 studentData.map(elt=>(
    console.log(elt.address.city)
 
 ))
 studentData.map(elt=>(
    console.log(elt.emails)
 
 ))