fetch("http://localhost:5000/tasks/new", {
  method: "POST",
  mode: "cors",
  headers: {
    auth: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGYxZWIyYzI1ZDFjODcxNjlmN2NlNSIsImlhdCI6MTY1MzU4MDA1MiwiZXhwIjoxNjU1MzA4MDUyfQ.nc-zu5pvfFHyr0x9Fir86P6lLb45PdG09_eW29Ckzp8",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Take the dog for a walk around town.",
    body: "Take Jason's dog for a walk so he can go visit his grandma in Minneapolis.",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
