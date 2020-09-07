# mkot-Angular
pass board game KoT to game in web client, with Angular framework

## components structure
app-component
\tapp-table --> represent the game table
    app-start --> where select the number of players
    app-board --> it's where the board, monsters, and dice are painted. in short, it is the game screen
      app-monsters --> it´s the container where there are as many app-monster as the number selected at the app-start
        app-monster --> represent a card with monster info like, health, energy, victory points...
        app-actions --> roll dices, end turn and game exit are the actions with each monster can do
          app-dice --> you guessed it!! represents dices
                        


   
