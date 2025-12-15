function fetchUserInfo (){
return new  Promise
 ((resolve , reject) =>{
setTimeout ( ()  =>  {
const success = false
if (success){ resolve( { id:47, name:"ak", city:"burao"

})

}else{
  reject("failed to fetch user info" )
}

},2000)
})

}

fetchUserInfo()
  .then((data) => {
    console.log("user info : ", data);
  })
  .catch((err) => console.log (err) );









