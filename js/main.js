document.querySelector('.pagetop').addEventListener('click', function(e) {
    e.preventDefault(); // ページ遷移を止める
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // スムーズスクロール
    });
  });
$(function(){
  // .header_link がクリックされたとき
  $('a.header_link').click(function(e){
    e.preventDefault(); // デフォルトのジャンプ動作を止める

    var target = $(this).attr('href'); // クリックしたリンクのhref取得
    var position = $(target).offset().top; // 対象の位置

    $('html, body').animate({scrollTop: position}, 600, 'swing'); 
    // 600msかけてスムーズにスクロール
  });
});


const intersectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      entry.target.classList.remove("is-in-view");
    }
  });
});

// 監視対象を追加
const inViewItems =  document.querySelectorAll(".js-in-view ");
inViewItems.forEach(function(inViewItems){
  intersectionObserver.observe(inViewItems);
});
