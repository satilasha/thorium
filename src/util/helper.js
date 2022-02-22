function printDate(){
  let num = new Date();
  let date = num.getDate()
  console.log(`current date is ==> ${date}`);
}
function printMonth(){
    let mon =  new Date()
    let month = mon.getMonth() + 1
    console.log(`current date is ==> ${month}`)
  }
  function getBatchInfo(){
    let a =   "Thorium, W3D1, the topic for today is Nodejs module system"
      console.log(a)
  }
  module.exports.printDate = printDate
  module.exports.printMonth = printMonth
  module.exports.getBatchInfo = getBatchInfo
  
