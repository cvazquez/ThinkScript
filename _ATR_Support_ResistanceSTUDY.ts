# _ATR_Support_Resistance
input length = 14;
input averageType = AverageType.WILDERS;
input BasePeriod = AggregationPeriod.DAY;
input shortOrLong = "short";

def IsPremarket = GetTime() < RegularTradingStart(GetYYYYMMDD());

#  Calculate ATR
def ATR = if isPremarket then
    MovingAverage(
        averageType,
        TrueRange(
            high(period="DAY")[1],
            close(period="DAY")[1],
            low(period="DAY")[1]), length
)
else
    WildersAverage(
        TrueRange(
            high(period = AggregationPeriod.DAY),
            close(period = AggregationPeriod.DAY),
            low(period = AggregationPeriod.DAY)
        ),
        length
    )
;


def Today_High = Highest(high(period = baseperiod)[0], 1);
def Today_Low = Lowest(low(period =baseperiod)[0], 1);
def DR = Today_High - Today_Low;

plot DailyClose = close(period=”DAY”)[1];
plot hatr = dailyclose + ATR;
plot latr = dailyclose - ATR;
plot hdtr = Today_Low + ATR;
plot ldtr = Today_High - ATR;

# AddLabel(visible = Yes, text = "DTR: " + round(DR/ATR, 2)*100 + "%", color = Color.LIGHT_GRAY);
AddLabel(
    visible = Yes,
    text = "DTR: " + round(if shortOrLong == "long" then ldtr else hdtr,2),
    color = if shortOrLong == "long" then CreateColor(255, 95, 95) else Color.Yellow
);


def showBubbles = GetSymbol() == "SPY";
def lastBar = !IsNaN(close) and IsNaN(close[-1]);

# ATR Labels
AddChartBubble(showBubbles && lastBar[-250], hatr, "Short Target (ATR) : " + round(hatr, 2), CreateColor(255, 204, 203), yes);
AddChartBubble(showBubbles && lastBar[-250], latr, "Long Target (ATR) : " + round(latr, 2), CreateColor(102, 205, 170), yes);


# --- Yesterday Close +/- Previous Day High - Low ---
# This calculates the number of 1-minute bars in 32 hours
def numBars = 32 * 60;

# Get the high over the specified number of bars
def YesterdaysHigh = Highest(high, numBars);;
def YesterdaysLow = Lowest(low, numBars); ;
def YesterdaysHighLowDifference = AbsValue(YesterdaysHigh - YesterdaysLow);

plot HighTarget = DailyClose + YesterdaysHighLowDifference;
plot LowTarget = DailyClose - YesterdaysHighLowDifference;

HighTarget.SetDefaultColor(CreateColor(102, 205, 170));
LowTarget.SetDefaultColor(CreateColor(255, 204, 203));

AddChartBubble(showBubbles && lastBar[-250], HighTarget, "Short Target (H-L) : " + round(HighTarget, 2), CreateColor(255, 204, 203), yes);
AddChartBubble(showBubbles && lastBar[-250], LowTarget, "Long Target (H-L) : " + round(LowTarget, 2), CreateColor(102, 205, 170), yes);

