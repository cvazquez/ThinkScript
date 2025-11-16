# This calculates the number of 1-minute bars in 32 hours
def numBars = 32 * 60; 

# Get the high over the specified number of bars
def highOfLast32Hours = Highest(high, numBars);
def OnePercentOver = highOfLast32Hours * 1.01;

# Plot the 32-hour high line
plot HighLine = highOfLast32Hours;
HighLine.SetDefaultColor(Color.MAGENTA);
HighLine.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
AddLabel(yes, "32H High: " + highOfLast32Hours + 
" : +1%=" + OnePercentOver,
Color.MAGENTA);
