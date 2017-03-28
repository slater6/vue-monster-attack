new Vue({
  el: '#app',
  data:{
    playerHealth:100,
    monsterHealth:100,
    gameIsRunning: false,
    turns: []
  },
  methods:{
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack:function(){
      let damage = this.calculateDamage(3,10);
      this.monsterHealth -= damage

      this.log(true,damage);

      if(!this.checkWin()){
        this.monsterAttack();
      }

    },
    specialAttack:function(){
      let damage =  this.calculateDamage(10,20);

      this.monsterHealth -= damage;

      this.log(true,damage);

      if(!this.checkWin()){
          this.monsterAttack();
      }
    },
    heal:function(){
      if(this.playerHealth <= 90){
          this.playerHealth += 10;
      }else{
          this.playerHealth = 100;
      }
        this.monsterAttack();
    },
    giveUp:function(){
      this.gameIsRunning = false;
    },
    monsterAttack(){
      let damage =  this.calculateDamage(5,12);
      this.playerHealth -= damage;
      this.log(false,damage);
      this.checkWin();
    },
    calculateDamage: function(min,max){
        return Math.max(Math.floor(Math.random() * max),min);
    },
    log: function(isPlayer,damage){
      this.turns.unshift({
        isPlayer,
        text: (isPlayer) ? 'Player hits Monster for ' + damage : 'Monster hits player for ' + damage
      });
    },
    checkWin:function(){
      if(this.monsterHealth <= 0){
        if(confirm('You won! New Game?')){
          this.startGame();
        }else{
          this.gameIsRunning = false;
        }
        return true;
      }else if (this.playerHealth <= 0){
        if(confirm('You lost! New Game?')){
          this.startGame();
        }else{
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})
