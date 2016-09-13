$('document').ready(function () {
    function TicTacToe() {
        this.board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
    }
    TicTacToe.prototype.get_cell = function (cell) {
        cell--;
        var x = cell % 3;
        var y = Math.floor(cell / 3);

        return this.board[y][x];
    }
    TicTacToe.prototype.is_valid_play = function (cell) {
        return this.get_cell(cell) == '-';
    }
    TicTacToe.prototype.play = function (player, cell) {
        cell--;
        var x = cell % 3;
        var y = Math.floor(cell / 3);

        this.board[y][x] = player;
    }
    TicTacToe.prototype.is_won = function () {
        if (this.get_cell(1) == this.get_cell(2) && this.get_cell(2) == this.get_cell(3) && this.get_cell(1) != "-" && this.get_cell(2) != "-" && this.get_cell(3) != "-") {
            return this.get_cell(1);
        }
        if (this.get_cell(4) == this.get_cell(5) && this.get_cell(5) == this.get_cell(6) && this.get_cell(4) != "-" && this.get_cell(5) != "-" && this.get_cell(6) != "-") {
            return this.get_cell(4);
        }
        if (this.get_cell(7) == this.get_cell(8) && this.get_cell(8) == this.get_cell(9) && this.get_cell(7) != "-" && this.get_cell(8) != "-" && this.get_cell(9) != "-") {
            return this.get_cell(7);
        }
        if (this.get_cell(1) == this.get_cell(4) && this.get_cell(4) == this.get_cell(7) && this.get_cell(1) != "-" && this.get_cell(4) != "-" && this.get_cell(7) != "-") {
            return this.get_cell(1);
        }
        if (this.get_cell(2) == this.get_cell(5) && this.get_cell(5) == this.get_cell(8) && this.get_cell(2) != "-" && this.get_cell(5) != "-" && this.get_cell(8) != "-") {
            return this.get_cell(2);
        }
        if (this.get_cell(3) == this.get_cell(6) && this.get_cell(6) == this.get_cell(9) && this.get_cell(3) != "-" && this.get_cell(6) != "-" && this.get_cell(9) != "-") {
            return this.get_cell(3);
        }
        if (this.get_cell(1) == this.get_cell(5) && this.get_cell(5) == this.get_cell(9) && this.get_cell(1) != "-" && this.get_cell(5) != "-" && this.get_cell(9) != "-") {
            return this.get_cell(1);
        }
        if (this.get_cell(7) == this.get_cell(5) && this.get_cell(5) == this.get_cell(3) && this.get_cell(7) != "-" && this.get_cell(5) != "-" && this.get_cell(3) != "-") {
            return this.get_cell(7);
        }

        var playable = false;
        for (var cell = 1; cell < 10; cell++) {
            if (this.get_cell(cell).indexOf("-") > -1) {
                playable = true;
            }
        }
        if (!playable) {
            return "DRAW";
        }

        return false;
    }

    function UltimateTicTacToe() {
        this.boards = [
            [new TicTacToe(), new TicTacToe(), new TicTacToe()],
            [new TicTacToe(), new TicTacToe(), new TicTacToe()],
            [new TicTacToe(), new TicTacToe(), new TicTacToe()]
        ];
        this.next_board = null;
    }
    UltimateTicTacToe.prototype.get_board = function (board) {
        board--;
        var x = board % 3;
        var y = Math.floor(board / 3);

        return this.boards[y][x];
    }
    UltimateTicTacToe.prototype.is_valid_play = function (board, cell) {
        if (this.get_board(board) != this.next_board && this.next_board != null) {
            return false;
        }
        if (!this.get_board(board).is_valid_play(cell)) {
            return false;
        }
        if (this.get_board(board).is_won()) {
            return false;
        }

        return true
    }
    UltimateTicTacToe.prototype.play = function (player, board, cell) {
        this.get_board(board).play(player, cell);
        this.next_board = this.get_board(cell);
        if (this.next_board.is_won()) {
            this.next_board = null;
        }
    }
    UltimateTicTacToe.prototype.is_won = function () {
        if (this.get_board(1).is_won() == this.get_board(2).is_won() && this.get_board(2).is_won() == this.get_board(3).is_won() && this.get_board(1).is_won() != "DRAW" && this.get_board(2).is_won() != "DRAW" && this.get_board(3).is_won() != "DRAW" && this.get_board(1).is_won() != false && this.get_board(2).is_won() != false && this.get_board(3).is_won() != false) {
            return this.get_board(1).is_won();
        }
        if (this.get_board(4).is_won() == this.get_board(5).is_won() && this.get_board(5).is_won() == this.get_board(6).is_won() && this.get_board(4).is_won() != "DRAW" && this.get_board(5).is_won() != "DRAW" && this.get_board(6).is_won() != "DRAW" && this.get_board(4).is_won() != false && this.get_board(5).is_won() != false && this.get_board(6).is_won() != false) {
            return this.get_board(4).is_won();
        }
        if (this.get_board(7).is_won() == this.get_board(8).is_won() && this.get_board(8).is_won() == this.get_board(9).is_won() && this.get_board(7).is_won() != "DRAW" && this.get_board(8).is_won() != "DRAW" && this.get_board(9).is_won() != "DRAW" && this.get_board(7).is_won() != false && this.get_board(8).is_won() != false && this.get_board(9).is_won() != false) {
            return this.get_board(7).is_won();
        }
        if (this.get_board(1).is_won() == this.get_board(4).is_won() && this.get_board(4).is_won() == this.get_board(7).is_won() && this.get_board(1).is_won() != "DRAW" && this.get_board(4).is_won() != "DRAW" && this.get_board(7).is_won() != "DRAW" && this.get_board(1).is_won() != false && this.get_board(4).is_won() != false && this.get_board(7).is_won() != false) {
            return this.get_board(1).is_won();
        }
        if (this.get_board(2).is_won() == this.get_board(5).is_won() && this.get_board(5).is_won() == this.get_board(8).is_won() && this.get_board(2).is_won() != "DRAW" && this.get_board(5).is_won() != "DRAW" && this.get_board(8).is_won() != "DRAW" && this.get_board(2).is_won() != false && this.get_board(5).is_won() != false && this.get_board(8).is_won() != false) {
            return this.get_board(2).is_won();
        }
        if (this.get_board(3).is_won() == this.get_board(6).is_won() && this.get_board(6).is_won() == this.get_board(9).is_won() && this.get_board(3).is_won() != "DRAW" && this.get_board(6).is_won() != "DRAW" && this.get_board(9).is_won() != "DRAW" && this.get_board(3).is_won() != false && this.get_board(6).is_won() != false && this.get_board(9).is_won() != false) {
            return this.get_board(3).is_won();
        }
        if (this.get_board(1).is_won() == this.get_board(5).is_won() && this.get_board(5).is_won() == this.get_board(9).is_won() && this.get_board(1).is_won() != "DRAW" && this.get_board(5).is_won() != "DRAW" && this.get_board(9).is_won() != "DRAW" && this.get_board(1).is_won() != false && this.get_board(5).is_won() != false && this.get_board(9).is_won() != false) {
            return this.get_board(1).is_won();
        }
        if (this.get_board(7).is_won() == this.get_board(5).is_won() && this.get_board(5).is_won() == this.get_board(3).is_won() && this.get_board(7).is_won() != "DRAW" && this.get_board(5).is_won() != "DRAW" && this.get_board(3).is_won() != "DRAW" && this.get_board(7).is_won() != false && this.get_board(5).is_won() != false && this.get_board(3).is_won() != false) {
            return this.get_board(7).is_won();
        }

        var ended = 0;
        for (var board = 1; board < 10; board++) {
            ended += (this.get_board(board).is_won()) ? 1 : 0;
        }
        if (ended == 9) {
            return "DRAW";
        }

        return false;
    }

    var game = new UltimateTicTacToe();
    var current_player = "X";
    $('.game').addClass("X-TURN");

    $('.cell').click(function (event) {
        event.preventDefault();

        link = $(this).attr('href').split("-");

        var board = parseInt(link[0]);
        var cell = parseInt(link[1]);

        if (game.is_valid_play(board, cell)) {
            game.play(current_player, board, cell);
            $(this).addClass(current_player);
            current_player = current_player == "X" ? "O" : "X";

            $('.next_board').removeClass('next_board');
            if(!game.get_board(cell).is_won()) {
                $('.board:nth-of-type(' + (cell) + ')').addClass('next_board');
            }
        }

        if(game.get_board(board).is_won()) {
            var won = game.get_board(board).is_won();
            $(this).parent(".board").addClass(won);
            $(this).parent(".board").children(".cell")
                .removeClass("X")
                .removeClass("O")
                .removeClass("DRAW")
                .addClass(won);
        }

        if (game.is_won()) {
            alert(game.is_won() + " wins!");

        }

        if(current_player == "X") {
            $('.game').removeClass("O-TURN").addClass("X-TURN");
        } else {
            $('.game').removeClass("X-TURN").addClass("O-TURN");

        }

        return true;
    });

    $("#restart").click(function (event) {
        event.preventDefault();

        game = new UltimateTicTacToe();
        $('.X').removeClass('X')
        $('.O').removeClass('O');
        $('.DRAW').removeClass('DRAW');
        $('.next_board').removeClass('next_board');
        current_player = "X";
    });
});
