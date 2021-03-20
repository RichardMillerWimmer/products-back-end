module.exports = {

    create: (req, res) => {
        const db = req.app.get('db');

        db.create_product()
            .then(() => {
                res.sendStatus(200)
            })
            .catch(error => {
                res.status(500).send({ errorMessage: 'We are sorry, something went wrong with your request' });
                console.log(error)
            });
    },

    getOne: (req, res) => {
        const db = req.app.get('db')

        db.read_product()
            .then(product => {
                res.status(200).send(product)
            })
            .catch(error => {
                res.status(500).send({ errorMessage: 'We are sorry, something went wrong with your request' });
                console.log(error)
            });
    },

    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products()
            .then(products => {
                res.status(200).send(products)
            })
            .catch(error => {
                res.status(500).send({ errorMessage: 'We are sorry, something went wrong with your request' });
                console.log(error)
            });
    },

    update: (req, res) => {
        const db = req.app.get('db')

        db.update_product()
            .then(() => {
                res.sendStatus(200)
            })
            .catch(error => {
                res.status(500).send({ errorMessage: 'We are sorry, something went wrong with your request' });
                console.log(error)
            });
    },

    delete: (req, res) => {
        const db = req.app.get('db')

        db.delete_product()
            .then(() => {
                res.sendStatus(200)
            })
            .catch(error => {
                res.status(500).send({ errorMessage: 'We are sorry, something went wrong with your request' });
                console.log(error)
            });
    }

};