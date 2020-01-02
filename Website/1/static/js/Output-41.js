<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>出错了</title>
    <script type="text/javascript" src="//cdn.txooo.com/public/jquery/jquery-1.8.3.min.js"></script>
    <style type="text/css">
        *{margin:0;padding:0;}
        body{background:url(/skin/pc/public/404.jpg) top center no-repeat #4D93F3;}
        .error{color:#cc3333;font-size:30px;height:100px;line-height:100px;margin:350px auto 0;width:430px}
        @media (max-width: 768px) {
            html{font-size:14px}
            body{background:none}
            .error{font-size:1.2rem;margin:6rem auto 0;width:16rem}
        }
    </style>
</head>
<body>
    <div class="error">出错了！<span class="time"></span>秒后返回首页......</div>
    
    <script>
        if (window.location.host.indexOf('app.txooo.com')>-1) {
            $('.error').css('display', 'none');
        } else {
            setTimeout(function () {
                window.location.href = "/";
            }, 3000);
            var time = 3;
            $('.time').text(time);
            setInterval(function () {
                time--;
                $('.time').text(time);
            }, 1000);
        }
    </script>
</body>
</html>
