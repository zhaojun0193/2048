/**
 * Created by Tiakon on 2017/7/5.
 */
$(function () {
    newGame();


});
function newGame() {
    //初始化棋盘
    init();
}

function init() {
    var borad = new Array();
    //i表示4乘4的格子中的行
    for (var i = 0; i < 4; i++) {
        borad[i] = new Array();
        //j表示4乘4的格子中的列
        for (var j = 0; j < 4; j++) {
            //将每个格子的值初始化为0
            borad[i][j] = 0;
            //通过双重遍历获取每个格子元素
            var gridCell = $("#grid-cell-" + i + "-" + j);
            //通过getTop()方法设置每个格子距顶端的距离
            gridCell.css("top", getTop(i));
            //通过getLeft()方法设置每个格子距左端的距离
            gridCell.css("left", getLeft(j));
        }

    }
    updateBoardView(borad);
}

function updateBoardView(borad) {
    //首先清空之前的数字格布局内容
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            //向棋盘格上增加数字格
            $("#grid-container").append("<div id='number-cell-" + i + "-" + j + "' class='number-cell'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);
            //如果棋盘格的值为0的话,设置数字格为高宽都为0
            if (borad[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getTop(i));
                numberCell.css("left", getLeft(j));
            } //如果棋盘格的值不为0的话,设置数字格为高宽为75并设置背景色和前景色及数字值
            else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getTop(i));
                numberCell.css("left", getLeft(j));
            }
        }
    }


}