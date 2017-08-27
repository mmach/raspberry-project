#!/bin/bash 

sudo cp  -r /media/sf_raspberry-project  /home/mint/Project 
sudo cp /home/mint/Project/node.tar.xz  /home/mint/node.tar.xz
cd /home/mint
tar xf node.tar.xz
sudo chmod -R 777 /home/mint/node-v8.4.0-linux-x64
sudo cp /home/mint/node-v8.4.0-linux-x64/bin/node /bin
ln -s /home/mint/node-v8.4.0-linux-x64/bin/npm /bin/npm
sudo chmod 777 /bin/node
sudo chmod 777 /bin/npm
sudo chmod -R 777 /home/mint/node-v8.4.0-linux-x64/
chmod -R 777 /home/mint/Project

sudo npm install babel-cli -g


npm install webpack -g
