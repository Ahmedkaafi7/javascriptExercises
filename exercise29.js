async function fetchData () {

  const respone = await fetch("https://jsonplaceholder.typicode.com/comments")
  const data = await respone.json()
  console.log("fetched data :" ,data [0] );
}

fetchData()