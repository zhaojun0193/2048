/**
 * Created by Tiakon on 2017/7/5.
 */
function ShowNumberWithAnimation(randx, randy, randNumber) {
    //获得当前数字格
    var numberCell = $("#number-cell-" + randx + "-" + randy);
    //设置当前的数字格的背景色和前景色及数字值
    numberCell.css("background-color", getNumberBackgroundColor(randNumber));
    numberCell.css("color", getNumberColor(randNumber));
    numberCell.text(randNumber);
    //设置当前的数字格的显示动画
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getTop(randy),
        left: getLeft(randx),
    }, 1000);
}