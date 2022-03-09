# discord-remind 
用于提醒discord聊天室最新消息。

## 安装
打开谷歌应用安装以下插件:
- 安装[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/)dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-TW
- 安装[Disable Content-Security-Policy](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden?hl=zh-CN)

- 导入到discord-remind.js到Tampermonkey


## 修改discord-remind.js配置
```
    //初始化邮箱服务
    ......
    let rushTime="",
        timer=5000,//监听循环时间
        to="1023849792@qq.com"; //提醒目标邮箱（修改成你自己的邮箱最好能提醒到微信的邮箱，比如和微信关联的QQ邮箱）
```
> 请不要滥用邮件提醒


## Discord的SSV Network Desposit 领水提醒实例 

直接打开[领水频道](https://discord.com/channels/936177490752319539/936275762942709800),选择**step-1-read**,Dean每次发水之前都会更新此频道信息,所以只需要监听这个频道的最新消息，就是Dean的发水消息。

- 选择**step-1-read**频道
- 打开Disable Content-Security-Policy
- 确保油猴已经加载
- OK，查询状态，如下图，代表加载脚本已加载成功,脚本已


![image](/assets/images/docs/discord-remind/img.min.png)