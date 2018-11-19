const message = 'Hello World from Webpack on';

if (process.env.NODE_ENV === 'production') {
  document.getElementById('root').innerText = `${message} PRODUCTION`;
} else {
  document.getElementById('root').innerText = `${message} DEVELOPMENT`;
}

