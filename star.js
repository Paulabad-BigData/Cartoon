/*movimiento bb8*/
let conte=document.getElementById('cuerpo')
let padre=document.getElementById('padre')
let cantidad=0


       window.addEventListener('keydown',(e)=>{
            let tecla=e.key
            console.log(e.key)
            switch (tecla) {
                case 'ArrowRight':
                cantidad+=100
            conte.style.transform=`rotate(${cantidad}deg)`
            padre.style.transform=`translateX(${cantidad}px) scale(.6)`
                    break;
            case 'ArrowLeft':
            cantidad-=100
                
            conte.style.transform=`rotate(${cantidad}deg)`
             padre.style.transform=`translateX(${cantidad}px) scale(.6)`
                default:
                    break;
            }
        })


var player = document.getElementById("player");
function animar() {
    player.play();
}
