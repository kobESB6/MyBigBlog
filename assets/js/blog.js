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
const getBlogsFromLocalStorage = function() {
  const blogsJSON = localStorage.getItem('blogs');
  if (blogsJSON) {
    try {
      return JSON.parse(blogsJSON);
    } catch (error) {
      console.error('Error parsing blogs from localStorage:', error);
      return [];
    }
  }
  return []
}
const renderBlogList = function () {
  const blogs = getBlogsFromLocalStorage();
  console.log('Retrieved blogs:', blogs); // Add this line
  if (!blogs.length) {
    handleEmpty();
    return;
  }
  for (let blog of blogs) {
    const article = buildElement('article', null, mainEl);
    buildElement('h2', blog.title, article);
    buildElement('blockquote', blog.content, article);
    buildElement('p', `Posted by: ${blog.username}`, article);
    article.classList.add('card');
  }
};

document.addEventListener('DOMContentLoaded', renderBlogList);
