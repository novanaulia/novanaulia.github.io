async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  if (data) {
    document.write("satu");
    document.write(JSON.stringify(data));
  } else {
    console.log("Data tidak ada");
  }
}
getUsers();

async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  if (data) {
    document.write("dua");
    document.write(JSON.stringify(data));
  } else {
    console.log("Data tidak ada");
  }
}
//getPosts();
