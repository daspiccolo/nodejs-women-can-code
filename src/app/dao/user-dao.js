class UserDAO{
    constructor(db){
        this._db = db;
    }
    insert(user){
        return new Promise((resolve, reject)=>{
            this._db.run(
                    'INSERT INTO usuarios(fullname,email,password) values(?,?,?) ',      
                    [
                    user.fullname,
                    user.email,
                    user.password
                     ] ,
                function(err){
                    if(err){
                        if (err)return reject('Não foi possível adicionar o usuario.')
                    }
                    resolve();
                }       
            );   
        });
    }
    searchByEmail(email){

        return new Promise((resolve, reject)=>{
            this._db.get(
                `SELECT * FROM usuarios WHERE email = ?`,
                [email],
                (erro, user)=>{
                    if(erro){
                        return reject('Não foi possivel encontrar o usuario!');
                    }
                    return resolve(user);
                }
            );
        });
    }
}
module.exports = UserDAO;