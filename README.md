# webspeak
This repo is a cdn that can speak a web content 
use the cdn link 
```
<script src ="https://cdn.jsdelivr.net/gh/widecity-developers/webspeak/speak.js"></script>
```
Just call the function
```
speak('text to speak')
```
Call this function where ever you want the text to speak feature. like mouseenter on a p tag as given below.

example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/gh/widecity-developers/webspeak/speak.js"></script>
</head>
<body>
<p onmouseenter="speak(this.innerText)">hello everyone</p>
</body>

</html>
```
