import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

// import google from 'googleapis';
require('dotenv').config();
// const OAuth2 = google.auth.OAuth2;

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  storeUserData(data){
    console.log("data:", data);
    const body = JSON.stringify(data);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    })
    return this.http.post('/api/admin/user/signup', body, {headers: headers});
  }

  fetchUserData(data){
    const body = JSON.stringify(data);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });
    return this.http.post('/api/admin/user/signin', body, {headers: headers});
  }

  googleSignIn(id_token) {
    var REDIRECT_URL = '/api/admin/user/oauth2';
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(REDIRECT_URL, id_token, {headers: headers});

  }

//     const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, REDIRECT_URL);
// // generate a url that asks permissions for Google+ and Google Calendar scopes
//     const scopes = [
//       'https://www.googleapis.com/auth/plus.me',
//       'https://www.googleapis.com/auth/calendar',
//       'https://www.googleapis.com/auth/drive',
//     ];
//
//     const url = oauth2Client.generateAuthUrl({
//       access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
//       scope: scopes // If you only need one scope you can pass it as string
//     });
}
