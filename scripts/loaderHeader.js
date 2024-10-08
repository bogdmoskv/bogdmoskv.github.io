document.addEventListener('DOMContentLoaded', function(){
    fetch('../elements/header.html')
        .then(response => response.text())
        .then(data =>{
            document.getElementById('header-placeholder').innerHTML = data;

            const dropdownItems = document.querySelectorAll('.dropdown-item-icon');
            const buttonImg = this.documentElement.querySelector('.dropdown-button img')

            //добавляем обработчик клика на кнопку
            document.querySelector('.dropdown-button').addEventListener('click', function(){
                let currentButtonSrc = buttonImg.getAttribute('src');

                //скрываем выбранную иконку в списке
                dropdownItems.forEach(item => {
                    let itemImg = item.querySelector('img');
                    let itemSrc = itemImg.getAttribute('src');

                    //если путь изображения совпадает с текущим, скрываем элемент
                    if (itemSrc === currentButtonSrc){
                        item.style.display = 'none';
                    } else{
                        item.style.display = 'block';
                    }
                });
            });

            //обработчик для выбора флага из списка
            dropdownItems.forEach(item => {
                item.addEventListener('click', function(event){
                    let imgElement = item.querySelector('img');
                    let imgSrc = imgElement.getAttribute('src'); //получаем путь к изображению
                    let dataValue = imgElement.getAttribute('data-value');
                    
                    //обновляем изображение в кнопке на выбранную иконку
                    buttonImg.setAttribute('src', imgSrc);
                    // alert("Icon click with data-value: " + dataValue);
                });
            });

        })
});