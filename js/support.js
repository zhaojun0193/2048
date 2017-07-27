/**
 * Created by Tiakon on 2017/7/5.
 */
//通过getTop()方法设置每个格子距顶端的距离
function getTop(j) {
    return 20 + j * 120;
}
//通过getLeft()方法设置每个格子距左端的距离
function getLeft(i) {
    return 20 + i * 120;
}

function getNumberBackgroundColor(randNumber) {
    switch (randNumber) {
        case 2:
            return "#eee4da";
            break;
        case 4:
            return "#ede0c8";
            break;
        case 8:
            return "#f2b179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e3b";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#a6c";
            break;
        case 8192:
            return "#93c";
            break;
    }

}

function getNumberColor(randNumber) {
    if (randNumber <= 4) {
        return "#776e65"
    }
    return "white";
}