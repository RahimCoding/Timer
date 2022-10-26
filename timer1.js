let args = process.argv.slice(2)

for (const arg of args) {
  const timeOut = Number(arg)
  if(timeOut < 0){
    continue
  }
  
  if(isNaN(timeOut)){
    continue
  }


  console.log(timeOut)

    setTimeout(() => {
    process.stdout.write('\x07');
  } , timeOut * 1000)

}