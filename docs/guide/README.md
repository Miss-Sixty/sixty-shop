<!--
 * @Author: 张喜贺
 * @Date: 2020-08-13 19:00:58
 * @LastEditors: 张喜贺
 * @LastEditTime: 2020-08-17 20:34:03
 * @FilePath: /six-ele/docs/guide/README.md
-->

# 介绍

Git Commit message 规范
使用 Angular 的 Commit message 格式。
commit message 格式
每个 commit message 包括 header,body 和 footer，各占一行，每行不超过 100 字符。其中 header 由 type、scope 和 subject 组成。header 必须要写，header 的 scope 是可选的。
<type>(<scope>): <subject>
<BLANK LINE>

<body>
<BLANK LINE>
<footer>
复制代码Revert
如果commit用于撤销之前的commit，需以revert:开头，接着写被撤销的commit的header。body里要写：this reverts commit . ,hash为被撤销的commit的hash值。这种格式也可以由git revert命令自动生成。
Type
必须为下列之一:

feat：新功能（feature）
fix：修补 bug
docs：文档修改
style： 不影响代码含义的修改(例如：white-space; 格式化等)
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
perf: 提升性能的修改
test：增加或修改测试
chore：构建流程或辅助工具的变动

Scope
scope 用于说明 commit 修改的范围，比如数据层、控制层、视图层,route, component, utils, build 等等。如果修改影响多处，可使用"\*"。
Subject
Subject 是对修改的简要说明：

使用祈使语气，一般现在时。
首字母小写
句末不要使用句号

Body
使用祈使语气，一般现在时。另外，body 需要包含修改的原因和与之前版本的区别。
Footer
任何 Breaking changes 的信息或者关闭 issue 的信息都可写在 Footer.
Breaking changes 需要以 BREAKING CHANGE: 开头。
