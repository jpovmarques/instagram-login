const in_client_id = '',
    in_client_secret = '',
    in_redirect_uri = 'http://localhost:3000/auth',
    in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id='
                  + in_client_id + '&redirect_uri='
                  + in_redirect_uri + '&response_type=code';
    out_auth_url = 'https://api.instagram.com/accounts/logout';

const db_ip = 'localhost',
    db_connection_name = '/test',
    db_uri = 'mongodb://' + db_ip + ':' + db_connection_name;

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    uri: db_uri
  },
  instagram: {
    client_id: in_client_id,
    client_secret: in_client_secret,
    auth_login_url: in_auth_url,
    auth_logout_url: out_auth_url,
    redirect_uri: in_redirect_uri
  }
};