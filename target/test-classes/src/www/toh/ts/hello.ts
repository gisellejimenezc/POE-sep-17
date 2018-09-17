var s:string = "Hello";
console.log (s);
numeroPrimo();

function numeroPrimo(){
    var n:number = 89;
    var i:number;
    for (i=2; i<n; i++){
        n%i;
        if (n%i==0){
            console.log("Le nombre n'est pas premier");
            break;
            }
        else{
            console.log("Le nombre est premier");
            break;
        }
    }
}


