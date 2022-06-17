const ulSquare = document.querySelector("ul.squares")
function aviso(){
    swal({
        title: "Erro!",
        text: "Quando sobrar tempo eu arrumo hah",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Obrigado", {
            icon: "success",
          });
        } 
      });
}

for(let i=0; i<11;i++){
    const li = document.createElement("li");

    const random = (min,max) => Math.random() * (max - min ) + min
    const size = Math.floor(random(10,120));
    const position = random(1,99);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
    li.style.width = ``
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`
    
    li.style.left = `${position}%`;
    li.style.animationDelay= `${delay}s`
    li.style.animationDuration= `${duration}s`
    
    ulSquare.appendChild(li);


}
