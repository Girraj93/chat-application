import express from express;
const app = express();

const PORT = 5000;
app.listen(()=>
console.log(`{server is running at ${PORT}}`))