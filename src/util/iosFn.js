/**
 * @param set(type,message) 存储
 * @param type 存储到IosData类的key值
 * @param message 存储到IosData类的value值
 * @param get(type) 获取
 * @param type 获取存储在IosData类的key值
 */
class IosData{//创建类
	set(type,message){
		this[type] = message
	}
	get(type){
		return this[type]
	}
}
var setReturnData = new IosData()//创建IosData实例化对象
window.pp = function (message) {
  let showData = "JavaScript接收到的值:"+message
	setReturnData.set("pp",showData)//将ios传回的值存储到IosData类中
}
export default setReturnData
