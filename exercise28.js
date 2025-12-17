function fetchUserData() {
  return new Promise ((resolve,reject) => {
setTimeout(() => {
  const result = false;
  if (result) { 
    resolve({ id: 1, name: "ak", city: "mogadishu" });
  } else {
    reject("error: unable to fetch user data" );
  }
  
  },2000 ); 
}
)}

async function displayUserInfo() {
try{
const userData = await fetchUserData();
console.log("user data :", userData);
} catch (error) { console.log ("error :" ,error) ;

}
};

displayUserInfo();                