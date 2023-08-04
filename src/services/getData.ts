export const getData = (setter:(arg0:any)=>void)=>fetch('').then((res)=> res.json).then(setter)
