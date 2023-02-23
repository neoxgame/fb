const url = require('url')
const path = require('path')
const { app, BrowserWindow, webContents } = require('electron')

let win

app.on('ready', function () {
  win = new BrowserWindow({
    width: 800,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }

  })
win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
	  protocol: 'file',
	  extraHeaders: 'pragma: no-cache\n',
      slashes: true
  }))
  
  
})
	
// win.webContents.openDevTools()
