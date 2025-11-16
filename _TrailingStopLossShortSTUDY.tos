# ATRTrailingStop (Study aligned with Column)
# Matches watchlist column output

input atrLength = 14;
input atrMultiplier = 3.0;
input averageType = AverageType.WILDERS;
input aggregation = AggregationPeriod.DAY;

def atr = MovingAverage(averageType, TrueRange(high(period = aggregation), 
                                               close(period = aggregation), 
                                               low(period = aggregation)), atrLength);

def longStop = close(period = aggregation) - atrMultiplier * atr;
def shortStop = close(period = aggregation) + atrMultiplier * atr;

# Watchlist column logic: 
# TOS plots whichever side is "active" trailing stop
def isLong = close(period = aggregation) > shortStop[1];
def stopLine = if isLong then longStop else shortStop;

# plot ATRTrailingStop = stopLine;
# ATRTrailingStop.SetDefaultColor(Color.CYAN);

AddLabel (yes, stopLine, Color.PINK);
