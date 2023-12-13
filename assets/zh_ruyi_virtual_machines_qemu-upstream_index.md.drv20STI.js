import{_ as s,o as i,c as a,R as n}from"./chunks/framework.jUk-_3Va.js";const C=JSON.parse('{"title":"使用上游 QEMU 模拟器运行交叉编译的 RISC-V 二进制","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi/virtual_machines/qemu-upstream/index.md","filePath":"zh/ruyi/virtual_machines/qemu-upstream/index.md","lastUpdated":1702449700000}'),h={name:"zh/ruyi/virtual_machines/qemu-upstream/index.md"},k=n(`<h1 id="使用上游-qemu-模拟器运行交叉编译的-risc-v-二进制" tabindex="-1">使用上游 QEMU 模拟器运行交叉编译的 RISC-V 二进制 <a class="header-anchor" href="#使用上游-qemu-模拟器运行交叉编译的-risc-v-二进制" aria-label="Permalink to &quot;使用上游 QEMU 模拟器运行交叉编译的 RISC-V 二进制&quot;">​</a></h1><p>这里使用上游工具链配置带 QEMU 支持 RISC-V 编译环境，并使用上游 QEMU 运行构建出的 RISC-V 二进制。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slug:gnu-plct-20231118</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downloading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/dist/qemu-user-riscv-8.1.2.ruyi-20231121.amd64.tar.zst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/myon/.cache/ruyi/distfiles/qemu-user-riscv-8.1.2.ruyi-20231121.amd64.tar.zst</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Received</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Xferd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Average</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Speed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Current</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 Dload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Upload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Spent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Left</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Speed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 14.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 14.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  7217</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">k</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:02</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:02</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --:--:--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7218</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">k</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extracting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-8.1.2.ruyi-20231121.amd64.tar.zst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream-8.1.2-ruyi.20231121</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream-8.1.2-ruyi.20231121</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/myon/.local/share/ruyi/binaries/x86_64/qemu-user-riscv-upstream-8.1.2-ruyi.20231121</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downloading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/dist/RuyiSDK-20231118-PLCT-Sources-riscv64-plct-linux-gnu.tar.xz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/myon/.cache/ruyi/distfiles/RuyiSDK-20231118-PLCT-Sources-riscv64-plct-linux-gnu.tar.xz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Received</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Xferd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Average</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Speed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Current</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 Dload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Upload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Spent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Left</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Speed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  232</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  232</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  10.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:22</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:22</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --:--:--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extracting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RuyiSDK-20231118-PLCT-Sources-riscv64-plct-linux-gnu.tar.xz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct-0.20231118.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct-0.20231118.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/myon/.local/share/ruyi/binaries/x86_64/gnu-plct-0.20231118.0</span></span></code></pre></div><p>建立编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generic</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./qemu_venv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> created.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> may</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sourcing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> appropriate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deactivate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> invoking</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi-deactivate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fresh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysroot/prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> also</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> provisioned</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">It</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> following</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /home/myon/ruyisdk/ruyi/qemu_venv/sysroot</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> also</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> comes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ready-made</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CMake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toolchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Meson</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cross</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> those</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">comments</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> instructions.</span></span></code></pre></div><p>查看可用的二进制：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-addr2line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-plct-linux-gnu-gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            riscv64-plct-linux-gnu-gfortran</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-plct-linux-gnu-ranlib</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plct-linux-gnu-gcc-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plct-linux-gnu-gprof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-plct-linux-gnu-readelf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plct-linux-gnu-gcc-nm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plct-linux-gnu-ld</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plct-linux-gnu-size</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plct-linux-gnu-gcc-ranlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-plct-linux-gnu-ld.bfd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plct-linux-gnu-strings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-cc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plct-linux-gnu-gcov</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           riscv64-plct-linux-gnu-ldd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       riscv64-plct-linux-gnu-strip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-c++filt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plct-linux-gnu-gcov-dump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      riscv64-plct-linux-gnu-lto-dump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-cpp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plct-linux-gnu-gcov-tool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      riscv64-plct-linux-gnu-nm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        ruyi-qemu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-elfedit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plct-linux-gnu-gdb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            riscv64-plct-linux-gnu-objcopy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plct-linux-gnu-gdb-add-index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-plct-linux-gnu-objdump</span></span></code></pre></div><p>可以看到 QEMU 模拟器的命令为 <code>ruyi-qemu</code> 。</p><p>进入编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv/bin/ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span></span></code></pre></div><p>编译一个简单的 C 程序并使用 QEMU 运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#include &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">int main()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    printf(&quot;hello, ruyi&quot;);</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    putchar(&#39;\\n&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">riscv64-plct-linux-gnu-gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi-qemu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span></span></code></pre></div><p>退出编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi-deactivate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span></span></code></pre></div>`,14),l=[k];function p(t,F,e,r,d,g){return i(),a("div",null,l)}const c=s(h,[["render",p]]);export{C as __pageData,c as default};
