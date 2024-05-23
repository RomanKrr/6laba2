document.getElementById('submitButton').addEventListener('click', function() {
    var radios = document.querySelectorAll('input[type="radio"]');
    var selectedValue = document.querySelector('input[type="radio"]:checked').value;
    alert(selectedValue === "1");
});