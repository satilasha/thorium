const express = require('express');
const router = express.Router();

router.get('/students/:id', function(req, res) {
    let studentId = req.params.id
    console.log(studentId)

   let movieDetail =  [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Demo"
       }]

      for(let i = 0; i<movieDetail.length; i++){
        if( movieDetail[i].id == studentId){
            console.log(movieDetail[i])
            res.send(movieDetail[i])

        }
      }
})




module.exports = router;
