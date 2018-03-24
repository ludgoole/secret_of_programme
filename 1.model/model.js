//                 arrangement               //
/**********************************************
*          UI + Client + Server + SQL
*********************************************/

 //                 class                    //
/**********************************************
*            constructor + function
**********************************************/

//                    prop                   //
/**********************************************
*   position + size + color + opacity + data-
**********************************************/

//                    data                   //
/**********************************************
*       input + global + param + fn + sql
**********************************************/

//                 formula                   //
/**********************************************
*              get + set + change
**********************************************/

/*
 *UI：show hide change animation 
 *JS：class data formula
 *Net: server sql interface result
*/

//////////////////////////////////////////////////////////
//      某个对象在某个命令下做对应的事情改变属性值          //
//////////////////////////////////////////////////////////

eg1: 轮播图
UML
/*
*class：img btn dot
*command: click mouseMove hover
*function: moveToLeft moveToRight moveToThis showPrev showNext showThis show hode autoPlay stop
*props: position size index
*data: width 
*/
Sequence
/*
 *1.NextBtn.click
 *2.img.moveToRight() dot.showNext() 
*/
/*
 *1.dot.hover
 *2.dot.showThis() img.moveToThis() btn.show
*/
/*
 *1.img.hover
 *2.img.stop() btn.show
*/
/*
 *1.img.mouseMove
 *2.img.moveToLeftOrRight dot.showPrevOrNext btn.show
*/

eg2: mahjong
UML
/*
 *class: holds hung folds client
 *command: chupai mopai peng gang hu 
 *function: update show hide showThis action mopai
 *props: length index
 *data: pai 
*/
Sequence
/*
 *1.client.chupai
 *2.client.hold.update() client.hung.show() 
 *3.client.fold.show() 
 *4.nextClient.mopai() / otherClient.action()
*/
/*
 *1.client.peng
 *2.client.pengGangs.show() client.hold.update() 
 *3.client.chupai() 
*/

react
/////////////////////////////////////////////////////////////////////////////////////////////////////
//       DOM  =>router  =>page  =>component  =>class  =>functiion  =>get set change  =>date        //
//array: arr[] indexOf push pop unshift shift splice slice sort reverse map filter reduce join
//string: charAt indexOf substring split
//data: this.state  param 
/////////////////////////////////////////////////////////////////////////////////////////////////////

vue
/////////////////////////////////////////////////////////////////////////////////////////////////////
//            index.html  =>main.js  =>router  =>App  =>view  =>component  =>store                 //
//index.html: 最终渲染 输出结果
//main.js: 最终单页 挂载节点 
//router: 最终目录 单页走向
//App: 单页盒子 容纳单页
//view: 合成单页 组件集合 
//component: 单体组件 
//store: 最终数据


//                                            数据流                                                //
//data: 自给自足
//props: 啃老族
//store: 宝藏  

//                                            store                                                //
//state：数据库 
//mutations: 增删改查
//actions: 执行 || commit

//                                            数据传递                                              //
//store 元数据
//state => state.activities.events 赋值
/////////////////////////////////////////////////////////////////////////////////////////////////////

redux
/////////////////////////////////////////////////////////////////////////////////////////////////////
//            index.html  =>index.js  =>routerMap  =>modules  =>container  =>component  =>store                 //
//index.html: 最终渲染 输出结果
//index.js: 最终单页 挂载节点 
//routerMap: 最终目录 单页走向
//modules: 合成单页 组件集合 
//component: 单体组件 
//store: 最终数据


//                                            数据流                                                //
//state: 自给自足
//props: 啃老族
//store: 宝藏  

//                                            store                                                //
//reducer：数据库 增删改查 
//store: 获取数据库
//actions: 命令 
//dispatch: 执行
//connect: 连接


//                                            数据传递                                              //
//<Provider store={store}> 元数据
//@connect(state => ({ counter: state.counter }),ActionCreators) 连接
//const { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props 赋值
/////////////////////////////////////////////////////////////////////////////////////////////////////