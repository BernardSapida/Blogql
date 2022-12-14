<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/node_modules/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <title>Blog Post</title>
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>