/* 动态title logo*/
var OriginTitile = document.title;
var leaveTime;
var enterTime;
document.addEventListener('visibilitychange',
function() {

    if (document.readyState === 'complete') {
        // 页面已完全加载
        if (document.hidden) {
            leaveTime = setTimeout(function() {
            $('[rel="icon"]').attr('href', "/uploads/1024.ico");
            document.title = '草榴社區';
            },2500);
            
            clearTimeout(enterTime);

        } else {

            $('[rel="icon"]').attr('href', "/uploads/swift.ico");
            document.title = ' 正经博客 ';
            enterTime = setTimeout(function() {
                document.title = OriginTitile;
            },1500);
            
            clearTimeout(leaveTime);
        }
    }

});