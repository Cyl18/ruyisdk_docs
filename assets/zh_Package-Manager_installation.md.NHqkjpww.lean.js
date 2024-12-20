import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.DlqYXOik.js";const o=JSON.parse('{"title":"ruyi 包管理器安装","description":"","frontmatter":{},"headers":[],"relativePath":"zh/Package-Manager/installation.md","filePath":"zh/Package-Manager/installation.md","lastUpdated":1734688612000}'),e={name:"zh/Package-Manager/installation.md"};function l(h,s,p,k,r,F){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="ruyi-包管理器安装" tabindex="-1">ruyi 包管理器安装 <a class="header-anchor" href="#ruyi-包管理器安装" aria-label="Permalink to &quot;ruyi 包管理器安装&quot;">​</a></h1><p>让我们从 RuyiSDK 包管理器的安装开始：</p><h2 id="获取-ruyi-包管理器" tabindex="-1">获取 ruyi 包管理器 <a class="header-anchor" href="#获取-ruyi-包管理器" aria-label="Permalink to &quot;获取 ruyi 包管理器&quot;">​</a></h2><p>目前 RuyiSDK 包管理器工具目前能在 <strong>amd64</strong>、<strong>arm64</strong>、<strong>riscv64</strong> 三种架构在 <strong>Linux</strong> 系统下运行，可以从如下链接中下载：</p><ul><li><a href="https://github.com/RuyiSDK/ruyi/releases/" target="_blank" rel="noreferrer">ruyi GitHub Releases</a></li><li><a href="https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/" target="_blank" rel="noreferrer">ISCAS 镜像源</a></li></ul><p>你可以首先使用 <code>ruyi update</code> 从配置的软件源中获得本地软件包缓存的更新，再使用 <code>ruyi list</code> 查看目前所支持的包。</p><blockquote><p>若还有其余相关问题可以访问 ruyi 包管理器<a href="https://github.com/RuyiSDK/ruyi" target="_blank" rel="noreferrer">仓库文档</a>（目前仅支持英文）参阅。</p></blockquote><h2 id="ruyi-安装" tabindex="-1">ruyi 安装 <a class="header-anchor" href="#ruyi-安装" aria-label="Permalink to &quot;ruyi 安装&quot;">​</a></h2><blockquote><p>请按照架构信息下载不同的 ruyi 二进制，下面以 amd64 架构为例说明具体的步骤。其他架构除了 ruyi 二进制文件不同，其他步骤是一样的。此外，RuyiSDK 目前一直在不断更新，下面例子中的 ruyi 版本也请更换为最新版本。</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/ruyi.amd64.20231211</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64.20231211</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi.amd64.20231211</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0.2.0-beta.20231211</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Institute of Software, Chinese Academy of Sciences (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ISCAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rights</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reserved.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache-2.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.apache.org/licenses/LICENSE-2.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0&gt;</span></span></code></pre></div><blockquote><p><code>ruyi version</code> 应当可以正常打印版本信息。<strong>注意二进制的文件名必须为</strong> ruyi。</p></blockquote><p>列出帮助信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RuyiSDK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Manager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0.2.0-beta.20231211</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -V,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">subcommands:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extract,install,i,list,update,venv,admin,self,version}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    extract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             Fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">then</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i)         Install package from configured repository</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                List</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configured</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repository</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              Update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RuyiSDK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    venv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                Generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> adapted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chosen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toolchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> profile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">               (NOT </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">FOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> REGULAR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> USERS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) Subcommands </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> managing Ruyi Repos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    self</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                Manage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installation</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information</span></span></code></pre></div><h3 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h3><h4 id="ruyi-update-执行报错" tabindex="-1"><code>ruyi update</code> 执行报错 <a class="header-anchor" href="#ruyi-update-执行报错" aria-label="Permalink to &quot;\`ruyi update\` 执行报错&quot;">​</a></h4><p>由于目前软件包索引信息托管于 GitHub 仓库，国内访问可能会产生不稳定等问题，若出现 <code>ruyi update</code> 执行时连续报错，可参考 ruyi <a href="https://github.com/RuyiSDK/ruyi" target="_blank" rel="noreferrer">仓库文档</a>，将仓库更换成 <a href="https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git" target="_blank" rel="noreferrer">备用仓库</a>。</p><p>操作简述：</p><ol><li>在 ruyi 包管理工具默认的配置目录（默认为 <code>~/.config/ruyi</code>）下修改 <code>config.toml</code> 文件配置。 不同 Linux 发行版可能不同，当 config.toml 不存在时，可以自行创建。config.toml 配置文档内容默认为：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[packages]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Consider pre-release versions when matching packages in repositories.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prereleases</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[repo]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Path to the local RuyiSDK metadata repository. Must be absolute or the setting</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># will be ignored.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If unset or empty, $XDG_CACHE_HOME/ruyi/packages-index is used.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Remote location of RuyiSDK metadata repository.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If unset or empty, this default value is used.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://github.com/ruyisdk/packages-index.git&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If the GitHub network is unstable, you can use the backup RuyiSDK metadata repository.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># remote = &quot;https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Name of the branch to use.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If unset or empty, this default value is used.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;main&quot;</span></span></code></pre></div><ol start="2"><li>将 remote 的值修改为： <code>https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git</code> 再重新执行 <code>ruyi update</code> 即可。</li></ol><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>以上场景介绍了 ruyi 包管理器和工具的基本使用，包括：</p><ul><li>安装 <code>ruyi</code></li><li>使用 <code>ruyi list</code> / <code>ruyi update</code> / <code>ruyi install</code> 功能</li><li>若出现网络不稳定的备用方案</li></ul><p>ruyi 包管理器相关的更多命令以及命令具体使用方法请参阅<a href="./../Package-Manager/">功能介绍</a>。</p><h3 id="使用案例" tabindex="-1">使用案例 <a class="header-anchor" href="#使用案例" aria-label="Permalink to &quot;使用案例&quot;">​</a></h3><p>目前有一些简单的使用案例提供参考，请参阅使用案例栏目。</p>`,26)]))}const y=i(e,[["render",l]]);export{o as __pageData,y as default};
