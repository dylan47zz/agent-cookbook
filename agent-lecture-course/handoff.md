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

### 第 2 讲仍可继续增强

虽然已经补到比较完整，但还可以继续扩：

- 现场创建一个 Agent 的逐步演示脚本
- 更具体的 `SOUL.md / USER.md / AGENTS.md` 配套示例
- 模型切换与配置界面的演示图
- 飞书/微信接入真实流程图

## 推荐下一步

优先级建议如下：

1. 替换飞书和微信接入的占位图为真实截图
2. 继续增强第 2 讲的“现场创建 Agent”演示层
3. 根据真实授课反馈微调网页文案和信息密度

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

然后从“飞书/微信真实截图替换”开始继续，不要重新发明课程结构。
