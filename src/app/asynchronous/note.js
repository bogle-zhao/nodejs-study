/*
Node本身能够做到如此高性能的原因在于事件（event）的使用，以及对于事件监听器（listener，callback）的调用上。

node本身是基于事件循环机制的。

本质上，当Node启动一个文件或者服务器后，node实际上是运行在一个死循环中的。

while(true){
    ...
}
在死循环当中，node会不断发射事件，监听事件并且执行回调逻辑。

事件来源主要有两种：
    1。node自身所发射出的事件
    2。来自于node自身所运行的环境。
监听事件：回调都是要依附于相应的事件的
执行回调逻辑：本质上都是由底层来执行的。
关于IO操作的异步执行逻辑：
    1。 同步模式：
    2。异步模式：poll,epoll

    IOCP，libuv： window系统

node的单线程：所谓的单线程指的是Node的逻辑执行主线程是单线程的，即javascript代码运行所处的线程，这个是单线程，因为javascript本身只能执行在单线程当中

当我们在程序中引入了第三方模块时，那么整体的全部执行逻辑如下所示：

node -> 第三方模块 -> 原生模块 -> 原生模块内部的实现 -> C++模块 -> libuv -> 线程池调用 -> 线程 -> 执行底层的IO操作（涉及操作系统调用）

当Node在执行过程中国，他会判断当前系统的操作类型：

Node完整的事件循环逻辑：
1。启动Node运行时
3。检测是否有待处理的事件
3。如果没有，回到循环事件开始
4。如果有，那么从事件队列中取出一个事件
5。判断当前这个事件有没有与之关联的事件处理器（回调）
6。如果没，回到循环开始
7。如果有，则执行事件回调逻辑
8。回到循环事件开始，开始新一轮事件检测流程

 */