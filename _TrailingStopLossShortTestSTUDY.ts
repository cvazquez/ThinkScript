# _TrailingStopLossShort - Use as a column

input ATRPeriod = 5;
input ATRFactor = 3.5;

def loss = ATRFactor * atr(atrperiod);
def traillong = close - loss;
def trailshort = close + loss;
addLabel(YES, text = trailshort, color.dark_green);
# addLabel(YES, text = traillong, color.dark_red);
def bar = barnumber();


def atrtraillong = if bar >= ATRPeriod then max(atrtraillong[1], traillong) else traillong;
def atrtrailshort =  if bar >= ATRPeriod then min(atrtrailshort[1], trailshort) else trailshort;


# plot atr_long = atrtraillong;
plot atr_short = atrtrailshort;
