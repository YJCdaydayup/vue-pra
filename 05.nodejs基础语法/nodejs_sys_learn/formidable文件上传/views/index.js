window.onload = function () {
    var btn = document.createElement('button');
    btn.innerText = '查看图片';
    btn.style.width = '80px';
    btn.style.height = '30px';
    btn.style.marginTop = '20px';
    document.body.appendChild(btn);
    btn.onclick = function () {
        window.location.href = '/checkImage'
    }
}