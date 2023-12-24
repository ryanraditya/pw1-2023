function login() {
    //prperti
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    
    if (user == 'ryanraditya' && password == 'student-nf23') {
        alert('Login Berhasil');
        window.location.href = 'success.html';
    } else {
        alert('Masukan username dan Password');
    }
}
  
  