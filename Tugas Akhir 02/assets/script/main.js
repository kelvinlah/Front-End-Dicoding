window.addEventListener('DOMContentLoaded', function () {
    addButton.addEventListener('click', function() {
        for (let input of inputs){
            input.value = '';
        }
        form.removeAttribute('hidden');
    });

    closeButton.addEventListener('click', function () {
        form.setAttribute('hidden', 'true');
    });


    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function(){
        window.preventDefault;
        addBook();
    });
});
