// let os = require('os')
// console.log(os.platform(),os.homedir())

let fs = require('fs')

// console.log(fs);

// Dosya Okuma

// fs.readFile('./docs/test.txt','UTF8',(err, data)=>{
//     if(err) throw err
//     console.log(data)
// })

// Dosya Yazma 

// fs.writeFile('./docs/test2.txt','Hello Test2',(err)=>{
//     if(err) throw err
//     console.log('Write Succesfuly');
// })

// file delete

// fs.unlink('./docs/test2.txt',()=>{
//     if(err) throw err
//     console.log('File Delete')
// })

// Folder Create and Delete

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err) throw err
        console.log('Folder Created');
    })
}else{
    fs.rmdir('./assets',(err)=>{
        if(err) throw err
        console.log('Folder Deleted');
    })
}


