# _ATR_Plus_Prev_Close_Label
# Custom ATR Plot by 7of9 for BRT
# edited 3/20/19

input AtrAvgLength = 14;
def currentPrice = close(priceType = priceType.MARK);
def PrevDayClose = close(period = AggregationPeriod.DAY)[1];

def ATR = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), AtrAvgLength);

def prevClosePlusATR = PrevDayClose + ATR;

# def prevClosePlusATRPercentage = ((currentPrice - prevClosePlusATR) / prevClosePlusATR) * 100;

AddLabel (yes, " ATR+: " + round(prevClosePlusATR,2) , Color.PINK);
