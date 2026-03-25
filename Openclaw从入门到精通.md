# Openclaw从入门到精通

- Source: https://my.feishu.cn/docx/P6zsdsgYco6i4XxLeIccvlpvnQe
- Generated: 2026-03-25T10:02:33.346Z
- Format: cleaned markdown with TOC
- Based on: feishu-doc-P6zsdsgYco6i4XxLeIccvlpvnQe.md

## 目录

- 第一部分：OpenClaw 理论知识
  - 第一章：OpenClaw 是什么？
  - 第二章：核心特性与差异化优势
  - 第三章：系统架构与核心组件
  - 第四章：应用场景与潜力分析
  - 第五章：现存挑战与局限性
- 第二部分：小白一键部署篇
- 第三部分：进阶篇
- 第四部分：OpenClaw打造智能体军团（多 Agent）
- 第五部分：OpenClaw的实际应用场景
  - 例1：定时任务
  - 例2：Skill 即插即用
  - 例3：自然语言驱动复杂工作
  - 例4：收集整理信息
  - 例5：OpenClaw重塑工作流
  - 例6：Openclaw＋Seed2.0 Skills 做 AI 漫剧
  - 例7：数字人
  - 例8：传入发票自动解析入飞书多维表格发票系统
  - 例9：配合 ima skill 做知识管理
  - 例10：小度音箱+Openclaw
- 第六部分：好用 Skills 推荐
- 第七部分：资源推荐
- 鸣谢

## 前言

我们整理这个文档的本意是帮助那些想试试 OpenClaw 的朋友，当然 OpenClaw 本身更新也非常快速，我们也尽量让本文档保持最新，如发现和最新有出入也欢迎联系我们修改，请轻喷。另外我们的文档大部分都是基于实际体验测试来手动编写的，可放心使用。整理不易，感谢支持🙏

### 关于作者

一个头发茂密的 AI 博主，欢迎关注苍何，一起玩 OpenClaw，回复：OpenClaw，加入交流群

## 第一部分：OpenClaw 理论知识

理论部分，不想看的可以直接跳过到其他部分哈。
### 第一章：OpenClaw 是什么？

OpenClaw 是一个开源的个人 AI Agent（智能体）框架，由奥地利开发者 Peter Steinberger 于 2025 年底发布，2026 年 1 月在技术圈爆红。它标志着 AI 从"对话工具"向"自主执行者"的范式转变。它不是一个 App，而是一个"住在电脑里的 AI 管家"。

地址是：https://openclaw.ai/

创始人：OpenClaw 的创始人 Peter Steinberger 是奥地利知名连续创业者：
职业经历：曾创立 PSPDFKit 公司，开发出全球领先的 iOS PDF 处理框架，客户包括苹果、Adobe 等科技巨头
退休与回归：2021 年以约 1.19 亿美元出售 PSPDFKit 股份后宣布退休，四年后因"创作欲望"重返技术领域
开发理念：OpenClaw 最初只是他 2025 年底的"周末项目"，初衷是为自己打造一款能自动化处理日常事务的工具，没想到在 GitHub 发布后迅速爆红
Steinberger 的技术背景（深耕底层系统开发）解释了 OpenClaw 为何在架构设计上如此注重本地优先和系统级操作能力。

命名变迁史：三天两次改名的传奇（Clawbot→Moltbot→OpenClaw）

第一阶段：Clawd / Clawdbot（2025年11月-2026年1月26日）
Claw：龙虾的爪子，致敬 Anthropic Claude 加载界面中的卡通龙虾形象
Clawd：与 Claude 谐音，暗示项目基于 Claude 模型构建

爆红数据：发布后 24 小时内 GitHub 斩获 9,000 Star，一周内突破 60,000 Star：

第二阶段：Moltbot（2026年1月27日-1月29日）
改名原因：Anthropic 法务团队于 1 月 27 日发出"友好建议函"，指出 Clawd/Clawdbot 与 Claude 商标过于相似，存在侵权风险。

改名风波：更名过程堪称"数字抢劫案"：
Steinberger 在凌晨 5 点的 Discord 会议中决定改名
twitter 账号 @clawdbot 在10秒内被加密货币抢注机器人占领，立即发布虚假的 $CLAWD 代币钱包地址
Steinberger 误操作将个人 GitHub 账号而非组织账号重命名，导致原用户名 @steipete 被机器人抢走
假币市值一度飙至 1600 万美元后暴跌 90%，Steinberger 不得不多次发推辟谣："永不发币"

新名寓意：Moltbot 取自 Molt（蜕皮），象征龙虾蜕壳成长，寓意项目的进化与蜕变

第三阶段：OpenClaw（2026年1月30日至今）
最终定名：团队吸取前两次教训，在改名前完成了：
全球商标检索（确保无冲突）
域名购买与社交账号保护
社区投票确认

命名含义：
Open：强调开源、开放、透明的理念
Claw：保留龙虾爪元素，致敬项目起源，象征"抓取"和处理数字任务的能力

为什么它火了？
OpenClaw 在 2026 年 1 月的爆发并非偶然：
时机精准：正值 AI 从"对话"向"Agent"转型的临界点，市场渴望能真正"干活"的 AI
硬件联动：项目推动了 Mac mini（尤其是 M4 版本）的热销，因为用户需要一台 24 小时开机的低功耗设备作为宿主
名人背书：AI 大神 Andrej Karpathy（前 Tesla AI 负责人、OpenAI 创始成员）发推称赞这是"最接近科幻'起飞'的场景"
社交实验：基于 OpenClaw 构建的 Moltbook（AI Agent 专属社交网络，只有 AI 能发帖，人类只能围观）引发全网热议

### 第二章：核心特性与差异化优势

实用方便：
我认为这是最重要的一点，也是它为什么会爆火的根本原因。它让普通人第一次真实的看到了未来世界的雏形。虽然现在它还相当不完善，但却是实实在在的能让普通人也看到未来世界的样子。
传统 AI：被动响应，数据上云。 采用“一问一答”模式，每一步都需要用户确认。由于文件必须上传至第三方云端，处理复杂任务时既繁琐又存在隐私泄露风险。
OpenClaw：本地指令，自主闭环。 真正做到"一句话搞定一整件事"。任务调度、文件处理、工具执行均在本地环境完成，原始文件不向第三方云端上传。相比传统AI需将完整文件提交至云端处理，OpenClaw仅需向模型传输必要的指令和上下文，显著降低数据暴露范围。配合本地大模型（如Ollama）可实现完全离线运行，满足高隐私场景需求。

24×7小时驻留性：
传统AI：按需启动，用完即走。每次使用需打开特定App或网页，对话结束后进入"休眠"状态，无持续监听能力，无法执行定时或触发式任务。
OpenClaw：常驻后台，随时待命。作为系统守护进程持续运行，通过Gateway架构实时接收来自各平台的指令，可执行定时任务（如"每天早上8点检查邮件"）和事件驱动操作（如"文件夹有新文件时自动处理"）。

高扩展性：
传统AI：封闭生态，受限于厂商。仅能使用官方提供的插件或功能，用户无法自定义能力边界，新功能需等待厂商更新。
OpenClaw：模块化Skill，社区驱动。通过以Markdown为接口定义的Skill包扩展功能，Skill包含描述文件（SKILL.md）及可选的执行脚本、二进制工具等，支持从ClawHub市场一键安装，或自行开发私有Skill。

跨平台矩阵：
传统AI：封闭App，割裂体验。必须在特定网页或App内使用（如打开ChatGPT网页），无法融入用户已有的工作流程和通讯工具。
OpenClaw：与平台无关，无缝嵌入。通过Gateway架构接入用户日常使用的通讯平台（Discord/Telegram/飞书/企业微信等），在不改变用户习惯的情况下提供服务。

### 第三章：系统架构与核心组件

“大脑”：模型层：
你可以自定义你的”大脑“，OpenClaw 并不固定使用某一个 AI。你可以给它接入 Claude、chatGPT或者国产的 DeepSeek等任何支持OpenAI API协议的大模型。

“手脚”：执行器：
这是OpenClaw区别于普通聊天机器人的核心组件。它能直接管理你电脑里的文件系统、终端和浏览器。当"大脑"规划好任务步骤后，执行器就像手一样去实际操作——翻找硬盘、点击网页、运行命令，完成具体动作。

“外联部”：接入适配器 ：
它决定了你通过什么渠道跟你的AI交流。无论你是用Discord这种通讯平台，还是用飞书这种办公软件，OpenClaw都能听懂。它既负责把你的指令传进去，还可以把干完活的结果送出来。

“档案室”：持久化记忆：
它拥有长效记忆。即使重启电脑，它依然会记得你。它还会把你的操作偏好、常用文件路径、甚至之前的对话重点都存在本地的“档案袋”里。

### 第四章：应用场景与潜力分析

#### 4.1 应用场景

并不是所有事情都适合交给OpenClaw去做，任何需要不断做决策，不断进行调整的事情都不适合交给它来完成。反之，我们就可以推出它适合帮我们来做什么，那就是规则明确、可机械执行、步骤标准化的任务。
比如：文件整理，定时发送消息/邮件，监控文件夹/网页的变化并总结通知，简历/文档的初次筛选。
#### 4.2 潜力分析

从“助理”到“数字分身”：随着它对你本地文件和操作习惯的记忆加深，它会越来越像你。未来，它可能在你开会时，自动帮你过滤不重要的邮件，并模仿你的口吻回复那些“收到请回复”的消息。
私有化 AI 生态的基石： 随着大家对数据隐私的重视，OpenClaw 这种“任务调度与数据存储在本地、模型推理可自主选择”的模式，将成为企业和家庭构建私有 AI 的标准方案。
Skill 商店的爆发：想象一下，未来你可以在ClawHub社区下载别人分享的"一键报税Skill"、"一键剪辑Skill"，像安装手机App一样简单地扩展你的AI能力。

### 第五章：现存挑战与局限性

配置门槛较高：
根据个人能力不同，第一次配置可能就需要花费数小时，期间还会遇到各种问题。

持有成本与 Token 消耗：
实现 24×7 全天候响应需租用云服务器或保持本地设备常开，这是一笔开销。而OpenClaw 又属于“重 Token 消耗”应用，且与国内大模型的适配度不及国外大模型，但使用国外大模型会产生较高的 API 费用，那这又是一笔开销。

权限安全隐患：（千万千万不要在自己的主电脑上部署！！！）
因为OpenClaw 拥有极高的文件管理与命令执行权限。在“自主闭环”的同时，若指令存在歧义或模型误解（如误删、误操作），可能导致不可逆的数据损失或财产风险。

OpenClaw 绝非 AI Agent 的终极形态，而是 Agent 的一个很好的过渡形态。目前 OpenClaw 依旧有不少问题，比如耗费大量 token，记忆、安全问题等。

我们不一定是需要 OpenClaw，我们真正需要的是一个能懂我们的 Agent 私人助理，私人化的 AI 伙伴未来一定是很大的趋势。

## 第二部分：小白一键部署篇

OpenClaw 你可以部署在自己的电脑上，也可以部署在各个大厂提供的平台。对小白特别友好，无需配置模型，无需购买服务器，甚至无需复杂的配置，只需要动动手点点就好了。不过置换的是，你需要购买平台对应的会员之类的。

### 1、扣子 OpenClaw

打开：https://www.coze.cn/

注册登录后，按照箭头选择一键部署：

3 分钟快速部署：

当前「OpenClaw 部署」仅面向个人高阶版、个人旗舰版、企业标准版以及企业旗舰版用户开放限时体验。

最低可以购买高阶版，99 一个月，然后就可以体验了。

选择模型和版本后，就能一键部署了，部署好了之后：

如果需要配置飞书渠道，可以参考如下配置：

点击配置，去创建：

做个授权，等待个几秒钟，机器人就创建成功了，可以按照这个视频来做配置：

在飞书里面就可以使用扣子的小龙虾了。

可以用来做啥呢？可做的还蛮多的，比如可以做数字人。

我只用丢一张照片，然后丢一张任意照片，就能让 OpenClaw 克隆该形象：

然后传任意一个语音文件丢给 OpenClaw，就能克隆这个声音。

然后用刚才克隆的形象和声音组合，让 OpenClaw 搜集今天的 AI 新闻，给我们来做个数字人播报：

橘子一岁的照片配合这个磁性的声音，好魔幻，好魔幻，哈哈哈哈。
不恶搞自己的博主不是好博主，豁出去了，把我的🐶照片克隆一下：

我的声音就不克隆了，不够性感，还是继续用这个美女的声音。

保命神明，仅用作交流学习，大家请谨慎使用，注意安全。

还是不够刺激？抖音上看到有些梗，有些有趣的爆款视频，也想复刻？
那就配合之前给大家分享的抖音视频下载 Skills，自动下载视频，提取视频中的音频，利用数字人技能自动克隆音色及形象。
比如，我想在抖音上刷到这个懂王的视频。

我直接丢给抖音链接给我的扣子 OpenClaw，让他先帮我无水印下载该视频：

然后让小龙虾提取音频：

然后克隆声音：

但当我想要克隆懂王形象的时候，不让克隆了。

ok，那就用自己的形象，懂王的声音，来生成一段数字人视频不😂

扣子他们还搞了个 Agent 交流平台，目前已经有 13634 多个 Agent 了。

我们也可以把自己的小龙虾注册上去，然后发帖子和别的小龙虾一起互动玩起来。
注册也很简单，你可以像我一样给这个提示词：

你去这里 https://instreet.coze.site/skill.md 注册一个InStreet 账号，然后发帖推广一下苍何这个 AI 博主，并夸下他

我的虾就立马发了贴夸我的帖子，并且有别的虾来评论了：

大家都可以吧自己的小龙虾注册上去玩玩。
然后是需要安装数字人 Skills，我用的是国内比较出名的飞影数字人，在 clawhub 中搜索下  flyworks-avatar-video：

然后下载这个技能压缩包在电脑：

然后在飞书 bot 中把这个安装包发给扣子小龙虾，让他自己安装下：

PS：所有的外部技能安装都可以用这种方法。
需要配置一个 API，你可以打开下面的链接：

https://hifly.cc/p/NJb1xnB5OZhYFbHp
注册后，点击个人中心获得 API：

你可以看到上面消耗的额度什么的，你用这链接注册理论上是有 1000 积分可以体验。
不过要想生成视频，就需要买个什么小龙虾套餐，要 249 一个月，填个邀请码「sc8OpCT1Zfs」能多获得 5000 积分，加起来差不多可以生成 88 分钟的视频。如果是体验够玩了我觉得。

然后把你的 key 丢给 openclaw，让他配置下，接下来，你就可以克隆，然后生成数字人玩了。
说到扣子，很多人还停留在过去仅仅能做智能体的时代，现在的扣子让人感觉不一样了。
前端时间推出了技能商店，给创作者能直接通过技能赚钱，我也发了好几个技能上去：

当然，我的技能目前还都是免费的，大家可以在扣子上直接免费使用。
除此，扣子还推出了扣子编程，能用自然语言做应用，给很多不懂代码但是想用 AI 做应用的小白一个很好的入口。
除了做应用，还可以用嘴做工作流，做 Agent，做技能等。

其实他这个扣子小龙虾也是通过扣子编程的方式搭建的一个应用：

你是可以直接在这里改小龙虾的各种配置，以及安装技能，看使用情况等，都是非常方便的：

我也专门写了一篇公众号文章，感兴趣的也可以去看看。

https://mp.weixin.qq.com/s/WlRQmZuI5DsMOWvos4JD8Q

### 2、Kimi OpenClaw

打开 Kimi 官网：https://www.kimi.com/

点击 Kimi Claw，简称 kimi 版小龙虾。

当你用你粗壮的大拇指点击创建时，等待个 1 分多钟就部署好了。

然后就可以在浏览器里面直接召唤出小龙虾。

在右侧可以手动对自己的龙虾改名和重启，这个相当于在云端给每个人开了个沙箱环境，然后在这个独立的环境中装了个 OpenClaw。

不过这个一键部署仅支持 Allegretto 及以上计划，大概 200，我之前买了所以就能直接创建。

这里自动配置的 Kimi K2.5 Thinking 模型会自动关联 Kimi Code 会员权益额度。

在使用记录这里也能看到具体的使用：

如果已经有自己的 OpenClaw，也可以通过安装 Kimi 插件的方式实现在 Kimi 里和 OpenClaw 聊天。

说实话，这个配置插件的方式只是多了一种渠道罢了，我这里就没把自己的龙虾关联过来，而是重新新建了一个。

毕竟新建一个干干净净的环境，想装啥 skill 就装啥，不用担心和自己本地的龙虾配置冲突，用起来反而更省心。

并且在飞书上做了集成，也就是我现在飞书上直接召唤 KimiClaw，整个配置过程，花了 3 分钟不到。

然后把小龙虾拉进群聊，大家一起吹水。

整个过程丝滑到有些怀疑人生，对小白来说简直太友好。

飞书如何快速接入，教程我放在文章后面吧，感兴趣的可以移步。

当在飞书里对话时，它会先给你个回复表情，代表已收到，还挺有用的，不然每次等待回复的过程以为挂了导致会重复发送。

ClawHub 是专门为小龙虾提供的 skill 仓库，这里有非常多好用的 skill。

地址：https://clawhub.ai/

在 KimiClaw 里，从 ClawHub 获取技能很简单，只需要跟他说需要的需求，就能快速安装好。

比如我的小红书封面图技能，下达指令后，快速安装，然后就可以直接使用这个技能生成小红书精美封面图片了。

除了这种方式，对于一些没有上到 ClawHub 的技能，也可以直接把 GitHub 项目地址丢给他，也能一键安装。

比较有意思的是，KimiClaw 可以打开浏览器后截图发我想要的信息，比如我想看看苹果最新官网有啥新东西，于是就可以直接问他。

基于此，我还发现一个比较好玩的玩法，就是你不用去装什么 API，你可以通过这种方式来监控你关注账号的最新动态。

他能够去查看最新的动态通过浏览器访问截图然后分析的方式，想想我们人不也是这样？打开，查看，这是绝对安全的方式，也不需要配置 API：

你可以一个定时任务，比如设置每 2 分钟就去截图一次，看看有没有更新。

拿这个来监控奥特曼，据说这家伙，2 月份从 19 号之后又要搞事，频发产品。

最近看 40W 推特大 V AlexFinn 的分享自己过去几周使用 OpenClaw，我觉得还挺有帮助的，他分享到自己用 OpenClaw 来构建第二大脑系统。

因为 OpenClaw 能保存记忆，完全可以把你的所有思考，所有想做的事情，都给 OpenClaw，当你真正想要应用的时候，你只需要问 OpenClaw，就能拿到结果。
比如当我在飞书中下达这个指令，它会帮我自动开发好这套系统。

我想构建一个第二大脑系统,可以查看我们所有的笔记、对话和记忆。请用Next.js构建出来，请直接给我应用。

接下来，我只需要把我的所思所遇所想通通丢给 KimiClaw：

今天看到一句话，帮我记下： 挣钱，靠手脚，拼的是眼力和体力，勤奋最重要。 赚钱，靠资本，拼的是脑力和心力，认知最重要。

由于我的 OpenClaw 是运行在 Kimi 提供的云环境中，所以他给了我一个云服务本地的地址，我打不开，让它自己帮我整个 HTTP 服务器。

但可惜，服务地址并打不开，估摸着是无法操控服务器开启端口，也到是有办法，可以部署到 vercel，或者让它截个图，先一饱眼福吧。

打开看看这个由 K 2.5 生成的页面，我是一眼就认出来了，哈哈。

稍微观察下就能发现，它把我和它的任务记录也都记录出来了👍。
以后有什么，直接丢给它，做第二大脑太舒服了。
下面介绍下接入飞书机器人步骤，非常简单，直接在 KimiClaw 里面提问说怎么接入飞书，它会一步步教你。
第一步，创建飞书机器人
访问飞书开放平台：https://open.feishu.cn/app，点击创建应用：

填写应用名称和描述后就直接创建：

点击添加应用能力，添加机器人。

第二步，配置权限
需要至少开通以下的权限：

可以在权限管理-开通权限这里选择需要的权限手动开通：

也可以直接导入以下权限配置即可：

{
"scopes": {
"tenant": [
"aily:file:read",
"aily:file:write",
"application:application.app_message_stats.overview:readonly",
"application:application:self_manage",
"application:bot.menu:write",
"contact:user.employee_id:readonly",
"corehr:file:download",
"event:ip_list",
"im:chat.access_event.bot_p2p_chat:read",
"im:chat.members:bot_access",
"im:message",
"im:message.group_at_msg:readonly",
"im:message.p2p_msg:readonly",
"im:message:readonly",
"im:message:send_as_bot",
"im:message.reactions:read",
"im:resource"
],
"user": ["aily:file:read", "aily:file:write", "im:chat.access_event.bot_p2p_chat:read"]
}
}

第三步，找到 App ID 和 App Secret
在凭证与基础信息中找到 App ID 和 App Secret，这个在飞书配置的时候会需要。

然后把 App ID 和 App Secret 发给 KimiClaw
第四步，事件与回调
在 KimiClaw 重启后，在飞书配置页点「事件与回调」，使用 长连接 接收事件，点击【保存】。保存后添加事件：im.message.receive_v1

待重启后，接下来就可以直接在飞书中使用了。
在飞书中的 bot 和 web 里的 bot 是同一个，消息也是通的。

### 3、飞书openclaw

2026 年 3 月 31 日 24:00 时（北京时间）前免费部署、每日免费 100 万 Tokens 额度！每日限量 10 万名，

主打一分钟极限部署，有手就行。如果部署的早的话，每天都有免费额度，如果找不到额度了，可能已经活动结束了，早不熟早优势。

可以电脑上点击链接：https://miaoda.feishu.cn/

点击创建：

进行一键配置就好了，当然你也可以直接手机打开飞书，搜索「妙搭」，然后手机上点几下就配置好了。

不到一分钟，就安装配置好，并且丝滑的链接上了飞书。

在飞书秒搭也能看到刚才创建好的 OpenClaw，同时也能删除和管理 OpenClaw。

比如当你的 OpenClaw 坏了，或者想定制一些什么功能，你就能直接在秒搭上修改了，比如我让我的小龙虾每次完成任务后都来个”已完成，苍何大大🩷”

我打开飞书开放平台，也看到了刚才自动创建的这个飞书机器人，可以说，体验丝滑到极致了。

和别的小龙虾不一样的是，在对话页面多了「快捷指令」和「设置」按钮，当点击快捷指令，会有 2 个功能：

/new：新建一个会话
/stop：阻断当前对话

讲真，这 2 功能还挺方便的，经常聊多了会出现上下文污染，有 /new 就可以重新开始一个对话。
出现龙虾瞎搞或者和预期不符时，也可以快速的用 /stop 命令制止他。
当你点击设置的时候，实际上就会崩到飞书秒搭小龙虾的设置界面了。

核心二，就是当小龙虾出问题，你得找得到地方排查问题，修复问题，或者配置，你可以在秒搭上找到你🦞，点击管理：

可以自定义你的小龙虾，也可以添加技能什么的：

核心三，就是要能自定义自己想要的 Skills，方法还是很多的，我比较直接暴力的用法是，把技能打包，直接飞书丢给 OpenClaw，然后让他自己安装。

比如我安装好了我自定义的生图技能，就能让 OpenClaw自由调用了：

可以干啥呢？

比如可以一句话创建飞书多维表格：

当然了，生成飞书的待办也是一句话需求，比如我把公司发票和会议纪要丢给他，OpenClaw 直接帮生成待办，并用文档发给我。

然后基于待办生成飞书的日程，AI 时代的办公就是这么朴实无华。

如果这还只是小打小闹，那基于这些元能力，配合上自定义加装的技能，可玩性就非常大了。

我安装上了 douyin-downloader 抖音视频下载及解析技能，配合我的视频深度解析 skill：canghe-volcengine-video-understanding。

就能直接将爆款抖音视频链接生成公众号文章，并保存在飞书文档中，配图会截取视频部分图片及生图，真正做到一键操作。

抖音视频链接直接可以通过技能下载：

解析视频，截取视频图片，生成公众号文章，放到飞书文档，一波流操作：

非常的丝滑，给个任务给 OpenClaw，这家伙就什么都帮我干好了。

原文详细地址：https://mp.weixin.qq.com/s/QKO0jbqol9LVbuhH9DQx-g
飞书官方教程：【飞书妙搭】全网最简单的 OpenClaw 真一键部署来了！｜限时免费，含高级玩法

### 4、腾讯OpenClaw——WorkBuddy

官网地址：https://www.codebuddy.cn/work/

这是腾讯 CodeBuddy 团队开发的一款桌面端 Agent，也可以用飞书、企业微信直接连接。

简单来说 WorkBuddy 是 AI 原生桌面 Agent，能自主完成很多的办公类自动化操作。像什么数据分析，做 PPT，文件管理，通通都可以完成。

不过不同的是，WorkBuddy Claw 可以通过企业微信、飞书、钉钉、QQ等日常 IM 工具中，通过手机直接指挥 WorkBuddy 干活。

打开 WorkBuddy，点击右上角个人按钮，选择「claw 设置」：

选择飞书集成：

可以看到需要这 2 个参数，下面就是需要去飞书开放后台搞到这 2 参数。

打开飞书开放后台，选择企业自建应用，创建企业自建应用：

飞书开放后台地址如下：

https://open.feishu.cn/app?lang=zh-CN
添加应用能力，选择添加一个机器人：

然后批量导入应用权限：

把这个权限全部复制到指定的地方就好。

{
"scopes": {
"tenant": [
"contact:contact.base:readonly",
"docx:document:readonly",
"im:chat:read",
"im:chat:update",
"im:message.group_at_msg:readonly",
"im:message.p2p_msg:readonly",
"im:message.pins:read",
"im:message.pins:write_only",
"im:message.reactions:read",
"im:message.reactions:write_only",
"im:message:readonly",
"im:message:recall",
"im:message:send_as_bot",
"im:message:send_multi_users",
"im:message:send_sys_msg",
"im:message:update",
"im:resource",
"application:application:self_manage",
"cardkit:card:write",
"cardkit:card:read"
],
"user": [
"contact:user.employee_id:readonly",
"offline_access",
"base:app:copy",
"base:field:create",
"base:field:delete",
"base:field:read",
"base:field:update",
"base:record:create",
"base:record:delete",
"base:record:retrieve",
"base:record:update",
"base:table:create",
"base:table:delete",
"base:table:read",
"base:table:update",
"base:view:read",
"base:view:write_only",
"base:app:create",
"base:app:update",
"base:app:read",
"board:whiteboard:node:create",
"board:whiteboard:node:read",
"calendar:calendar:read",
"calendar:calendar.event:create",
"calendar:calendar.event:delete",
"calendar:calendar.event:read",
"calendar:calendar.event:reply",
"calendar:calendar.event:update",
"calendar:calendar.free_busy:read",
"contact:contact.base:readonly",
"contact:user.base:readonly",
"contact:user:search",
"docs:document.comment:create",
"docs:document.comment:read",
"docs:document.comment:update",
"docs:document.media:download",
"docs:document:copy",
"docx:document:create",
"docx:document:readonly",
"docx:document:write_only",
"drive:drive.metadata:readonly",
"drive:file:download",
"drive:file:upload",
"im:chat.members:read",
"im:chat:read",
"im:message",
"im:message.group_msg:get_as_user",
"im:message.p2p_msg:get_as_user",
"im:message:readonly",
"search:docs:read",
"search:message",
"space:document:delete",
"space:document:move",
"space:document:retrieve",
"task:comment:read",
"task:comment:write",
"task:task:read",
"task:task:write",
"task:task:writeonly",
"task:tasklist:read",
"task:tasklist:write",
"wiki:node:copy",
"wiki:node:create",
"wiki:node:move",
"wiki:node:read",
"wiki:node:retrieve",
"wiki:space:read",
"wiki:space:retrieve",
"wiki:space:write_only"
]
}
}

点击下一步，确认申请开通权限。

下面是获取应用凭证，选择「凭证与基础信息」，复制 App ID 和 App Secret：

并填入到刚才 WorkBuddy 飞书的对应配置处。

点击注册后即可获得一个 Webhook 地址，复制这个地址：

回到飞书开放平台，找到刚才新建的应用，配置「事件与回调」：

这是个关键配置，需要订阅机器人长链接接收事件和卡片回调。这一步的作用是让 openclaw 在飞书内具备收发消息的能力。
选择将事件发送至开发者服务器，黏贴刚才的 Webhook 地址。

然后添加接收事件：

搜索「接收消息」，点击立即添加：

接下来，进行回调配置，同样是同样页面，选择「回调配置」，同样将回调发送至开发者服务器，黏贴刚才的 Webhook 地址：

需要添加「卡片回传交互」这个回调：

最后就直接发布一下这个应用，先点击创建一下版本：

版本号和描述填下就可以发布了：

在飞书中点击打开应用即可和小龙虾开始对话了。

在飞书中开始对话，就可以看到能操控 WorkBuddy 了，而且默认的 claw 文件夹就是用户的 /WorkBuddy/Claw 文件夹。

那可以做啥呢？比如，我在手机飞书上，让 WorkBuddy 帮我把所有 png 格式的图片转为 jpg：

为了方便演示，我把手机在 mac 上做了个镜像。

WorkBuddy 能处理复杂任务，比如进行多个 PDF 报销发票自动识别、分类并汇总金额。

其中给的指令是：

请帮我处理叫做“团建设报销”文件夹里的报销发票单，图片是付款明细
请生成一个报销简述，包含以下信息：
- 日期
- 商家名称
- 消费金额
- 消费类别（餐饮/交通/住宿/其他）
- 备注

并按照如下示例排序：2025.12.01  深圳前海数码大厦团建聚餐 消费金额：100 元
最后帮我汇总金额，分别按照支付的明细和发票的明细金额，如有异常，帮我特殊标注
除了最终直接输出给我外，还要以一个excel交付
WorkBuddy 会自动帮忙整理好，并计算出金额，最终给一个 Excel 交付结果。
我发现在 WorkBuddy 中有不少的 SKill，可一键安装。

当然，也可以通过手动的方式，把 skill 放入到项目文件夹中的{. codebuddy/skills} 下面。
比如我安装了canghe-image-gen skill，然后基于此，让 WorkBuddy Claw 帮我产出小红书图片和文案。

在手机飞书指挥着 WorkBuddy Claw 帮我开发企业官网，所有的素材来源是在我的电脑文件夹中，包括图片和企业官网素材。

这个过程我还特意录了个视频，大家可以看看，不得不说，还是太方便了。

WorkBuddy 就像是个我的数字员工，我的需求通过手机下发给它，就能帮我完成。
WorkBuddy 使用场景还蛮多的，比如可以将外语音视频一键转为中文速记，你只需要说清楚自己的需求就好了。

WorkBuddy Claw 的安装使用更省心，也不用什么服务器，你的电脑就是你的服务器，你只需要在这里简单下载下。

地址：https://www.codebuddy.cn/work/

然后就可以上手使用，配置飞书也几乎没什么门槛，主打一个方便。

你不需要购买模型了，因为 WorkBuddy 已经内置了全球顶尖的模型。

我这里用的是国内版，只有国内模型，国际版现在还没上线。
和 Openclaw 不同的是，安全问题还是有保证的，只会对指定的文件夹做改动。
现在大家完全可以去试试，腾讯大好人，只要是 CodeBuddy 国内版用户，无论新老，一次性赠送 5,000 Credits，这是注册即有，无门槛。

领取地址：https://www.codebuddy.cn/profile/usage
领完你就可以用手机遥控 AI 干活了。

教程：https://mp.weixin.qq.com/s/ZqtEClaUAm8463ItxgmIAg

### 5、火山 ArkClaw

地址：https://www.volcengine.com/

点击「立即体验」：

点击「立即创建」：

等待一会会，预计 1-2 分钟

文档完善中。。

### 6、智谱AutoClaw

地址：https://autoglm.zhipuai.cn/autoclaw/

选择接入 IM：

接入飞书机器人：

选择自动配置，登录飞书后，就能看到他自动帮配置了：

很快就配置好了：

打开飞书，就能看到了。

整个过程非常的简单丝滑。

### 7、百度 OpenClaw

完善中

### 7、腾讯  QClaw

完善中

## 第三部分：进阶篇

这一部分是，你可以配置自己的服务器，可以自定义大模型，可以选择你喜欢的 bot 方式，甚至你可以本地部署，适合有一定基础的朋友。

对于不懂代码的小白，不想折腾的，推荐你直接到腾讯云上傻瓜式配置好了，不用敲命令行了，甚至都不需要配置飞书。

几个点点点操作就行了🐶

https://cloud.tencent.com/

纯新手小白，最推荐的配置顺序：1.1→2.1→3.2
第一步：环境部署
云端部署
目前用云服务是性价比最优的方式，买个电脑好几千，一台云服务器先租个一个也也才二三十。

选个 2  核 2 G 就差不多了，像阿里云/腾讯云/火山或者任意 VPS 都可以支持。

我为了图省事，用的腾讯云新出的 Lighthouse，免去安装环境和依赖，直接就有 OpenClaw 模板（也就是说，你不需要再自己去下载OpenClaw了）。

当然你也可以用阿里、火山的，甚至可以用扣子、kimi 等，现在各个大厂都有自己的小龙虾了。

例：腾讯云
腾讯云网址：https://cloud.tencent.com/
点击”立刻体验“

点击”立刻体验“后你会看到此界面，往下滑

选左下角2核2G即可

确认信息2核2G20M（Linux），地域选硅谷
点击立刻购买即可

你可以选择关闭自动续费。

购买完成后，1.先点击你的头像 2.再点开”站内信“查看你购买的服务器的公网IP地址，默认用户名和密码

然后用 SSH 客户端连接服务器，我这里用的是 Xterminal。（后面我都将以它为例）

没有 SSH 客户端也可以直接点击页面这里的登录进去。

打开Xterminal软件，点击”新建SSH“

点击”新建SSH“后你会看到：
名称：随便取
地址：刚刚让你在”站内信“里找的”公网IP地址“
端口：默认22，不用管
登录用户：也是刚刚让你在”站内信“里找的”默认用户名“
登录密码：购买服务器时，你自己设置的
然后点击”创建“即可

这里我用了腾讯云的应用模板就不需要再安装了，OpenClaw已经安装好了，只需要检查一下即可。

检查OpenClaw是否安装成功：输入如下命令查看 OpenClaw 版本：

来自热心网友@杨若昀

腾讯云很多给的是ubuntu用户，要先转到root用户sudo -i@

openclaw --version
如果出现”2026.1.29“类似的一串数字，代表安装成功

好，至此”第一步：环境部署“完成，进入”第二步：配置模型“吧

例：百度智能云
https://cloud.baidu.com/product/BCC/moltbot.html

注册→绑定个人身份证

创建实例：名称你随机生成或者自己取都行，但密码要记得自己设置。

创建完实例之后，点击进入实例详情页面

应用管理→应用配置→一键开通

一键放行

“已放行”代表上一步成功
模型配置：下拉选择模型，你可以选择你想要的模型，点击  “ 应⽤模型配置”  后，系统会自动创建千帆 APIKey 进行实例内配置。

执行成功

你可以在这里选择你的接入方式，可以将OpenClaw 接⼊飞书 / 钉钉 / 企业微信 / QQ
接入飞书和QQ的操作分别在3.2和3.3有详细教程

Skills的配置：LS 默认提供百度搜索、百度百科  Skills  配置，您可以按需选择，并点击  “ 应用 ” 。
若您想要配置其他 Skills，可清空输⼊框内容，自行输入  Skills（Skills 可参考输入框右侧  “ 获取更多  Skills” ，前往 OpenClaw 官网网站获取）

若您想要在 OpenClaw  官网网站与 OpenClaw 聊天，您可以点击  “ 获取网站地址 ” ，点击网站地址跳转至OpenClaw 官网网站

例：火山方舟
为什么选择火山方舟 Coding Plan？
因为OpenClaw 原本需要 Anthropic Claude 或 OpenAI GPT 的 API，国内开发者将面临网络和成本的双重门槛，但火山方舟 Coding Plan 直接提供了国内多款顶级编程模型（Doubao-Seed-Code、Kimi-K2.5、DeepSeek-V3.2、GLM-4.7）。它还支持 Auto 模式，平台会根据场景自动选择最优模型。

兼容主流工具：支持 Claude Code、Cursor、Cline、OpenCode、Codex CLI、Kilo Code、Roo Code 等主流 AI 编程工具，通过兼容 Anthropic API 和 OpenAI API 协议实现无缝接入。
稳定算力保障：依托火山方舟超大资源池，告别排队和卡顿。
性价比极高：Lite 套餐：适合轻量化使用，每5小时最多约1,200次请求，首月优惠价 8.9元 Pro 套餐：适合高强度开发，每5小时最多约6,000次请求，首月优惠价 45元（原价 200 元）。OpenClaw 是"Token 大户"，Agent 模式下消耗是普通对话的 5-10 倍。火山方舟提供充足的 Token 额度，基本实现"Token 自由"。
部署简单：整个架构只需一台 2C4G 的云服务器，飞书长连接模式不需要公网回调地址，安装只需一行命令。

火山方舟 Coding Plan活动界面：https://www.volcengine.com/activity/codingplan
“立即注册”→实名认证→“立即订阅”

Lite 套餐：适合轻量化使用，每5小时最多约1,200次请求，首月优惠价 9.9元。
Pro 套餐：适合高强度开发，每5小时最多约6,000次请求，首月优惠价 49.9元（原价 200 元）。

OpenClaw+火山方舟 Coding Plan的联合推广页面：https://www.volcengine.com/activity/clawdbot
登录/注册→购买部署

“地域”：可选上海，广州，北京，雅加达
“套餐规格”：2核2G就可以，想追求更流畅的可以选2核4G
“登录密码”：自己设置，要记得
“自动续费”：看你个人，可选择勾选

向下滑
“高级配置”：可以配置模型和选择接入方式
模型支持：豆包，deep seek，千问，kimi......
接入方式可选择：飞书，企业微信，钉钉（3.2有接入飞书教程）

配置好之后就可以购买了

本地部署
再次强调千万！千万！千万！不要用自己的主电脑部署，权限太高，风险太大。

你可以选择Mac Mini/闲置主机进行部署
Windows电脑
我使用的电脑配置如下：Windows 11 64 位

在Windows上安装OpenClaw有两种方式：一种是直接把OpenClaw安装在Windows系统上，另一种是通过Windows上的Linux子系统进行安装（WSL）。
这里直接给结论，不要用第一种方式直接在Windows系统上安装OpenClaw，而是要选择第二种WSL的方式安装，不然你会遇到很多麻烦。（而且，WSL的安装方式是官方推荐的安装方式）。

好，接下来就是具体的步骤了。
第一步
点击键盘上的“win”，在搜索栏中搜索PowerShell

然后点击“以管理员身份运行”

如果PowerShell打不开，也可以用CMD（命令提示符）,同样也是用“以管理员身份运行”

然后输入

wsl --install
这个命令的意思是安装WSL，安装好之后，它会让你重启电脑，那你就重启一下电脑。

第二步
重启完之后再次打开PowerShell/CMD的界面，再输入这个命令：

wsl --install ubuntu-24.04
这个命令是安装Ubuntu Linux发行版。

下载完之后，需要你创建一个用户名和密码（自己设置即可）

设置好之后，能看到这个有颜色的一行，就说明成功进入了Linux的系统界面了。

接下来我们的所有操作就得在这里进行了，如果不小心退出了，可以再次点开PowerShell/CMD的界面，输入“wsl”，再回车，重新进入Linux的系统界面

第三步
接下来在Linux的系统界面输入以下命令（下载OpenClaw）

curl -fsSL https://openclaw.ai/install.sh | bash
这是官方推荐的一键安装脚本，它的好处是可以直接帮你处理环境依赖关系，比如它检测到你没有安装node.js，它会自动帮你安装它。

需要注意两点：
1.记得在这里输入你刚刚设置的密码

2.当你发现电脑半天没反应，没有输出的时候，看看是不是有这个单词“Installing”，它的意思是正在安装，期间没有任何输出，是正常情况，请稍等。

当出现这个欢迎界面的时候，就说明已经安装好了

openclaw dashboard

会跳出控制台。如果没跳出，可以复制这个网址，用浏览器打开。

然后依次选择 Setting（设置）＞Config（配置） > Authentication，点击菜单下方的 Raw。

复制以下配置信息，替换原"agents": {...},部分，并将baseUrl及 apikey 替换为你自己的。

{
"models": {
"mode": "merge",
"providers": {
"bailian": {
"baseUrl": "https://coding.dashscope.aliyuncs.com/v1",
"apiKey": "YOUR_API_KEY",
"api": "openai-completions",
"models": [
{
"id": "MiniMax-M2.5",
"name": "MiniMax-M2.5",
"reasoning": false,
"input": ["text"],
"cost": {
"input": 0,
"output": 0,
"cacheRead": 0,
"cacheWrite": 0
},
"contextWindow": 196608,
"maxTokens": 32768
}
]
}
}
},
"agents": {
"defaults": {
"model": {
"primary": "bailian/MiniMax-M2.5"
}
}
},
"gateway": {
"mode": "local"
}
}
配置完成后，单击右上角 Save 保存配置，再单击 Update。

好，至此”第一步：环境部署“完成，进入”第二步：配置模型“吧

第二步：配置模型

这里是为了突出流程的完整性，你也可以直接跳转到 3.2 直接操作。

内置 API 模型
OpenClaw 支持非常多的 API 模型，比如 OpenAI、Anthropic、kimi、GLM 都是内置支持的。

当然除了内置的，还支持自定义 API（详细见2.2），这里我们用内置API模型——Kimi 2.5为例

例：Kimi 2.5

那如何使用，第一步，搜索 kimi code：https://www.kimi.com/code

第二步，购买优惠套餐 plan，说实话，目前 OpenClaw 消耗 token 还挺大的，最好买个套餐划算一些，我买的是 Allegretto 套餐。

第二步，打开控制台，创建 API key。名字随便取。

这个APIkey一定！一定！要复制下来，因为一般你点完”完成“之后，你就再也无法查看你的API key了，如果你忘记了你的API key，那就只能重新创建一个了。复制完后，找地方先存起来，后续在”第四步：OpenClaw配置“的时候会用到

好，至此”第二步：配置模型“完成，进入”第三步：配置Bot“吧

自定义 API（非内置API模型）
自定义 API，模型选择更多，也更灵活一些。但会多出一些步骤，对小白来说较为困难。如果你是小白还是建议你就用“内置API模型”，跟着教程2.1“例：Kimi2.5”做。

openclaw 部署在服务器中，也可以修改配置文件的方式配置，配置文件位于 ~/.openclaw/openclaw.json，OpenClaw 启动时会自动读取。
1、打开配置文件
使用文本编辑器打开配置文件。如果文件不存在，编辑器会自动创建：

# 方式1：使用 vim 编辑器（适合熟悉 vim 的用户）
# vim ~/.openclaw/openclaw.json

# 方式2：使用 nano 编辑器（更简单，适合新手）
nano ~/.openclaw/openclaw.json

添加配置，将 baseurl，apikey 及模型替换为自己的 API：

{
"meta": {
"lastTouchedVersion": "2026.2.1",
"lastTouchedAt": "2026-02-03T08:20:00.000Z"
},
"models": {
"mode": "merge",
"providers": {
"bailian": {
"baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
"apiKey": "DASHSCOPE_API_KEY",
"api": "openai-completions",
"models": [
{
"id": "qwen3-max-2026-01-23",
"name": "qwen3-max-2026-01-23",
"reasoning": false,
"input": ["text"],
"contextWindow": 262144,
"maxTokens": 65536
},
{
"id": "qwen3-coder-plus",
"name": "qwen3-coder-plus",
"reasoning": false,
"input": ["text"],
"contextWindow": 131072,
"maxTokens": 32768
}
]
}
}
},
"agents": {
"defaults": {
"model": {
"primary": "bailian/qwen3-max-2026-01-23"
}
}
},
"gateway": {
"mode": "local",
"auth": {
"mode": "token",
"token": "test123"
}
}
}

保存退出即可。

附：阿里云百炼

第一步：开通 Coding Plan

打开阿里云百炼平台，找到 Coding Plan 订阅入口。

选择你需要的套餐：

第二步：获取 API Key

开通后，在百炼控制台获取你的 API Key。

附：jiekou API

API 的话你可以试试 http://JieKou.AI，在稳定性上优势比较明显，现在也第一时间接入了Claude Opus 4.6，可以用支付宝支付，充多少用多少，也不需要魔法，还是比较方便的。
接入的模型也非常齐全，最新的claude-opus-4.6，gpt-5.2-codex都有，除了按量，也可以购买订阅包，算下来价格是官方API 的75折。
现在填写邀请码 & 注册 & 绑定 Github就能免费获得 $3的使用，获取链接如下：
https://jiekou.ai/referral?invited_code=SK640I

附：Atlas Cloud
如果你希望稳定，性价比高的 API 平台，可以试试之前给大家推荐过的 Atlas Cloud。
地址：https://www.atlascloud.ai?ref=AXZ9S7
毕竟它主打的是企业级 API 聚合，拥有 300+ 知名大模型， Qwen、DeepSeek、Kimi、MiniMax等知名大模型一网打尽。总结下来是：稳定、易用、低价。

那该如何使用呢？注册登录后，打开控制台，新建 API 密钥。

填写名称后，点击创建：API 密钥的名称：随便取。

复制这个API密钥，然后找地方先存起来，后续在”第四步：OpenClaw配置“的时候会用到。

例：DeepSeek开放平台
如果你不想用或用不了Atlas Cloud的话，我将以DeepSeek为例，给你演示怎么做。

DeepSeek开放平台：https://platform.deepseek.com/api_keys

DeepSeek 的 API 调用是按量付费的，你的账户余额必须大于 0 才能正常调用接口。
如果账户没钱或余额不足，API 请求会直接失败，所以提前充值是保证服务可用的必要操作。

其他大模型也是同理，你要去找到对应网址去充值，然后获取API keys

如果你只想先试试，可以就先花个10块钱玩一下

保证账号有余额之后，点击”API keys“，然后点”创建 API key“

API key的名称：随便取。然后这个APIkey一定！一定！要复制下来，因为一般你点完”关闭“之后，你就再也无法查看你的API key了，如果你我忘记了你的API key，那只能重新创建一个了。
复制完后，找地方先存起来，后续在”第四步：OpenClaw配置“的时候会用到

好，至此”第二步：配置模型“完成，进入”第三步：配置Bot“吧

第三步：配置Bot+OpenClaw的配置
什么是配置Bot？如何选择？
配置Bot这一步实际上是选择你的接入方式，那“接入方式”又是什么呢？
就是你想用哪个"聊天软件"或"界面"来跟这个 AI 机器人（OpenClaw）对话。
国内：QQ，企业微信，飞书，钉钉等
国外：Discord，Telegram等

国内目前最丝滑的就是飞书的机器人，大家可以重点配置关注。

自定义API模型OpenClaw配置前置动作：
如果你在”第二步：配置模型“中选择了”自定义API“，那么你需要自行按照如下配置修改。（绿色是你需要修改的地方，看不懂的，不知道每个空该填什么的可以去问AI）（如果是Kimi2.5或其他内置API模型的可跳过此步骤）

{
"models": {
"mode": "merge",
"providers": {
"bailian": {
"baseUrl": "https://coding.dashscope.aliyuncs.com/v1",
"apiKey": "YOUR_API_KEY",
"api": "openai-completions",
"models": [
{
"id": "MiniMax-M2.5",
"name": "MiniMax-M2.5",
"reasoning": false,
"input": ["text"],
"cost": {
"input": 0,
"output": 0,
"cacheRead": 0,
"cacheWrite": 0
},
"contextWindow": 196608,
"maxTokens": 32768
}
]
}
}
},
"agents": {
"defaults": {
"model": {
"primary": "bailian/MiniMax-M2.5"
}
}
},
"gateway": {
"mode": "local"
}
}
3.2 例：飞书+Kimi2.5
配置Bot（飞书）
创建飞书机器人。访问飞书开放平台：https://open.feishu.cn/app，点击创建应用：

填写应用名称和描述后就直接创建：

创建完成后：在“凭证与基础信息”中找到 App ID 和 App Secret，把它俩复制下来。

然后，登录你的腾讯云：https://console.cloud.tencent.com/lighthouse

进入后，点击“应用管理”

操作如图所示：

配置权限。需要至少开通以下的权限：

可以在权限管理-开通权限这里选择需要的权限手动开通：

也可以直接导入以下权限配置：

{
"scopes": {
"tenant": [
"contact:user.base:readonly",
"im:message",
"im:message:send_as_bot",
"im:resource"
],
"user": [
"im:message",
"contact:user.base:readonly"
]
}
}

成功后就会显示这6个权限

操作如图所示，需要添加应用能力，为应用添加机器人的能力：

操作如图所示：

然后添加一下下面几个事件：

然后创建版本，这两种方式都能进入。

保存然后发布应用。

OpenClaw的配置
在服务器中输入如下命令：

openclaw onboard
选择 Yes 接受风险：

然后选择：QuickStart（快速开始）

接下来是选择模型，我这里选择：Moonshot AI

选择Kimi Code API key，黏贴刚才的 key 过来：

选择默认模型为：kimi-code/kimi-for-codi（OpenClaw 的内置列表是动态更新的，可能当你看到这篇教程时，已经找不到对应的精确名称了，如果出现这种情况请去问AI）

继上面一步，然后选择配置飞书：

几个步骤已经说的非常清楚了：

如图进行选择：

选择使用 skills：Yes

按图进行选择即可。这里可以自定义安装很多依赖，可以先不装。

hooks 这里选择：session-memory

重启 gateway 服务：

选择打开 TUI，就会在服务器上打开界面，到此为止，所有配置选项都已经安装完毕了。

然后就可以在对话框中进行提问交互啦，问下他现在是什么模型，右下角也会显示 token 的用量。

这个时候打开飞书也能直接对话了：

好，至此你已经完全安装配置好OpenClaw了，快去使用吧！

3.3 例：QQ+Kimi2.5
配置Bot（QQ）
登录你的腾讯云：https://console.cloud.tencent.com/lighthouse

进入后，点击“应用管理”
顺手点一下右上角的“复制”，把IP地址复制下来，存一下，等下要用

操作如图所示：

三个空填完之后，先别关，再打开一个新的网页。

前往QQ开放平台：https://q.qq.com/#/
一定要先注册！先注册！然后再登录（因为它不是QQ登录，所以一定要先注册！！！）

按步骤注册完之后，登录

登陆成功后，点击“机器人”，然后“创建机器人”

自己创建吧，按自己喜好填写

成功之后，就能看到它了。然后点击它，进入机器人详情。

之后操作如图所示：

把自己添加进去

用你的QQ扫码加机器人好友吧

加上好友后，此时你们还无法对话，因为它目前只是一具空壳，给它配置上了OpenClaw之后，你就可以跟它愉快的对话啦

之后操作如图所示：
IP白名单里填写刚刚让你复制下来的云服务器的IP地址

接着，再“管理”→“开发管理”
复制下来机器人的ID和密钥（注：机器人的密钥生成之后一定要存下来，因为你一旦关闭后，你的机器人密钥，就再也看不到了，如果忘记了，那下次就只能重置了。）

好，接下来返回刚刚没关闭的腾讯云服务器，完成填写。

OpenClaw的配置
接下来去服务器中输入如下命令：

openclaw onboard
选择 Yes 接受风险：

然后选择：QuickStart（快速开始）

接下来是选择模型，我这里选择：Moonshot AI

选择Kimi Code API key，黏贴Kimi的 key 过来：

选择默认模型为：kimi-code/kimi-for-codi（因为OpenClaw 的内置列表是动态更新的，可能当你看到这篇教程时，已经找不到对应的精确名称了，如果出现这种情况请去问AI你该怎么选择）

选择通道（接入方式）：QQ

填写你QQ机器人的ID和密钥

接着，按照图片选择即可：

这里可以自定义安装很多依赖，可以先不装。

hooks 这里选择：session-memory

重启 gateway 服务：

选择打开 TUI，就会在服务器上打开界面，到此为止，所有配置选项都已经安装完毕了。

然后就可以在对话框中进行提问交互啦，右下角会显示它的模型和 token 用量。

也可以不聊，直接按“Ctrl + C”退出，直接去QQ找它聊天：

好，至此你已经完全安装配置好OpenClaw了，快去使用吧！
3.4 例：Discord
注：这部分内容“Discord”写自2026.1.28，比较“过时”了，当时还叫“Clawbot/Moltbot”（现在已经统一叫OpenClaw了），还把它放过来是为了给想用“Discord”的人一个参考。
在后半部分“Clawdbot（OpenClaw）的配置”中，在现版本中应该“clawdbot”都改成“openclaw”

配置Bot（Discord）
前往 Discord Developer Portal：https://discord.com/developers/applications
先点左边”Applications“，再点右边”New Application“，然后随便给它取个名字

创建好应用后，选择 Bot> Reset Token > copy（一定要复制下来，然后存起来，依旧是”第四步：OpenClaw配置“中要用到）

下滑页面，打开 Message Content Intent的选项并保存

OAuth2 URL Generator中选择 bot

下滑页面，在 Bot Permissions 中勾选 Send Messages 和 Read Message History。

继续下滑页面，复制 bot 邀请链接。

然后在浏览器中打开这个链接，然后选择一个自己的服务器，相当于把机器人 bot 加入到 server 中。

这时候确认下刚才我们给 bot 的 2 个权限。

打开 Discord：https://discord.com/channels/服务器ID/频道ID
然后输入框中@就可以看到刚才添加的机器人 bot。

OpenClaw 的配置
在服务器中输入如下命令：

openclaw onboard
选择 Yes 接受风险：

然后选择：QuickStart

接着是选择模型供应商的配置，如果上一步已经配置了第三方 API 就不用再配了
也可以选择自带的 API：比如选 GLM 4.7, 输入 key，只需要选择默认模型就好了。

接下来是选择 channel，这里选择 Discord

还挺贴心的，把如何获取 token 也做了说明。把之前我们创建的 bot 的 token 复制进来。

然后页面按照这个做选择：

这里可以自定义安装很多依赖，可以先不装。

hooks 这里选择：session-memory

然后就可以在对话框中进行提问交互啦，右下角还会显示你使用的模型和 token 的用量。

但这并没结束，因为我们要通过 discord 来指挥 OpenClaw。
先退出 OpenClaw，然后在服务器停止服务：

systemctl --user stop openclaw-gateway.service

然后重新启动：

openclaw gateway --port 18789 --verbose

启动成功后，返回 Discord，与 bot 进行对话后拿到配对码。
是点击 bot 进行私聊，而不是@聊天。

紧接着返回服务器命令行，你需要按下Ctrl+C（Windows）或者Command+C（MacOS）终止 Gateway 服务。
然后粘贴并运行如下命令进行配对，把 Pairing code 替换为上面的“Pairing code”后面的内容。

openclaw pairing approve discord <Pairing code>

然后再次启动 Gateway

openclaw gateway --port 18789 --verbose

如果你想要让它在服务器中静默启动，而不是关闭终端就停止服务了，你可以输入以下命令：

nohup openclaw gateway --port 18789 --verbose > /dev/null 2>&1 &

在 discord 中@机器人，可以看到有回复了：

然后服务器也能看到有回复了：

好，至此你已经完全安装配置好Clawdbot（OpenClaw）了，快去使用吧！

3.4 例： 接入微信

这部分可参考教程，目前体验还需要优化，正在优化中，争取配置为 skill，人人都可以稳定接入，可以关注先。

https://mp.weixin.qq.com/s/UFyb7OXERFo1N1GJzBGrIA

3.6 如何重启

# 先先退出 openClaw，然后在服务器停止服务：
systemctl --user stop openclaw-gateway.service

# 然后重新启动：
nohup setsid openclaw gateway --port 18789 --verbose > /dev/null 2>&1 &

## 第四部分：OpenClaw打造智能体军团（多 Agent）

建设中。。

## 第五部分：OpenClaw的实际应用场景

给大家说个玩小龙虾的心法，遇到问题可以直接问他，它不回答就口喷它，大模型也有惰性。我是这么实践来的。大家可以试试。祝你玩虾成功。
还有如果遇到代码报错就去把报错复制给 千问或者Gemini 问答。他比我们聪明，能解决你很多问题。
好的 openclaw 是在于调教优化。要给它配置手脚耳朵，记忆系统等等。好的记忆系统能给你节省好多 token。
🐲🦞扫盲版-给不会使用的同学看
### 例1：定时任务

跟别的AI不同的一点，OpenClaw可以主动给你发消息，可以是定时的，也可以是不定时的。（2026.2.6日测试，QQ目前不支持主动给你发消息，但飞书可以）
你可以让它每天早上在你出门前定时给你发今天的天气，用不用带伞、加减衣物，需不需要注意雾、霾等天气；
也可以让它每天晚上给你发消息，提醒你睡觉，再顺便讲一个睡前故事......

### 例2：Skill 即插即用

Kimi K 2.5 配合 OpenClaw，我直接让它给我下载了我自己开发的小红书 skills：

因为这个 skill 需要 API，我直接让它放在环境变量中。

然后直接输入需求：生成小红书封面图，主题为：「腊八节南北方习俗」
OpenClaw 就帮我生成好了这个小红书的封面图：

这操作简直不要太方便，还要什么 APP？Agent 帮我自动调用 skills 完成结果。

### 例3：自然语言驱动复杂工作

你可以在飞书中丢给文章给 kimi k2.5，一键转换为网页，给一个可访问的链接：

打开这个链接后，就看到网站了：

我仿佛看到了未来的形态，我们不需要一个又一个的 APP，我们真正需要的是能干活的 Agent。
它会自己去调用工具，最终给一个满意的结果。
这或许是我认为OpenClaw 最有价值的地方。

### 例4：收集整理信息

你可以在 discord 中用@bot 的方式来远程指挥 Clawdbot（OpenClaw） 干活。

比如，我直接来一个问题：

我搜集整理一下最新的关于Clawdbot 的信息，告诉我该怎么配置和使用，并
给我在 GitHub 或者 X 上找出 10 个最佳实践。

我录了一个视频，大家可以感受一下，非常刺激：

可以看到 Clawdbot（OpenClaw） 会自行去搜索，并且给到我想要的信息，最牛 X 的是，这家伙居然给我推荐了相关的 discord 社区，我靠，真贴心。

然后我又直接在手机上，让 Clawdbot （OpenClaw）帮我把刚刚找到的结果保存在电脑指定的文件夹，我的要求如下：

你把刚刚生成的信息保存成markdown文档，放在我的电脑claw文件夹下，
你需要新建这个文件夹

我喝了几口水的功夫，Clawdbot（OpenClaw）就已经帮我把事情做好了。

而它又可以和“定时任务”结合起来，比如，让他每天早上9点都整理一份发给你。

### 例5：OpenClaw重塑工作流

Openclaw + OpenCode 才是 vibe coding 的最棒组合！

我真的实现了躺在床上指挥 AI Agent 来 Coding，并自动发布到 GitHub ，然后自动部署到Vercel。

用 Openclaw+ OpenCode+GitHub+Vercel 实现了网站的开发，部署上线。

这个过程全程是由 Openclaw 在我的私人服务器完成的。

这已经不是 vibe coding 了，我大胆的来造一个新名词吧，姑且就叫 Agent Coding。

也许后面，人们会有更加炫酷的名字，但这一切都不重要了。

我很兴奋，为了防止你说我在瞎扯淡，我决定公布所有我和 Openclaw 的聊天记录。

我全程并没有使用什么高深的技术，也没有操作过服务器，我全程是用最简单的提示词来完成的。

这个项目是Openclaw全自主完成的：

游戏完全可用：

下面是我和 Openclaw 的全部聊天。
先安装 opencode：

新建目录用做项目目录：

切换目录，启动 opencode：

用 opencode 来开发贪吃蛇游戏：

提供我的 GitHub 信息，让他连：

按照它给的提示，创建一个 token，权限就给仓库权限，直接丢给他 token。

这里一定记得开启部分权限，防止它瞎搞。

它说已经推送好了：

我打开 GitHub 看下，果然有了，已经自动将代码推送到 GitHub 了。

然后让它部署到Vercel，方便得到一个可访问的网页链接：

同样按照要求，给个 token，就已经完成了自动部署。

🐂🍺，就已经完成了全链路的自动化，真的麻了，兄弟们，虽然只是跑通了闭环，但Openclaw 想象空间真的无限。

我甚至直接让但 Openclaw 记录下这个过程，并写一篇文章，推送到刚才这个仓库，这个由 Agent 自主开发部署的仓库。

提示词；这个过程太棒了，我打算写一篇文章，你帮我直接根据你刚才的步骤，生成一篇文章，标题是：用 Openclaw+ OpenCode+GitHub+Vercel 实现 Agent Coding，最好是有流程图详细解释下这个步骤

然后打开 GitHub 看，也已经有了描述：

下面，我把 Openclaw 生成的教程也贴出来，方便大家看看。Openclaw 的应用仿佛打开了潘多拉魔盒，未来，coding 的范式是不是可以变为 agent coding，每一个人都有一个专属 agent，帮我们 coding，或者做任何我们希望做的事情。

以下是OpenClaw自己生成的记录：

🐍 贪吃蛇游戏 + Agent Coding 完整教程

本文档由 「OpenClaw AI Agent」 全程自动生成，记录从需求到上线的完整开发流程。
📱 「在线试玩」: https://myopencode.vercel.app
📝 「项目源码」: https://github.com/freestylefly/snake-game
🤖 「生成工具」: OpenClaw + OpenCode + GitHub + Vercel

用 OpenClaw + OpenCode + GitHub + Vercel 实现 Agent Coding

从零开始，让 AI Agent 帮你写代码、管理版本、自动部署，全程无需离开终端！
📋 概述
本文将介绍如何构建一个完整的 「AI 驱动开发工作流」：
本文将介绍如何构建一个完整的 「AI 驱动开发工作流」：
「OpenClaw」 - AI 助手运行平台，协调所有工具
「OpenCode」 - AI 编程助手，自动生成代码
「GitHub」 - 代码托管和版本管理
「Vercel」 - 自动化部署和托管
通过这个工作流，你只需要告诉 AI 要做什么，剩下的代码编写、提交、部署全部由 Agent 自动完成。

🔄 完整流程图

┌─────────────────────────────────────────────────────────────────────────────┐│  AgentCoding完整工作流 │└─────────────────────────────────────────────────────────────────────────────┘
┌──────────────┐     │   用户需求    │  "帮我创建一个贪吃蛇游戏并部署上线"     └──────┬───────┘            │            ▼┌──────────────────────────────────────────────────────────────────┐│  Step1:环境准备(OpenClaw协调) ││  ┌─────────────┐┌─────────────┐┌─────────────┐ ││  │安装OpenCode││安装GitHubCLI││安装VercelCLI│ ││  │(AI编程)││(代码托管)││(自动部署)│ ││  └──────┬──────┘└──────┬──────┘└──────┬──────┘ │└─────────┼────────────────┼────────────────┼──────────────────────┘   ││ │   ▼▼ ▼┌──────────────────────────────────────────────────────────────────┐│  Step2:AgentCoding(OpenCode) ││  ┌─────────────────────────────────────────────────────────┐     ││  │用户:"创建一个贪吃蛇游戏"│ ││  │││ ││  │▼│ ││  │  ┌─────────────────────────────────────────────────┐    │     ││  ││OpenCodeAIAgent││ ││  ││┌──────────┐┌──────────┐┌──────────┐││ ││  │││生成HTML││生成CSS││生成JS│││ ││  │││index.html││style.css││game.js│││ ││  ││└──────────┘└──────────┘└──────────┘││ ││  │  └─────────────────────────────────────────────────┘    │     ││  └─────────────────────────────────────────────────────────┘     │└──────────────────────────────────────────────────────────────────┘          │          ▼┌──────────────────────────────────────────────────────────────────┐│  Step3:代码管理(GitHub) ││  ┌──────────────────────────────────────────────────────────┐    ││  │1.gitinit初始化仓库│ ││  │2.gitadd.添加文件│ ││  │3.gitcommit-m"Initial commit"提交│ ││  │4.创建GitHub仓库(通过API)│ ││  │5.gitpush-uoriginmaster推送到远程│ ││  └──────────────────────────────────────────────────────────┘    │└──────────────────────────────────────────────────────────────────┘          │          ▼┌──────────────────────────────────────────────────────────────────┐│  Step4:自动部署(Vercel) ││  ┌──────────────────────────────────────────────────────────┐    ││  │1.vercel--token<TOKEN>登录并关联│ ││  │2.自动检测项目类型(静态网站)│ ││  │3.构建并上传到VercelCDN│ ││  │  4. 分配域名: https://myopencode.vercel.app  │ ││  └──────────────────────────────────────────────────────────┘    │└──────────────────────────────────────────────────────────────────┘          │          ▼     ┌──────────────┐     │   网站上线    │  🎉 访问链接，游戏可玩！     └──────────────┘

🛠️ 详细步骤
第一步：环境准备
1.1 安装 OpenCode（AI 编程助手）

# 安装 OpenCodenpm install -g opencode-ai
# 验证安装opencode --version
1.2 安装 GitHub CLI（代码管理）

# 下载并安装curl -fsSL https://github.com/cli/cli/releases/download/v2.63.2/gh_2.63.2_linux_amd64.tar.gz | tar -xz -C /tmpcp /tmp/gh_2.63.2_linux_amd64/bin/gh /usr/local/bin/
# 验证gh --version
1.3 安装 Vercel CLI（自动部署）

# 安装 Vercel CLInpm install -g vercel
# 验证vercel --version

第二步：创建项目目录

# 创建项目目录mkdir -p ~/myopencodecd ~/myopencode
# 初始化 Git 仓库git init
# 配置 Git 用户信息git config --global user.email "your@email.com"git config --global user.name "yourname"

第三步：Agent Coding（核心步骤）
方式一：使用 OpenCode 交互模式

# 启动 OpenCode（需要 PTY 模式）# 在 OpenClaw 中使用：bash pty:true workdir:~/myopencode command:"opencode"
然后在 OpenCode 中输入：

创建一个贪吃蛇游戏，使用 HTML5 Canvas，包含完整的游戏逻辑、得分系统和响应式设计
方式二：使用 OpenCode 非交互模式

# 直接运行任务opencode run "Create a complete Snake game using HTML5 Canvas, CSS, and JavaScript"
方式三：手动创建（备用方案）
如果 OpenCode 运行有问题，可以直接创建文件：
「index. html:」

<!DOCTYPE html><html lang="zh-CN"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>贪吃蛇游戏</title>    <link rel="stylesheet" href="style.css"></head><body>    <div class="container">        <h1>🐍 贪吃蛇游戏</h1>        <div class="game-info">            <div class="score">得分: <span id="score">0</span></div>            <div class="high-score">最高分: <span id="highScore">0</span></div>        </div>        <canvas id="gameCanvas" width="400" height="400"></canvas>        <div class="controls">            <p>使用方向键 ↑↓←→ 控制蛇的移动</p>            <button id="startBtn">开始游戏</button>            <button id="pauseBtn">暂停</button>            <button id="restartBtn">重新开始</button>        </div>        <div id="gameOver" class="game-over hidden">            <h2>游戏结束!</h2>            <p>最终得分: <span id="finalScore">0</span></p>            <button id="playAgainBtn">再玩一次</button>        </div>    </div>    <script src="game.js"></script></body></html>
「style. css:」

* {    margin: 0;    padding: 0;    box-sizing: border-box;}
body {    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);    min-height: 100vh;    display: flex;    justify-content: center;    align-items: center;    color: #fff;}
.container {    text-align: center;    padding: 20px;    background: rgba(255, 255, 255, 0.05);    border-radius: 20px;    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);}
h1 {    background: linear-gradient(45deg, #00d4aa, #00a8e8);    -webkit-background-clip: text;    -webkit-text-fill-color: transparent;}
#gameCanvas {    border: 3px solid #00d4aa;    border-radius: 10px;    background: #0a0a0a;}
「game. js:」 (完整游戏逻辑代码)

第四步：推送到 GitHub
4.1 提交代码

# 添加所有文件git add .
# 提交git commit -m "Initial commit: Snake game with HTML5 Canvas"
4.2 创建 GitHub 仓库并推送
「方式一：使用 GitHub CLI」

# 登录 GitHubecho "YOUR_GITHUB_TOKEN" | gh auth login --with-token
# 创建仓库gh repo create snake-game --public --description "A classic Snake game"
# 推送git push -u origin master
「方式二：使用 API 直接创建」

# 通过 API 创建仓库curl -X POST https://api.github.com/user/repos \  -H "Authorization: token YOUR_GITHUB_TOKEN" \  -H "Accept: application/vnd.github.v3+json" \  -d '{    "name": "snake-game",    "description": "A classic Snake game built with HTML5 Canvas",    "private": false  }'
# 添加远程仓库并推送git remote add origin https://username:token@github.com/username/snake-game.gitgit push -u origin master

第五步：部署到 Vercel
5.1 使用 Vercel CLI 部署

# 进入项目目录cd ~/myopencode
# 使用 token 部署vercel --token YOUR_VERCEL_TOKEN --yes --prod
部署成功后，会输出类似：

Production: https://myopencode-xxx.vercel.app
5.2 关联 GitHub 仓库（可选）
Vercel CLI 会自动检测并关联 GitHub 仓库，实现自动部署：
每次 push 到 GitHub，Vercel 自动重新部署
支持预览部署（Pull Request）

🎯 完整命令速查表

💡 核心优势
1. 「全程自动化」
从需求到上线，无需手动编写代码
AI Agent 理解自然语言，自动生成完整项目
2. 「无缝集成」
OpenClaw 作为中控，协调所有工具
GitHub 管理版本，Vercel 自动部署
3. 「即时反馈」
几分钟内从想法到可访问的网站
每次修改自动重新部署
4. 「可扩展性」
可以轻松扩展到更复杂的项目
支持 React、Vue、Next. js 等框架

🔧 常见问题
Q 1: OpenCode 卡住不响应？
「解决」: 使用非交互模式或直接用 GPT/Claude 生成代码后手动保存
Q 2: GitHub 推送失败？
「解决」: 检查 token 权限，需要 repo 权限
Q 3: Vercel 部署失败？
「解决」: 确保项目结构正确，静态网站不需要额外构建配置

🚀 进阶玩法
自动评论到 PR

# OpenCode 审查代码后自动评论gh pr comment <PR_NUMBER> --body "$(cat review.md)"
定时自动更新

# 使用 cron 定时让 AI 更新网站内容cron action:add job:{  "schedule": {"kind": "cron", "expr": "0 9 * * 1"},  "payload": {"kind": "agentTurn", "message": "更新网站内容"}}
多 Agent 协作

# 同时运行多个 OpenCode 处理不同任务bash pty:true background:true command:"opencode '设计前端界面'"bash pty:true background:true command:"opencode '编写后端 API'"

📊 实际案例数据
本次贪吃蛇项目：
「开发时间」: ~5 分钟（Agent 生成代码）
「代码行数」: ~400 行（HTML/CSS/JS）
「部署时间」: < 10 秒
「最终链接」: https://myopencode.vercel.app

📝 总结
通过 「OpenClaw + OpenCode + GitHub + Vercel」 的组合，我们实现了一个完整的 AI 驱动开发工作流：
「说」 - 告诉 AI 你要什么
「写」 - AI 自动生成代码
「存」 - 自动提交到 GitHub
「上线」 - 一键部署到 Vercel
这种工作流特别适合：
快速原型开发
个人项目
学习新技术
自动化重复任务

🔗 相关链接
OpenClaw: https://docs.openclaw.ai
OpenCode: https://opencode.ai
GitHub: https://github.com
Vercel: https://vercel.com
本案例 GitHub 仓库: https://github.com/freestylefly/snake-game
在线演示: https://myopencode.vercel.app

🤖 OpenClaw 生成过程实录
本文档并非人工编写，而是由 「OpenClaw AI Agent」 在开发过程中自动生成：
生成流程
「需求提出」 - 用户："帮我把整个过程写成一篇文章"
「Agent 分析」 - OpenClaw 分析刚才的操作历史，提取关键步骤
「内容生成」 - 自动编写完整教程，包含流程图、代码示例、速查表
「自动推送」 - Agent 直接将 README 提交到 GitHub 仓库
真实的开发时间线

21:49 - 用户："帮我安装 opencode"21:53 - 创建项目目录 myopencode21:56 - 启动 opencode（交互模式）21:57 - OpenCode 卡住，改用直接创建文件21:58 - 贪吃蛇游戏代码生成完成22:05 - 用户提供 GitHub 账号 freestylefly22:10 - 创建 GitHub 仓库并推送代码22:13 - 用户要求部署到 Vercel22:20 - Vercel 部署成功，游戏上线22:28 - 用户："写一篇文章记录这个过程"22:31 - README 自动生成并推送到 GitHub
核心指令
整个开发过程只用了几个简单的自然语言指令：

「全程无需编写任何命令，只需用自然语言描述需求！」

本文档由 OpenClaw AI Agent 全程自动生成 | 2026-02-03

### 例6：Openclaw＋Seed2.0 Skills 做 AI 漫剧

微信公众号：苍何（2026.3.2日内容）
最近玩 Openclaw 又玩的跟个疯狗似的，给我的小龙虾装了很多实用技能，可以自动写小红书图文，可以自动写作，配图，生成封面等。

但感觉生活还是很无趣，于是又花了一些时间，开发了个 AI 漫剧视频生成 Skills，给小龙虾使用。
准确的说，这是个基于字节 Seed2.0 的技能包，有以下子技能。

「seedance-video」：文生视频、图生视频，seedance 1.5 Pro 版本还自带音频生成，属于基本盘。

等seedance 2.0 的 API 出来，也会第一时间接入。
「manga-style-video」：8 种漫画风格一键切换。日式治愈系、吉卜力、国风水墨、美式卡通、铅笔素描、水彩、Q版萌系。
「manga-drama」：这个是核心，漫剧生成器。丢一张主角图进去，自动给你编排分镜短剧。
「volcengine-video-understanding」：火山视频理解，生成完还能分析效果，看看情感表达到不到位。底层用的是 doubao-seed-2.0-code 的能力。
说白了，从写脚本到出视频到验收，一条龙全包了。
比如直接一句话调用 manga-drama 技能生成视频。

稍微控制一下提示词，就能生成比较精致的动漫风格的视频了，其中我给的提示词是：

动漫风格视频，一名长发高中少女漫步在盛开的樱花树下。粉色的花瓣在微风中缓缓飘落。明媚的春季阳光洒下，产生柔和的镜头光晕效果。侧向跟踪镜头，怀旧氛围，高画质，控制在20M 以内，并以视频文件预览的方式直接发给我

这个视频目前使用的是 seedance 1.5 Pro，等 2.0 的 API 出来效果会更好 ：

可以使用一张图片，直接生成漫剧分镜视频，生成脚本到主角再到分镜视频，manga-drama 都能一次性完成。

我录了个视频，大家可以看下这个流程：

生成的分镜视频合成了下是这样的：

后面考虑迭代的方向就是让这几个视频能连一块组成丝滑的视频。
我把整个 Skills 都也开源到了 GitHub 我的 Skills 仓库：

去公众号搜索“苍何”，然后私信回复：canghe-skill，可获取我的所有技能包。
使用的话也非常简单，你只需要让你的 openclaw 自己安装下我的技能就好了。

实战：一张图到一套漫剧，怎么跑的？
光说不练假把式，直接上流程。不过在此之前，得申明一点，这个过程将会非常费 token，我自己小龙虾用的是火山的 Coding Plan 套餐。

3 月起新用户首购是 9.9，还有裂变活动：被推荐的用户还可叠加10% 推荐福利，8.9 即可购买。

里面模型也挺多的，主要原因是我想用 doubao-seed-2.0-code 的 Agent 和 VLM 能力，之前也做过一次测评，目前表现是非常不错的。

能理解长达 2 小时的视频，并调用剪辑 skill 进行混剪。

还可自定调用各种 Skills 和 Agent 由视频转公众号文章。

因为 seed2.0 具备更强的多模态理解能力和 Agent 能力，特别是在多模态感知，长视频理解，对 Skills 的理解和应用上表现不错。

在我们的整个流程中需要调用不少的 Skills，以及需要理解视频，所以目前来看，doubao-seed-2.0-code 是最合适的。

火山的 Coding Plan 上就可以直接用 doubao-seed-2.0-code，而且性价比也是挺高的，特别对新用户几乎是白菜价，hh。

第一步：剧本逻辑编排
漫剧视频第一步，得有个像样的分镜脚本。

谁来写？Openclaw 后端配置的大模型。

我这里接的是 doubao-seed-2.0-code，负责生成分镜逻辑、编排场景顺序。

比如我想做一个「少年仗剑走天涯」的国风漫剧。

它会自动帮我拆成：开场独白、拔剑出鞘、对决场景、雨中沉思、结尾定格。

每一幕都带详细的画面描述和镜头指令，省心到离谱。

第二步：主角设定 + 风格选择
脚本有了，需要生成漫剧主角，会调用 canghe-image-gen  skill 来生成主角形象，这个 skill 是支持 Google API 及第三方 API 的。

无论是用最新的香蕉 2.0，还是使用 seedream 5.0，生图都轻松。

需要选风格。manga-style-video skill 提供了 8 种预设风格，每种都内置了专业提示词。

不用自己调参，选一个就完事。

我这次选的是国风水墨，配合「仗剑少年」的主题刚刚好。

你还别说，吉卜力风格也很绝，改天再试试。
第三步：漫剧生成
重头戏来了。

manga-drama 这个 Skill，是整套工作流里最让我惊艳的。

操作贼简单：丢一张主角图进去，它自动帮你编排整套分镜。

内置了 5 种分镜类型：
主角登场、动作场景、情感表达、互动场景、结尾定格。
每一幕的构图、镜头角度、光影氛围，全都安排得明明白白。

不过当前是有一些待优化的地方都，传参考图，会中断链接，问题不大，后续我再修复下。

第四步：效果验收
视频生成完，还没完事。

volcengine-video-understanding 可以对生成的视频做内容分析。

这里基于 seed2.0 的视频理解能力，还是非常方便的。

情感表达到不到位？场景衔接顺不顺？它都能给你反馈。

相当于自带了一个「AI 质检员」，省得自己一帧一帧去看。

整套流程跑下来，从一张图到一套完整漫剧视频，我这边大概十来分钟搞定。

写在最后
Openclaw 的可玩性还是很多的，但也确实废 token。

Openclaw 的最佳使用方式是搭载自己的 Skills 技能包，而非是让自己的小龙虾在 ClawHub 中一顿瞎找。

现在的 Skill 太多了，但唯有那些对自己有用的技能才值得被收藏。

更推荐每个人都维护自己的技能仓库：把个人方法论、模板、脚本和领域默认配置沉淀为可版本化资产，而不是长期依赖单一公共基线。

说实话，等 Seedance 2.0 的 API 正式放出来，这套漫剧工作流还能再上一个台阶。

到时候画面一致性、角色连贯性都会好很多，想想就有点期待。

感兴趣的可以先玩起来，我的技能包都开源了，公众号私信回复 canghe-skill 就能拿到。

### 例7：数字人

玩 OpenClaw 继续没停，试过让小龙虾做漫剧，爆款抖音视频一键做公众号，试过连接微信等。
但依旧觉得，不够好玩。
这不，又花了一些时间，给我的🦞装上了「数字人」技能，它能一键克隆任意声音，克隆形象，然后生成数字人视频。

我只用丢一张照片，然后丢一张任意照片，就能让 OpenClaw 克隆该形象：

然后传任意一个语音文件丢给 OpenClaw，就能克隆这个声音。

然后用刚才克隆的形象和声音组合，让 OpenClaw 搜集今天的 AI 新闻，给我们来做个数字人播报：
扣子openclaw-1
橘子一岁的照片配合这个磁性的声音，好魔幻，好魔幻，哈哈哈哈。
不恶搞自己的博主不是好博主，豁出去了，把我的🐶照片克隆一下：

我的声音就不克隆了，不够性感，还是继续用这个美女的声音。

保命神明，仅用作交流学习，大家请谨慎使用，注意安全。
扣子openclaw-2
还是不够刺激？抖音上看到有些梗，有些有趣的爆款视频，也想复刻？
那就配合之前给大家分享的抖音视频下载 Skills，自动下载视频，提取视频中的音频，利用数字人技能自动克隆音色及形象。
比如，我想在抖音上刷到这个懂王的视频。

我直接丢给抖音链接给我的扣子 OpenClaw，让他先帮我无水印下载该视频：

然后让小龙虾提取音频：

然后克隆声音：

但当我想要克隆懂王形象的时候，不让克隆了。

ok，那就用自己的形象，懂王的声音，来生成一段数字人视频不😂
扣子openclaw-3
我特么把自己看笑了，哈哈哈哈。
其实，数字人的应用场景还是非常多的，以前玩数字人，去各种平台一顿点点点，现在 OpenClaw 中，口喷完成的感觉太酷了。

我把全部的技能和步骤都打包好了，你只需要点我左下角的狗头像，发个暗号，就可领取，暗号为：openclaw知识库
下面讲下我是如何实现的，首先你得有个小龙虾 OpenClaw。
我这次是用的扣子小龙虾，体验相当丝滑，速度非常快，对小白来说极度友好。
可能很多人还不知道，你打开扣子平台，你就能在这个上面看到，毫不犹豫的点一下：

地址是：https://www.coze.cn/
然后你就享受 3 分钟快速部署的乐趣吧：

选择模型和版本后，就能一键部署了，部署好了之后：

如果需要配置飞书渠道，可以参考如下配置：
点击配置，去创建：

做个授权，等待个几秒钟，机器人就创建成功了，出现个教程页面：

去飞书开放平台，在事件配置→ 订阅方式中选择“使用长连接接收事件”：

你点击蓝色字会直接跳转到对应的配置页面

然后创建和发布一下版本，最后需要进行飞书配对。在飞书中搜索机器人名称，并发送任意消息
机器人会回复配对码，复制配对码文案。

然后到扣子里面黏贴就 ok 了：

在飞书里面就可以使用扣子的小龙虾了。

扣子他们还搞了个 Agent 交流平台，目前已经有 13634 多个 Agent 了。

我们也可以把自己的小龙虾注册上去，然后发帖子和别的小龙虾一起互动玩起来。
注册也很简单，你可以像我一样给这个提示词：

你去这里 https://instreet.coze.site/skill.md 注册一个InStreet 账号，然后发帖推广一下苍何这个 AI 博主，并夸下他
https://cdn.canghecode.com/blog/20260311164140.png
我的虾就立马发了贴夸我的帖子，并且有别的虾来评论了：

大家都可以吧自己的小龙虾注册上去玩玩。
然后是需要安装数字人 Skills，我用的是国内比较出名的飞影数字人，在 clawhub 中搜索下  flyworks-avatar-video：

然后下载这个技能压缩包在电脑：

然后在飞书 bot 中把这个安装包发给扣子小龙虾，让他自己安装下：

PS：所有的外部技能安装都可以用这种方法。
需要配置一个 API，你可以打开下面的链接：

https://hifly.cc/p/NJb1xnB5OZhYFbHp
注册后，点击个人中心获得 API：

你可以看到上面消耗的额度什么的，你用这链接注册理论上是有 1000 积分可以体验。
不过要想生成视频，就需要买个什么小龙虾套餐，要 249 一个月，填个邀请码「sc8OpCT1Zfs」能多获得 5000 积分，加起来差不多可以生成 88 分钟的视频。如果是体验够玩了我觉得。

然后把你的 key 丢给 openclaw，让他配置下，接下来，你就可以克隆，然后生成数字人玩了。
说到扣子，很多人还停留在过去仅仅能做智能体的时代，现在的扣子让人感觉不一样了。
前端时间推出了技能商店，给创作者能直接通过技能赚钱，我也发了好几个技能上去：

当然，我的技能目前还都是免费的，大家可以在扣子上直接免费使用。
除此，扣子还推出了扣子编程，能用自然语言做应用，给很多不懂代码但是想用 AI 做应用的小白一个很好的入口。
除了做应用，还可以用嘴做工作流，做 Agent，做技能等。

其实他这个扣子小龙虾也是通过扣子编程的方式搭建的一个应用：

你是可以直接在这里改小龙虾的各种配置，以及安装技能，看使用情况等，都是非常方便的：

幸运的是，扣子今晚也邀请我，来聊一聊小龙虾，我也会毫无保留的分享，我这段时间研究小龙虾的一些经验。

大家如果感兴趣也可以去扣子官方视频号或特工宇宙官方视频号观看。

### 例8：传入发票自动解析入飞书多维表格发票系统

给我的小龙虾安排了个狠活，现在我只需要丢一张发票给他，就能自动利用 PaddleOCR Skills 解析，然后传入到飞书多维表格，做了一套发票自动管理系统。

给大家做个分享。

背景

每个月报销发票都是个头疼事，一张一张手动录入太痛苦了。正好看到 PaddleOCR 上了 ClawHub，就想着能不能自动化一下。
做了什么

简单来讲，我现在只需要把发票 PDF 发给 OpenClaw，它就能：
自动解析 - 用 PaddleOCR Skills 提取发票信息（号码、日期、金额、税率这些）
自动上传 - 把 PDF 存到飞书云空间
自动录入 - 把所有字段写入飞书多维表格
全程不用手动填表，30秒搞定一张发票。
技术栈
PaddleOCR  Skills- 文档解析能力，基于文心大模型体系训练
OpenClaw - Agent 编排和自动化执行
飞书多维表格 - 数据存储和管理
实际效果
录了两张发票测试，识别准确率 100%，连表格结构都能完整提取。最爽的是，以后只要扔文件就行，剩下的事 OpenClaw 全包了。

如何搭建

1、安装 PaddleOCR  Skills

给你的小龙虾 OpenClaw 说：

帮我下载这个技能：https://clawhub.ai/Bobholamovic/paddleocr-doc-parsing

他就会自动安装这个技能：

2、配置一下 API

可以直接问 OpenClaw 怎么配置：

其实核心就是去官网申请个 KEY 和填入个API_URL。

打开 PaddleOCR 官网后，选择上传一个发票 PDF 附件：

解析后，点击左上角这里的 API：

需要简单填写手机号验证，然后就可以看到API_URL 和 TOKEN 了。

复制这 2，然后到小龙虾中让他帮你自动配置：

接下来，你上传个 PDF 发票，就能解析了，PaddleOCR的准确率贼高，几乎识别出他能识别到的，并以 JSON 的形式给返回，然后 openclaw 会转为结构化数据给我。

接下来输入这一串提示词，让 openclaw 把这些字段传入到飞书多维表格中，建立发票系统：

帮我将该信息存入到飞书多维表格，我希望有的字段是：发票号码、发票类型、开票日期、开票人、购买方名称、购买方统一社会信用代码、销售方名称、销售方统一社会信用代码、开户银行、银行账号、合计费用项目名称、合计费用单价、合计费用数量、合计费用金额、合计费用税率、合计费用税额，以及上传发票附件到附件字段。

需要简单授权，就能创建哈飞书多维表格

这个时候会有一些字段不符合要求，特别是附件，他没法直接上传，需要先传到飞书，再以超链接传过去。你自己稍微手动改下，就 ok 了。

然后跟 openclaw 说，让他以后传发票，都解析后传入到这个系统。

我整体修改了下《发票管理》 多为表中的字段类型和名称，请你以后按照这个要求，我只需要上传发票附件给你，你就借助PaddleOCR 技能帮我做解析后，把相应字段对应的存储到《发票管理》这个飞书多维表格，ok 吗？

以后，你只需要往 openclaw 丢一个发票，他就自动解析后放入发票管理系统了。

太方便了。

一点感想

以前觉得文档解析这种能力要自己调 API、写代码，现在发现 PaddleOCR 已经以 Skill 的形式直接上架了 ClawHub，在 openclaw 直接传个发票就能用。

这种「能力即插即用」的感觉挺棒的——文心大模型的能力正在通过 Skill 进入开发者工具链，变成可以直接调用的组件。
如果你也在用 OpenClaw，推荐试试这个 Skill：👉 https://clawhub.ai/Bobholamovic/paddleocr-doc-parsing

### 例9：配合 ima skill 做知识管理

原文地址：https://mp.weixin.qq.com/s/tvtNSwPpQdK_ER9VoPzuxw

### 例10：小度音箱+Openclaw

效果呈现：

技能地址：https://clawhub.ai/dueros-mcp/xiaodu-control-official

直接将这个技能地址丢给你的Openclaw，让他帮你安装

然后会需要配置一个ACCESS_TOKEN

打开小度开放平台地址：https://dueros.baidu.com/dbp/mcp/console

创建一个 MCP 应用：

应用类别选择：软件

这个地方需要提前进行开发者认证，通常几分钟就会认证通过，慢的话 2 分钟内完成

接下来会给一个 token和 key

你可以点下调试授权，里面的 token 直接发给 openclaw。

注意，要用同一个百度账号登录。

## 第六部分：好用 Skills 推荐

可以看我们的另外一个文档，每天都会更新好用的 Skills。

地址：
🐲🦞扫盲版-给不会使用的同学看

我也把我遇到的一些好用的技能放在了 GitHub，大家可以直接下载，并一键使用。

快速安装（推荐）
npx skills add freestylefly/canghe-skills
注册插件市场
在 Claude Code 中运行：
/plugin marketplace add freestylefly/canghe-skills

当然你也可以直接下载：

canghe-skills.zip

### 1、OCR 识别 Skills

这是一个用于高级文档解析的技能，支持提取表格、公式、图表和布局信息。需要配置 PaddleOCR API 才能使用。

clawhub 地址：https://clawhub.ai/Bobholamovic/paddleocr-doc-parsing

paddleocr-doc-parsing.zip

## 第七部分：资源推荐

### 1、小龙虾 skill 整理开源仓库：

https://github.com/VoltAgent/awesome-openclaw-skills

### 2、精选案例库：

https://github.com/hesamsheikh/awesome-openclaw-usecases

### 3、进阶实用技能仓库

🐲🦞扫盲版-给不会使用的同学看

### 4、技能仓库整理：

https://github.com/VoltAgent/awesome-openclaw-skills

### 5、目前从几千个问题里筛选出来的典型问题合集（主要是针对火山 arkclaw 相关的）

【QA合集】火山ArkClaw龙虾 ToP100  V1.2

### 6、龙虾导航网站：

https://www.claw123.com/

## 鸣谢

感谢小伙伴噬幻、蜗牛对文档的贡献。

感谢苍何的 AI 博主朋友们对文档的大力支持，都是很优秀的博主，大家可以关注学习干货：
