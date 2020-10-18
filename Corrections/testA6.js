let test = string1 => {
    //let arr = [...string1]
    [...string1].forEach((item, i) => { 
        return  console.log(i,",",string1[i])
    });
    
}
test('string')
