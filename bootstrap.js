const electron = require('electron')
const app = electron.app
const path = require('path')
const url = require('url')
const BroswerWindow = electron.BrowserWindow
var mainWindow

app.on('ready', function() {
  mainWindow = new BroswerWindow({width:600, height:1000})
  mainWindow.loadURL(url.format({
    pathname:path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))
})