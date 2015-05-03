module.exports = function (app){
  // 404s
  app.use(function(req, res, next){
    res.status(404);

    if(req.accepts('html')){
      var message = "<h2> I'm sorry, I couldn't find that page. </h2>";
      return res.send(message);
    }

    if(req.accepts('json')){
      return res.json({error: 'Not found'});
    }

    // default response type
    res.type('txt');
    res.send("Oh noes, couln't find that page!.");

    // 500
    app.use(function(err, req, res, next){
      console.error('error at %s\n', req.url, err);
      res.send(500, "Oops, we made a boo boo lol.");
    })

  })
}
