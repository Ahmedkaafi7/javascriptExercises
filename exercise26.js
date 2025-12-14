//synchrous
function delyBlock() {
  alert("please click ok");
  return { city: "mogadishu", name: "ak" };
}

console.log("print first action");

const info = delyBlock();
console.log("user info :", info);

console.log("print last action");


//Asynchrous
function delyNonBlock(callback) {
  setTimeout(() => {
    console.log("dely message 2 sec");
  }, 2000);
}

console.log("print immediatly1");

delyNonBlock();

console.log("print immediatly2");


