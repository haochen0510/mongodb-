#!/bin/bash
#use for remove data which date is less than 2018
#design for chen
#每天用计划任务 每天凌晨2点进行数据清理

#color
green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'

action_log="/cgr_bak_nfs/orders_remove/delete.log"
remove_log="/cgr_bak_nfs/orders_remove/remove.log"
echo -e "${green} Begin .................................. " >>$action_log ;
echo -e ${yellow} $(date +%Y-%m-%d-%H:%M:%S) ${plain}>>$action_log;
 
 
i=1
while [ $i -le 5 ]
do
    echo "NOW Start ... $(date +%Y-%m-%d-%H:%M:%S)" >>$action_log ;
    mongo 172.16.200.221:20000/vault_new  /cgr_bak_nfs/orders_remove/remove$1.js >>$remove_log
    sleep 100
    let i++
    echo "OKEY ... $(date +%Y-%m-%d-%H:%M:%S)" >>$action_log;

done


echo -e ${yellow} $(date +%Y-%m-%d-%H:%M:%S) >>$action_log;
echo -e "${green} End ..................................${plain} " >>$action_log;
 
echo " " >>$action_log
