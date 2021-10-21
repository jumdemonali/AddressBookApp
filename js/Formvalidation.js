window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validatePhone();
    validateAddress();
  });
  
  function validateName() {

    let name = document.querySelector('#name');
    let textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name.value)) {
            textError.textContent = "";
        } else {
            textError.textContent = "Name is incorrect";
        }
    });
  }
  function validatePhone(){
    let phone = document.querySelector('#phone');
    let textError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        let nameRegex = RegExp('^[0-9]{10}$');
        if (nameRegex.test(phone.value)) {
            textError.textContent = "";
        } else {
            textError.textContent = "Invalid phone number";
        }
    });
  }
  function validateAddress() {
    const address = document.querySelector('#address');
    const textError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            checkAddress(address.value);
            textError.textContent = "";
        } catch (e) {
            console.log(e);
            textError.textContent = e;
        }
    });
}