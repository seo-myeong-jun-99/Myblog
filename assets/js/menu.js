document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".home-menu")) return; // 홈 아닐 때는 무시

  const icons = document.querySelectorAll(".menu-icon");

  icons.forEach(icon => {
    icon.addEventListener("click", e => {
      e.preventDefault();

      // 아이콘들 전부 왼쪽으로 이동
      icons.forEach(i => i.classList.add("to-sidebar"));

      // 이동 애니메이션 끝난 뒤 페이지 전환
      setTimeout(() => {
        window.location.href = icon.getAttribute("href");
      }, 600);
    });
  });
});
