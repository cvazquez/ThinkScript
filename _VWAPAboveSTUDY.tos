# VWAP Abover Upper
input price = close;
input length = 14;
input numDevUp = +2.0; # Number of standard deviations above VWAP

# VWAP Calculation
def vwap = reference VWAP().UpperBand;
def higherVWAP = vwap + numDevUp * StDev(data = price, length = length);

# Check if entire candle is above higher VWAP
def candleAboveUpperVWAP = high > higherVWAP and low > higherVWAP;

# Plotting
plot alertSignal = candleAboveUpperVWAP;
alertSignal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
alertSignal.SetLineWeight(3);
alertSignal.AssignValueColor(Color.GREEN);

# Alert
Alert(candleAboveUpperVWAP, "Candle above Upper VWAP", Alert.BAR, Sound.Chimes);
