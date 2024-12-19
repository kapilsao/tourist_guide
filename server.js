const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors({
    origin: '*' // Replace with your frontend domain
  }));

app.get('/api/places', async (req, res) => {
    const { location } = req.query;
    const API_KEY = 'AIzaSyBpkCikOTWylLkxXbRYxeQj6hRCjJsrvjs'; // Replace with your actual API key
  
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=tourist_attraction&key=${API_KEY}`
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching tourist places' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });


//   echo "# tourist_guide" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/kapilsao/tourist_guide.git
// git push -u origin main