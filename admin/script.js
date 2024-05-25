function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === 'Mcrdtuetr12456') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('admin-content').style.display = 'block';
    } else {
        errorMessage.textContent = '密码错误，请重试。';
    }
}
