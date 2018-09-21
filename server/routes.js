const api = require("./controllers");
const bp = require("body-parser");
const path = require('path');

function router(app)
{
    app.use(bp.json());
    app.get("/api/tasks", api.readAll);
    app.get("/api/tasks/:id", api.readOne);
    app.delete("/api/tasks/:id", api.deleteOne);
    app.put("/api/tasks/:id", api.updateOne);
    app.post("/api/tasks", api.createOne);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./authors/dist/authors/index.html"))
    });
}

module.exports = router;