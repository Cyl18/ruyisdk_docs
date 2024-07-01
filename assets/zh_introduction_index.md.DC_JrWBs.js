import{_ as t,c as a,o as e,a3 as i}from"./chunks/framework.BKLMYXYM.js";const d="/docs/assets/RuyiSDK.Cr9Gr74Z.png",r="/docs/assets/Structure-RuyiSDK.DpdJ4nSb.png",k=JSON.parse('{"title":"Hello Ruyi","description":"","frontmatter":{},"headers":[],"relativePath":"zh/introduction/index.md","filePath":"zh/introduction/index.md","lastUpdated":1719824176000}'),n={name:"zh/introduction/index.md"},s=i('<h1 id="hello-ruyi" tabindex="-1">Hello Ruyi <a class="header-anchor" href="#hello-ruyi" aria-label="Permalink to &quot;Hello Ruyi&quot;">​</a></h1><p>欢迎来到 <a href="https://github.com/ruyisdk" target="_blank" rel="noreferrer">RuyiSDK</a> 相关介绍内容，以下是本文相关内容：</p><blockquote><ol><li>什么是 RuyiSDK -&gt; 介绍</li><li>为什么会有 RuyiSDK -&gt; 背景</li><li>RuyiSDK 有什么用 -&gt; 功能</li><li>我可以在什么设备上运行 -&gt; 支持的设备</li><li>RuyiSDK 的原理是什么 -&gt; RuyiSDK-架构示意图</li><li>我该从何开始 -&gt; 让我们开始吧！</li></ol></blockquote><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>RuyiSDK 是一个由 <a href="https://plctlab.org/" target="_blank" rel="noreferrer">PLCT Lab</a> 所启动的开源项目，该项目旨在为 RISC-V 开发者提供一个便捷、完善的开发环境。其提供了相关最新的硬件信息、软件支持，例如在支持的设备中有提供相关支持硬件情况；软件层面提供了镜像（如 <a href="https://github.com/ruyisdk/revyos" target="_blank" rel="noreferrer">RevyOS</a>）、工具链、包管理器等。</p><p>其最终目标是希望为 RISC-V 开发者提供一个完善、便捷的开发环境，使得 RISC-V 成为主流架构，以及建设并运营一个完善的社区以便开发者交流。最终希望 RuyiSDK 可以走向国际化，为全球的 RISC-V 开发者提供开发的便捷。</p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>RISC-V 是第五代精简指令集，由加州伯克利分校所发起的一个开源项目，相比 CISC 而言更具精简性，指令执行效率更高。开源使其能够更加方便的运用在不同的领域，目前在 IoT、智能家居、芯片设计、操作系统、软件开发等领域都有应用。</p><p>而在过往针对 RISC-V 的开发面临的问题在于相关资讯没有统一的平台，使得开发者从最开始的学习、再到开发应用的效率大幅降低，而 RuyiSDK 的出现就是为了解决这些问题。</p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><p><img src="'+d+`" alt="RuyiSDK"></p><p>RuyiSDK 分为以下三个部分：</p><h3 id="ruyi-包管理器" tabindex="-1"><a href="./../Package-Manager/">ruyi 包管理器</a> <a class="header-anchor" href="#ruyi-包管理器" aria-label="Permalink to &quot;[ruyi 包管理器](../Package-Manager/index.md)&quot;">​</a></h3><p>该包管理器是一个在线的软件源，在该包管理器中，我们提供了如下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 工具链</span></span>
<span class="line"><span>2. 调试工具</span></span>
<span class="line"><span>3. 模拟器</span></span>
<span class="line"><span>4. 运行环境</span></span>
<span class="line"><span>5. 文档</span></span>
<span class="line"><span>6. 源码</span></span>
<span class="line"><span>7. 工具、系统镜像</span></span>
<span class="line"><span>8. GUI（TODO）</span></span></code></pre></div><h3 id="ruyi-ide" tabindex="-1"><a href="./../IDE/TODO.html">Ruyi IDE</a> <a class="header-anchor" href="#ruyi-ide" aria-label="Permalink to &quot;[Ruyi IDE](../IDE/TODO.md)&quot;">​</a></h3><p>该 IDE 是一个为 RISC-V 架构设计的开发工具箱，开发者可以轻松的通过 ruyi 包管理器获取，可以对于实际的开发场景对于代码的编写以及调试。 使用包管理器开发者可以获取该工具箱中的编译工具链、调试工具和模拟器，开发者可以使用模拟器或者在 RISC-V 开发板上对自身的程序进行编写以及调试。</p><h3 id="community" tabindex="-1"><a href="./../Community/About-us.html">Community</a> <a class="header-anchor" href="#community" aria-label="Permalink to &quot;[Community](../Community/About-us.md)&quot;">​</a></h3><p>在我们的社区当中，提供了大量的相关技术文章、代码、教程视频，以及我们会举办一定的线下活动获得来自用户的反馈，在线上也会有相应的论坛提供给开发者进行技术交流。</p><hr><p>RuyiSDK 对 RISC-V 设备的集成和支持主要包括以下几个方面：</p><ol><li>RISC-V 开发板镜像相关信息以及下载、安装教程，便于开发者获取相关镜像（换而言之提供一个镜像站），其中涵盖多种操作系统（如基于 Debian 的 RevyOS、openEuler RISC-V 等）提供给开发者使用。</li><li>提供 RISC-V 开发板对应的演示程序、开发资料和相关工具（含适用的编译工具链、模拟器等）的信息维护和下载，方便 RISC-V 开发者快速上手。</li><li>在集成开发环境中增加 RISC-V 设备专有向导页面、实现开发环境和运行环境的文件传输、支持在 RISC-V 设备上调试应用程序等。</li></ol><h2 id="支持的设备" tabindex="-1">支持的设备 <a class="header-anchor" href="#支持的设备" aria-label="Permalink to &quot;支持的设备&quot;">​</a></h2><p>目前 RuyiSDK <a href="https://github.com/ruyisdk/support-matrix" target="_blank" rel="noreferrer">支持的设备</a>如下：</p><table tabindex="0"><thead><tr><th>型号</th><th></th><th></th><th></th></tr></thead><tbody><tr><td>100ASK-V853-PRO</td><td>AllWinner V853</td><td>BananaPi BPI-F3</td><td>BeagleV-Ahead</td></tr><tr><td>BeagleV-Fire</td><td>CanMV K230</td><td>Canaan K510-CRB-V1.2 KIT</td><td>CH32V103-EVT</td></tr><tr><td>CH32V203-EVT</td><td>CH32V208-EVT</td><td>CH32V303-EVT</td><td>CH32V305-EVT</td></tr><tr><td>CH32V307-EVT</td><td>CH573F-EVT</td><td>CH582F-EVT</td><td>CH592X-EVT</td></tr><tr><td>D1s NeZha</td><td>DongshanPI-Nezha STU</td><td>DongShanPI D1s</td><td>HiFive Unmatched</td></tr><tr><td>Lichee Cluster 4A</td><td>Lichee Console 4A</td><td>LicheePi 4A</td><td>LicheeRV/AWOL Nezha</td></tr><tr><td>LicheeRV Nano</td><td>Longan Nano</td><td>MangoPi MQ</td><td>MangoPi MQ Pro</td></tr><tr><td>Milk-V Duo 64M</td><td>Milk-V Duo 256M</td><td>Milk-V Duo S</td><td>Milk-V Mars</td></tr><tr><td>Milk-V Meles</td><td>Milk-V Vega</td><td>Nuclei DDR200T</td><td>Pioneer Box</td></tr><tr><td>PolarFire FPGA SoC Icicle Kit</td><td>RV-STAR</td><td>Sipeed Maix-Bit</td><td>Sipeed M0 sense</td></tr><tr><td>Sipeed M0P Dock</td><td>Sipeed M0s Dock</td><td>Sipeed M1s Dock</td><td>Star64</td></tr><tr><td>Tang Mega 138K</td><td>TinyVision</td><td>VisionFive</td><td>VisionFive 2</td></tr><tr><td>YuzukiHD-Lizard</td><td></td><td></td><td></td></tr></tbody></table><blockquote><p>文档可能更新不及时，查看最新支持的设备请通过指令 <code>ruyi device provision</code> 查询。</p></blockquote><h2 id="ruyisdk-架构示意图" tabindex="-1">RuyiSDK-架构示意图 <a class="header-anchor" href="#ruyisdk-架构示意图" aria-label="Permalink to &quot;RuyiSDK-架构示意图&quot;">​</a></h2><p><img src="`+r+'" alt="Structure-RuyiSDK.png"></p><h2 id="让我们开始吧" tabindex="-1">让我们开始吧！ <a class="header-anchor" href="#让我们开始吧" aria-label="Permalink to &quot;让我们开始吧！&quot;">​</a></h2><p>从 RuyiSDK 开始使用设备！</p><h3 id="获取并安装-ruyi" tabindex="-1">获取并安装 ruyi <a class="header-anchor" href="#获取并安装-ruyi" aria-label="Permalink to &quot;获取并安装 ruyi&quot;">​</a></h3><p>具体请参考<a href="./../Package-Manager/installation.html">这里</a></p><h3 id="获取并安装-os" tabindex="-1">获取并安装 OS <a class="header-anchor" href="#获取并安装-os" aria-label="Permalink to &quot;获取并安装 OS&quot;">​</a></h3><p>开始的第一步：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> provision</span></span></code></pre></div><blockquote><p>该指令会识别硬件信息，并且开始自动执行对应程序为用户自动部署 RISC-V 开发环境，按照引导信息一步步执行即可。</p></blockquote><p>具体请参考这里<a href="./../RuyiSDK/case2.html">这里</a></p>',37),l=[s];function o(h,p,u,c,y,S){return e(),a("div",null,l)}const m=t(n,[["render",o]]);export{k as __pageData,m as default};
