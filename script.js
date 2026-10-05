// 取得所有選單的 <a> 元素與內容區
const menuLinks = document.querySelectorAll('.sub ul li a');
const contentArea = document.querySelector('.con');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // 阻止預設跳轉 behavior
    
    const title = link.textContent;
    const newContent = link.getAttribute('data-content') || '暫無內容描述';

    // 動態更新主內容區
    contentArea.innerHTML = `
      <h2>給 ${title} 的祝福</h2>
      <p>${newContent}</p>
    `;
  });
});
