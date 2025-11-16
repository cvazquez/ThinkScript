declare lower;

input percentMinus = 1.00;
input length = 14;
input averageType = AverageType.WILDERS;

#  Calculate ATR
def ATR = MovingAverage(averageType, TrueRange(high(period=”DAY”)[1], close(period=”DAY”)[1], low(period=”DAY”)[1]), length);

def DailyClose = close(period=”DAY”)[1];
def latr = dailyclose - ATR;

# % over ATR
def percentX = 1 - (percentMinus / 100);
def atrMinus1pct = latr * percentX;

def IsPremarket = GetTime() < RegularTradingStart(GetYYYYMMDD());

#AddLabel(yes, "test: " + atrMinus1pct, CreateColor(255, 126, 156));
AddLabel(IsPremarket, "ATRPre" + percentMinus + "% : " + Round(atrMinus1pct, 2), CreateColor(255, 126, 156));
