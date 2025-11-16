# Custom ATR Plot by 7of9 for BRT
# edited 3/20/19

declare upper;

input AtrAvgLength = 14;
def PrevDayClose = close(period = AggregationPeriod.DAY)[1];

def ATR = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), AtrAvgLength);

def TodayHigh = Highest(high(period = aggregationPeriod.DAY), 1);
def TodayLow = Lowest(low(period = aggregationPeriod.DAY), 1);

def DTR = TodayHigh - TodayLow;

def DTRpct = Round((DTR / ATR) * 100, 0);

def prevClosePlusATR = PrevDayClose + ATR;

AddLabel (yes, "DTR " + Round (DTR , 2) + " vs ATR " + round (ATR,2)+ "  " + round (DTRpct,0) + "%" + " ATR+Close: " + prevClosePlusATR, (if DTRpct <= 70 then Color.GREEN else if DTRpct >= 90 then Color.RED else Color.ORANGE));
