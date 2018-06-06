'use strict'

const router = require('express') ();
const bookrouter = require('./books/book.routes');
const authorrouter = require('./authors/author.routes');

router.use('/books',bookrouter);
router.use('/authors',authorrouter);

module.exports = router;
