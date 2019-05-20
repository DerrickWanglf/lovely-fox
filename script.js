let id

!function () {
    let duration = 1

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
        }, 1)
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
                duration = 1
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

    let code = `*, *:after, *:before{
  box-sizing:border-box;
  margin:0;
  padding:0;
  transition: all 100ms ease-in;
}
html{
  background: #f9ece8;
}
.fox{
  width: 215px;
  height: 275px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
}
.fox .head{
  width: 184px;
  height: 184px;
  display: block;
  background: #ff7373;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  top: 0px;
  right: 0px;
  overflow: hidden;
}
.fox .head:before, .fox .head:after{
  content: '';
  width: 184px;
  height: 184px;
  display: block;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  bottom: -92px;
}
.fox .head:before{
  left: -92px;
}
.fox .head:after{
  right: -92px;
}
.fox .head .eye{
  width: 18px;
  height: 9px;
  display: block;
  background: #000;
  border-radius: 18px 18px 0 0;
  position: absolute;
  z-index: 2;
  bottom: 40px;
  animation: piscar 5s step-start 0s infinite;
  -webkit-animation: piscar 5s step-start 0s infinite;
}
.fox .head .eye:nth-child(odd){
  left: 37px;
  transform: rotate(45deg);
  -moz-transform: rotate(45deg); 
  -webkit-transform: rotate(45deg); 
}
.fox .head .eye:nth-child(even){
  right: 37px;
  transform: rotate(-45deg);
  -moz-transform: rotate(-45deg); 
  -webkit-transform: rotate(-45deg); 
}
.fox .ear{
  width: 93px;
  height: 93px;
  display: block;
  background: #ff9090;
  position: absolute;
  top: 0px;
}
.fox .ear:nth-child(odd){
  border-radius: 0 93px 0 0;
  left: 31px;
}
.fox .ear:nth-child(even){
  border-radius: 93px 0 0 0;
  right: 0px;
}
.fox .nose{
  width: 27px;
  height: 27px;
  display: block;
  background: #000;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  top: 169px;
  right: 78px;
}
.fox .body{
  width: 107px;
  height: 214px;
  display: block;
  background: #ff7373;
  border-radius: 0 214px 214px 0;
  position: absolute;
  z-index: 1;
  bottom: 0px;
  right: 0px;
}
.fox .tail{
  width: 215px;
  height: 107px;
  display: block;
  background: #ff7373;
  border-radius: 0 0 214px 214px;
  position: absolute;
  z-index: 1;
  bottom: 0px;
  right: 0px;
  overflow: hidden;
}
.fox .tail:before{
  content: '';
  width: 57px;
  height: 57px;
  display: block;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  left: -30px;
}


.fox:hover .head, .fox:hover .ear{
  transform: rotate(15deg);
  -moz-transform: rotate(15deg); 
  -webkit-transform: rotate(15deg); 
}
.fox:hover .ear:nth-child(odd) {
    left: 48px;
}
.fox:hover .ear:nth-child(even) {
    right: -3px;
    top: 20px;
}
.fox:hover .nose {
    width: 24px;
    height: 24px;
    top: 165px;
    right: 103px;
}
a.author{
  font-size: 12px;
  text-decoration: none;
  color: #f47c7c;
  position: fixed;
  bottom: 10px;
  right: 10px;
}

@keyframes piscar {
  15% {
    height: 1px;
  }
  45% {
    height: 9px;
  }
  50% {
    height: 1px;
  }
}
@-webkit-keyframes piscar {
  15% {
    height: 1px;
  }
  45% {
    height: 9px;
  }
  50% {
    height: 1px;
  }
}`
    writeCode('', code)
}.call()
