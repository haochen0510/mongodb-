//以下是每次调整不同集合movechunk需要修改的参数
MongoIP_PORT = '172.16.200.222:20000';
NS = 'vault_new.payusers';
SHARD = 's2';
N = 4;
const arr = ["s2","s3","s4","s5"];

//const conn = new Mongo('172.16.200.222:20000');
const conn = new Mongo(MongoIP_PORT);
print(`连接: ${conn}`);
db = conn.getDB('config');
print(`当前数据库：${db}`);
var i = 0;

//var c = db.getCollection('chunks').find({"ns":"vault_new.payusers","shard":"s1"},{"_id":0,"min":1,"max":1}).sort({"min" : 1}).limit(4);
var c = db.getCollection('chunks').find({"ns":NS,"shard":SHARD},{"_id":0,"min":1,"max":1}).sort({"min" : 1}).limit(N);
//var c = db.getCollection('chunks').find({"ns":"vault_new.payusers"});
while(c.hasNext()) {
    var mydate = new Date()
    var myhour = mydate.getHours()
    print("当前小时是",myhour)
    if (myhour >= 10 && myhour < 19) {
        flag = 1;
    }
    else { 
        flag = 0;
        print("超过下午18点，不进行movechunk,自动退出脚本")
        break;
    }
    
    var temp = c.next();
    var begin = {
    userId: temp.min.userId 
    }
    printjson(begin)
    var end = {
    userId: temp.max.userId
    }
    printjson(end);
    print("next movechunk")
    db = db.getSiblingDB('admin');
    //print('db.runCommand({moveChunk:"vault_new.payusers",bounds:[')
    printjson(begin)
    //print(",")
    printjson(end)
    //print('],to:})') 
   //const arr = ["s2","s3","s4","s5"];
   print(arr[i]);
   //var n = Math.floor(Math.random() * arr.length + 1)-1;
   //print(arr[n])
   //for (i = 0; i < arr.length; i++) {
   //    print(arr[i]);
   //    db.runCommand({moveChunk:"vault_new.payusers",bounds:[begin,end],to:arr[i]});     
   //}
   if (arr[i] != "s2")
   {
	print("执行movechunk")
   }
   db.runCommand({moveChunk:"vault_new.payusers",bounds:[begin,end],to:arr[i]});
   i++;
}
