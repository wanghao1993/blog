---
title: http各版本的区别
date: 2022-1-21
categories:
 - 网络
tags:
 - HTTP
---


##### 1.http0.9, 1.0, 1.1 2.0 3.0的区别

> http0.9 现在已经淘汰，最开始的版本，只支持get请求

> http1.0 在0.9的基础上增加一些特性
>> 1.增加了请求头和相应头
>> 2.响应对象不再是文本，可以是图片文件等
>> 3.支持post，head方法
>> 4.支持长链接，默认还是短连接
>> 5.增加了缓存机制，expires和since-last-modify

> http1.1
> > 1.默认长连接
> > 2.请求流水线，一个tcp可执行多个请求，不需要重复建立连接
> > 3.提供范围请求content-range
> > 4.提供HOST
> > 5.增加了一些缓存字段
> > 6.新增了多个状态码

> http2.0
> > 1.服务端推送
> > 2.多路复用
> > 3.头部压缩
> > 4.二进制分帧
> > 5.请求优先级

=====未完
> http3.0
> > 1.采用QUIC
> > 2.解决了队头阻塞，拥塞控制
> > 3.两个密钥
> > 4.前向安全问题

##### 2.tcp和udp的区别

    1.TCP需要先建立连接，udp不需要
    2.tcp点对点，udp随意
    3.tcp面向字节流，可拆分，udp面向报文不可拆分
    4.udp主机不需要维护很多的状态
##### 3.http和https的区别

    1.http端口是80 https是443
    2.http是不安全的，明文传输，https传输过程是加密的，比较安全
    3.https和http链接方式不同，http是无状态的链接，https是由SSL+http协议构建的可进行加密传输，身份认证的网络协议

##### 4.https原理
    本质是http+ssl加密。
    1.首先http向服务端发送请求，
    2.服务端发送证书过来
    3.客户端验证证书是否合法，有效，生成公钥，公钥加密后传输给服务端
    4.服务端拿到加密后的消息，然后用私钥解密，拿到密钥
    5.建立ssl链接，https通道建立
##### 4.三次握手和四次挥手
    三次握手   
    目的：确定建立起了可靠的连接
    1.客户端向服务端发送SYN
    2.服务端接收到SYN，发送自己的ACK和SYN
    3.客户端接收到发送自己的ACK

    四次挥手
    目的：确保大家完全断开
    1.客户端发送FIN给服务端，进入FIN_wait状态
    2.服务端接收到后，发送ACK=1到客户端，进入CLOSE_wait状态
    3.服务端将FIN置为1，然后进入lact_ack状态
    4.客户端收到FIN，发送ACK到服务端，服务端关闭，客户端变成Time_wait状态
    5.等待2个MSL后客户端关闭
##### 5.如何保证不丢包和有序进行

##### 6.get和post请求的区别

##### 7.cookie

##### 8.一个http连接的过程经历哪些步骤