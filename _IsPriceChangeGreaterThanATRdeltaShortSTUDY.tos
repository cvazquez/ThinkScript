#  thinkScript Study: Price Change > ATR

#  This study returns true if a stock's Price Change is greater than its ATR

#  Define inputs
input atrLength = 14;
input delta = 0.75;

def blockList =
    GetSymbol() == "NTLA" or
    GetSymbol() == "BROS" or
    GetSymbol() == "POET" or
    GetSymbol() == "RR" or
    GetSymbol() == "RXRX" or
    GetSymbol() == "BULL" or
    GetSymbol() == "CRML" or
    GetSymbol() == "SUGP" or
    GetSymbol() == "BDRX" or
    GetSymbol() == "QUBT" or
    GetSymbol() == "LAC" or
    GetSymbol() == "MTHRY" or
    GetSymbol() == "USAR" or
    GetSymbol() == "ORBS" or
    GetSymbol() == "CYN";

#  Calculate ATR

def atr = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), atrLength);

def yesterdaysClose = close(period = aggregationPeriod.DAY)[1];
def lastPrice = close;
def priceChange = lastPrice - yesterdaysClose;
def atrDelta = atr * delta;

plot scan = priceChange > atrDelta && !blockList;
