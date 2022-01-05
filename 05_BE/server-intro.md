# Server

1. install yarn with npm in case we dont have it in the computer.
2. we initialize yarn
3. We add the http dependency: `yarn add http`
4. create a `.gitignore` file and add the node_modules inside.
5.
6.`yarn add --dev nodemon` => will listen to the file and update the server each time it is updated


the ateway is the door to go in/out of the local network.
the command = `traceroute xxxx.org/net/com` shows the ping of different networks(getways) which are in the way until i reach the target network.


## Transport layer

Work through ports

UDP - user datagram protocol (send a messag eand hope it arrived)
TCP - transmission control protocol (can send a message and receiver send aknowledge message. Is guarantees that the message arrived)


## AXIOS

`npm install axios`

axios is a promise based HTTP cloent for node.js and the browser. 

- Make XMLHttpREquests from the browser
- Make htto requests from node.js
- supportsthe promise API
- 