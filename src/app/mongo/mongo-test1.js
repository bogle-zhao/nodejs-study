const mongoose = require('mongoose');
//db会自动创建mytest
const uri = 'mongodb://localhost:27017/mytest';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('connection successful');

    // 模式准备
    const parentSchema = new mongoose.Schema({
        name: String,
        age: Number,
        address: String
    });

    const studentSchema = new mongoose.Schema({
        name: String,
        age: Number,
        address: String,
        married: Boolean,
        parents: parentSchema
    });

    // 模式关联
    mongoose.model('student', studentSchema);

    // 获取模型
    const Student = mongoose.model('student');
    // 创建模型实例
    const student = new Student({
        name: 'zhangsan',
        age: 20,
        married: false,
        parents: {
            name: 'lisi',
            age: 30,
            address: 'dalian'
        }
    });

    student.save((error) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log('save successful');

        Student.find({}, (error, docs) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log(docs);

            // 关闭mongo
            // mongoose.connection.close();
            docs.forEach(doc => {
                // 删除文档
                doc.remove();
            });
        });
    });

});



