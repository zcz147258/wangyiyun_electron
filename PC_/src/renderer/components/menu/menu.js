/*
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-06 17:05:00
 */
//在渲染进程中使用Menu模块需要用到remote函数
var Menu = require('electron').remote.Menu;
//创建一个模板
var template=[
    {
        //父标题
        label:'文件',
        submenu:[
            {
                //添加快捷键
                accelerator:'ctrl+n',
                //子标题
                label:'新建文件',
                //子标题类型 type String (可选)-可以是 normal、separator、submenu、checkbox 或 radio。
                type:'checkbox',
                //点击事件
                click:function(){
                  alert("ctrl");
                  checked:true;
                }
            },
            {
                label:'新建窗口',
                type:'checkbox',
                click:function(){
                  alert("ctrl2");
                  checked:true;
                }
            }
        ]
    },

    {
        label:'编辑',
        submenu:[
            {
                label:'编辑文件'
            },
            {
                label:'编辑窗口'
            }
        ]
    },
]

//把模板添加到Menu菜单中
var m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);