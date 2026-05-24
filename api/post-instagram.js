export default async function handler(req, res) {
  try {
    const { image_url, caption } = req.body;

    const response = await fetch(
      `https://graph.facebook.com/v23.0/17841400000000000/media`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_url,
          caption,
          access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
        }),
      }
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
