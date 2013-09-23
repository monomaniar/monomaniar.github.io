$(".pcload").load(function(){
        console.log("is mobile;pcload loading.");
        $(".rightside").remove();
        $(".section").css("margin-right","5%");
});
$(document).ready(function(){
    if (document.WuRanbo.isMobile.any()){
        console.log("is mobile;ready complete;");
        $(".rightside").remove();
        $(".section").css("margin-right","5%");
    }// if:(document.WuRanbo.isMobile.any())
});
