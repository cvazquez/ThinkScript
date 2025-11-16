# Label to show Low ATR price

declare upper;

input AtrAvgLength = 14;
def currentPrice = close(priceType = priceType.MARK);
def PrevDayClose = close(period = AggregationPeriod.DAY)[1];

def ATR = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), AtrAvgLength);

def prevCloseMinusATR = PrevDayClose - ATR;

def prevClosePlusATRPercentage = ((currentPrice - prevCloseMinusATR) / prevCloseMinusATR) * 100;

AddLabel (yes, " ATR-: " + round(prevCloseMinusATR,2) , Color.GRAY);
