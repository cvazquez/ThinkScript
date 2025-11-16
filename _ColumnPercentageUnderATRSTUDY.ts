# Use as a column
# Displays how many percentage points below the ATR a stock is. For going LONG a stock.
declare lower;

input atrLength = 14;

#  Calculate ATR
def atr = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), atrLength);

def yesterdaysClose = close(period = aggregationPeriod.DAY)[1];
def currentClose = close();

def yesterdaysCloseMinusATR = yesterdaysClose - atr;

# % over ATR
def percentX = ((yesterdaysCloseMinusATR - currentClose) / yesterdaysCloseMinusATR) * 100;
def percentRounded = round(percentX, 2);

plot result = if isNaN(percentRounded) then 0 else percentRounded;

AddLabel(yes, 
"yesterdaysCloseMinusATR: " + yesterdaysCloseMinusATR +
"percentX: " + percentX
, CreateColor(211, 211, 211));
