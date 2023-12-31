const electron = require("electron");
const path = require("path");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  mainWindow.webContents.openDevTools(); // Uncomment this line to open Dev Tools
  
  console.log(__dirname);
  mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
}

app.on("ready", createWindow);