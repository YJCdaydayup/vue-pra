<template>
    <div class="recommand">
        <div class="fq-list">
            <ul>
                <li v-for="item in items">
                    <h1 @click="toggleDes($event)" class='title'>{{item.title}}</h1>
                    <p class="des">{{item.des}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

 <style scoped>
    ul {
        list-style-type: none;
        position: relative;
        left: -20px;
    }

    li {
        overflow: hidden;
    }

    li .title {
       font-size: 16px; 
       padding: 5px 10px;
       background-color: lavenderblush;
       position: relative;
       z-index: 10;
    }

    li .title::after {
        position: absolute;
        content: '+';
        font-size: 16px;
        color: black;
        right: 10px;
    }

    li .des {
        font-size: 12px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-indent: 2em;
        transition: all 300ms linear;
        transform: translate3d(0,-100%,0);
        display: none;
        z-index: 0;
    }



</style>

<script>
    export default {
        data() {
            return {
                msg: "hello vue",
                items: [
                    {
                        title: 'My Show Feng Qing',
                        des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
                    },
                    {
                        title: 'My Show Feng Qing',
                        des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
                    },
                    {
                        title: 'My Show Feng Qing',
                        des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
                    },
                    {
                        title: 'My Show Feng Qing',
                        des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
                    },
                    {
                        title: 'My Show Feng Qing',
                        des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
                    },
                    {
                        title: 'My Show Feng Qing',
                        des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
                    },
                    {
                        title: 'My Show Feng Qing',
                        des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
                    },
                    {
                        title: 'My Show Feng Qing',
                        des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
                    }
                ]
            }
        },
        methods: {
            toggleDes(e) {
                let {target} = e;
                let brotherEl = target.nextElementSibling;
                 brotherEl.style.display = 'block';
                setTimeout(() => {
                    brotherEl.style.transform = 'translate3d(0,0,0)'
                }, 0);
            }
        }
    }
</script>


