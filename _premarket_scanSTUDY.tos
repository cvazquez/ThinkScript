# Stock / Last   /      min: 5.00   max: 100.00
# Stock / Volume  /       min: 1000
# Custom        on timeframe D
# code for Custom filter:

#--------------------------

def V = 100000;         #Min average volume, pcs. shares

def AvgDays = 14;    #How many days to calculate the average volume

def iATR = 0.50;         # ATR minimum, $ 

def bATR = if ( round((Average(high, AvgDays )-Average(low, AvgDays )),2)>=iATR && Average(volume, 20)>=V ) then 1 else 0;

plot Scan = bATR;

#--------------------------
