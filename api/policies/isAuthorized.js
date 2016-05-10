module.exports = function (req, res, next) {
  var token;

  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    //console.log("value parts",parts); // get token
    if (parts.length == 2) {
      var scheme = parts[0],
        //console.log("value sheme",scheme);
        credentials = parts[1];
        //console.log("value sheme",scheme);

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;

      }
    } else {
      return res.json(401, {err: 'Format is Authorization: Bearer [token]'});
    }
  } else if (req.param('token')) {
    token = req.param('token');
    // We delete the token from param to not mess with blueprints
    delete req.query.token;
  } else {
    return res.json(401, {err: 'No Authorization header was found'});
  }


  jwToken.verify(token, function (err, token) {
    if (err) return res.json(401, {err: 'Invalid Token!'});
    req.token = token; // This is the decrypted token or the payload you provided
    next();
  });

  
else if (req.socket && req.socket.handshake && req.socket.handshake.query && req.socket.handshake.query.token) {

    token = req.socket.handshake.query.token;

} else {
    sails.log(req.socket.handshake);
    return res.json(401, {err: 'No Authorization header was found'});
}

JWTService.verifyToken(token, function (err, token) {

    if (err) {
        return res.json(401, {err: 'The token is not valid'});
    }

    sails.log('Token valid');

    req.token = token;

    return next();

});

};
