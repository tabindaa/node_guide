const userHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>Hello Users</head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='username' /><button type='submit'>Create User</button></form></body>"
    );

    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(body);
    });
    req.on("end", (chunk) => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log("USER", user);
    });
    // res.statusCode = 302;
    // res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>Hello Users 1234</head>");

  res.write("</html>");
  res.end();
};

module.exports = userHandler;
