app.get('/register', (req,res) => {
    // res.render('register');
    res.render(path.join(__dirname, 'views', 'register.html'))
});