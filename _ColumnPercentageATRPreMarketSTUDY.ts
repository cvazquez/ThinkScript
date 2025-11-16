# Combined ATR % Above/Below for Auto Long or Short
# Automatically switches direction based on price movement
# Use as a column or lower study

declare lower;

input length = 14;
input averageType = AverageType.WILDERS;

def IsPremarket = GetTime() < RegularTradingStart(GetYYYYMMDD());

#  Calculate ATR
def ATR = if isPremarket then
    MovingAverage(
        averageType, 
        TrueRange(
            high(period="DAY")[1], 
            close(period="DAY")[1], 
            low(period="DAY")[1]), length
)    
else
    WildersAverage(
        TrueRange(
            high(period = AggregationPeriod.DAY),
            close(period = AggregationPeriod.DAY),
            low(period = AggregationPeriod.DAY)
        ),
        length
    )
;

def yClose = close(period = AggregationPeriod.DAY)[1];
def cClose = close();

# ATR reference levels
def yClosePlusATR = yClose + ATR;
def yCloseMinusATR = yClose - ATR;

# Direction logic
def isShort = cClose > yClose;
def isLong  = cClose < yClose;

# % over ATR (short) and % below ATR (long)
# def shortPercent = ((cClose - yClosePlusATR) / yClosePlusATR) * 100;
def shortPercent = if !IsNaN(yClosePlusATR) and yClosePlusATR != 0 then 
    ((cClose - yClosePlusATR) / yClosePlusATR) * 100 
else 0;
#def longPercent  = ((yCloseMinusATR - cClose) / yCloseMinusATR) * 100;
def longPercent = if !IsNaN(yCloseMinusATR) and yCloseMinusATR != 0 then 
    ((yCloseMinusATR - cClose) / yCloseMinusATR) * 100 
else 0;

def shortPercentageRounded = round(shortPercent, 2);
def shortFinal = if IsNaN(shortPercentageRounded) then 0 else shortPercentageRounded;

# Choose automatically
plot result =
    if isShort then shortFinal
    else if isLong then round(longPercent, 2)
    else 0;

