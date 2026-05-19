document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple scroll reveal effect
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Unreal Engine Versions Data (Token-Free URLs)
    const ueVersions = [
        {"version":"5.8.0_preview-1","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/43/a9/1660-68b1-4b2e-aa71-22851fb19444"},
        {"version":"5.7.4","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/40/f8/1da3-a635-4dd3-90f8-b0fa66fa6951"},
        {"version":"5.7.3","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/63/5c/71ed-9bc9-436d-8b4b-af858cea7d7c"},
        {"version":"5.7.2","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/ad/79/6508-f5d7-45e6-ab2c-4d0acebdaa2f"},
        {"version":"5.7.1","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/6a/83/2664-1399-4364-a400-6dd312ddbc29"},
        {"version":"5.7.0","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/cb/1a/fca2-7fdc-4278-8992-8984da0b4f7c"},
        {"version":"5.6.1","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/a6/74/6941-c1f8-4517-9935-eb628e64deca"},
        {"version":"5.6.0","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/5c/13/a883-e89a-4e0c-bc2d-b3068924487e"},
        {"version":"5.5.4","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/9f/02/31b6-fe92-4ed1-a45c-3e378aadb63b"},
        {"version":"5.5.3","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/69/2d/1e89-81d6-4332-a266-a9f07b5a2178"},
        {"version":"5.5.2","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/dc/53/656c-52af-49a7-a767-e2b15f1d2a54"},
        {"version":"5.5.1","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/3f/3f/0beb-810f-4632-af59-e0cde2571944"},
        {"version":"5.5.0","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/cf/01/58c6-6d9f-48b2-8dff-e5f2e0762b1f"},
        {"version":"5.4.4","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/1d/67/9995-2ead-4b8c-9004-2091a21b05c8"},
        {"version":"5.4.3","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/0e/d7/ac48-36a1-4589-be0f-eb3c77bf2caf"},
        {"version":"5.4.2","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/62/fe/1df0-e04e-4749-909a-e799b6acdf49"},
        {"version":"5.4.1","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/ba/26/dde3-4b7d-4309-a978-8099a533cd39"},
        {"version":"5.4.0","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/f3/1c/8f9f-61cc-4655-abfc-c064ee867a2c"},
        {"version":"5.3.2","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/c0/1d/f01f-73a9-4db4-9e1b-bde8090b673f"},
        {"version":"5.3.1","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/15/9e/942d-9917-483a-af1d-82a1af8c0a24"},
        {"version":"5.3.0","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/71/b2/cf1a-7eff-4b77-b198-456ff056389f"},
        {"version":"5.2.1","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/bb/23/fb99-7e96-4f4b-8a0f-678684655c9d"},
        {"version":"5.2.0","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/be/1f/cac4-78f9-42fa-a7e5-67f86c3cc89d"},
        {"version":"5.1.1","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/b8/d5/90e7-70cd-450d-8ea8-1141aa91ed40"},
        {"version":"5.1.0","url":"https://ucs-blob-store.s3-accelerate.amazonaws.com/blobs/b8/1c/231c-63ec-4d57-b0dc-ab856cfccb6a"}
    ];

    const selectEl = document.getElementById('ue-version-select');
    const actionsEl = document.getElementById('install-actions');
    const downloadBtn = document.getElementById('download-zip-btn');
    const installCmd = document.getElementById('install-cmd');
    const copyBtn = document.getElementById('copy-cmd-btn');

    if (selectEl) {
        // Populate options
        ueVersions.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.url;
            opt.textContent = `Unreal Engine ${v.version}`;
            selectEl.appendChild(opt);
        });

        // Handle selection change
        selectEl.addEventListener('change', (e) => {
            const url = e.target.value;
            const selectedText = e.target.options[e.target.selectedIndex].text;
            const versionMatch = selectedText.match(/[\d\.]+/);
            const versionName = versionMatch ? `UE_${versionMatch[0]}` : 'UnrealEngine';

            if (url) {
                actionsEl.style.display = 'flex';
                downloadBtn.href = url;
                downloadBtn.download = `${versionName}.zip`;
                
                const cmd = `mkdir -p ~/UnrealEngine && cd ~/UnrealEngine \\
&& echo "Downloading ${selectedText}..." \\
&& wget -O ${versionName}.zip "${url}" \\
&& echo "Extracting..." \\
&& unzip -q ${versionName}.zip -d ${versionName} \\
&& echo "Done! You can now link it with UELinker." \\
&& ./${versionName}/Engine/Binaries/Linux/UnrealEditor`;
                
                installCmd.value = cmd;
            } else {
                actionsEl.style.display = 'none';
            }
        });
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            installCmd.select();
            document.execCommand('copy');
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
            }, 2000);
        });
    }
});
