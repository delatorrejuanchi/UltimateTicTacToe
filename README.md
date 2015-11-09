# UltimateTicTacToe

TicTacToe is a classic, but as you may have discovered is yourself, it is terminally dull. There's no room for creativity or insight, since good players always tie.

For this reason, a more sophisticated version was invented, which I decided to implement using web technologies.

## Rules

<p align="center">
    At first, the board looks like this:
</p>

<p align="center">
    <img src="images/blank-board.jpg" alt="">
</p>

<p align="center">
    Each turn, you mark one of the small squares.
</p>

<p align="center">
    <img src="images/early-game.jpg" alt="">
</p>

<p align="center">
    When you get three in a row on a small board, you've won that board.
</p>

<p align="center">
    <img src="images/mid-game.jpg" alt="">
</p>

<p align="center">
    To win the game, you need to win three small boards in a row.
</p>


<p align="center">
    <img src="images/end-game.jpg" alt="">
</p>

### But however, the most important rule is:
**You don't get to pick which of the nine boards to play on.** That's determined by your opponent's previous move. **Whichever _square_ he picks, that's the board you must play in next.** (And whichever square _you_ pick will determine which board _he_ plays on next)


#### This way, if I play here...


![alt tag](images/first-move.jpg)


#### Then your next move must be here...


![alt tag](images/second-move.jpg)


This lends the game a strategic element. You can’t just focus on the little board. You’ve got to consider where your move will send your opponent, and where his next move will send you, and so on.


**The resulting scenarios look bizarre**. Players seem to move randomly, missing easy two- and three-in-a-rows. But there’s a method to the madness – they’re thinking ahead to future moves, wary of setting up their opponent on prime real estate. It is, in short, vastly more interesting than regular TicTacToe.


<p align="center">
    <img src="images/late-game.jpg" alt="">
</p>


### A few clarifying rules are necessary:
- _What if my opponent sends me to a board that's already been won?_ In that case, congratulations - you get to go anywhere you like, on any of the other boards. (This means you should avoid sending your opponent to an already-won board!)

- _What if one of the small boards results in a tie?_ Well, then the board counts for neither X (red) nor O (blue).

## That's it. Have fun!

You can find a [demo] here.

[demo]: http://delatorrejuanchi.github.io/UltimateTicTacToe