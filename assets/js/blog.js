const mainEl = document.querySelector('main');

const buildElement = function (type, text, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);
  return tag;
};

const handleEmpty = function () {
  buildElement('h2', 'No Blog posts yet...', mainEl);
  const a = buildElement('a', 'Enter your own submission here!', mainEl);
  a.href = './index.html';
};

const renderBlogList = function () {
  const blogs = readLocalStorage();
  console.log('Retrieved blogs:', blogs); // Add this line
  if (!blogs.length) {
    handleEmpty();
    return;
  }
  console.log('Rendering blogs'); // Add this line
  for (let blog of blogs) {
    const article = buildElement('article', null, mainEl);
    buildElement('h2', blog.title, article);
    buildElement('blockquote', blog.content, article);
    buildElement('p', `Posted by: ${blog.username}`, article);
    article.classList.add('card');
  }
;
document.addEventListener('DOMContentLoaded', renderBlogList);
};
