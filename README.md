# WiBoard

WiBoard it's an Open Source dashboard with modular widgets.

It's used to replace your homepage, with a more smart and customizzable one.

All settings are editables from GUI, no need to access code.

Backend is in PHP, I try to put all logic to frontend so you can easily rewrite the backend in any language, are just a few line of code.

## Demo

[Here you can view a live demo](http://boardy.altervista.org/)

## Widgets

### WiMarks

Basically a list of link to your most visited site.

![alt text](https://i.imgur.com/MXMyA0W.png)

### WiOpenW

A weather widget that use OpenWeather API to get forecast for the next 5 days.

Go to openweathermap [sign up page](https://home.openweathermap.org/users/sign_up) to get an API key, widget work with a **free account**.

![alt text](https://i.imgur.com/SLmt8MY.png)

### WiCrypto

A crypto ticker to track value of your favourite coins in real time, it allow you to track any of the pairs of Binance, it will update every 30 seconds.

It use pubblic api from Binance so you dont need any apy key to use it.

![alt text](https://i.imgur.com/TN5AMfd.png)
![alt text](https://i.imgur.com/hUOfQIC.png)

### WiRSS

A simple RSS reader, it will update every 5 minutes.

![alt text](https://i.imgur.com/OoczHp8.png)

### WiNote

A text area where you can keep your notes, it will store your notes until you clear browser history or change WiBoard settings by GUI.

![alt text](https://i.imgur.com/bocSirn.png)

### WiSpacer

It' s not a real usable widget, it' s used only if you want a clear space on your board or if you want more space between two widget.

### WiDraw (TODO)

A blank page where you can scratch and draw, it will store data like WiNote.

---

## Autostart

### Windows

Create a new file named `start_boardy.bat` into `C:\Users\<USERNAME>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` with this content

```powershell
PowerShell.exe -ExecutionPolicy Bypass -WindowStyle hidden -File <PATH_TO_BOARDY_DIR>\run.ps1
```

remember to change `<PATH_TO_BOARDY_DIR>` with the real location.

after restart you can view your dashboard at http://localhost:4421

edit `run.ps1` to change port

inside `run.ps1` change `php -S localhost:$port` with `php -S 0.0.0.0:$port` to allow access from network (**DANGEROUS!**)

### Linux

Do it yourself nerd!

### Mac

Pay someone to make it for you

---

## Config

you can disable editor whit `config.php`, is recommended to turn off editor when you don't need it.

---

thanks to [freepik](https://www.flaticon.com/authors/freepik) for the favicon
