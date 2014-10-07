vertx.createHttpServer().requestHandler { req ->
    def file = req.uri == "/" ? "index.html" : req.uri.substring(1)
    req.response.sendFile file
}.listen(8080)
