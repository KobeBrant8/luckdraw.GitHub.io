(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array("一川烟草，满城风絮，梅子黄时雨", "❤ 数学老师最美 ❤", "昨夜星辰昨夜风，画楼西畔桂堂东", "锦瑟无端五十弦，一弦一柱思华年", "不恨古人吾不见，恨古人不见吾狂耳", "雾失楼台，月迷津渡", "辇下风光，山中岁月，海上心情", "青青园中葵，朝露待日晞", "夜中不能寐，起坐弹鸣琴", "对闲窗畔，停灯向晓，抱影无眠",
            "一种相思，两处闲愁", '淮南皓月冷千山，冥冥归去无人管', '高情已逐晓云空，不与梨花同梦', '夫轻诺必寡信，多易必多难', '嘈嘈切切错杂弹，大珠小珠落玉盘', '草色新雨中，松声晚窗里', '真无奈，倩声声邻笛，谱出回肠', "柳如眉，云似发，鲛绡雾縠笼香雪", '江畔何人初见月？江月何年初照人？', '汉口夕阳斜渡鸟，洞庭秋水远连天', '天涯海角悲凉地，记得当年全盛时', '萧萧梧叶送寒声，江上秋风动客情', "分明一觉华胥梦，回首东风泪满衣", "安居不用架高楼，书中自有黄金屋", "是他春带愁来，春归何处？却不解带将愁去", '今夜偏知春气暖，虫声新透绿窗纱', '扈江离与辟芷兮，纫秋兰以为佩', '长恨此身非我有，何时忘却营营？', '今年花落颜色改，明年花开复谁在？', '壮年听雨客舟中，江阔云低，断雁叫西风');

        var heart = document.createElement("b"); //创建b元素
        heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

        document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

        var f = 16, // 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = randomColor(), // 随机颜色
            a = 1, // 透明度
            s = 1.2; // 放大缩小

        var timer = setInterval(function () { //添加定时器
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
    // 随机颜色
    function randomColor() {

        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
            .random() * 255)) + ")";

    }
}());