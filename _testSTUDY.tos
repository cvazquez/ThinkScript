declare lower;

input length = 14;
input averageType = AverageType.WILDERS;

def IsPremarket = GetTime() < RegularTradingStart(GetYYYYMMDD());

AddLabel(yes, "isPremarket: " + IsPremarket, CreateColor(255, 126, 156));


#  Calculate ATR
def ATR = if isPremarket then
    MovingAverage(
        averageType, 
        TrueRange(
            high(period=”DAY”)[1], 
            close(period=”DAY”)[1], 
            low(period=”DAY”)[1]), length
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

AddLabel(yes, "ATR: " + ATR, CreateColor(255, 126, 156));


def yClose = close(period = AggregationPeriod.DAY)[1];
AddLabel(yes, "yClose: " + yClose, CreateColor(255, 126, 156));


def cClose = close();
AddLabel(yes, "oClose: " + cClose, CreateColor(255, 126, 156));

def yClosePlusATR = yClose + ATR;
AddLabel(yes, "yClosePlusATR: " + yClosePlusATR, CreateColor(255, 126, 156));

def isShort = cClose > yClose;
AddLabel(yes, "isShort: " + isShort, CreateColor(255, 126, 156));

def isLong  = cClose < yClose;
AddLabel(yes, "isLong: " + isLong, CreateColor(255, 126, 156));

def shortPercent = ((cClose - yClosePlusATR) / yClosePlusATR) * 100;
AddLabel(yes, "shortPercent: " + shortPercent, CreateColor(255, 126, 156));

def yCloseMinusATR = yClose - ATR;
def longPercent  = ((yCloseMinusATR - cClose) / yCloseMinusATR) * 100;

def result =
    if isShort then IsNaN(round(shortPercent, 2))
    else if isLong then round(longPercent, 2)
    else 0;

AddLabel(yes, "IsPremarket: " + IsPremarket, CreateColor(255, 126, 156));


