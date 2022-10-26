const subs = document.getElementById('btn1')

subs.addEventListener("click", function() {
    if(subs.innerText === '구독') {
        subs.innerText = '구독중';
    } else subs.innerText ='구독';
});