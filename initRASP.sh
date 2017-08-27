#!/bin/bash 


tar xf node-v8.4.0-linux-armv6l.tar.xz
sudo rm /bin/npm
sudo rm /bin/node
sudo chmod -R 777 /home/pi/raspberry-project/node-v8.4.0-linux-armv6l
sudo ln -s /home/pi/raspberry-project/node-v8.4.0-linux-armv6l/bin/node /bin/node
sudo ln -s /home/pi/raspberry-project/node-v8.4.0-linux-armv6l/bin/npm /bin/npm
sudo chmod 777 /bin/node
sudo chmod 777 /bin/npm
sudo chmod -R 777 /home/pi/raspberry-project/node-v8.4.0-linux-armv6l/
chmod -R 777 /home/pi/raspberry-project

#sudo npm install babel-cli -g
