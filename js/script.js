function addClass(elementId, className) {
  let el = document.getElementById(elementId);
  el.classList.add(className);
}

function removeClass(elementId, className) {
  let el = document.getElementById(elementId);
  el.classList.remove(className);
}

function showBlog(blog) {
  if(blog == 'html') {
    addClass('btnBlogHtml', 'transparent-5');
    addClass('btnBlogCss', 'transparent-5');
    addClass('btnBlogJs', 'transparent-5');
    removeClass('btnBlogHtml', 'transparent-5');

    addClass('blogHtml', 'd-none');
    addClass('blogCss', 'd-none');
    addClass('blogJs', 'd-none');
    removeClass('blogHtml', 'd-none');
  }

  if(blog == 'css') {
    addClass('btnBlogHtml', 'transparent-5');
    addClass('btnBlogCss', 'transparent-5');
    addClass('btnBlogJs', 'transparent-5');
    removeClass('btnBlogCss', 'transparent-5');

    addClass('blogHtml', 'd-none');
    addClass('blogCss', 'd-none');
    addClass('blogJs', 'd-none');
    removeClass('blogCss', 'd-none');
  }

  if(blog == 'js') {
    addClass('btnBlogHtml', 'transparent-5');
    addClass('btnBlogCss', 'transparent-5');
    addClass('btnBlogJs', 'transparent-5');
    removeClass('btnBlogJs', 'transparent-5');

    addClass('blogHtml', 'd-none');
    addClass('blogCss', 'd-none');
    addClass('blogJs', 'd-none');
    removeClass('blogJs', 'd-none');
  }
}