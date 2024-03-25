let Adminnames:string[]=["Admin","Asad","Abdullah","AdminUmair","Admin","Hammad","Admin"];
let Wordtocheak:string="Admin";
for(let i=0; i<Adminnames.length; i++){
    if(Adminnames[i]==Wordtocheak ){
        console.log(`Hello ${Adminnames[i]} would you like to see a status report?`);
    }
    else{
        console.log(`${Adminnames[i]} thank you for logging in again`);
    }
}