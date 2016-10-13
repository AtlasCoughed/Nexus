import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  storeUserData(data){
    console.log("data:", data);
    const body = JSON.stringify(data);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });
    return this.http.post('/api/admin/user/signup', body, {headers: headers});
  }

  fetchUserData(data){
    const body = JSON.stringify(data);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });
    return this.http.post('/api/admin/user/signin', body, {headers: headers});
  }

 googleLogin(origin) {
  const google = {
    url: origin + '/auth/google',
    clientId: '362371810719-5n2mdq5ham1de9iqpfljdo39fq1pb48t.apps.googleusercontent.com',
    redirectUri: origin + '/auth/google/callback',
    authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
    scope: 'openid profile email',
    width: 452,
    height: 633
  };

  return (dispatch) => {
    oauth2(google, dispatch)
      .then(openModal)
      .then(modalPopup)
      .then(exchangeCodeForToken)
      .then(signIn)
      .then(closeModal);
  };
}

openModal ({ url, config, dispatch }) {
  return new Promise((resolve, reject) => {
    const width = config.width || 500;
    const height = config.height || 500;
    const options = {
      width: width,
      height: height,
      top: widow.screenY + ((window.outerHeight - height) / 2.5),
      left: window.screenX + ((window.outerWidth - width) / 2)
  };
  const popup = window.open(url, '_blank', qs.stringify(options, ','));
    if(url === 'about:blank') {
      popup.document.body.innerHTML = "Loading...";
    }
    resolve({window: popup, config: config, dispatch: dispatch) )})
  });
}

getRequestToken({window, config, dispatch}) {
  return new Promise((resolve, reject) => {
    return fetch(config.url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        redirectUri: config.redirectUri
      })
    })
      .then((response) =>{
        if (response.ok){
          return response.json().then((json) => {
            resolve({ window: window, config: config, requestToken: json, dispatch: dispatch });
          });
        }
      });
  });
}

  googleSignIn() {
//     var REDIRECT_URL = '/api/admin/user/oauth2';
//     var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
// generate a url that asks permissions for Google+ and Google Calendar scopes
//     const scopes = [
//       'https://www.googleapis.com/auth/plus.me',
//       'https://www.googleapis.com/auth/calendar',
//       'https://www.googleapis.com/auth/drive',
//     ];
//     const url = oauth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: scopes
//     });
    console.log( "this is the url");
// oauth2Client.getToken(code, function(err, tokens) {
//   if(!err) {
//     console.log("TOKENS:", tokens, code);
//     oauth2Client.setCredentials(tokens);
//   }
// });
//     const google = {
//       url: origin + '/auth/google',
//       clientId: '120768672759-51i3o3tmt8d2lv26aln08sv41jee5p3e.apps.googleusercontent.com',
//       redirectUri: origin + '/auth/google/callback',
//       authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
//       scope: 'openid profile email',
//       width: 452,
//       height: 633
//     };
//
//     var REDIRECT_URL = '/api/admin/user/oauth2';
//     const headers = new Headers({
//       'Content-Type': 'application/x-www-form-urlencoded'
//     });
//     return this.http.post(REDIRECT_URL, id_token, {headers: headers});
  }
}
