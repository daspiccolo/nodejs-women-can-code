class MusicaDAO{
    constructor(db){
        this._db = db;
    }
    list(){
        return new Promise((resolve, reject)=> {
            this._db.all(
                'SELECT * FROM musicas',
                (err,result)=>{
                    if (err) return reject('Não foi possível fazer a listagem');

                    return resolve(result);
                }
            )
        });

    }
    insert(musica){
        return new Promise((resolve, reject)=>{
            this._db.run(
                    'INSERT INTO musicas(nome, compositor, album) values(?,?,?) ',      
                    [
                    musica.nome,
                    musica.compositor,
                    musica.album
                     ] ,
                function(err){
                    if(err){
                        if (err)return reject('Não foi possível adicionar a música.')
                    }
                    resolve();
                }       
            );   
        });
    }
    remove(id){
        return new Promise((resolve, reject)=>{
            this._db.get(
                    `DELETE FROM musicas WHERE id = ?`,
                    [id],
                    (erro)=>{
                        if (erro){
                            return reject('Não foi possivel remover!');
                        }
                    return resolve();
                    }
            );
        });
    }
    searchId(id){

        return new Promise((resolve, reject)=>{
            this._db.get(
                `SELECT * FROM musicas WHERE id = ?`,
                [id],
                (erro, musica)=>{
                    if(erro){
                        return reject('Não foi possivel encontrar a musica!');
                    }
                    return resolve(musica);
                }
            );
        });
    }
    update(musica){
        return new Promise((resolve, reject)=>{
            this._db.run(`
            UPDATE musicas SET
            nome = ?,
            compositor = ?,
            album = ?
            WHERE id = ?`,
            [
                musica.nome,
                musica.compositor,
                musica.album,
                musica.id
            ],
            erro =>{
                if(erro){
                    return reject('Nao foi possivel atualizar');
                }
                resolve();
            });
        });
    }
}

module.exports = MusicaDAO;