import{_ as l}from"./chunks/learn_1.79a9ca9d.js";import{_ as i,o as e,c as o,O as c}from"./chunks/framework.0bc17605.js";const d="/website/learn_2.png",S=JSON.parse('{"title":"第二章 数据表示、寻址方式与指令系统","description":"","frontmatter":{},"headers":[],"relativePath":"computer/two.md","filePath":"computer/two.md","lastUpdated":1660835860000}'),a={name:"computer/two.md"},u=c('<h1 id="第二章-数据表示、寻址方式与指令系统" tabindex="-1">第二章 数据表示、寻址方式与指令系统 <a class="header-anchor" href="#第二章-数据表示、寻址方式与指令系统" aria-label="Permalink to &quot;第二章 数据表示、寻址方式与指令系统&quot;">​</a></h1><h2 id="一、-数据表示" tabindex="-1">一、 数据表示 <a class="header-anchor" href="#一、-数据表示" aria-label="Permalink to &quot;一、 数据表示&quot;">​</a></h2><p>1、数据表示与数据结构</p><ul><li><code>数据表示</code>指的是能由机器硬件直接识别和引用的数据类型。 <ul><li><code>定点数据</code></li><li><code>逻辑数据</code></li><li><code>浮点数据</code></li></ul></li><li>串、队、栈、向量、阵列、链表、树、图等是软件系统所要处理的各种<code>数据结构</code>，它们反映了面向应用所要用到的各种数据元素或信息单元之间的结构关系。 <ul><li><code>数据结构和数据表示是软、硬件的交界面</code></li></ul></li><li><code>机器的运算类指令和运算器结构主要是按机器有什么样的数据表示来确定的</code>。 <ul><li><img src="'+l+'"></li></ul></li></ul><p>2、高级数据表示</p><ul><li><p>★<code>定义数据表示</code></p><ul><li>自定义（Self-defining）数据表示包括<code>标志符</code>数据表示和<code>数据描述符</code>两类。</li><li><code>标志符</code><ul><li><code>为了缩短高级语言与机器语言的这种语义差距， 可让机器中的每个数据如下所示，都带有类型标志位</code></li><li><code>标志符数据</code>表示的主要优点为： <ul><li>①简化了指令系统和程序设计。</li><li>②简化了编译程序。</li><li>③便于实现一致性校验。</li><li>④能由硬件自动完成数据类型的变换。</li></ul></li></ul></li><li>数据描述符 <ul><li>为进一步减少标志符所占的存贮空间，对于向量、数组、记录等数据，由于每个元素具有相同的属性，为此发展出数据描述符</li></ul></li></ul></li><li><p>向量、数组数据表示</p><ul><li>含义：<code>有序排列的数据元素</code>称为<code>向量</code>（向量数据）</li><li><code>向量数据的三要素</code>： <ul><li>①<code>基地址</code>：存放第一个向量数据的地址；</li><li>②<code>向量长度</code>：向量数据个数；</li><li>③<code>位移量</code>：与基地址的距离。</li></ul></li></ul></li><li><p><code>堆栈数据</code>表示</p><ul><li>（1）有若干高速寄存器组成的硬件堆栈，并附加控制电路让它与主存中的堆栈区在逻辑上组成一个整体，使堆栈的访问速度是寄存器的，堆栈的容量是主存的。</li><li>（2）有很丰富的堆栈操作类指令且功能很强， 直接可对堆栈中的数据进行各种运算和处理。</li><li>（3）有力地支持高级语言程序的编译。假定有算术赋值语句F=A<em>B+C/(D-E)，可以很容易通过用逆波兰表达式AB</em>CDE-/+</li><li>（4）有力地支持子程序的嵌套和递归调用。</li></ul></li></ul><p>3、引入数据表示的原则</p><ul><li>（1）一方面是看系统的效率有否提高，即是否减少了实现时间和所需的存贮空间。</li><li>（2）另一方面是看引入这种数据表示后， 其通用性和利用率是否高。</li></ul><p>4、浮点数尾数基数大小和下溢处理方法的选择</p><ul><li><p>浮点数尾数基值的选择</p></li><li><p>浮点数一般采用<code>阶码</code>和<code>尾数</code>两部分表示。由于计算机字长有限，浮点数只能表示出<code>数轴上分散于正、负两个区间上</code>的<code>部分离散值</code></p></li><li><p>使用<code>rm</code>来表示其<code>浮点数尾数的基</code>，rm使用<code>二进制</code></p><ul><li>根据浮点位数的基，求规格化尾数的值 <ul><li>最小尾数公式：1 × r (-1 m)</li><li>最大尾数公式：1 - 1 × r (-m&#39; m)</li></ul></li></ul></li><li><p>★浮点数尾数的下溢处理办法</p><ul><li>截断法（最简单）</li><li>舍入法</li><li>恒置&#39;1&#39;法</li><li>查表舍入法</li></ul></li></ul><h2 id="二、寻址方式" tabindex="-1">二、寻址方式 <a class="header-anchor" href="#二、寻址方式" aria-label="Permalink to &quot;二、寻址方式&quot;">​</a></h2><p>1、寻址方式的三种面向</p><ul><li><code>面向寄存器</code>、<code>堆栈</code>和<code>主存</code>的寻址方式。</li></ul><p>2、两种：占用操作码来指明；不占用操作码、在地址码部分设置专门的寻址方式字段。</p><p>3、★程序在主存中的定位技术</p><ul><li><code>逻辑地址</code>是<code>程序员编程时使用</code>的地址。<code>主存物理地址</code>是程序在<code>主存中的实际地址</code>。</li></ul><p>4、物理主存中信息的存储分布</p><ul><li>信息按整数边界存储对于保证<code>访问速度</code>是必要的，但它会造成存储空间的浪费。</li></ul><h2 id="三、-指令系统的设计和优化" tabindex="-1">三、 指令系统的设计和优化 <a class="header-anchor" href="#三、-指令系统的设计和优化" aria-label="Permalink to &quot;三、 指令系统的设计和优化&quot;">​</a></h2><p>1、指令系统的设计原则</p><ul><li>（1）是否有利于满足系统的基本功能；</li><li>（2）是否有利于优化计算机的性能价格比；</li><li>（3）是否有利于指令系统今后的发展和改进；</li></ul><p>2、 ★指令操作码的优化</p><ul><li><code>指令</code>是<code>操作码</code>和<code>地址码</code>两部分组成的。指令格式的优化是指如何用最短的位数来表示指令的操作信息和地址信息，使程序中指令的平均字长最短。</li><li><code>★哈夫曼编码</code>:在操作码的优化上，要用到哈夫曼压缩概念。其基本思想是，对发生概率最高的事件采用最短的位数（时间）来表示（处理），而对出现概率较低的事件允许用较长的位数（时间）来表示（处理），使得表示平均位数（时间）缩短</li><li><code>扩展操作码编码</code>是界于定长二进制编码和完全的哈夫曼编码之间的一种编码形式，操作码不是定长的，但只有有限几种码长，仍利用短码表示高概率的信息，长码表示低概率的信息。但必须遵守短码不能是长码的前缀的原则。</li></ul><p>3、指令字格式的优化</p><ul><li>采用扩展操作码，根据指令的使用频率选择合适的编码方式，缩短平均码长；</li><li>采用多种寻址方式，以缩短地址码的长度；</li><li>采用0、1、2、3等多地址制，以增强指令的功能，从宏观上缩短程序的长度；</li><li>在维持指令字在存储器中按整数边界存储的前提下，使用多种不同的指令字长度。</li></ul><h2 id="四、-指令系统的发展和改进" tabindex="-1">四、 指令系统的发展和改进 <a class="header-anchor" href="#四、-指令系统的发展和改进" aria-label="Permalink to &quot;四、 指令系统的发展和改进&quot;">​</a></h2><p>1、两种途径和方向（CISC和RISC）</p><ul><li><p>进一步增强原有指令的功能以及设置更为复杂的新指令来取代原先由软件子程序完成的功能，实现软件功能的硬化。按此方向设计的计算机称为CISC。</p></li><li><p>通过减少指令种数和简化指令功能来降低硬件设计的复杂度，提高指令的执行速度，按此方向设计的计算机称为RISC。</p></li></ul><p>2、按CISC方向发展和改进指令系统</p><ul><li>面向目标程序的优化</li><li>面向高级语言的优化</li><li>面向操作系统的优化</li></ul><p>3、按RISC方向发展和改进指令系统　★</p><ul><li>（1）CISC的问题：指令系统庞大；操作繁杂、执行速度很低；高级语言编译程序选择目标指令的效率降低；各指令的使用频度都不会太高</li><li>（2）RISC的基本原则： <ul><li>大大减少指令系统可采用的寻址方式的种类</li><li>让所有指令都在一个机器周期内完成</li></ul></li><li>RISC的技术特点　★ - <img src="'+d+'"></li></ul>',32),t=[u];function p(r,s,n,_,h,m){return e(),o("div",null,t)}const b=i(a,[["render",p]]);export{S as __pageData,b as default};
