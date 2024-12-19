const santaForm = document.getElementById('santaForm');
const letter = document.getElementById('letter');
const thankYouMessage = document.getElementById('thankYouMessage');

santaForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    if (letter.value.trim() === '') {
        alert('Please write something before sending your letter!');
        return;
    }

    thankYouMessage.style.display = 'block';
    santaForm.reset(); 
});
