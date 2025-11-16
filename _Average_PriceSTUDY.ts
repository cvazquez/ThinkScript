def openCost = GetAveragePrice();

plot theLine = If(openCost > 0, openCost, double.NaN);

