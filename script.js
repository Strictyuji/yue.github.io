const menuLinks = document.querySelectorAll('.sub ul li a');
const contentArea = document.querySelector('.con');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // 阻止頁面跳轉
    
    const name = link.textContent;
    const newContent = link.getAttribute('data-content') || '暫無內容描述';
    const videoSrc = link.getAttribute('data-video'); // 取得影片檔名

    // 格式化標題名稱
    let titleText = name === "天涯給所有人的小驚喜" ? "天涯給所有人的小驚喜" : `給 ${name} 的祝福`;

    // 檢查是否有影片，若有則生成影片 HTML
    let videoHTML = '';
    if (videoSrc) {
      videoHTML = `
        <div class="video-container">
          <video controls autoplay muted loop>
            <source src="${videoSrc}" type="video/mp4">
            您的瀏覽器不支援影片播放。
          </video>
        </div>
      `;
    }

    // 動態放入文字與影片
    contentArea.innerHTML = `
      <h2>${titleText}</h2>
      <p>${newContent}</p>
      ${videoHTML}
    `;
  });
});
