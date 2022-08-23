//模拟ios调用JavaScript方法
export function toJavaScript(){
testNum().then((res)=>{
  window.pp('ios传值'+res)
})

}

async function testNum(){
  let num = 0;
  return new Promise((res,rej)=>{
    for (let i = 0;i<10000;i++) {
      num+=i
    }
    for (let i = 1;i<100;i++) {
      num/=i
    }
    for (let i = 1;i<200;i++) {
      num*=i
    }
    for (let i = 1;i<50;i++) {
      num-=i
    }
    res(num)
  })
}
