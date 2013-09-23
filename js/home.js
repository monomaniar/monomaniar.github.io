$(document).load(function(){
    if (document.WuRanbo.isMobile.any()){
        console.log("is mobile");
        $(".rightside").remove();
        $(".section").css("margin-right","5%");
    }// if:(document.WuRanbo.isMobile.any())
});
