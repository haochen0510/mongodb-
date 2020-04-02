#_author:"steven_Chen"
#_date: 2019/12/30

import time

def id2time(object_id):
    timeStamp = int(object_id[:8], 16)
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(timeStamp))


if __name__ == '__main__':
    a=input("object_id")
    print(id2time(a))

