/*
<script src="/assets/pgnv.js"></script>
<style type="text/css">@import url("/assets/pgn.css");</style>
<div id="pgn"></div>
*/
function showPGN(pgn) {
    PGNV.pgnView('pgn',{ pgn: pgn,
      pieceStyle: 'wikipedia',
      theme: 'pgnfserb',
      layout: 'left',
      boardSize: 350,
      width: 350,
      showCoords: false,
    });
    const moves = document.getElementById("pgnMoves");
    let i = 0;
    while (i < moves.childElementCount) {
      const outer = document.createElement("span");
      outer.className = "step";
      let j = 0;
      while (j < 3 && moves.children[i]) {
        const e = moves.children[i];
        outer.appendChild(e);
        if (e.classList.contains("filler")) continue;
        if (e.classList.contains("comment")) continue;
        j++;
      }
      while (moves.children[i]?.classList.contains("filler") ||
        moves.children[i]?.classList.contains("comment")) {
        outer.appendChild(moves.children[i]);
      }
      moves.insertBefore(outer, moves.children[i++]);
    }
  }