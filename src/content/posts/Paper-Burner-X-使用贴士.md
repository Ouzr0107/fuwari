---
title: Paper Burner X 使用贴士
published: 2025-11-13
description: '这个开源工具的介绍里面教程放得乱七八糟的，有的甚至是我在代码库里搜索才找到的，感觉里面的 wiki 要快点完善了。'
image: ''
tags: ['工具', '教程']
category: '学习'
draft: false 
lang: ''
---

## 网址

在线体验：[https://paperburner.viwoplus.site/](https://paperburner.viwoplus.site/)

虽然仓库里面有前端部署的教程，但是毕竟是在 vercel 上，延迟比较大的同时，在使用过程中还会出现 AI 分析未响应的问题（我暂且认定是这里导致的问题），所以直接用作者已经搭好的网站即可。数据是放在浏览器本地的，所以只要不随便清理浏览器存储，应该不会出太大问题，更不用担心隐私的问题。（API Key 应该没有问题）

## API 配置

需要在浏览器中配置以下 API 密钥（本地存储）：

1. **OCR 服务**

   - [MinerU](https://github.com/opendatalab/MinerU)
   - [Doc2X](https://doc2x.noedgeai.com/)
   - [Mistral](http://mistral.ai/)

2. **翻译模型**

   - [DeepSeek](https://deepseek.com/)
   - [Google Gemini](https://makersuite.google.com/)
   - [Anthropic Claude](https://www.anthropic.com/)
   - [阿里通义千问](https://www.aliyun.com/)
   - [火山引擎](https://www.volcengine.com/)
   - 自定义模型端点...

鉴于大家不是很熟悉 API 的申请，这里以 MinerU 和 DeepSeek 为例。

### MinerU

该 API 作用于文档的 OCR 识别。

首先，进入[该网址](https://mineru.net/apiManage/token)，登录过后左侧选择 API 申请，如实填写即可，过几分钟刷新网页就可以选择 API 管理。

![API 管理](https://github.com/Ouzr0107/picx-images-hosting/raw/master/图片.86u2nk56ze.webp)

选择创建 API Token，名字随便输即可。接着在 API Tokens 的操作这一栏复制，填入图示位置的 MinerU Token 中。Worker URL 可以填如图[我的网址](https://pb-ocr-proxy.wangzhuo0107.workers.dev)，反代应该无伤大雅。

![MinerU 设置](https://github.com/Ouzr0107/picx-images-hosting/raw/master/图片.4n84xrg3pb.webp)

## DeepSeek

该 API 用于文档的翻译和分析。

进入 [DeepSeek 开放平台](https://platform.deepseek.com/usage)，登录过后选择去充值，这里我充了 10 元，并进行了测试，一篇论文的处理翻译加上 5、6 个问题，消耗的 Token 大概是 0.2元，感觉还不错，如果有比较好的渠道的话，欢迎向我推荐，毕竟囊中羞涩捏。

之后选择左侧的 API keys，同样创建 API key，但是请注意 **API key 仅在创建时可见可复制，请妥善保存**。我的话是直接复制到微信的文件传输助手了，你也可以放到别的只有自己可以看到的地方，毕竟**被发现**的话，会被用到**破产**！

接着就是在图示位置选择添加新 key 就 OK 啦。

![DeepSeek 设置](https://github.com/Ouzr0107/picx-images-hosting/raw/master/图片.491p6x2po9.webp)

## 工作台设置

如图设置（当然如果你是其他模型，就随你选啦）

![工作台设置](https://github.com/Ouzr0107/picx-images-hosting/raw/master/图片.9dddw79pv2.webp)

术语库的话，没有就新建一个，这个只能自己慢慢完善了。

## 处理，启动

所有设置完，就可以把要处理的论文 pdf 拖入文件上传中，选择开始处理。客观来讲，这个的处理速度是有点慢的，特别是比较大的论文的话，是需要一点时间的。但是读论文这种事，一般人也不会很心急的吧？所以慢慢等就好喽！

## 开始阅读

处理完毕的文档你可以直接下载查看，也可以选择左侧的历史记录，选择自己需要的论文点击开始阅读。

里面会跳弹窗让你选模式什么的，我记得自己好像输入的是 3，目前没感觉有啥区别。

里面我比较喜欢的是分块对比，毕竟我用的翻译软件是沉浸式翻译，这种双语可看让我比较适应。右下角会有一个小机器人图标，点击以后可以对论文进行 AI 的分析，只能说比拖到其他模型的对话框稍微方便那么一点点。如果它提示分析的 API 没有配置，你就在该对话框的右上边，有个小齿轮，里面可以设置使用的模型，像之前翻译的 API 一样设置即可。

## 总结

总的来说，这个工具还比较稚嫩，不完善不合理的设计还有很多，如果你不喜欢国产的小绿鲸，或者是觉得效果一般般的话，用这个尝试也是不错的，毕竟你充值的 API 就算这里不用，也有大把的工具可以用到。如果对教程有疑问或者有什么描述的不清晰的地方，欢迎提问以及建议。💗
