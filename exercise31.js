async function getData() {
  try {
    const respone = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!respone.ok) {
      throw new Error(`fetch data  status ${respone.status}`);
    }
    console.log("before data changed to json");

    const data = await respone.json();
    console.log(data);
  } catch (Error) {
    console.log(Error);
  }
}

getData();
