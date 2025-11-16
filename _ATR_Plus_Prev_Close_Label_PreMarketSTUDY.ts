# _ATR_Support_Resistance
input length = 14;
input averageType = AverageType.WILDERS;

def ATR = MovingAverage(averageType, TrueRange(high(period=”DAY”)[1], close(period=”DAY”)[1], low(period=”DAY”)[1]), length);

def DailyClose = close(period=”DAY”)[1];
def hatr = dailyclose + ATR;


def IsPremarket = GetTime() < RegularTradingStart(GetYYYYMMDD());

AddLabel (IsPremarket, " ATRp+: " + round(hatr,2) , Color.PINK);
