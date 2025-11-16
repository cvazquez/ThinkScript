# Premarket Gap-Up Scan

# Run Scan at premarket on one minute aggregation.

# Will not be accurate after hours or prior to midnight. Default value set to 10% increase

# Mobius
# https://www.reddit.com/r/thinkorswim/comments/1ihi44z/comment/mayj1bk/

def blockList =
    GetSymbol() == "NTLA" or
    GetSymbol() == "BROS" or
    GetSymbol() == "POET" or
    GetSymbol() == "RR" or
    GetSymbol() == "RXRX" or
    GetSymbol() == "BULL" or
    GetSymbol() == "CRML" or
    GetSymbol() == "SUGP" or
    GetSymbol() == "BDRX" or
    GetSymbol() == "QUBT" or
    GetSymbol() == "LAC" or
    GetSymbol() == "MTHRY" or
    GetSymbol() == "USAR" or
    GetSymbol() == "ORBS" or
    GetSymbol() == "CYN" or
    GetSymbol() == "NCNA";

def MarketClosePrice = if getTime() crosses RegularTradingEnd(getYYYYMMDD())

then close[1]

else MarketClosePrice[1];
# && !blockList
plot PreMarketScan = (close > MarketClosePrice * 1.04);

# End Scan Code
