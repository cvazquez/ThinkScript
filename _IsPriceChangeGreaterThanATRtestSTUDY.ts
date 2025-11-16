#  thinkScript Study: Mark Change > ATR

#  This study returns true if a stock's Mark Change is greater than its ATR

#  Define inputs
input atrLength = 14;
input Choice = {default greater, less};
input aggregationPeriodDAY = AggregationPeriod.DAY;
input averageType = AverageType.WILDERS;
input delta = 0.75;

#  Calculate ATR
def atr = WildersAverage(TrueRange(high(period = aggregationPeriod.DAY), close(period = aggregationPeriod.DAY), low(period = aggregationPeriod.DAY)), atrLength);

#def ATRValue = Average(TrueRange(high,  close,  low),  ATRLength) * 39.36;

#  Calculate Mark Change
# def markChange = close(priceType = PriceType.MARK) - # close(priceType = PriceType.LAST)[1];

def yesterdaysClose = close(period = aggregationPeriodDAY)[1];

def lastPrice = close(priceType = PriceType.LAST);

#def priceChange = AbsValue(yesterdaysClose - lastPrice);
def priceChange = lastPrice - yesterdaysClose;

def atrDelta = atr * delta;


def atr2 = WildersAverage(TrueRange(high, close, low), atrLength);

def yesterdaysClose2 = close(period = aggregationPeriod.DAY)[1];
def lastPrice2 = close;
def priceChange2 = lastPrice - yesterdaysClose;


AddLabel (yes, 
"Yesterday's Close: " + yesterdaysClose +
#"; aggregationPeriodDAY: " + aggregationPeriodDAY +
"; lastPrice: " + lastPrice + 
"; atr : " + atr + 
#"; ATRValue: " + ATRValue + 
#"; delta: " + delta +
"; priceChange: " + priceChange + 
"; atrDelta: " + atrDelta +
#"; isShort: " + If(priceChange > atrDelta, yes, no) + 
"; atr2 " + atr2 +
"; scan1: " + (priceChange > atrDelta) +
"; yesterdaysClose2: " + yesterdaysClose2 +
"; lastPrice2: " + lastPrice2 + 
"; priceChange2: " + priceChange2 +
"; scan2: " + (priceChange2 > atrDelta)
, Color.PINK);
