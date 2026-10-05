const menuLinks = document.querySelectorAll('.sub ul li a');
const contentArea = document.querySelector('.con');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    
    // 取得連結文字或自訂名稱
    const name = link.textContent;
    const newContent = link.getAttribute('data-content') || '暫無內容';

    // 若是第一項，標題簡化為「給所有人的小驚喜」，其餘顯示「給 XXX 的祝福」
    let titleText = name === "天涯給所有人的小驚喜" ? "天涯給所有人的小驚喜" : `給 ${name} 的祝福`;

    contentArea.innerHTML = `
      <h2>${titleText}</h2>
      <p>${newContent}</p>
    `;
  });
});
