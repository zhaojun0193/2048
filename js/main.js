/**
 * Created by Tiakon on 2017/7/5.
 */
var borad = new Array();
$(function () {
    newGame();
});
function newGame() {
    //初始化棋盘
    init();
    //生成两个随机位置的随机数
    generateOneNumber();
    generateOneNumber();
}

function init() {
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
    updateBoardView();

}

function updateBoardView() {
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
                numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
            }
        }
    }
}

function generateOneNumber() {
    //1.生成一个随机的位置

    //随机一个x坐标的位置
    var randx = parseInt(Math.floor(Math.random() * 4));
    //随机一个y坐标的位置
    var randy = parseInt(Math.floor(Math.random() * 4));
    //定义一个死循环,完成生成随机空格子
    while (true) {
        //如果当前格子的值为0,满足条件
        if (borad[randx][randy] == 0) {
            break;
        }
        //否则重新随机一个位置
        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
    }

    //2.生成一个随机的数字(2048游戏规则，新生成的数值只能是2或4)
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    //3.在随机位置上显示随机的数字
    ShowNumberWithAnimation(randx, randy, randNumber);

}