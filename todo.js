getDate = () => 
{
    document.getElementById('GetTheDate').innerHTML = Date()
}

let vue = new Vue({
    el: '#app',
    data: {
        todos: [
            { title: 'Have a laptop/programming device', checked: true },
            { title: 'Have interest in desiging web pages', checked: false },
            { title: 'Be Creative!', checked: false },
        ]
    }
});

