# VWAP Below Lower
input price = close;
input length = 14;
input numDevDn = -2.0; # Number of standard deviations below VWAP

# VWAP Calculation
def vwap = reference VWAP().LowerBand;
def lowerVWAP = vwap + numDevDn * StDev(data = price, length = length);

# Check if entire candle is below lower VWAP
def candleBelowLowerVWAP = high < lowerVWAP and low < lowerVWAP;

# Plotting
plot alertSignal = candleBelowLowerVWAP;
alertSignal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
alertSignal.SetLineWeight(3);
alertSignal.AssignValueColor(Color.RED);

# Alert
Alert(candleBelowLowerVWAP, "Candle below Lower VWAP", Alert.BAR, Sound.RING);
