from dateutil.parser import parse
from bson import ObjectId
import time

year_list =['2018','2019','2020']
for i in year_list:
    year = i
    for j in range(1,13):
        month =  str(j)
#        print(month)
        date = str(year) + '-' + str(month) + '-' + "01"
        print(date) 
        curr_dt = parse(date)
        curr_oid = ObjectId(hex(int(time.mktime(curr_dt.timetuple())))[2:] + '0'*16)
        print(curr_oid)
