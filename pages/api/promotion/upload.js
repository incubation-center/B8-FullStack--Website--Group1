export default async function handler(req, res) {
  if (req.method === "POST") {
    // let config = {
    //   headers: {
    //     Authorization: `Bearer ` + localStorage.getItem("accessToken"),
    //     "Api-Token": "scbnsk289248nscsndk298km",
    //   },
    // };

    try {
      const apiUrl = process.env.API_URL;
      const apiToken = process.env.API_TOKEN;
      const formData = new FormData();
      formData.append("file", req.file);

      const response = await fetch(`${apiUrl}/upload`, {
        method: "POST",
        headers: {
          Authorization: req.headers.authorization,
          "Api-Token": apiToken,
        },
        body: formData,
      });

      const data = await response.json();

      if (data.status === 201 && data.message === "success") {
        res.status(response.status).json(data);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
