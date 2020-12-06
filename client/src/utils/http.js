// Denne koden er hentet fra tidligere forelesningsnotater: https://www.dropbox.com/sh/yro6zc3ohmh6te6/AAAcYYSw7w80JWODMxtK9Thda/Kodefiler?dl=0&file_subpath=%2Fclient%2Fsrc%2Futils%2Fhttp.js&preview=Leksjon_11.zip&subfolder_nav_tracking=1
import Axios from 'axios';

const http = Axios.create({
  baseURL: `${process.env.BASE_URL}${process.env.API_VERSION}`,
});

export default http;