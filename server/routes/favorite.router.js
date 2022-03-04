const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  pool.query(`SELECT "favorites"."id", "title", "url", "name"
  FROM "favorites"
  JOIN "category" ON "category"."id" = "favorites"."category_id";`)
    .then(response => {
      res.send(response.rows)
    }).catch(error => {
      console.log("error getting favorites:", error);
      res.send(500)
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const image = req.body
  const imageUrl = image.images.fixed_height.url
  const imageTitle = image.title

  const sqlText = `
   INSERT INTO "favorites" ("title","url","category_id")
   VALUES ($1, $2, 1);`
  // The third value above (1) makes it so the category is always defaulted to 1, which will be a regular 
  pool.query(sqlText, [imageTitle, imageUrl])
    //  pool.query(sqlText, [req.body.title, req.body.url ]) // TEST CODE for postman, can be deleted when finished!
    .then((result) => {
      res.sendStatus(200);
    }).catch(error => {
      console.log("error adding favorite:", error);
      res.send(500)
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  imageID = req.params.favID;
  categoryID = req.body;
  qryTxt = `
  UPDATE favorites
  SET category_id = $1
  WHERE favorites.id = $2;
  `;
  pool.query(qryTxt, [categoryID, imageID])
  .then(result => {
    res.sendStatus(200)
  }).catch(err => {
    res.sendStatus(500);
  })
}); 

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
