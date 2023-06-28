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
      const response = await fetch(
        `${apiUrl}/promotion/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: req.headers.Authorization,
            "Api-Token": apiToken,
          },
          body: JSON.stringify(req.body),
        }
        // "https://promo-kh-dev-api.onrender.com/promo_kh/promotion/add",
        // body,
        // config
      );

      console.log(response);

      if (response.data.status === 200 && response.data.message === "success") {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
