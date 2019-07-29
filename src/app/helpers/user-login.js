module.exports = {
    userlog: function(req, res, next){


        if(req.isAuthenticated() ){
            return resp.redirect(resp.redirect('/musicas'));
        }
        
        resp.redirect('/');
        
    }
}