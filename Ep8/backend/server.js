const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Allow frontend (for dev, we allow all origins)
app.use(
  cors({
    origin: "*", // ⛔ dev only, don't use * in production
  })
);

app.get("/api/menu", async (req, res) => {
  try {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=81940&catalog_qa=undefined&submitAction=ENTER";

    const swiggyRes = await fetch(url); // Node 18+ built-in fetch
    const text = await swiggyRes.text();

    // Try to parse JSON if possible
    try {
      const json = JSON.parse(text);
      res.json(json); // return clean JSON to frontend
    } catch (err) {
      console.error("Not JSON, raw response from Swiggy:", text);
      res.status(500).json({ error: "Swiggy did not return JSON" });
    }
  } catch (error) {
    console.error("Error calling Swiggy:", error);
    res.status(500).json({ error: "Something went wrong in proxy server" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
