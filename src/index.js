
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return (arguments.length===0||matrix.length===0)?[]:matrix.map((el, index)=>{
        if(index%2!==0){
          return el.reverse();
        } 
        return el;
      }).flat();
}
