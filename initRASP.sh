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

sudo apt-get install raspi-gpio
sudo apt-get install rpi-update
sudo rpi-update
sudo apt-get update
sudo apt-get upgrade

vcgencmd get_camera
#sudo npm install babel-cli -g
raspistill -t 2000 -o pic.jpg
#wget http://www.linux-projects.org/listing/uv4l_repo/lrkey.asc && sudo apt-key add ./lrkey.asc
#sudo modprobe bcm2835-v4l2


wget http://www.linux-projects.org/listing/uv4l_repo/lrkey.asc && sudo apt-key add ./lrkey.asc
cp /home/pi/raspberry-project/sources.list /etc/apt/sources.list

#sudo apt-get install motion
#sudo cp  /etc/motion/motion.conf /etc/motion/motion.conf.ori
#chmod 777 /etc/motion/motion.conf
sudo apt-get install  uv4l 
sudo apt-get install  uv4l-raspicam uv4l-webrtc  uv4l-server uv4l-uvc uv4l-xscreen uv4l-mjpegstream 
sudo rpi-update
#uv4l --driver raspicam --auto-video_nr  --encoding jpeg

uv4l --syslog-host localhost --driver raspicam --width 640 --height 480
#pkill uv4l

#https://www.linux-projects.org/uv4l/installation/