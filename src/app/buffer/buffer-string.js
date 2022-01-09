const buffer = Buffer.alloc(3);

// 将65对于的assic码赋值给buffer[0]，依次类推
buffer[0] = 65;
buffer[1] = 66;
buffer[2] = 67;

console.log(buffer.toString('utf-8'));