
# Start True Momentum
# True Momentum
# At or over 24 hour high
# x% over ATR

declare Lower;

input length = 14;
input calcLength = 5;
input smoothLength = 3;

def o = open;
def c = close;
def data = fold i = 0 to length
           with s
           do s + (if c > getValue(o, i)
                   then 1
                   else if c < getValue(o, i)
                        then - 1
                        else 0);
def EMA5 = ExpAverage(data, calcLength);
def Main = ExpAverage(EMA5, smoothLength);

plot Signal = ExpAverage(Main, smoothLength);

############# END True Momentum ################

############# Start Mark over ATR/DTR ###########
# Define inputs
input atrLength = 14;
input Choice = {default greater, less};
input aggregationPeriodDAY = AggregationPeriod.DAY;
input averageType = AverageType.WILDERS;

# Calculate ATR
def atr = WildersAverage(
    TrueRange(
        high(period = aggregationPeriodDAY),
        close(period = aggregationPeriodDAY),
        low(period = aggregationPeriodDAY)
    ),
    atrLength
);

# Calculate DTR (Daily Trading Range)
def dtr = high(period = aggregationPeriodDAY) - low(period = aggregationPeriodDAY);

# Determine the bigger of ATR or DTR
def threshold = Max(atr, dtr);

# Yesterday's close
def yesterdaysClose = close(period = aggregationPeriodDAY)[1];

# Current Mark price
def currentMark = close(priceType = PriceType.MARK);

# Absolute mark change
def markChange = AbsValue(yesterdaysClose - currentMark);

############# END Mark over ATR/DTR ###########


# Comparison logic
plot scan;
switch (Choice) {
    case greater:
        #scan = markChange > threshold && Signal > 10.5;
        scan = Signal > 10.5;
    case less:
        #scan = markChange < threshold && Signal < 10.5;
        scan = Signal < -10.5;
}
