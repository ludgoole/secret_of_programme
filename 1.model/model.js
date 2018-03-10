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