const url = require('url')
const path = require('path')
const { app, BrowserWindow, webContents } = require('electron')
let win
app.on('ready', function () {
win = new BrowserWindow({ height: 250, width: 350, transparent: true, frame: false, webPreferences: { nodeIntegration: true, webviewTag: true }})
win.loadURL(url.format({ pathname: path.join(__dirname, 'index.html'), protocol: 'file', extraHeaders: 'pragma: no-cache\n', slashes: true }))
//win.webContents.openDevTools()
})
app.on('web-contents-created', (_event, contents) => {
  contents.on('will-attach-webview', (_wawevent, webPreferences, _params) => {
    webPreferences.preloadURL = `file://${__dirname}/preload.js`;
  });
})
