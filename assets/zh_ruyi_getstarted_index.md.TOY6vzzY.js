import{_ as s,c as i,o as a,V as n}from"./chunks/framework.EV3G-tmK.js";const o=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi/getstarted/index.md","filePath":"zh/ruyi/getstarted/index.md","lastUpdated":1707025980000}'),t={name:"zh/ruyi/getstarted/index.md"},h=n(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="安装依赖软件" tabindex="-1">安装依赖软件 <a class="header-anchor" href="#安装依赖软件" aria-label="Permalink to &quot;安装依赖软件&quot;">​</a></h2><p>RUYI 包管理器依赖一些外部工具，需要手动安装</p><p><strong>Debian/Ubuntu</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo apt-get install wget git tar bzip2 xz-utils zstd</span></span></code></pre></div><p><strong>Fedora/openEuler</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo apt-get install wget git tar bzip2 xz zstd</span></span></code></pre></div><h2 id="安装-ruyi-包管理器" tabindex="-1">安装 RUYI 包管理器 <a class="header-anchor" href="#安装-ruyi-包管理器" aria-label="Permalink to &quot;安装 RUYI 包管理器&quot;">​</a></h2><p>从发布<a href="https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/" target="_blank" rel="noreferrer">镜像</a>中选择合适架构的预编译二进制下载，当前 RUYI 包管理支持 amd64 和 riscv64 架构编译环境。</p><p>v0.2 版本的稳定二进制为 0.2.0-beta.20231211 版本。</p><p><strong>注意： v0.3 版本已经发布，查看 <a href="/docs/zh/ruyi/updates/20240116.html">v0.3 版本新增特性</a></strong></p><p><strong>除了 RuyiSDK mirror 下载，亦可以从 <a href="https://github.com/ruyisdk/ruyi/releases" target="_blank" rel="noreferrer">Github Release</a> 下载</strong></p><p>这里以 amd64 架构环境为例进行安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/ruyi.amd64.20231211</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod +x ./ruyi.amd64.20231211</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo cp ruyi.amd64.20231211 /usr/local/bin/ruyi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0-beta.20231211</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Institute of Software, Chinese Academy of Sciences (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ISCAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rights reserved.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache-2.0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.apache.org/licenses/LICENSE-2.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0&gt;</span></span></code></pre></div><p><code>ruyi version</code> 应当可以正常打印版本信息。注意二进制的文件名必须为 <code>ruyi</code> 。</p><p>列出帮助信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi --help</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RuyiSDK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Package Manager </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0-beta.20231211</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            show this help message and exit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -V,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         Print version information</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">subcommands:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extract,install,i,list,update,venv,admin,self,version}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    extract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             Fetch package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">then extract to current directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i)         Install package from configured repository</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                List available packages in configured repository</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              Update RuyiSDK repo and packages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    venv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                Generate a virtual environment adapted to the chosen toolchain and profile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               (NOT </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">FOR REGULAR USERS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) Subcommands </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> managing Ruyi repos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    self</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                Manage this Ruyi installation</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             Print version information</span></span></code></pre></div><h2 id="刷新软件包缓存" tabindex="-1">刷新软件包缓存 <a class="header-anchor" href="#刷新软件包缓存" aria-label="Permalink to &quot;刷新软件包缓存&quot;">​</a></h2><p>更新软件包缓存，使用默认镜像即可：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi update</span></span></code></pre></div><p>软件包缓存将存放在用户目录中，通常为 <code>~/.cache/ruyi</code> ；在 <code>XDG_CACHE_HOME</code> 环境变量被设置时，目录为 <code>$XDG_CACHE_HOME/ruyi</code> 。 在本文档中家目录为 <code>/home/myon</code> 。</p><p>查看可用的软件包，该命令将列出所有可用的软件包：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">List</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of available packages:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> source/ruyisdk-demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231114</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> source/coremark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.2-pre.20230125 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prerelease,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest-prerelease</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.1 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emulator/qemu-user-riscv-xthead</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0-ruyi.20231207+g03813c9fe8 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emulator/qemu-user-riscv-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.2-ruyi.20231121 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> toolchain/gnu-plct</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">slug: gnu-plct-20231212</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231118</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">slug: gnu-plct-20231118</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> toolchain/gnu-plct-xthead</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">slug: gnu-plct-xthead-20231212</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231118</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">slug: gnu-plct-xthead-20231118</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> toolchain/gnu-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">slug: gnu-upstream-20231212</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231118</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">slug: gnu-upstream-20231118</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> toolchain/llvm-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.5-ruyi.20231121 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">slug: llvm-upstream-20231121</span></span></code></pre></div><p>从输出可以看到软件包共分为三种，其中 <code>source</code> 代表了软件源码包， <code>toolchain</code> 代表了工具链二进制包， <code>emulator</code> 代表了模拟器二进制包。</p><p>如果软件包显示 “no binary for current host” 则该软件包的当前版本不支持本机架构。</p><p>列出所有软件包的详细信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi list -v</span></span></code></pre></div><h3 id="安装软件包" tabindex="-1">安装软件包 <a class="header-anchor" href="#安装软件包" aria-label="Permalink to &quot;安装软件包&quot;">​</a></h3><p>使用 <code>install</code> 命令安装软件包，如 GNU 上游工具链：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi install gnu-upstream</span></span></code></pre></div><p>若希望重装一个软件包，则可以加上 <code>--reinstall</code> 参数：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi install --reinstall gnu-upstream</span></span></code></pre></div><h3 id="安装源码包" tabindex="-1">安装源码包 <a class="header-anchor" href="#安装源码包" aria-label="Permalink to &quot;安装源码包&quot;">​</a></h3><p>RUYI 包管理器同时管理一些源码包，使用 <code>extract</code> 命令下载一个源码包并解包到当前目录：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi extract ruyisdk-demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">README.md</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  rvv-autovec</span></span></code></pre></div><h3 id="搭建编译环境" tabindex="-1">搭建编译环境 <a class="header-anchor" href="#搭建编译环境" aria-label="Permalink to &quot;搭建编译环境&quot;">​</a></h3><p>已经安装的工具链与模拟器需要在 RUYI 编译环境中使用，这和 python 的虚拟环境十分类似。 这是由 <code>venv</code> 命令实现的：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi venv --toolchain gnu-upstream --emulator qemu-user-riscv-upstream generic ./ruyi_venv</span></span></code></pre></div><p>这个命令使用预置的 generic 配置，在 <code>./ruyi_venv</code> 目录建立包含 gnu-upstream 工具链和 qemu-user-riscv-upstream 模拟器的编译环境。</p><p>具体使用参见“编译环境”与“具有 QEMU 支持的编译环境”章节。</p><h3 id="卸载软件包" tabindex="-1">卸载软件包 <a class="header-anchor" href="#卸载软件包" aria-label="Permalink to &quot;卸载软件包&quot;">​</a></h3><p>注意 RUYI 包管理器没有实现卸载 RUYI 软件包的功能。若您强制中断 RUYI 软件包安装进程或做了其他非预期操作 而会导致软件包功能异常时，请使用 <code>install --reinstall</code> 以尝试重试安装该软件包。</p><h3 id="卸载-ruyi-包管理器" tabindex="-1">卸载 RUYI 包管理器 <a class="header-anchor" href="#卸载-ruyi-包管理器" aria-label="Permalink to &quot;卸载 RUYI 包管理器&quot;">​</a></h3><p>使用下面的命令卸载 RUYI 包管理器：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi self uninstall</span></span></code></pre></div><p>这个命令将会询问您以二次确认该操作，如果希望 RUYI 包管理不询问而直接执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi self uninstall -y</span></span></code></pre></div><p>上面的命令只是删除 RUYI 本身，并不会删除软件包缓存和安装的 RUYI 软件包。</p><p>如果希望删除所有缓存和安装了的软件包以实现干净的卸载：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi self uninstall --purge</span></span></code></pre></div><p>同样的这个命令将会询问您以二次确认该操作，如果希望 RUYI 包管理不询问而直接执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi self uninstall --purge -y</span></span></code></pre></div><p>实现 RUYI 包管理自身的升级可能会需要超级用户权限，而 RUYI 包管理被设计为避免进行需要超级用户权限的操作。 故在需要升级 RUYI 包管理时您需要手动进行该操作，即首先卸载 RUYI 包管理器，再执行安装 RUYI 包管理器的过程， 这个过程中您可以自主选择是否保留旧的软件包缓存和 RUYI 软件包。</p>`,53),l=[h];function p(e,k,r,d,F,g){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{o as __pageData,y as default};
