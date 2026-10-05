// 取得所有選單的 <a> 元素
const menuLinks = document.querySelectorAll('.sub ul li a');
// 取得主內容區
const contentArea = document.querySelector('.con');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // 阻止預設跳轉
    const newContent = link.getAttribute('data-content');

    // 更新主內容區內容
    contentArea.innerHTML = `
      <h2>主內容區</h2>
      <p>${newContent}</p>
    `;
  });
});
