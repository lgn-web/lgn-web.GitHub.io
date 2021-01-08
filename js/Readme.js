$(function() {
    var $wrap = $('#wrap'),
        $picUl = $('.pic'),
        $tabLi = $('.tab li'),
        $prev = $('.prev'),
        $next = $('.next'),
        widLi = $picUl.children().eq(0).width(),
        len = $tabLi.length,
        idx = 0,
        timer = null;

    //get first; set all
    $tabLi.click(function() {
            $(this).addClass("on").siblings().removeClass("on")
            idx = $(this).index();

            $picUl.animate({
                left: -idx * widLi
            }, 500)
        })
        // 点击下一张
    $next.click(function() {
        idx++;
        idx %= len; // 序号为小圆按钮的长度时到达第一张
        $tabLi.eq(idx).addClass("on").siblings().removeClass("on")
        $picUl.animate({
            left: -idx * widLi
        }, 500)
    })

    $prev.click(function() {
        idx--;
        if (idx < 0) {
            idx = len - 1
        };

        $tabLi.eq(idx).addClass("on").siblings().removeClass("on")
        $picUl.animate({
            left: -idx * widLi
        }, 500)
    })

    // 自动轮播
    auto();

    function auto() {
        timer = setInterval(function() {
            $next.trigger("click") // 触发click
        }, 3000)
    }

    $wrap.hover(function() {
        clearInterval(timer);
    }, function() {
        auto();
    })
})



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        document.getElementById("dl").innerHTML = "欢迎您!" + user;
        document.getElementById("dl").style.color = "orange";
    } else {
        user = prompt("请输入你的名字:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
            user = getCookie("username");
            var user = getCookie("username");
            if (user != "") {
                document.getElementById("dl").innerHTML = "欢迎您!" + user;
                document.getElementById("dl").style.color = "orange";
            }
        }
    }
}


function $(id) {
    return document.getElementById(id);
}

function funwhy() {
    var obj = document.getElementsByName("why");
    var str = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked)
            str.push(obj[i].value);
    }
    return str;
}

function printing() {
    var name = document.getElementById("maj").value;
    if (name == null || name == '') {
        alert("专业不能为空");
        return false;
    }
    var mag = "您的年级：" + $("gra").value;
    mag += "\n您的专业：" + $("maj").value;
    mag += "\n对于图书馆的阅览环境：" + form1.surr.value;
    mag += "\t您的建议:" + $("sur1").value;
    mag += "\n您到图书馆的原因是：" + funwhy();
    mag += "\n您到图书馆的频率：" + form1.frequency.value;
    mag += "\n您对学校的建议：" + $("ide").value;

    alert(mag);
    return false;
}