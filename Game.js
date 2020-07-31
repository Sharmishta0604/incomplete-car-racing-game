class Game{
    constructor(){

    }

    getState(){
       var GamestateRef=database.ref('Gamestate');
       GamestateRef.on("value",function(data){
           Gamestate=data.val();
       }) 
    }

    start(){
        if(Gamestate===0){
            form=new Form();
            form.display();
            player=new Player();
            player.getCount();
        }
    }
}