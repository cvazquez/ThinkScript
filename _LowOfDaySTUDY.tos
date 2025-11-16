# Draws a line at the low of the stock for each day

def dayStart = GetDay() != GetDay()[1];  # Identifies the start of a new day
def dailyLow = if dayStart then low else min(low, dailyLow[1]);  # Tracks the low for the day

plot LowLine = dailyLow;  # Plots the daily low line
LowLine.SetDefaultColor(Color.WHITE);  # Set the color of the line (you can change the color)
LowLine.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);  # Keep the line horizontal
# LowLine.HideTitle();  # Optional: hide the title from the chart

# Add a label for "Low of Day"
# AddChartBubble(dayStart, dailyLow, "Low of Day", Color.WHITE, no);

# Add a label on the right side that shows the "Low of Day"
AddLabel(yes, "L: " + dailyLow, Color.WHITE);
