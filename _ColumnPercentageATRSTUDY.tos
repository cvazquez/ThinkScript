# Combined ATR % Above/Below for Auto Long or Short
# Automatically switches direction based on price movement
# Use as a column or lower study

declare lower;

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

def yClose = close(period = AggregationPeriod.DAY)[1];
def cClose = close();

# ATR reference levels
def yClosePlusATR = yClose + atr;
def yCloseMinusATR = yClose - atr;

# Direction logic
def isShort = cClose > yClose;
def isLong  = cClose < yClose;

# % over ATR (short) and % below ATR (long)
def shortPercent = ((cClose - yClosePlusATR) / yClosePlusATR) * 100;
def longPercent  = ((yCloseMinusATR - cClose) / yCloseMinusATR) * 100;

# Choose automatically
plot result =
    if isShort then round(shortPercent, 2)
    else if isLong then round(longPercent, 2)
    else 0;

result.AssignValueColor(if isLong then Color.GREEN else if isShort then Color.RED else Color.GRAY);

AssignBackgroundColor(if isLong then Color.GREEN else if isShort then Color.RED else Color.GRAY);
