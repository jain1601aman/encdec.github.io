var b = document.getElementById('btn1')
var c = document.getElementById('btn2')
var keysize = 2048
var crypt = new JSEncrypt({ default_key_size: keysize });
var pubkey = crypt.getPublicKey()
var privkey = crypt.getPrivateKey()

crypt.setPublicKey(pubkey);
if (b) {
    b.onclick = () => {
        var x = document.getElementById('ip').value
        var message = crypt.encrypt(x);
        var p = document.getElementById('enc')
        p.innerHTML = message + "<br>"
        document.getElementById('dec').innerText = ""
    }

}
if (c) {
    c.onclick = async() => {
        var x = await document.getElementById('enc').innerText
        if (x) {
            await crypt.setPrivateKey(privkey);
            var message = await crypt.decrypt(x);
            var p = await document.getElementById('dec')
            p.innerHTML = message
        }


    }

}