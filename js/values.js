(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array( "ð å¯åŒº ð","ð æ°äž» ð","âïž ææ âïž","âïž åè° âïž","â èªç± â","ð å¹³ç­ ð","ð å¬æ­£ ð","ð æ³æ²» ð","ð ç±åœ ð","ð æ¬äž ð","âš è¯ä¿¡ âš","ð åå ð",
           );

        var heart = document.createElement("b"); //åå»ºbåçŽ 
        heart.onselectstart = new Function('event.returnValue=false'); //é²æ­¢æåš

        document.body.appendChild(heart).innerHTML = a[a_idx]; //å°båçŽ æ·»å å°é¡µé¢äž
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;"; //ç»påçŽ è®Ÿçœ®æ ·åŒ

        var f = 16, // å­äœå€§å°
            x = event.clientX - f / 2, // æšªåæ 
            y = event.clientY - f, // çºµåæ 
            c = randomColor(), // éæºé¢è²
            a = 1, // éæåºŠ
            s = 1.2; // æŸå€§çŒ©å°

        var timer = setInterval(function () { //æ·»å å®æ¶åš
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                y--;
                a -= 0.0016;
                s += 0.0002;
            }
        }, 15)

    }
    // éæºé¢è²
    function randomColor() {

        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
            .random() * 255)) + ")";

    }
}());