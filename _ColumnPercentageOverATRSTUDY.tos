# Use as a column
# Displays how many percentage points above the ATR a stock is to SHORT
declare lower;

input atrLength = 14;

#  Calculate ATR
def atr = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), atrLength);

def yesterdaysClose = close(period = aggregationPeriod.DAY)[1];
def currentClose = close();

def yesterdaysClosePlusATR = yesterdaysClose + atr;

# % over ATR
def percentX = ((currentClose - yesterdaysClosePlusATR) / yesterdaysClosePlusATR) * 100;

# Plot
plot result = round(percentX, 2);
