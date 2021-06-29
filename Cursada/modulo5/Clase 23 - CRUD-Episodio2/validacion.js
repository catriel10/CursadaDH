var upload = multer({ storage: storage })

app.post('/register', upload.single('avatar'), (req, res, next) => {
const file = req.file
  if (!file) {
    const error = new Error('Por favor seleccione un archivo')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file) 
})