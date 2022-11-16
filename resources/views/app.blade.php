<!DOCTYPE html>
<html>
  <head>
    <title>wonderHOME - Biến tổ ấm trong mơ thành hiện thực</title>
    <meta charset = "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
  </head>
  <body>
    <div id="app"></div>
    <script src="{{ secure_asset('js/app.js') }}"></script>
    <link rel="stylesheet" href="{{ secure_asset('css/app.css') }}">
  </body>
</html>