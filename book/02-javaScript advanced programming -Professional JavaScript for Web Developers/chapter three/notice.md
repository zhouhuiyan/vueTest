# 笔记
### 标识符命名规则
1. 第一个字符必须是字母、下划线（_）或美元符号（$）
2. 其他字符可以是字母、下划线、美元符号和数字
> 一般采用驼峰式命名，即第一个字母小写，剩下的每个单词的首字母大写

firstSecond

myCar

doSometingImportant

### 关键字
以下就是 ECMAScript的全部关键字（带*号上标的是第 5 版新增的关键字）
|  1   |   2   |
|   4   |  5  |
* break
* do
* if
* else
* for
* in
* while
* continue
* function
* switch
* case
* try
* catch
* throw
* debugger*
* finally 
* default
* delete
* new 
* return
* this
* with
* typeof
* var 
* void
* instanceof

### 保留字

以下是 ECMA-262 第 3 版定义的全部保留字
|                         |                    |                   |                 |
|:----                    |:---                |:----              |:---             |
|abstract                 |enum                | int               |short            |
|boolean                  |export              |interface          |static           |
|byte                     |extends             |long               |super            |
|char                     |final               |native             |synchronized     |
|class                    |float               |package            |throws           |
|const                    |goto                |private            |transient        |
|debugger                 |implements          |protected          |volatile         |
|double                   |import              |public


第五版的非严格模式将保留字缩减为一下几个：
* class 
* enum
* extends
* super
* const 
* export
* import

在严格模式下还对这些做了限制
* implements
* package
* public
* interface
* private
* static
* let 
* protected
* yield


