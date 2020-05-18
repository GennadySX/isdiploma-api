/**
 * Created by GennadySX on @2020
 */

const Cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}


export {
    Cors
};
