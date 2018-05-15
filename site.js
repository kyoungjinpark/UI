function siteOpen(){
            var Url = "site.html";	//팝업창에 출력될 페이지 URL
            var screenW = screen.availWidth;
            var screenH = screen.availHeight;
            var posL=(screenW-784) / 2;
            var Option = "width=715, height=980, left="+posL+", resizable=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)

            window.open(Url,"",Option);
        }