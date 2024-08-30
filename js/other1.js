// script.js

// ファビコンの画像ファイルのリスト
const favicons = [
    'hi.png',
    'mizu.png',
    'kaze.png',
    'kaminari.png',
    'kusa.png',
    'koori.png',
    'iwa.png',
];

let currentIndex = 0; // 現在のファビコンのインデックス

// ファビコンを切り替える関数
function changeFavicon() {
    currentIndex = (currentIndex + 1) % favicons.length; // 次のインデックスに更新
    const favicon = document.getElementById('favicon');
    favicon.href = favicons[currentIndex]; // 新しいファビコンのURLを設定
}

// 1分ごとにファビコンを切り替える
setInterval(changeFavicon, 1000); // 60000ms = 1分
