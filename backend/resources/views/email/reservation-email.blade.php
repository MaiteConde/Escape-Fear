<!doctype html>
<html>

<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Reservation</title>

</head>
<style>
  .email{
      background-color: pink;
  }
</style>

<body class="email">
<h1>Hello! Here you have te resume of your reservation!</h1>
    <p>Room: {{$reservation -> room -> name}}</p>
    <p>{{$reservation -> room -> history}}</p>
    <p> Date: {{$reservation -> date}}</p>
    <p>Players: {{$reservation -> persons}}</p>



</body>

</html>