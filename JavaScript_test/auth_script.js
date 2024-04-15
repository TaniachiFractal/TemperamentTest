// Initialize authorization

const realLogin = 'login';
const realPassword = 'qwerty';

function btAuth_Click()
{
    var login = document.getElementById('tbLogin').value;
    var password = document.getElementById('tbPassword').value;

    if (login == realLogin && password == realPassword)
    {
        window.location.href = 'temperamentTest.html';
    }
    else
    {
        alert('Неверные данные');
    }
};