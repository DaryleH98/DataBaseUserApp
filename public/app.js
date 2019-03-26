const CreateUser = document.getElementById('CreateUser')
CreateUser.addEventListener('submit', (end) => {
  end.preventDefault();
  const username = CreateUser.querySelector('.username').value;
  const password = CreateUser.querySelector('.password').value;
  post('/createUser', { username, password }  );
})
function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}