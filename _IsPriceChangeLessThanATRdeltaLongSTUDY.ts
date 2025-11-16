#  thinkScript Study: Price Change > ATR

#  This study returns true if a stock's Price Change is greater than its ATR

#  Define inputs
input atrLength = 14;
input delta = 0.75;

#  Calculate ATR

def atr = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), atrLength);

def yesterdaysClose = close(period = aggregationPeriod.DAY)[1];
def lastPrice = close;
def atrDelta = (atr * delta);
def yesterdaysCloseMinusARTDelta = yesterdaysClose - (atr * delta);

plot scan = lastPrice < yesterdaysCloseMinusARTDelta;
