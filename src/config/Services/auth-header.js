export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user, 'user')

  if (user) {
    return { 'Authorization': `Bearer ${user}` };
  } else {
    return {};
  }
}