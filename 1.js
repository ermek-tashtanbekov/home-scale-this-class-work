document.body.addEventListener('mousedown', function(e){
    let divv = document.createElement('div');
    divv.style.width = '30px'; 
    divv.style.height = '30px'; 
    divv.style.position ="absolute";
    divv.style.borderRadius = '50%'
    divv.style.top = e.clientY - 15 + 'px';
    divv.style.left = e.clientX - 15 + 'px';
    document.body.append(divv);
if(e.which == 1){
    let scale1 = 1;
    let inn = setInterval(function(e){
        divv.style.transform = `scale(${scale1})`;
        scale1 += .1;
        divv.style.opacity = '50%';
        divv.style.backgroundColor = 'blue';
        
    });
    document.body.addEventListener('mouseup', function(){
        clearInterval(inn)
    });

    if(e.which == 3){
        let scales = 1;
        let niter = setInterval(function(e){
            divv.style.transform = `scale(${scales})`;
            scales += .1;
            divv.style.opacity = '50%';
            divv.style.backgroundColor = 'yellow';
        })
        document.body.addEventListener('mouseup', function(e){
            clearInterval(niter)
        })
    }
}


document.body.addEventListener('contextmenu', function(e){
    e.preventDefault()
})


})