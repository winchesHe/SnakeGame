import {onMounted} from 'vue'
export default function useScore(){
    class Score {
      // 最大分数属性
      maxLevel:number
      maxScore:number
      scoreEle:HTMLElement
      levelEle:HTMLElement
      constructor(maxLevel:number = 10,maxScore:number = 10){
        this.maxLevel = maxLevel
        this.maxScore = maxScore
        this.scoreEle = document.getElementById('score2')
        this.levelEle = document.getElementById('level2')
      }
    
      addScore(){
        // console.log(this.maxScore);
        let sco = +this.scoreEle.innerText
        this.scoreEle.innerText = ++sco +''
        if(sco % 10 == 0){
          this.addLevel()
        }
      }

      addLevel(){
        let lev = +this.levelEle.innerText
        this.levelEle.innerText = ++lev+''
      }

    }

    const sc = new Score()
    for(let i=0;i<109;i++){
      sc.addScore()
      // sc.addLevel()
    }
    
}