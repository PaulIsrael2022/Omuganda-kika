const { spawn } = require('child_process');

// Start nodemon
const nodemonProcess = spawn('nodemon');

// Function to terminate nodemon
function terminateNodemon() {
  if (nodemonProcess) {
    nodemonProcess.kill('SIGINT');
  }
}

// Example: Wait for 10 seconds and then terminate nodemon
setTimeout(() => {
  terminateNodemon();
}, 10000); // 10 seconds delay before termination
