#### 1、多继承实例
```ts
interface IParent1 { 
  v1:number 
} 
 
interface IParent2 { 
  v2:number 
} 
 
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
```
#### 2、类的继承
```ts
class Shape {
  Area:number
  static num:number;
  // 构造函数
  constructor(a:number) { 
     this.Area = a 
  } 
} 
 
class Circle extends Shape {
  private str2:string = "world"  
  disp():void { 
     console.log("圆的面积:  "+this.Area) 
  } 
}
  
var obj = new Circle(223); 
obj.disp()
```
#### 3、类和接口
类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
```ts
interface ILoan { 
  interest:number 
} 
 
class AgriLoan implements ILoan { 
  interest:number 
  rebate:number 
  
  constructor(interest:number,rebate:number) { 
     this.interest = interest 
     this.rebate = rebate 
  } 
} 
 
var obj = new AgriLoan(10,1) 
console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate )
```
#### 4、命名空间
* 命名空间使用 namespace 来定义
* 需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键
* 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它
```ts
// IShape.ts文件
namespace Drawing { 
    export interface IShape { 
        draw(); 
    }
}
```
```ts
/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
function drawAllShapes(shape:Drawing.IShape) { 
    shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
```
#### 5、模块
export 与 import
```ts
// IShape.ts文件
export interface IShape { 
   draw(); 
}
```
```ts
import shape = require("./IShape"); 
import circle = require("./Circle"); 
import triangle = require("./Triangle");  
 
function drawAllShapes(shapeToDraw: shape.IShape) {
   shapeToDraw.draw(); 
} 
 
drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle());
```

#### 6、声明文件
需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件   
使用 declare 关键字来定义它的类型   
**Calc.d.ts**文件
```ts
declare module Runoob { 
   export class Calc { 
      doSum(limit:number) : number; 
   }
}
```
