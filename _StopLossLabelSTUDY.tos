# For Shorting

# ATRShortPrice = ATR + Yesterday's Close

# baseline = If high of day is greater than 3% of ATR, then use hod + (0.01 * hod)
# else 1.03 * (ATRShortPrice)

# stop loss 1 = baseline * 1.10
# stop loss 2 = baseline * 1.07
# stop loss 3 = baseline * 1.0325


input atrLength = 14;

# Calculate ATR (daily)
def atr = WildersAverage(
    TrueRange(
        high(period = AggregationPeriod.DAY),
        close(period = AggregationPeriod.DAY),
        low(period = AggregationPeriod.DAY)
    ),
    atrLength
);

# High of Day
# This calculates the number of 1-minute bars in 32 hours
def numBars = 32 * 60; 


# Get the high over the specified number of bars
def highOfDay = Highest(high, numBars);
def OnePercentOver = highOfDay * 1.01;


#Close Prices
def yesterdaysClose = close(period = AggregationPeriod.DAY)[1];


# ATRShortPrice = ATR + Yesterday's Close
def ATRShortPrice = atr + yesterdaysClose;
def ATRplus3PerATR = ATRShortPrice * 1.03;

# baseline = If high of day is greater than 3% of ATR, then use hod + (0.01 * hod)
# else 1.03 * (ATRShortPrice)
def baseline = if highOfDay > ATRplus3PerATR then 
    (highOfDay + (0.01 * highOfDay))
    else ATRplus3PerATR;

# stop loss 1 = baseline * 1.10
def stopLoss1 = baseline * 1.10;

# stop loss 2 = baseline * 1.07
def stopLoss2 = baseline * 1.07;

# stop loss 3 = baseline * 1.0325
def stopLoss3 = baseline * 1.0325;


AddLabel(yes, "StopLoss1: " + stopLoss1,
Color.MAGENTA);

AddLabel(yes, "StopLoss2: " + stopLoss2,
Color.MAGENTA);

AddLabel(yes, "StopLoss3: " + stopLoss3,
Color.MAGENTA);
