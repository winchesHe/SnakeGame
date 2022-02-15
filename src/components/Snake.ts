export default function useSnake (){
  class Snake {
    head:HTMLElement
    body:HTMLCollection
    snake:HTMLElement
    constructor(){
      this.snake = document.getElementById('snake')
      this.head = document.querySelector('#snake > div')
      this.body = this.snake.getElementsByTagName('div')
    }

    // 获取蛇头的坐标
    get X(){
      return this.head.offsetLeft
    }

    get Y(){
      return this.head.offsetTop
    }

    // 设置蛇头坐标
    set X(value){
      this.head.style.left = ++value +'px'
    }

    set Y(value){
      this.head.style.top = ++value +'px'
    }

    addBody(){
      // 向element中添加一个div
      // 添加的位置为上一个标签的结束
      this.snake.insertAdjacentHTML("beforeend",'<div></div>')
    }
  }
}