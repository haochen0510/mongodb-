for( var i=1 ; i<=100000; i++ ) { 
print(i)
var objectid = db.orders.findOne({createTime:{$gte: "2017-01-01 00:00:00",$lt: "2017-02-01 00:00:00"}},{_id:1}); 
if (!objectid && typeof(objectid)!="undefined" && objectid!=0) 
{ 
print("is null"); 
break;
}　
db.orders.remove(objectid);
printjson(objectid) 
}
