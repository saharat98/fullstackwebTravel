const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const connectDatabase = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "emwork",
});

app.get("/datathai", (req, res) => {
  connectDatabase.query(
    `SELECT * FROM emwork.attraction LEFT JOIN emwork.attraction_type as att ON emwork.attraction.AttractionTypeID = att.ID
    LEFT JOIN emwork.province as pv ON emwork.attraction.ProvinceID = pv.ID 
     LEFT JOIN emwork.region as re ON pv.RegionID = re.ID `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

connectDatabase.connect((error) => {
  if (error) throw error;
  app.listen(4000, () => {
    console.log("server start port 4000");
  });
});
