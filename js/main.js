// 網頁的主程式寫在這裡
$(".navbar .nav-link").click(function(){
    //取得被點擊的按鈕 -> this
    //console.log(this);
    //取得目標
    const a = $(this).attr("href");//const不會改變
    //console.log(a)
    //取得目標位置(y-axis)
    const p = $(a).offset().top
    //console.log(p);
    //動畫

    $("html,body").stop().animate({
        scrollTop: p,
    }, 1000);//$("html,body").animate({物件內容...}, 1000);
});

$("#goBackBtn,.navbar-brand").click(function(){
    //console.log("a");
    $("html,body").stop().animate({
        scrollTop: 0,
    }, 1000);
})