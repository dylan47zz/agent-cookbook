# Handoff

## 项目概况

这是一个围绕 `OpenClaw / Agent 素养讲座` 搭建的独立课程目录，重点不是开发一个复杂应用，而是完成一套可讲、可演示、可继续扩展的课程资产。

当前核心目录：

- `agent-lecture-course/README.md`
- `agent-lecture-course/lecture-01-agent-basics.md`
- `agent-lecture-course/lecture-02-deployment-and-configuration.md`
- `agent-lecture-course/lecture-03-learning-use-cases-and-tool-comparison.md`
- `agent-lecture-course/演讲使用说明.md`
- `agent-lecture-course/site/index.html`
- `agent-lecture-course/site/styles.css`
- `agent-lecture-course/site/main.js`

补充参考资料：

- `Openclaw从入门到精通.md`
- `feishu-doc-P6zsdsgYco6i4XxLeIccvlpvnQe.md`

## 当前已完成

### 课程内容

- 已建立独立课程目录 `agent-lecture-course`
- 已完成三讲独立教案
- 已完成课程总说明 `README.md`
- 已完成讲师向的 `演讲使用说明.md`

### 演示网页

- 已完成静态单页演示站
- 风格方向：参考《王国之泪》的气质，但不直接复刻 UI
- 已包含：
  - 课程总览
  - 第 1 讲：认识 Agent
  - 第 2 讲：部署与配置
  - 第 3 讲：学习应用与工具比较
  - 结语页

### 已做交互

- 顶部导航跳转
- 页面进度条
- 当前章节高亮
- 讲师备注抽屉
- 第 1 讲对比切换
- 结构节点切换
- 步骤卡片切换
- 判断题翻卡
- 第 3 讲案例 tab 切换
- 选型矩阵维度筛选
- `SOUL.md` 示例卡切换

### 内容扩充情况

- 已补充“为什么 OpenClaw 会火”
- 已补充差异化优势与局限
- 已补充平台地图：
  - 原生 OpenClaw
  - Kimi 托管型
  - 扣子场景型
  - 飞书集成型
- 已补充 Skill 生命周期
- 已补充飞书官方接入路径
- 已补充微信插件接入路径
- 已补充 `SOUL.md` 示例和“按场景创建 Agent”示例
- 已补充真实案例库：
  - 监控与提醒
  - 第二大脑
  - 发票自动化
  - 内容流水线
  - 知识管理

### 本轮新完成（2026-03-25 晚）

本轮主要没有继续盲目加内容，而是集中把第 2 讲的若干关键区块从“说明书式列表”改成更适合投屏和讲解的版式。

已完成：

- 给 OpenClaw 官方入门部分补上官网跳转：
  - `https://docs.openclaw.ai/start/getting-started`
- 将 OpenClaw Quickstart 区块改成更适合课堂扫读的结构：
  - 官方入口按钮
  - macOS / Linux 与 Windows 安装命令卡
  - 5 步 quickstart 卡片
  - 关键命令使用深色代码块高亮
- 将“模型怎么配，官方推荐怎么做？”改成独立步骤区：
  - 不再是普通列表
  - 改为 4 个步骤卡
  - `openclaw onboard`
  - `openclaw configure`
  - `openclaw models status`
  - `openclaw models list`
  - `openclaw models set provider/model`
  都已用代码块展示
- 将“Skill Lifecycle”改成 4 步流程卡
- 将“接入飞书这类平台时，真正要做的是什么？”改成 5 步接入卡
- 将“按官方文档接入飞书”改成 5 步步骤卡，并为关键命令补代码块：
  - `openclaw channels add`
  - `openclaw gateway status`
  - `openclaw gateway restart`
  - `openclaw logs --follow`
- 将“微信可以怎么接？”改成 4 步实战卡 + 1 个注意事项卡，并为关键命令补代码块：
  - `openclaw plugins install "@tencent-weixin/openclaw-weixin"`
  - `openclaw channels login --channel openclaw-weixin`
  - `openclaw gateway restart`
- 已为截图素材预留目录：
  - `agent-lecture-course/site/assets/screenshots/feishu`
  - `agent-lecture-course/site/assets/screenshots/wechat`
  - `agent-lecture-course/site/assets/screenshots/openclaw`

### 本轮明确做过的取舍

- 不再尝试把 OpenClaw 安装流程做成“官网动态示意图复刻版”
- 原因是这类大块视觉演示会显得突兀，而且授课时直接切终端更自然
- 所以页面里的 OpenClaw 安装区当前只承担：
  - 给官网入口
  - 给平台命令
  - 给最短主线步骤
- 不承担“替代真实终端演示”的任务

## 当前未完成

### 飞书 / 微信接入演示图

这两块目前已经不是纯文字，而是做成了 `演示图占位框架`，但还没有替换为真实截图。

当前页面中已有：

- `Feishu Demo Frames`
- `WeChat Demo Frames`

下一步应优先做：

- 找到真实截图
- 替换占位卡片
- 视需要补图片标题或小字说明

当前图片目录与建议命名已经准备好：

- 飞书：
  - `feishu-01-create-app.png`
  - `feishu-02-fill-credentials.png`
  - `feishu-03-event-config.png`
  - `feishu-04-chat-verify.png`
- 微信：
  - `wechat-01-install-plugin.png`
  - `wechat-02-login-qr.png`
  - `wechat-03-gateway-status.png`
  - `wechat-04-chat-verify.png`

### 第 2 讲仍可继续增强

虽然已经补到比较完整，但下一步更适合做“减法微调 + 素材补齐”，而不是继续无节制增厚。仍值得继续做的点：

- 现场创建一个 Agent 的逐步演示脚本
- 更具体的 `SOUL.md / USER.md / AGENTS.md` 配套示例
- 模型切换与配置界面的演示图
- 飞书/微信接入真实流程图

### 本轮之后仍建议继续优化的内容

1. 第 2 讲整体信息密度仍偏高，尤其是中段多个步骤卡连续出现时，可能会有“全部都像重点”的问题
2. 某些块虽然已经从列表改成步骤卡，但还没有做真正的“讲解层级区分”，后面可能还要继续删字
3. `Feishu Demo Frames` / `WeChat Demo Frames` 仍然是当前页面里最明显的未完成区域
4. `SOUL.md`、创建 Agent、多 Agent 这些区域虽然内容比较完整，但是否最适合课堂顺序，仍值得在真实试讲后再微调
5. OpenClaw 安装区目前已经收敛为“讲义索引版”，后续不建议再做重视觉复刻

## 推荐下一步

优先级建议如下：

1. 替换飞书和微信接入的占位图为真实截图
2. 继续增强第 2 讲的“现场创建 Agent”演示层
3. 根据真实授课反馈微调第 2 讲的信息密度，优先做删减和重排，而不是继续堆内容

如果是明天在另一台电脑继续，最建议的切入顺序：

1. 先打开网页通读一遍第 2 讲，确认本轮版式改造后的真实观感
2. 再开始准备飞书 / 微信真实截图
3. 替换截图后，再判断哪些区块需要继续降信息密度

## 打开方式

网页入口：

- `agent-lecture-course/site/index.html`

本地打开示例：

```bash
open /Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/index.html
```

## Git 状态说明

当前工作已经推送到远程仓库：

- `git@github.com:dylan47zz/agent-cookbook.git`

已推送分支：

- `main`

## 给下一位 AI 的建议

如果在新会话继续，请优先阅读这些文件：

- `agent-lecture-course/README.md`
- `agent-lecture-course/handoff.md`
- `agent-lecture-course/演讲使用说明.md`
- `agent-lecture-course/lecture-02-deployment-and-configuration.md`
- `agent-lecture-course/site/index.html`
- `agent-lecture-course/site/styles.css`
- `agent-lecture-course/site/main.js`
- `Openclaw从入门到精通.md`

然后按这个顺序继续：

1. 从“飞书/微信真实截图替换”开始
2. 完成后再看第 2 讲哪些地方仍然太像说明书
3. 优先做删减、重排、提炼，不要重新发明课程结构
4. 不要再把 OpenClaw 安装区做回大块炫示意，真实终端演示优先
