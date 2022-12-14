let mix = require('laravel-mix');

mix.disableNotifications();

mix.js('resources/js/app.js', 'js').react()
    .postCss("resources/css/app.css", "public/css", [
        require("tailwindcss"),
    ]);

mix.browserSync('127.0.0.1:8000');