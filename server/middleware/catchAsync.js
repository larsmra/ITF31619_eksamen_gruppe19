// Denne koden er hentet fra tidligere forelesningsnotater: https://www.dropbox.com/sh/9nr561t0qn6eioo/AAD4E8xcT_7TaAMeU_QSnbbZa/Kodefiler?dl=0&file_subpath=%2Fhifo-leksjon13-master%2Fserver%2Fmiddleware%2FcatchAsync.js&preview=leksjon_13.zip&subfolder_nav_tracking=1
export default (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch(next);
};
