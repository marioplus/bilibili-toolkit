# Bilibili Toolkit

一个用于优化 Bilibili 网站浏览体验的 Tampermonkey 脚本。

## 功能特性

### 首页优化

- 隐藏广告屏蔽提示
- 隐藏首页轮播图
- 隐藏频道导航栏
- 隐藏推荐卡片（直播、番剧、课程等）

### 动态页面优化

- 自动将带有推广参数的动态页面重定向到视频标签页

### 直播页面优化

- 隐藏右侧边栏
- 优化礼物面板位置

## 安装方式

### 前提条件

- 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展

### 安装步骤

1. 前往 [Releases](https://github.com/your-username/bilibili-toolkit/releases) 页面
2. 下载最新的 [.user.js](file://E:\Code\tampermokey\bilibili-toolkit\dist\bilibili-toolkit.user.js) 文件
3. Tampermonkey 会自动提示安装脚本
4. 点击"安装"完成安装

### 开发者安装

```bash
# 克隆项目
git clone https://github.com/your-username/bilibili-toolkit.git
cd bilibili-toolkit

# 安装依赖
npm install

# 构建项目
npm run build

# 构建后的脚本位于 dist/ 目录下
```

## 使用说明

安装后脚本会自动运行，无需额外配置。脚本会根据当前访问的页面自动应用相应的优化规则。

### 支持的页面

- `www.bilibili.com` - 首页
- `t.bilibili.com` - 动态页面
- `live.bilibili.com` - 直播页面

## 开发指南

### 项目结构

```
src/
├── plugin/                 # 插件模块
│   ├── home/              # 首页相关插件
│   ├── live/              # 直播相关插件
│   └── IPlugin.ts         # 插件接口定义
├── utils/                 # 工具函数
├── style/                 # 样式文件
└── main.ts                # 主入口文件
```

### 添加新功能

1. 在 `src/plugin/` 目录下创建新的插件文件
2. 实现 [IPlugin](file://E:\Code\tampermokey\bilibili-toolkit\src\plugin\IPlugin.ts#L4-L15) 接口
3. 在 [main.ts](file://E:\Code\tampermokey\bilibili-toolkit\src\main.ts) 中注册插件

### 插件接口

```typescript
interface IPlugin {
    support(): boolean;  // 判断是否支持当前页面
    execute(): void;     // 执行插件逻辑
}
```

## 构建与发布

### 自动构建

推送到 `master` 分支会自动触发 GitHub Actions 进行构建和发布。

### 手动构建

```bash
# 构建项目
npm run build

# 构建后的用户脚本位于 dist/bilibili-toolkit.user.js
```

## 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 文件了解版本更新详情。

## 免责声明

本脚本仅供学习交流使用，请遵守 Bilibili 的服务条款和相关法律法规。
