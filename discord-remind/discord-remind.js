// ==UserScript==
// @name         discord-ssv-desposit-邮件提醒
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/channels/936177490752319539/936275762942709800
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //初始化邮箱服务
    emailjs.init("user_9IMa3lS8FpZuv7IBzCrmn");
    const consoleTip="discord-ssv-desposit-邮件提醒:";
    let rushTime="",
        timer=5000,//监听循环时间
        to="1023849792@qq.com"; //提醒目标邮箱

    setInterval(()=>{
     const chatItem=$("div[role='group'] li");
     console.log(consoleTip,'当前聊天项数:',chatItem.length);
     if(chatItem.length>0){
       const lastItem=chatItem[chatItem.length-1];
       const time=$(lastItem).find("time").text();
       if(rushTime===""){
          console.log(consoleTip,"初始化时间");
          sendEmail("【Dean】SSVNetWork通知初始化成功", "初始化成功",to);
          rushTime=time;
       }
       if(rushTime!==time){
          console.log(consoleTip,"发送邮件");
          sendEmail("【Dean】SSVNetWork开始放水", "Dean准备开水，准备接水！！",to);
          rushTime=time;
       }
       console.log(consoleTip,'心跳时间:',time,'--',new Date());
     }else{
        console.error(consoleTip,'不存在时间,可能网页格式已更改:');
     }
    },timer);

    function sendEmail(tip,text,to){
           emailjs.send("service_7pfqlgk","template_owwyolp",{
               text,
               tip,
               to
           }).then(()=>{
               console.log(tip,"发送邮件成功【√】");
           },()=>{
               console.log(tip,"发送邮件失败【X】");
           });
    }


})();