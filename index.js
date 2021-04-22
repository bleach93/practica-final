const app = require('./app');
const sequelize = require('./db');

const port = 3010;

(async ()=>{
    await sequelize.sync({ force: false, alter: true});
    app.listen(port,
        ()=> console.info(`Server running on port ${port} http://201.140.116.237${port}`),
    );
})();

app.get('/',function(req,res){
    res.render('./index.ejs')
})