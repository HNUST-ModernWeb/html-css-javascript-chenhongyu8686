// 获取DOM元素
const avatarImg = document.getElementById('avatar-img');
const avatarUpload = document.getElementById('avatar-upload');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const bioInput = document.getElementById('bio-input');
const bioDisplay = document.getElementById('bio-display');
const saveBtn = document.getElementById('save-btn');

// 1. 头像上传并实时更新功能
avatarUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        // 读取文件并转为base64，实时更新头像
        const reader = new FileReader();
        reader.onload = (event) => {
            avatarImg.src = event.target.result;
            // 保存到本地存储，刷新不丢失
            localStorage.setItem('avatar', event.target.result);
        };
        reader.readAsDataURL(file);
    }
});

// 2. 保存按钮功能：修改内容显示在卡片上
saveBtn.addEventListener('click', () => {
    // 更新姓名显示
    if (nameInput.value.trim()) {
        nameDisplay.textContent = nameInput.value;
        localStorage.setItem('name', nameInput.value);
    }
    // 更新简介显示
    if (bioInput.value.trim()) {
        bioDisplay.textContent = bioInput.value;
        localStorage.setItem('bio', bioInput.value);
    }
    // 保存后清空输入框
    nameInput.value = '';
    bioInput.value = '';
    alert('保存成功！');
});

// 3. 页面加载时，读取本地存储的内容，刷新不丢失
window.addEventListener('load', () => {
    const savedAvatar = localStorage.getItem('avatar');
    const savedName = localStorage.getItem('name');
    const savedBio = localStorage.getItem('bio');

    if (savedAvatar) avatarImg.src = savedAvatar;
    if (savedName) nameDisplay.textContent = savedName;
    if (savedBio) bioDisplay.textContent = savedBio;
});
