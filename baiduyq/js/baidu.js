$(function(){
    // $("#fullpage").mousedown(function(e){
    //     e.preventDefault();
    // })
    // $('#fullpage').fullpage();
    $("#fullpage").mousemove(function(e){
        e.preventDefault();
    })

    /*页面拖坠效果*/
    var clienH = $(window).height();
    var num = 0;
    var flag = true;
    touch.on("body","swipeup swipedown","#fullpage",function(e){
        if(e.type == "swipeup"){
            if(!flag){
                return;
            }
            num++;
            if(num==$("section").length){
                num=$("section").length-1;
                return;
            }
            $("#fullpage").css({
                marginTop:-num*clienH
            })
            flag = false;
        }else if(e.type == "swipedown"){
            if(!flag){
                return;
            }
            num--;
            if(num==-1){
                num=0;
                return;
            }
            $("#fullpage").css({
                marginTop:-num*clienH
            })
            flag = false;
        }
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag = true;
        // if(num==0){
        //    $(".ship").css({
        //        transform:"translate(0,0)",
        //        animation:"l_to_r3 1s linear"
        //    })
        // }else{
        //     $(".ship").css({
        //         transform:"translate(-10px,0)"
        //     })
        // }
        $("section").each(function(index,obj){
            if(index == num){
                $(obj).find(".titleArea").css({
                    marginLeft:0,
                    opacity:1
                })
                $(obj).find(".image").css({
                    transform:"translate(0,0)",
                    opacity:1
                })
            }else{
                $(obj).find(".titleArea").css({
                    marginLeft:-150,
                    opacity:0
                })
                $(obj).find(".image").css({
                    transform:"translate(150px,0)",
                    opacity:0
                })
            }
        })
    })

    /*菜单效果*/
    var flag1 = true;
    $(".menu-option").click(function(){
        /*按钮效果*/
        if(flag1){
            $(".menu").css({
                display:"block"
            })
            $(this).find(".menu-option-tline").css({
                transform:"translate(0px,8px) rotate(45deg)"
            })
            $(this).find(".menu-option-bline").css({
                transform:"translate(0px,-8px) rotate(-45deg)"
            })
            /*menu效果*/
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    animation:"flipInX 1s ease both "+0.2*index+"s"
                })
            })
            flag1 = false;
        }else{
            $(this).find(".menu-option-tline").css({
                transform:"translate(0,0) rotate(0)"
            })
            $(this).find(".menu-option-bline").css({
                transform:"translate(0,0) rotate(0)"
            })
            /*menu效果*/
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    animation:"flipOutX 1s ease both "+(1.2-0.2*index)+"s"
                })
            })
            setTimeout(function(){
                $(".menu").css({
                    display:"none"
                })
            },2000)
            flag1 = true;
        }
    })

    /*处理BUG*/
    $(window).resize(function(){
        clienH = $(window).height();
        $("#fullpage").css({
            marginTop:-num*clienH
        })
        if($(window).width() > 1000){
            $(".menu a").css({
                animation:"none"
            })
            $(".menu-option-tline,.menu-option-bline").css({
                transform:"translate(0,0) rotate(0)"
            })
            flag1 = true;
        }
    })
})