const fs = require('fs');

/*
删除目录,
1。 如果删除的目录不存在，报错
2。 删除目录时，目录里面不能包含子目录或文件
3. recursive:true 以递归模式删除目录
 */
fs.rmdir('test', {recursive: true}, (error) => {
    if (error) {
        throw error;
    }
    console.log('success');
})






