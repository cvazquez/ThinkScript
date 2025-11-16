# SPY % Bands and Premarket High/Low
# Draws lines from -1.25% to +1.25% of the previous day's close
# Also shows today's premarket high and low
# By ChatGPT (GPT-5)

declare upper;

input showPercentLevels = yes;
input showPremarketLevels = yes;
input bubbleOffsetBars = 0; # adjust right-edge offset if desired


def day = GetDay();
def newDay = day != day[1];
def regularStart = RegularTradingStart(GetYYYYMMDD());
def premarket = GetTime() < regularStart;

# --- Previous day close ---
def prevClose = close(period = AggregationPeriod.DAY)[1];

# --- % levels from previous close ---
def pct1 = prevClose * 0.9875;  # -1.25%
def pct2 = prevClose * 0.99;    # -1.00%
def pct3 = prevClose * 0.9925;  # -0.75%
def pct4 = prevClose * 0.995;   # -0.50%
def pct5 = prevClose * 0.9975;  # -0.25%
def pct6 = prevClose * 1.0025;  # +0.25%
def pct7 = prevClose * 1.005;   # +0.50%
def pct8 = prevClose * 1.0075;  # +0.75%
def pct9 = prevClose * 1.01;    # +1.00%
def pct10 = prevClose * 1.0125; # +1.25%

# AddChartBubble(1, pct10, "+1.25%: " + pct10, Color.green, yes);

# --- Premarket High/Low ---
def isPremarket = GetTime() < RegularTradingStart(GetYYYYMMDD());
def preHigh = if newDay then high else if isPremarket then Max(high, preHigh[1]) else preHigh[1];
def preLow = if newDay then low else if isPremarket then Min(low, preLow[1]) else preLow[1];

# --- Plot % Lines ---
plot p_125Down = if showPercentLevels then pct1 else Double.NaN;
plot p_1Down   = if showPercentLevels then pct2 else Double.NaN;
plot p_075Down = if showPercentLevels then pct3 else Double.NaN;
plot p_05Down  = if showPercentLevels then pct4 else Double.NaN;
plot p_025Down = if showPercentLevels then pct5 else Double.NaN;
plot p_025Up   = if showPercentLevels then pct6 else Double.NaN;
plot p_05Up    = if showPercentLevels then pct7 else Double.NaN;
plot p_075Up   = if showPercentLevels then pct8 else Double.NaN;
plot p_1Up     = if showPercentLevels then pct9 else Double.NaN;
plot p_125Up   = if showPercentLevels then pct10 else Double.NaN;

# --- Style the % lines ---
p_125Down.SetDefaultColor(Color.RED);
p_1Down.SetDefaultColor(Color.RED);
p_075Down.SetDefaultColor(Color.DARK_RED);
p_05Down.SetDefaultColor(Color.DARK_RED);
p_025Down.SetDefaultColor(Color.GRAY);
p_025Up.SetDefaultColor(Color.GRAY);
p_05Up.SetDefaultColor(Color.DARK_GREEN);
p_075Up.SetDefaultColor(Color.DARK_GREEN);
p_1Up.SetDefaultColor(Color.GREEN);
#p_125Up.SetDefaultColor(Color.GREEN);

p_125Down.SetStyle(Curve.SHORT_DASH);
#p_125Up.SetStyle(Curve.SHORT_DASH);

# --- Plot Premarket High/Low ---
plot PreHighLine = if showPremarketLevels and !IsNaN(preHigh) then preHigh else Double.NaN;
plot PreLowLine = if showPremarketLevels and !IsNaN(preLow) then preLow else Double.NaN;

PreHighLine.SetDefaultColor(Color.CYAN);
PreHighLine.SetStyle(Curve.LONG_DASH);
PreLowLine.SetDefaultColor(Color.MAGENTA);
PreLowLine.SetStyle(Curve.LONG_DASH);

# --- Add Bubbles for % levels (on last bar only) ---
def lastBar = !IsNaN(close) and IsNaN(close[-1]);

AddChartBubble(showPercentLevels and lastBar[bubbleOffsetBars], pct10, "+1.25%", Color.GREEN, yes);


AddLabel(yes, "Prev Close: " + AsText(prevClose), Color.YELLOW);
AddLabel(showPremarketLevels, "PreHigh: " + AsText(preHigh) + "  |  PreLow: " + AsText(preLow), Color.CYAN);

