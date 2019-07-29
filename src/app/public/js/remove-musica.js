let tableMusicas = document.querySelector('#musicas');
tableMusicas.addEventListener('click',(event)=>{
    let elemClick = event.target;
    
    if(elemClick.dataset.type =='remove'){
        let musicaId = elemClick.dataset.ref;
        fetch(`http://localhost:3000/musicas/${musicaId}`,{ method: 'DELETE'})
            .then(resposta =>{

                let tr = elemClick.closest(`#musica_${musicaId}`);
                tr.remove()
                
            })
            .catch(erro=> console.log(erro));
 
    }
 
});