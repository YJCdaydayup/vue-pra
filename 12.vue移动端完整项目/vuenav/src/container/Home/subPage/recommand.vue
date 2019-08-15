<template>
  <div class="recommand">
    <div class="fq-list" ref="wrapper">
      <ul>
        <li v-for="item in items">
          <h1 data-after="+" @click="toggleDes($event)" class='title'>{{item.title}}</h1>
          <p class="des">{{item.des}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

  * {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin: 5px 0;
  }

  .fq-list {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    bottom: 0;
    overflow: hidden;
  }

  li .title {
    font-size: 16px;
    padding: 5px 10px;
    background-color: lavenderblush;
    position: relative;
  }

  li .title::after {
    position: absolute;
    content: attr(data-after);
    font-size: 16px;
    color: black;
    right: 10px;
  }

  li .des {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0;
    text-indent: 2em;
    transition: all 300ms linear;
    height: 0;
  }


</style>

<script>

  import BScroll from 'better-scroll'

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
            des: 'VisGo) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
          },
          {
            title: 'My Show Feng Qing',
            des: 'and Unity). Begin your journey with VS Code with these introductory videos.'
          },
          {
            title: 'My Show Feng Qing',
            des: 'Visuase introductory videos.'
          },
          {
            title: 'My Show Feng Qing',
            des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
          },
          {
            title: 'My Show Feng Qing',
            des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with bu these introductory videos.'
          },
          {
            title: 'My Show Feng Qing',
            des: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensionsdesktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
          }
        ]
      }
    },
    mounted() {
      this.wrapper = new BScroll(this.$refs.wrapper, {
        click: true
      });
    },
    methods: {
      toggleDes(e) {
        let {target} = e;
        let brotherEl = target.nextElementSibling;
        let height = brotherEl.clientHeight;
        let des = brotherEl.innerText;
        let width = brotherEl.clientWidth;
        let div = document.createElement('div');
        div.style.fontSize = '16px';
        div.innerText = des;
        div.style.textIndent = '2em';
        div.style.visibility = 'hidden';
        div.style.width = width + 'px';
        div.style.fontFamily = '\'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif'
        document.body.appendChild(div);

        if (height > 0) {
          height = '0px';
          brotherEl.style.fontSize = 0;
          target.setAttribute("data-after", "+")
        } else {
          height = div.clientHeight + 'px';
          brotherEl.style.fontSize = '16px';
          target.setAttribute("data-after", "-")
        }
        brotherEl.style.height = height;
        document.body.removeChild(div)
        setTimeout(()=>{
          if (this.wrapper) {
            this.wrapper.refresh();
          }
        },300)
      }
    }
  }
</script>


