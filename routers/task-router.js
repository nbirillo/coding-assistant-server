module.exports = (app, injector, upload) => {

    const taskController = injector.inject_controller("TaskController");

    app.route("/api/task").post(async (req, res, next) => {
        const response = await taskController.createTask(req.body.key, req.body.description, req.body.name);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                task: response.getPublicData()
            })
        }
    });

    app.route("/api/task/all").get(async (req, res, next) => {
        const response = await taskController.getAllTasks();
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                tasks: response.map(task => task.getPublicData())
            })
        }
    });

    app.route("/api/task/:key").get(async (req, res, next) => {
        const response = await taskController.getTaskByKey(req.params.key);
        if (response.error) {
            res.status(response.error.code);
            res.json(response.error.content);
            res.end();
        } else {
            res.json({
                task: response.getPublicData()
            })
        }
    });

};
