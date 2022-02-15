<template>
  <div id="main">
    <div id="state">
      <div id="snake">
        <div id="body"></div>
      </div>
      <div id="food">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="scope">
      <span id="score">SCORE:<span id="score2">0</span></span>
      <span id="level">LEVEL:<span id="level2">0</span></span>
    </div>
  </div>
</template>

<script lang="ts">
import useGame from '../modules/GameControl'
import {defineComponent, reactive} from 'vue'
interface student {
  name:string,
  age:number,
  gender:string
}
export default defineComponent({
  mounted(){
    class Food {
      // 设置初始属性
          element:HTMLElement
          // 获取食物类
          constructor(){
            this.element = document.getElementById('food') 
          }
        // 定义getter方法
          get x (){
            return this.element.offsetLeft
          }

          get y (){
            return this.element.offsetTop
          }
          change (){
            this.element.style.top = Math.round(Math.random() * 290)+'px'
            this.element.style.left = Math.round(Math.random() * 290)+'px'
          }
        }

      // 测试代码
      // const snake = new Food()
      // console.log(snake);
      // console.log(snake.y);
      // snake.change()
      useGame()
  },
  setup(){
    
    return {
    }
  }
})
</script>

<style scoped lang="less">

@bg:#b7d4a8;

#main{
  width: 360px;
  height: 420px;
  margin: 100px auto;
  border: 10px solid #000;
  border-radius: 40px;
  background-color: @bg;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  #state{
    width: 304px;
    height: 304px;
    border: 2px solid #000;
    position: relative;
    #snake{
      &>#body{
        width: 10px;
        height: 10px;
        border: 1px solid @bg;
        background-color: #000;
        position: absolute;
      }
    }
    #food{
      width: 10px;
      height: 10px;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-content: space-between;
      position: absolute;
      top: 100px;
      left: 200px;
      div{
        width: 4px;
        height: 4px;
        background-color: #000;
      }
    }
  }
  #scope{
    width: 304px;
    font:20px bold Courier;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #score{

    }
    #level{

    }
  }
}
</style>