function carregar(){

        let horaDia  = new Date     
        let hora = horaDia.getHours()
        let minuto = horaDia.getMinutes()
         let a = 19
        if(minuto <= 9 ){
            minuto = `0${minuto}` 
        }

        let divPrinc = document.getElementById('texto')
        let img = document.getElementById('imagem123')
        
        divPrinc.innerHTML = `Horário atual: <strong>${hora}:${minuto}</strong> horas`

        if(hora < 12){          
           img.src = "../Imagens//manha.png";        
           document.body.style.backgroundColor = 'lightskyblue'
           
        }else if(hora>=12 && hora<18){
           document.body.style.backgroundColor = 'rgba(206, 138, 12, 0.705)'
           //img.src = "C://Users//Auditeste0220//Desktop//Projetos//Estudos//EstudosJavascript//Imagens//tarde.png";
           img.src = "../Imagens//tarde.png";
           
         }else{
           document.body.style.backgroundColor = 'dimgray'
           img.src = "../Imagens//noite.png";
        }


    }


function sorteio(min, max) {

   let divTexto = document.getElementById('texto2')

   let val = 0

   while (val<16) {
      val = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   
   divTexto.innerText = val
}