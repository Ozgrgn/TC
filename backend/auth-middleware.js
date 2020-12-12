const jwt = require('jsonwebtoken');

const app_secret = "myappsecret";

module.exports = function(req, res, next) {

    let token = req.headers['authorization'];
    if (token != null && token.startsWith('Bearer<')) {
        token = token.substring(7, token.lenght);
        try {
            jwt.verify(token, app_secret);
            next();
            return;
        } catch (err) {
            res.statusCode = 401;
            return res.end();

        }
    }


    // if (req.url === '/login' && req.method == 'POST') {
    //     if (req.body.username === username && req.body.password === password) {
    //         let token = jwt.sign({ data: username, expiresIn: '1h' }, app_secret);
    //         res.json({ sucess: true, token: token });
    //     } else {
    //         res.json({ sucess: false });
    //     }
    //     res.end();
    //     return;
    // } else {
    //     if ((req.url.startsWith("/places") || req.url.startsWith("/categories")) && (req.method != 'GET')) {
    //         let token = req.headers['authorization'];
    //         if (token != null && token.startsWith('Bearer<')) {
    //             token = token.substring(7, token.lenght);
    //             try {
    //                 jwt.verify(token, app_secret);
    //                 next();
    //                 return;
    //             } catch (err) {}
    //         }
    //         res.statusCode = 401;
    //         res.end();
    //         return;
    //     }


}
next();
}