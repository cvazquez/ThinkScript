declare lower;

input atrLength = 14;
input percentPlus = 1.00;
#  Calculate ATR

def atr = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), atrLength);

def yesterdaysClose = close(period = aggregationPeriod.DAY)[1];

def yesterdaysClosePlusATR = yesterdaysClose + atr;

# % over ATR
def percentX = 1 + (percentPlus / 100);
def atrPlus1pct = yesterdaysClosePlusATR * percentX;

# Plot
# plot ATR_1pct_Over = atrPlus1pct;


AddLabel(yes, "atr+" + percentPlus + "% : " + Round(atrPlus1pct, 2), CreateColor(255, 126, 156));
