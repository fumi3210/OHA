document.querySelector('.pagetop').addEventListener('click', function(e) {
    e.preventDefault(); // ページ遷移を止める
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // スムーズスクロール
    });
  });