

function clickfunction(){
let a = document.getElementById("first").value;
let b = document.getElementById("second").value;   
    for (let i=a;i<=b;i++){
        if (i%3==0){
            document.write( ' Fizz ' )
        }else if (i%5==0){
            document.write( 'Buzz' )
        }else{
            document.write( ' '+i+' ' )
        }
    }
}