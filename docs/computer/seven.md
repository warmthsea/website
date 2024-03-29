# 第七章 多处理机


##  一、 多处理机的概念、问题和硬件结构

1、多处理机的基本概念和要解决的技术问题
   - `多处理机的基本概念` ★
     - 多处理机是指两台以上的处理机，共享I/O系统，机间经共享主存或告诉通信网络通信，在统一的系统控制下，协同求解大而复杂的计算机系统。
   - 多处理机的目标
     - 1）对多个作业、多个任务并执行来提高解题速度，从而提高整体性能；
     - 2）使用冗余的多个处理机通过重新组织来提高系统的可靠性、适应性和可用性。
   - 多处理机的特点
     - 1）结构灵活性
     - 2）程序并行性
     - 3）并行任务派生
     - 4）进程同步
     - 2）资源分配和任务调整
   - 需要解决的主要问题
     - 1）硬件结构上如何解决好处理机、 存贮器模块及I/O子系统之间的互连。
     - 2）如何最大限度地开发系统的并行性， 以实现多处理机各级的全面并行。
     - 3）如何选择分割任务和子任务的大小， 即任务的粒度大小， 使并行度高， 而辅助开销小。
     - 4）如何协调好多处理机中各并行执行的任务和进程间的同步问题。
     - 5）如何将各个任务分配到一个或多个处理机上， 解决好处理机调度、任务调度和资源分配问题， 防止死锁。
     - 6）一旦某个处理机发生故障，如何对系统进行重新组织而不使其瘫痪。
  
2、多处理机的硬件结构
   - 紧耦合和松耦合
     - 1)紧耦合多处理机
     - 2)松耦合多处理机

3、`机间互联形式`
   - 1) 总线形式
   - 2) 环形互联
   - 3) 交叉开关形式
   - 4) 多端口存储器形式
   - 5) 蠕虫穿洞寻经网络
   - 6) 开关枢纽结构形式

4、存储器的构成
   - 1) 低址交叉
   - 2) 高址交叉


##  二、紧耦合多处理机多Cache的一致性
1、多Cache的一致性问题的产生
   - 多处理机中，由于没干处理机都有自己专用的Cache，当主存中同一信息块在多个Cache中都有时，会出现多个Cache之间的相应信息块的内容不一致的问题。

2、多Cache的一致性问题的解决办法：
   - 1) 一类是解决进程迁移引起的多Cache不一致性；
   - 2) 二类是以硬件为基础的做法；
   - 3) 主要是以软件为基础的做法


## 三、多处理机的并行性和性能
1、并行算法
   - 并行算法的定义和分类
     - 可同时执行的多个进程的集合，各进程可相互作用、协调和并发操作。
   - 并行算法的分类
     - 1）按运算对象：数值型和非数值型；
     - 2）按并行进程的操作顺序：同步、异步和独立型；
     - 3）按处理计算机任务大小：细粒度、中粒度和粗粒度；

   - 多处理机并行算法的研究思路
     - 1) 将大的应用程序分解成由足够多的并行处理的过程
     - 2）每个过程被看成是一个结点，将过程之间的关联关系用结点组成的树来描述。
     - 3) 研究程序段之间的并行问题就可设想成是对算术表达式如何并行运算的问难。

2、程序并行性的分析
   - 1）数据相关
   - 2）数据反相关
   - 3）数据输出相关

3、并行语言的并行解释

## 四、多处理机的操作系统

1、`主从型`操作系统
2、`各自独立型`操作系统
3、`浮动型`操作系统

## 五、多处理机的发展
1、多处理机的发展方向
   - 1）分布式共享存储器处理机
   - 2）对称多处理机
   - 3）多向量处理机
   - 4）并行向量处理机
   - 5）大规模并行处理机
   - 6）机群系统



