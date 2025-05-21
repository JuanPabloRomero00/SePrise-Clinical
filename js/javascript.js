const scrollTopButton = document.getElementById("scrollTopButton");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  };

  scrollTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
