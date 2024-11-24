// config.js
const ip = process.env.SERVER_IP || "http://localhost:";
const serverPort = process.env.SERVER_PORT || "8000";
const adminCredentials = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin'
}

export {ip, serverPort, adminCredentials};