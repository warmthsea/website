# 第八章 数据流计算机和规约机

##  一、 数据流计算机

1、数据驱动的概念★
   - 冯诺依曼型计算机的特点是：
     - 在程序计数器集中控制下，顺序地执行指令，因此，它是以控制流方式工作的。
     - 由于本质上仍是指令顺序执行，这很难最大限度地发掘出计算的并行性。
   - 开发并行性的另一个途径是：改用`数据驱动`的数据流方式来工作。
   - `数据驱动`是指只要一条或一组指令所要求的操作数全部准备就绪，就可以立即激发相应的指令或指令组执行。执行结果的输出将送往等待这一数据的下一条或下一组指令。如果其中一些指令所需用到的数据全部准备就绪，就可以被激发执行。
     - 1）在数据流计算机上，不需要程序计数器；
     - 2）指令的执行基本是无序的，完全受数据流的驱动；
     - 3）部分有序的操作也不是由程序员指定的，受数据相关的制约；

2、数据流程序图和语言
   - 数据流程序图的基本结构

## 二、规约机
1、定义
   - 1）基于数据流的计算模型，归约机是需求驱动，执行的操作序列取决于对数据的需求，对数据的需求又来源于函数式车呢工序设计语言对表达式的归约。
   - 2）函数式语言是由所有函数表达式的集合、所有目标（也是表达式）的集合及所有由函数表达式到目标的函数集合三部分组成
   - 3）如果给出了一个属函数表达式集合中的复杂函数的表达式，利用提供的函数集合中的子函数经过有限次归约代换之后，总可以得到所希望的结果， 即由常量构成的目标。函数表达式指的是函数之间的映射。
   - 4）函数表达式的每一次归约，就是一次函数的应用，或是一个字表达式的代换。

2、特点
   - 1）归约机应当面向函数式语言， 或以函数式语言为机器语言的非Neumann型机器。
   - 2）具有大容量的物理存贮器并采用有虚存容量很大的虚拟存贮器系统， 具备高效的动态存贮分配和管理的软硬件支持， 满足归约机对动态存贮分配及所需存贮空间较大的要求。
   - 3）处理部分应当是一种含有多个处理器或多个处理机并行的结构形式，以发挥函数式程序并行处理的特长。
   - 4）采用适合于函数式程序运行的多处理器(机)互连的机构。
   - 5）为了减少进程调度及进程间通信的开销，尽可能把运行进程的结点机安排成紧靠该进程所需用的数据，并使运行时需相互通信的进程所占用的处理机也靠近。