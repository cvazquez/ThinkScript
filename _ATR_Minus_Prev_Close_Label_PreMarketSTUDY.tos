# _ATR_Minus_Prev_Close_Label_PreMarket
input length = 14;
input averageType = AverageType.WILDERS;

def ATR = MovingAverage(averageType, TrueRange(high(period=”DAY”)[1], close(period=”DAY”)[1], low(period=”DAY”)[1]), length);

def DailyClose = close(period=”DAY”)[1];

def latr = DailyClose - ATR;

def IsPremarket = GetTime() < RegularTradingStart(GetYYYYMMDD());

AddLabel (IsPremarket, " ATRp-: " + round(latr,2) , Color.GRAY);
