# Bilibili Toolkit

一个用于优化 Bilibili 网站浏览体验的 Tampermonkey 脚本。

## 功能特性

### 首页

- 隐藏adblock插件提示
- 隐藏轮播图
- 隐藏频道导航
- 隐藏广告卡片
- 隐藏首页课程/番剧/综艺...卡片
- 隐藏未登录的提示框

### 直播

- 自动最高画质
- 隐藏右侧实验室/关注图标
- 隐藏小橙车提示

### 其他

- 动态跳转到视频列表

### 安装

脚本托管于 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/544206-bilibili%E5%B7%A5%E5%85%B7%E7%AE%B1)

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
