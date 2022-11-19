// alert("Javascript is active");

    const body = document.querySelector("body");
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const themeToggler = document.querySelector(".theme-toggler");


    // Show sidebar
    menuBtn.onclick = ()=>{
            // alert("hey to your friend");
            sideMenu.style.display = 'block';
    }

    // Close sidebar
    closeBtn.onclick = ()=>{
        // alert("hey to your friend");
        sideMenu.style.display = 'none';
    }

    // Change theme
    themeToggler.onclick = ()=>{
        // alert("hey to your friend");
        document.body.classList.toggle('dark-theme-variables');
        themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
    }