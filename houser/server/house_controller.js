module.exports = {
    read: (req, res, next) => {
        const db = req.app.get('db');

        db.get_dummy()
        .then( dummy => res.status(200).send( dummy ))
        .catch( () => res.status(500).send() );
    }
//     create: (req, res) => {

//     },
//     update: (req, res) => {

//     },
//     delete: (req, res) => {
        
//     }
}