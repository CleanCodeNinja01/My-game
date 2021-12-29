export function checkVictory(board, symbol) {
  if (board[0] === symbol && board[1] === symbol && board[2] === symbol) {
    return true
  }

  if (board[3] === symbol && board[4] === symbol && board[5] === symbol) {
    return true
  }

  if (board[6] === symbol && board[7] === symbol && board[8] === symbol) {
    return true
  }

  if (board[0] === symbol && board[3] === symbol && board[6] === symbol) {
    return true
  }

  if (board[1] === symbol && board[4] === symbol && board[7] === symbol) {
    return true
  }

  if (board[2] === symbol && board[5] === symbol && board[8] === symbol) {
    return true
  }

  if (board[0] === symbol && board[4] === symbol && board[8] === symbol) {
    return true
  }

  if (board[6] === symbol && board[4] === symbol && board[2] === symbol) {
    return true
  }

  return false
}