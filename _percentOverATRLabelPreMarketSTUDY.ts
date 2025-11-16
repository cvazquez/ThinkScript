declare lower;

input percentPlus = 1.00;
input length = 14;
input averageType = AverageType.WILDERS;

#  Calculate ATR
def ATR = MovingAverage(averageType, TrueRange(high(period=”DAY”)[1], close(period=”DAY”)[1], low(period=”DAY”)[1]), length);

def DailyClose = close(period=”DAY”)[1];
def hatr = dailyclose + ATR;

# % over ATR
def percentX = 1 + (percentPlus / 100);
def atrPlus1pct = hatr * percentX;

def IsPremarket = GetTime() < RegularTradingStart(GetYYYYMMDD());

# Plot
# plot ATR_1pct_Over = atrPlus1pct;


AddLabel(IsPremarket, "ATRP+" + percentPlus + "% : " + Round(atrPlus1pct, 2), CreateColor(255, 126, 156));
