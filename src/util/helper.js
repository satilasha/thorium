function printDate(){
  const date1 = new Date();
  console.log(date1);
}
function printMonth(m){
    let n =  new Date(m)
    console.log(n.getMonth())
  }
  function getBatchInfo(){
    let a =   "Thorium, W3D1, the topic for today is Nodejs module system"
      console.log(a)
  }
  module.exports.printDate = printDate
  module.exports.printMonth = printMonth
  module.exports.getBatchInfo = getBatchInfo
  
