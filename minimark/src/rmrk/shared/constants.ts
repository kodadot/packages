export const SQUARE = '::'
export const RMRK = /^[rR][mM][rR][kK]::/
// RMRK::[A-Z]+::2.0.0::
export const RMRK_PLUS = new RegExp(RMRK.source + '[A-Z]+' + SQUARE + '([0-2].0.[0-1])' + SQUARE)
export const RMRK_V0 = '0.0.1'
export const RMRK_V1 = '1.0.0'
export const RMRK_V2 = '2.0.0'
