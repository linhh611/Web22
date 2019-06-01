'use strict'

function generate(testLengthArray){
  const result = [];
   for(let i=0; i< testLengthArray.length; i++){
    const item = {
      input: [],
      target: null,
      output: null
    };


    for(let j=0; j< testLengthArray[i]; j++){
      item.input.push(Math.floor(Math.random()*20001- 10000) );
    }

    item.input = item.input.sort((a,b)=> a-b);
    

    if(i==0){
      item.target =99999;
    item.output = -1;
    }
    if(i==1){
      item.target = item.input[0];
    item.output = 0;
    }
    if(i==2){
      item.target = item.input[item.input.length-1];
    item.output = item.input.length-1;
    }
    
    if(i>2){
      item.target = Math.floor(Math.random()*20001- 10000);
    item.output = item.input.indexOf(item.target);
    }
    result.push(item);
   }

   
   return result;


  
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
}

module.exports = generate
