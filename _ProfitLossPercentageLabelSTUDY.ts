# P/L% Label - Manual Average Price
input avgPrice = 10.11;   # <--- set this to your entry price

def plPercent = ((close - avgPrice) / avgPrice) * 100;

AddLabel(yes, "P/L%: " + Round(plPercent, 4) + "%",
         if plPercent >= 0 then Color.GREEN else Color.RED);
