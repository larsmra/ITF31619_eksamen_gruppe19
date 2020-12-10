// Denne koden er hentet fra tidligere forelesningsnotater: https://www.dropbox.com/sh/0rv8ftvdywioiu0/AACEOwGp52g9rT3desCz7YJpa/Kodefiler/03-express?dl=0&preview=babel.config.js&subfolder_nav_tracking=1

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
  }