#!/bin/bash
#color


green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'
while true
do
    echo -e "${green} Begin .................................. "
    echo -e ${yellow} $(date +%Y-%m-%d-%H:%M:%S) ${plain}
    mongo --nodb index.js
    echo -e ${yellow} $(date +%Y-%m-%d-%H:%M:%S)
    echo -e "${green} End ..................................${plain} "
    sleep 60
done
