#!/bin/bash 
chmod -R 777 /home/mint/Project
sudo rm -rf /media/sf_raspberry-project/node_modules
sudo rm  /media/sf_raspberry-project/package.json
sudo cp -R /home/mint/Project/node_modules /media/sf_raspberry-project/node_modules 

sudo cp /home/mint/Project/package.json /media/sf_raspberry-project/package.json

sudo cp /home/mint/Project/export.sh /media/sf_raspberry-project/export.sh
sudo cp /home/mint/Project/import.sh /media/sf_raspberry-project/import.sh

chmod -R 777 /home/mint/Project

