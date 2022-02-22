const express = require('express');
const router = express.Router();


router.get('/movies', function(req, res) {
  const movie = ["The Shining","Incendies","Rang de Basanti","Finding Demo"]
  res.send(movie)
});

router.get('/movies/:indexNumber', function(req, res) {
  let movieNumber = req.params.indexNumber
  const movie = ["The Shining","Incendies","Rang de Basanti","Finding Demo"]
  if(movieNumber>movie.length-1){
    res.send("movie index does not exists")
  }
  else {
    res.send(movie[movieNumber])
  }
})

router.get('/films', function(req, res) {
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
     res.send(movieDetail)
    })



router.get('/films/:id', function(req, res) {
    let filmId = req.params.id
    // console.log(filmId)

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
        if( movieDetail[i].id == filmId){
            console.log(movieDetail[i])
            res.send(movieDetail[i])
            break
        }
      }
      res.send("movie not found")
})




module.exports = router;
