const toSignup = document.querySelector(".to-signup-form");
const toLogin = document.querySelector(".to-login-form");
const formWrapper = document.querySelector(".form-wrapper");
const loginForm = `
<div class="form-body">
    <label for="email" class="w-100">
        <span class="fs-18">Email ID</span>
        <div class="login-entry mt-2">
            <i class="fa-solid fa-envelope fs-5 light-text"></i>
            <span class="entry-span"></span>
            <input type="email" name="email" id="email" placeholder="Enter your mail id">
        </div>
    </label>
    <label for="password" class="w-100 mt-3">
        <span class="fs-18">Password</span>
        <div class="login-entry mt-2">
            <i class="fa-solid fa-lock fs-5 light-text"></i>
            <span class="entry-span"></span>
            <input type="password" name="password" id="password" placeholder="Enter your password">
        </div>
    </label>
    <div class="forget-pass">
        <a href="/apps/reset-password">Forget Password?</a>
    </div>
    <button class="common-btn login-btn">Login</button>
</div>
<div class="text-center mt-1">
    <span class="text-white">Don’t have an account ? </span>
    <a href="javascript:void(0)" class="color-primary">Sign up</a>
</div>
<div class="or-option light-text">
    <div></div>
    <span class="text">or sign in with</span>
    <div></div>
</div>
<div class="text-white">
    <a href="https://www.google.com" class="other-login mb-3">
        <img src="/imgs/Login/google.svg" alt="gg">
        <span>Continue with google</span>
    </a>
    <a href="https://www.apple.com" class="other-login">
        <img src="/imgs/Login/apple.svg" alt="apple">
        <span>Continue with apple</span>
    </a>
</div>
`;

const signupForm = `
<div class="form-body">
    <label for="name" class="w-100">
        <span class="fs-18">Name</span>
        <div class="login-entry mt-2">
            <i class="fa-solid fa-user fs-5 light-text"></i>
            <span class="entry-span"></span>
            <input type="text" name="name" id="name" placeholder="Enter your name">
        </div>
    </label>
    <label for="email" class="w-100 mt-3">
        <span class="fs-18">Email ID</span>
        <div class="login-entry mt-2">
            <i class="fa-solid fa-envelope fs-5 light-text"></i>
            <span class="entry-span"></span>
            <input type="email" name="email" id="email" placeholder="Enter your mail id">
        </div>
    </label>
    <label for="password" class="w-100 mt-3">
        <span class="fs-18">Password</span>
        <div class="login-entry mt-2">
            <i class="fa-solid fa-lock fs-5 light-text"></i>
            <span class="entry-span"></span>
            <input type="password" name="password" id="password" placeholder="Enter your password">
        </div>
    </label>
    <label for="password_" class="w-100 mt-3">
        <span class="fs-18">Comfirm Password</span>
        <div class="login-entry mt-2">
            <i class="fa-solid fa-lock fs-5 light-text"></i>
            <span class="entry-span"></span>
            <input type="password" name="password_" id="password_" placeholder="Enter your password">
        </div>
    </label>
    <button class="common-btn login-btn mt-5">Sign up</button>
</div>
<div class="text-center mt-1 mb-3">
    <span class="text-white">Already have an account </span>
    <a href="javascript:void(0)" class="color-primary">Sign in</a>
</div>
`;

if (toLogin)
    toLogin.onclick = () => {
        if (!toLogin.classList.contains("active-form")) {
            toLogin.classList.add("active-form");
            toSignup.classList.remove("active-form");
            formWrapper.innerHTML = loginForm;
        }
    };
if (toSignup)
    toSignup.onclick = () => {
        if (!toSignup.classList.contains("active-form")) {
            toSignup.classList.add("active-form");
            toLogin.classList.remove("active-form");
            formWrapper.innerHTML = signupForm;
        }
    };

const footImg = document.querySelector(".foot-img");
const headImg = document.querySelector(".head-img");
fireAnimation(
    () => {
        setTimeout(() => {
            footImg.style.transform = "translateY(0)";
            setTimeout(() => {
                headImg.style.opacity = "1";
            }, 1000);
        }, 500);
    },
    footImg,
    0.2
);
const lightImg = document.querySelector(".light-img");
fireAnimation(
    () => {
        lightImg.style.transform = "translateY(0)";
    },
    lightImg,
    0.2
);
