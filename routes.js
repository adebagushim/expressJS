const router = require('express').Router();
const multer = require('multer')
const upload = multer({dest: 'uploads'});
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    res.json({
        Status: 'BERHASIL',
        About: 'Mencoba Express JS',
        Pilihan: 'daftarmenu/makanan atau daftarmenu/minuman'
    })
});

router.get('/daftarmenu/:name', (req, res) => {
    if (req.params.name === 'makanan') {
        res.json({
            Menu_1: 'Pizza',
            Menu_2: 'Kebab',
            Menu_3: 'Sate'
        });
    } else if (req.params.name === 'minuman') {
        res.json({
            Menu_1: 'Lemon Tea',
            Menu_2: 'Jus',
            Menu_3: 'Water'
        });
    } else {
        res.status(404);
        res.send({
            status: 'FAILED',
            message: 'Resource ' + req.originalUrl + 'Not Found'
    })
    }
    
});

router.post('/coba/',upload.single('image'), (req, res) => {
    const {name, price ,stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, 'uploads', image.originalname);
        fs.renameSync(image.path, target)
        res.json({
            name,
            price,
            stock,
            status,
            image
        });
        send.file(target);
    }
});

router.get('/:category/:tag', (req, res) => {
    const {category, tag} = req.params;
    res.send({
        category, tag,
    });
});


module.exports = router;