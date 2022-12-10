const arr = [1,2,3,4,5];
function getSubArray(a,start,end){
 let b =[]
    for( ;start!==end +1;start++){
          b.push(a[start])
        
      

    }
    console.log( b)
}  
 getSubArray(arr,3,4);





const arrOne = [
    {
        id: 'a id one',
        title: 'a title one',
    },
    {
        id: 'a id two',
        title: 'a title two',
    },
    {
        id: 'a id three',
        title: 'a title three',
    },
    {
        id: 'a id four',
        title: 'a title four',
    },
    {
        id: 'a id five',
        title: 'a title five',
    },
    {
        id: 'a id six',
        title: 'a title six',
    },
    {
        id: 'a id seven',
        title: 'a title seven',
    },
]

const arrTwo = [
    {
        mainId: 'a id one',
        details: 'a title one',
    },
    {
        mainId: 'a id two',
        details: 'a title two',
    },
    {
        mainId: 'a id three',
        details: 'a title three',
    },
    {
        mainId: 'a id four',
        details: 'a title four',
    },
    {
        mainId: 'a id five',
        details: 'a title five',
    },
    {
        mainId: 'a id six',
        details: 'a title six',
    },
    {
        mainId: 'a id seven',
        details: 'a title seven',
    },
]

function getComparedArray(a,b){
    const arrThree =[]
    for(let i = 0;i<a.length;i++){
        if(a[i]['id']===b[i]['mainId']){
            let f = Object.assign(a[i],b[i])
           
            arrThree.push(f)
        }
    }
     return arrThree

}

getComparedArray(arrOne,arrTwo)


