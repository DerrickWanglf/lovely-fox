let id

!function () {
    let duration = 0

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')

        let n = 0

        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)

            container.scrollTop = container.scrollHeight

            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, 0)
    }

    $('.actions').on('click', 'button', function (event) {
        let container = $('#code')
        let styleTag = $('#styleTag')

        let $button = $(event.currentTarget) // Button
        let speed = $button.attr('data-speed')

        $button.addClass('active')
            .siblings('.active').removeClass('active')

        switch (speed) {
            case 'slow':
                duration = 50
                break
            case 'medium':
                duratoin = 10
                break
            case 'fast':
                duration = 5
                break
            case 'skip':
                // Stop typing
                window.clearTimeout(id)
                // Set codes to tag
                container.html(code)
                styleTag.html(code)
                break
            default:
                break
        }
    })

    let code = `.container {
  transform: scale(1.3);
}

.container,
.ear, .face, .eye, .nose, .mouth, .curl1, .curl2 {
  position: absolute;
}

.container {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 200px;
  height: 200px;
}

.ear {
  top: -60px;
  left: -20px;
  width: 24px;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 40% 90%;
  border-bottom-right-radius: 40% 90%;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(-20deg);
}

.ear.right {
  transform: translateX(120px) rotate(20deg);
}

.eye {
  height: 15px;
  width: 10px;
  background-color: black;
  border-radius: 46%;
  -webkit-animation-name: blink;
  -webkit-animation-duration: 4s;
  -webkit-animation-iteration-count: infinite;
  animation-name: blink;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

.eye.right {
  height: 15px;
  width: 10px;
  left: 100px;
  background-color: black;
  border-radius: 46%;
  -webkit-animation-name: blink;
  -webkit-animation-duration: 4s;
  -webkit-animation-iteration-count: infinite;
  animation-name: blink;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

.curl1 {
  width: 26px;
  height: 5px;
  border-radius: 50%;
  border-top: 2px solid black;
  top: 20px;
  left: 42px;
}

.nose {
  height: 15px;
  width: 38px;
  background-color: black;
  border-radius: 50%;
  top: 30px;
  left: 36px;
}

.curl2 {
  height: 50px;
  width: 34px;
  border-radius: 50%;
  border-right: 2px solid black;
  left: 68px;
  top: 26px;
}

.mouth {
  width: 15px;
  height: 5px;
  border-radius: 50%;
  border-bottom: 2px solid black;
  top: 80px;
  left: 47px;
  transform: rotate(10deg);
}

@-webkit-keyframes blink {
  0% {
    -webkit-transform: scaleX(1) scaleY(1);
  }
  5% {
    -webkit-transform: scaleX(1.3) scaleY(0.1);
  }
  15% {
    -webkit-transform: scaleX(1) scaleY(1);
  }
}



`
    writeCode('', code)
}.call()
