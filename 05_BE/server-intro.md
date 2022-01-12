# Server

1. install yarn with npm in case we dont have it in the computer.
2. we initialize yarn
3. We add the http dependency: `yarn add http`
4. create a `.gitignore` file and add the node_modules inside.
5.
6.`yarn add --dev nodemon` => will listen to the file and update the server each time it is updated


the gateway is the door to go in/out of the local network.
the command = `traceroute xxxx.org/net/com` shows the ping of different networks (gateways) which are on the way until the target network is reached.


## Transport layer

Work through ports

UDP - user datagram protocol (send a message and hope it arrives)
TCP - transmission control protocol (can send a message and receiver send acknowledge message. It guarantees that the message has arrived.)


## AXIOS

`npm install axios`

axios is a promise based HTTP client for node.js and the browser. 

- Make XMLHttpREquests from the browser
- Make htto requests from node.js
- supportsthe promise API
