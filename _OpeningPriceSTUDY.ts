# Plotting the opening price
#plot openingPrice = open(period = AggregationPeriod.DAY);

plot openingPrice = open(period = AggregationPeriod.DAY);
openingPrice.SetDefaultColor(Color.DARK_ORANGE);
openingPrice.SetLineWeight(2);

AddLabel(yes, "O: " + openingPrice, Color.DARK_ORANGE);

