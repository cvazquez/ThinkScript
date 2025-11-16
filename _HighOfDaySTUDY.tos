# HIGH OF DAY: _HighOfDay

def dayStart = GetDay() != GetDay()[1];  # Identifies the start of a new day
def dailyHigh = if dayStart then high else Max(high, dailyHigh[1]);  # Tracks the high for the day

plot HighLine = dailyHigh;  # Plots the daily high line
HighLine.SetDefaultColor(CreateColor(144, 213, 255));  # You can change the color if desired
HighLine.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);  # Keep the line horizontal
# HighLine.HideTitle();  # Optional: hide the title from the chart

# Optional: Add a label on the chart showing the High of the Day
AddLabel(yes, "H: " + dailyHigh, CreateColor(144, 213, 255));
