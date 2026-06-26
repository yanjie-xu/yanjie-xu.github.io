# 网站日后更新指南

这版网站保留了最新的视觉设计，同时使用 GitHub Pages / Jekyll 自动生成新闻页面。

## 最常改的文件

| 想改什么 | 修改哪个文件 |
|---|---|
| 首页标题、About、邮箱和链接 | `_data/profile.yml` |
| 三个 Research Pillar 的标题、文字和图片 | `_data/research.yml` |
| Current roles | `_data/roles.yml` |
| 首页代表论文 | `_data/publications.yml` |
| 新增新闻、论文、报告或动态 | `_posts/` 新建一个 `.md` 文件 |
| 替换图片 | `assets/images/` |

## 修改首页图片

首页当前使用：

```yaml
hero_image: "/assets/images/hero/mushroom-hero.jpg"
```

上传新图到 `assets/images/hero/`，再修改文件名即可。

## 修改三个 Research Pillar

打开 `_data/research.yml`。每个板块都有：

```yaml
- number: "01"
  title: "板块标题"
  image: "/assets/images/research/图片名.jpg"
  description: >-
    板块介绍文字
```

注意 YAML 缩进要保持一致。

## 从 LinkedIn 搬运一条新动态

1. 把帖子图片保存到 `assets/images/news/`
2. 复制 `_posts/` 内任意 `.md` 文件
3. 文件名改成：`YYYY-MM-DD-short-title.md`
4. 修改顶部信息：

```yaml
---
layout: post
title: "Your title"
date: 2026-06-20
category: publication
category_label: "Publication"
summary: "One sentence shown on the news card."
image: "/assets/images/news/your-image.jpg"
image_alt: "Describe the image"
external_url: "LinkedIn or DOI link"
---
```

5. 把 LinkedIn 正文粘贴在第二个 `---` 之后。

### category 建议值

- `publication`
- `talk`
- `milestone`
- `fieldwork`

## 在 GitHub 上编辑

进入仓库，点击文件，然后点击铅笔图标。编辑后点击 **Commit changes**。GitHub Pages 通常会在几分钟内自动更新。

## 本地预览

直接双击 `_site-preview/index.html` 可以查看当前设计的静态预览。

注意：真正的动态版源代码在项目根目录，需要 GitHub Pages 或 Jekyll 构建。`_site-preview/` 只是方便你本地看效果，不要把里面的文件拿来替换根目录源代码。

## 隐私提醒

代码包没有放入含家庭住址、出生日期和电话号码的原始 CV，也没有放入 Academic Portfolio 原文件；公开上传 GitHub 时不会意外暴露这些附件。网页图片已经转换为适合发布的版本。
