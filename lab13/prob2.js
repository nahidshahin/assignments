import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rout = express.Router();

const getTheNumbers = (req, res, next) => {
    let a, b;

    if (req.params.a && req.params.b) {
        a = parseFloat(req.params.a);
        b = parseFloat(req.params.b);
    } else if (req.query.a && req.query.b) {
        a = parseFloat(req.query.a);
        b = parseFloat(req.query.b);
    } else if (req.body && req.body.a && req.body.b) {
        a = parseFloat(req.body.a);
        b = parseFloat(req.body.b);
    } else {
        return res.status(400).json({ error: "Missing or invalid input parameters" });
    }

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid input parameters" });
    }

    req.numbers = { a, b };
    next();
};

rout.get(['/addition/:a/:b', '/addition'], getTheNumbers, (req, res) => res.json({ result: req.numbers.a + req.numbers.b }));
rout.post('/addition', getTheNumbers, (req, res) => res.json({ result: req.numbers.a + req.numbers.b }));

rout.get(['/subtraction/:a/:b', '/subtraction'], getTheNumbers, (req, res) => res.json({ result: req.numbers.a - req.numbers.b }));
rout.post('/subtraction', getTheNumbers, (req, res) => res.json({ result: req.numbers.a - req.numbers.b }));

rout.get(['/multiplication/:a/:b', '/multiplication'], getTheNumbers, (req, res) => res.json({ result: req.numbers.a * req.numbers.b }));
rout.post('/multiplication', getTheNumbers, (req, res) => res.json({ result: req.numbers.a * req.numbers.b }));

rout.get(['/division/:a/:b', '/division'], getTheNumbers, (req, res) => res.json({ result: req.numbers.a / req.numbers.b }));
rout.post('/division', getTheNumbers, (req, res) => res.json({ result: req.numbers.a / req.numbers.b }));

rout.get(['/modulus/:a/:b', '/modulus'], getTheNumbers, (req, res) => res.json({ result: req.numbers.a % req.numbers.b }));
rout.post('/modulus', getTheNumbers, (req, res) => res.json({ result: req.numbers.a % req.numbers.b }));

app.use('/', rout);
app.listen(8080, () => console.log('listening on 8080...'));