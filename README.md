# mkot-Angular

pass board game KoT to game in web client, with Angular framework

## components structure

- app-component
  - app-table --> represent the game table
    - app-start --> where select the number of players
    - app-board --> it's where the board, monsters, and dice are painted. in
      short, it is the game screen
      - app-win --> if any monster win, appear this display with her name and
        avatar
      - app-actions --> roll dices, end turn and game exit are the actions with
        each monster can do
        - app-monster --> represent a card with monster info like, health,
          energy, victory points...
        - app-dice --> you guessed it!! represents dices
