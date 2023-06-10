(function () {
    let buttons = document.querySelectorAll('.btn');
    let storeImages = document.querySelectorAll('.img-box');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let filter = e.target.dataset.filter;
            console.log(filter);
            storeImages.forEach((items) => {
                if (filter == 'all') {
                    items.style.display = 'block';
                }
                else if (items.classList.contains(filter)) {
                    items.style.display = 'block';
                }
                else {
                    items.style.display = 'none';
                }

            })
        })
    })

})()
