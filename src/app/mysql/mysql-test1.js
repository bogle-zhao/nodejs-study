const mysql = require('mysql');
const uuid = require('uuid');

// 创建连接
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'node_test'
});

// 发起连接
connection.connect((error) => {
    if (error) {
        console.error(error);
        throw error;
    }
    console.log('connection successful');
    // 关闭连接，该关闭方式会等连接处理完成后，才关闭
    // connection.end();

    const userId = uuid.v1();
    const userName = 'welcom';
    const realName = 'haohao';
    const age = 24;
    const address = 'guagnzhou';

    connection.query('insert into mytest set ?', {
        id: userId,
        user_name: userName,
        real_name: realName,
        age: age,
        address: address
    }, (error, result) => {
        if (error) {
            console.log('insert error occured' + error);
            return;
        }
        console.log(`result=${JSON.stringify(result)}`);

        connection.query('select * from mytest', (error, rows, fields) => {
            if (error) {
                console.log('select error occured' + error);
                return;
            }
            for (var i = 0; i < rows.length; i++) {
                console.log(rows[i]);
            }

            connection.end((error) => {
                if (error) {
                    console.log('end error occured');
                    throw error;
                }
            });
        });
    });
});









