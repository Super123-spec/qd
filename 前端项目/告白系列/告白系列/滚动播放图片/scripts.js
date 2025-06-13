var text = 
"对于普通人来说学习python能极大，"+
"提高你的办公效率，"+
"我们在工作过程中经常会有一些事情是机械重复，"+
"很多人出现加班的情况都是因为效率低下。"+
"把大部分时间都浪费在重复操作上，"+
"然后还不断学习如何管理时间，显然是治标不治本。"+
"而如果你学会了python，"+
"很多机械重复的麻烦事就会变得简单起来、"+
"你可利用python弄个excel自动化整理工具，"+
"也可以拿来上各种网站爬虫搜集自己需要的信息，"+
"还可以拿来写点量化小工具。"+
"这都极大提高你的工作效率。"+
"为未来的职业发展打下坚实的基础。"+
"想要获得这项技能"+
"抓紧联系你的邀约老师来报名吧"+
"报名后还能享受到我们提供的重大福利。"+
"行动起来吧";
var container = document.getElementById("text");
var index = 0;
function printText() {
    if (index < text.length) {
        container.innerHTML += text.charAt(index);
        index++;
        setTimeout(printText, 100);       // 设置延时，控制打印速度
    }
    else {
        container.innerHTML += "<br>";    // 添加换行标签
    }
}
printText();

function loadImages() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    // 图片的文件夹路径
    // const currentPath = window.location.pathname;   获取当前路径
    // console.log("当前路径是：", currentPath);
    const imagesFolderPath = './main_imgs';   
    // 图片名称列表
    const imageFiles = [
        '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg',
        '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg'];
    imageFiles.forEach(file => {
        const img = document.createElement('img');
        img.src = `${imagesFolderPath}/${file}`;
        slideshowContainer.appendChild(img);
    });
}

function startSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const images = slideshowContainer.querySelectorAll('img');
    let currentIndex = 0;
    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }
    setInterval(showNextImage, 2500);    // 每2.5秒切换一张图片
}
loadImages();
startSlideshow();
