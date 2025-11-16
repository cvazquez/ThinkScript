# 24-Hour Low of Day Line
# Works on intraday charts (e.g., 1min, 5min, etc.)
# Includes extended hours (premarket + overnight)

def newDay = GetDay() != GetDay()[1];  # Detect start of new calendar day

def dayLow;
if newDay then {
    dayLow = low;
} else {
    dayLow = Min(low, dayLow[1]);
}

plot Low24h = dayLow;
Low24h.SetDefaultColor(Color.WHITE);
Low24h.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
Low24h.HideTitle();

AddLabel(yes, "24h L: " + AsText(Low24h, NumberFormat.TWO_DECIMAL_PLACES), Color.WHITE);

