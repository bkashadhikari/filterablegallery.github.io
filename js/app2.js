(function(){
    let btns = document.querySelectorAll('.btn');
    let storeImages = document.querySelectorAll('.img-box');

    btns.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            let filter = e.target.dataset.filter;
            storeImages.forEach((items)=>{
                if(filter === 'all'){
                    items.style.display = 'block';
                }
                else{
                    if(items.classList.contains(filter)){
                    items.style.display = 'block';
                    }
                    else{
                    items.style.display = 'none';
                    }
                }
            })
        })
    })
})()