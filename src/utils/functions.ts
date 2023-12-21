export const alertCheck = async (amount:Number) => {
  if(amount === undefined) return false;
  if (confirm("정말" + amount + "입니까?") == true){    //확인
    console.log(amount)
    saveData(amount)
  }else{   //취소
    return false;
  }
}

export const saveData = (amount:Number) => {
  localStorage.setItem((localStorage.length-1).toString(), amount.toString())
}

let datai:number[] = []
export const readData = () => {
  datai = []
  if (typeof window !== 'undefined') {
    for(var i = 0; i < localStorage.length-1; i++){
      if(localStorage.getItem(i.toString()) !== null){
        datai.push(parseInt(localStorage.getItem(i.toString()) || '0', 10))
      }
    }
  }
  return datai
}

let a = 0
export const sumData = (num: number[]) => {
  a =0
  num.forEach( (item) => {
    a += item;
  });
  return a
}
