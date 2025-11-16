# Max Pain Indicator - Plots Max Pain for specified Option Expiration Day

# Inputs

input expirationDate = 20230531;
input Aggregation = AggregationPeriod.DAY;
#input optionSeriesPrefix = ".SPY230531";
#input strike = 420.0;
input strikeSpacing = 1;

# Round Current Price to find Closest Strike Price
def strike = round(close, 0);
def closePrice = close;

# Strike - 11
def mpStrikeDwn11 = strike - (strikeSpacing * 11);

def putDwn11OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))))))))))), Aggregation, Pricetype.LAST);

def callDwn11OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))))))))))), Aggregation, Pricetype.LAST);

def putDwn11OptionOI = if IsNan(putDwn11OptionOITemp) then 0 else putDwn11OptionOITemp;
def callDwn11OptionOI = if IsNan(callDwn11OptionOITemp) then 0 else callDwn11OptionOITemp;
def putDwn11IntrinsicVal = putDwn11OptionOI * mpStrikeDwn11;
def callDwn11IntrinsicVal = callDwn11OptionOI * mpStrikeDwn11;


# Strike - 10
def mpStrikeDwn10 = strike - (strikeSpacing * 10);

def putDwn10OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))))))))))), Aggregation, Pricetype.LAST);

def callDwn10OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))))))))))), Aggregation, Pricetype.LAST);

def putDwn10OptionOI = if IsNan(putDwn10OptionOITemp) then 0 else putDwn10OptionOITemp;
def callDwn10OptionOI = if IsNan(callDwn10OptionOITemp) then 0 else callDwn10OptionOITemp;
def putDwn10IntrinsicVal = putDwn10OptionOI * mpStrikeDwn10;
def callDwn10IntrinsicVal = callDwn10OptionOI * mpStrikeDwn10;

# Strike - 9
def mpStrikeDwn9 = strike - (strikeSpacing * 9);

def putDwn9OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))))))))), Aggregation, Pricetype.LAST);

def callDwn9OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))))))))), Aggregation, Pricetype.LAST);

def putDwn9OptionOI = if IsNan(putDwn9OptionOITemp) then 0 else putDwn9OptionOITemp;
def callDwn9OptionOI = if IsNan(callDwn9OptionOITemp) then 0 else callDwn9OptionOITemp;
def putDwn9IntrinsicVal = putDwn9OptionOI * mpStrikeDwn9;
def callDwn9IntrinsicVal = callDwn9OptionOI * mpStrikeDwn9;

# Strike - 8
def mpStrikeDwn8 = strike - (strikeSpacing * 8);

def putDwn8OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))))))))), Aggregation, Pricetype.LAST);

def callDwn8OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))))))))), Aggregation, Pricetype.LAST);

def putDwn8OptionOI = if IsNan(putDwn8OptionOITemp) then 0 else putDwn8OptionOITemp;
def callDwn8OptionOI = if IsNan(callDwn8OptionOITemp) then 0 else callDwn8OptionOITemp;
def putDwn8IntrinsicVal = putDwn8OptionOI * mpStrikeDwn8;
def callDwn8IntrinsicVal = callDwn8OptionOI * mpStrikeDwn8;

# Strike - 7
def mpStrikeDwn7 = strike - (strikeSpacing * 7);
def putDwn7OptionOI = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))))))), Aggregation, Pricetype.LAST);
def putDwn7OptionOITemp = if IsNan(putDwn7OptionOITemp) then 0 else putDwn7OptionOITemp;
def callDwn7OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))))))), Aggregation, Pricetype.LAST);
def callDwn7OptionOI = if IsNan(callDwn7OptionOITemp) then 0 else callDwn7OptionOITemp;
def putDwn7IntrinsicVal = putDwn7OptionOI * mpStrikeDwn7;
def callDwn7IntrinsicVal = callDwn7OptionOI * mpStrikeDwn7;

# Strike - 6
def mpStrikeDwn6 = strike - (strikeSpacing * 6);

def putDwn6OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))))))), Aggregation, Pricetype.LAST);

def callDwn6OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))))))), Aggregation, Pricetype.LAST);

def putDwn6OptionOI = if IsNan(putDwn6OptionOITemp) then 0 else putDwn6OptionOITemp;
def callDwn6OptionOI = if IsNan(callDwn6OptionOITemp) then 0 else callDwn6OptionOITemp;
def putDwn6IntrinsicVal = putDwn6OptionOI * mpStrikeDwn6;
def callDwn6IntrinsicVal = callDwn6OptionOI * mpStrikeDwn6;

# Strike - 5
def mpStrikeDwn5 = strike - (strikeSpacing * 5);

def putDwn5OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))))), Aggregation, Pricetype.LAST);

def callDwn5OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))))), Aggregation, Pricetype.LAST);

def putDwn5OptionOI = if IsNan(putDwn5OptionOITemp) then 0 else putDwn5OptionOITemp;
def callDwn5OptionOI = if IsNan(callDwn5OptionOITemp) then 0 else callDwn5OptionOITemp;
def putDwn5IntrinsicVal = putDwn5OptionOI * mpStrikeDwn5;
def callDwn5IntrinsicVal = callDwn5OptionOI * mpStrikeDwn5;

# Strike - 4
def mpStrikeDwn4 = strike - (strikeSpacing * 4);

def putDwn4OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))))), Aggregation, Pricetype.LAST);

def callDwn4OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))))), Aggregation, Pricetype.LAST);

def putDwn4OptionOI = if IsNan(putDwn4OptionOITemp) then 0 else putDwn4OptionOITemp;
def callDwn4OptionOI = if IsNan(callDwn4OptionOITemp) then 0 else callDwn4OptionOITemp;
def putDwn4IntrinsicVal = putDwn4OptionOI * mpStrikeDwn4;
def callDwn4IntrinsicVal = callDwn4OptionOI * mpStrikeDwn4;

# Strike - 3
def mpStrikeDwn3 = strike - (strikeSpacing * 3);
def putDwn3OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))), Aggregation, Pricetype.LAST);
def putDwn3OptionOI = if IsNan(putDwn3OptionOITemp) then 0 else putDwn3OptionOITemp;
def callDwn3OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))), Aggregation, Pricetype.LAST);
def callDwn3OptionOI = if IsNan(callDwn3OptionOITemp) then 0 else callDwn3OptionOITemp;
def putDwn3IntrinsicVal = putDwn3OptionOI * mpStrikeDwn3;
def callDwn3IntrinsicVal = callDwn3OptionOI * mpStrikeDwn3;

# Strike - 2
def mpStrikeDwn2 = strike - (strikeSpacing * 2);

def putDwn2OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))), Aggregation, Pricetype.LAST);

def callDwn2OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))), Aggregation, Pricetype.LAST);

def putDwn2OptionOI = if IsNan(putDwn2OptionOITemp) then 0 else putDwn2OptionOITemp;
def callDwn2OptionOI = if IsNan(callDwn2OptionOITemp) then 0 else callDwn2OptionOITemp;
def putDwn2IntrinsicVal = putDwn2OptionOI * mpStrikeDwn2;
def callDwn2IntrinsicVal = callDwn2OptionOI * mpStrikeDwn2;

# Strike - 1
def mpStrikeDwn1 = strike - strikeSpacing;

def putDwn1OptionOITemp = open_interest(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)), Aggregation, Pricetype.LAST);

def callDwn1OptionOITemp = open_interest(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)), Aggregation, Pricetype.LAST);

def putDwn1OptionOI = if IsNan(putDwn1OptionOITemp) then 0 else putDwn1OptionOITemp;
def callDwn1OptionOI = if IsNan(callDwn1OptionOITemp) then 0 else callDwn1OptionOITemp;
def putDwn1IntrinsicVal = putDwn1OptionOI * mpStrikeDwn1;
def callDwn1IntrinsicVal = callDwn1OptionOI * mpStrikeDwn1;

# Strike 0
def mpStrike0 = strike;

def put0OptionOITemp = open_interest(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT), Aggregation, Pricetype.LAST);

def call0OptionOITemp = open_interest(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL), Aggregation, Pricetype.LAST);

def put0OptionOI = if IsNan(put0OptionOITemp) then 0 else put0OptionOITemp;
def call0OptionOI = if IsNan(call0OptionOITemp) then 0 else call0OptionOITemp;
def put0IntrinsicVal = put0OptionOI * mpStrike0;
def call0IntrinsicVal = call0OptionOI * mpStrike0;


# Strike 1
def mpStrikeUp1 = strike + strikeSpacing;

def putUp1OptionOITemp = open_interest(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)), Aggregation, Pricetype.LAST);

def callUp1OptionOITemp = open_interest(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)), Aggregation, Pricetype.LAST);

def putUp1OptionOI = if IsNan(putUp1OptionOITemp) then 0 else putUp1OptionOITemp;
def callUp1OptionOI = if IsNan(callUp1OptionOITemp) then 0 else callUp1OptionOITemp;
def putUp1IntrinsicVal = putUp1OptionOI * mpStrikeUp1;
def callUp1IntrinsicVal = callUp1OptionOI * mpStrikeUp1;

# Strike 2
def mpStrikeUp2 = strike + (strikeSpacing * 2);

def putUp2OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))), Aggregation, Pricetype.LAST);

def callUp2OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))), Aggregation, Pricetype.LAST);

def putUp2OptionOI = if IsNan(putUp2OptionOITemp) then 0 else putUp2OptionOITemp;
def callUp2OptionOI = if IsNan(callUp2OptionOITemp) then 0 else callUp2OptionOITemp;
def putUp2IntrinsicVal = putUp2OptionOI * mpStrikeUp2;
def callUp2IntrinsicVal = callUp2OptionOI * mpStrikeUp2;

# Strike 3
def mpStrikeUp3 = strike + (strikeSpacing * 3);

def putUp3OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))), Aggregation, Pricetype.LAST);

def callUp3OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))), Aggregation, Pricetype.LAST);

def putUp3OptionOI = if IsNan(putUp3OptionOITemp) then 0 else putUp3OptionOITemp;
def callUp3OptionOI = if IsNan(callUp3OptionOITemp) then 0 else callUp3OptionOITemp;
def putUp3IntrinsicVal = putUp3OptionOI * mpStrikeUp3;
def callUp3IntrinsicVal = callUp3OptionOI * mpStrikeUp3;

# Strike 4
def mpStrikeUp4 = strike + (strikeSpacing * 4);

def putUp4OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))))), Aggregation, Pricetype.LAST);

def callUp4OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))))), Aggregation, Pricetype.LAST);

def putUp4OptionOI = if IsNan(putUp4OptionOITemp) then 0 else putUp4OptionOITemp;
def callUp4OptionOI = if IsNan(callUp4OptionOITemp) then 0 else callUp4OptionOITemp;
def putUp4IntrinsicVal = putUp4OptionOI * mpStrikeUp4;
def callUp4IntrinsicVal = callUp4OptionOI * mpStrikeUp4;

# Strike 5
def mpStrikeUp5 = strike + (strikeSpacing * 5);

def putUp5OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))))), Aggregation, Pricetype.LAST);

def callUp5OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))))), Aggregation, Pricetype.LAST);
def callUp5OptionOI = if IsNan(callUp5OptionOITemp) then 0 else callUp5OptionOITemp;

def putUp5OptionOI = if IsNan(putUp5OptionOITemp) then 0 else putUp5OptionOITemp;
def putUp5IntrinsicVal = putUp5OptionOI * mpStrikeUp5;
def callUp5IntrinsicVal = callUp5OptionOI * mpStrikeUp5;

# Strike 6
def mpStrikeUp6 = strike + (strikeSpacing * 6);

def putUp6OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))))))), Aggregation, Pricetype.LAST);

def callUp6OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))))))), Aggregation, Pricetype.LAST);

def putUp6OptionOI = if IsNan(putUp6OptionOITemp) then 0 else putUp6OptionOITemp;
def callUp6OptionOI = if IsNan(callUp6OptionOITemp) then 0 else callUp6OptionOITemp;
def putUp6IntrinsicVal = putUp6OptionOI * mpStrikeUp6;
def callUp6IntrinsicVal = callUp6OptionOI * mpStrikeUp6;

# Strike 7
def mpStrikeUp7 = strike + (strikeSpacing * 7);

def putUp7OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))))))), Aggregation, Pricetype.LAST);

def callUp7OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))))))), Aggregation, Pricetype.LAST);

def putUp7OptionOI = if IsNan(putUp7OptionOITemp) then 0 else putUp7OptionOITemp;
def callUp7OptionOI = if IsNan(callUp7OptionOITemp) then 0 else callUp7OptionOITemp;
def putUp7IntrinsicVal = putUp7OptionOI * mpStrikeUp7;
def callUp7IntrinsicVal = callUp7OptionOI * mpStrikeUp7;

# Strike 8
def mpStrikeUp8 = strike + (strikeSpacing * 8);

def putUp8OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))))))))), Aggregation, Pricetype.LAST);

def callUp8OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))))))))), Aggregation, Pricetype.LAST);

def putUp8OptionOI = if IsNan(putUp8OptionOITemp) then 0 else putUp8OptionOITemp;
def callUp8OptionOI = if IsNan(callUp8OptionOITemp) then 0 else callUp8OptionOITemp;
def putUp8IntrinsicVal = putUp8OptionOI * mpStrikeUp8;
def callUp8IntrinsicVal = callUp8OptionOI * mpStrikeUp8;

# Strike 9
def mpStrikeUp9 = strike + (strikeSpacing * 9);
def putUp9OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))))))))), Aggregation, Pricetype.LAST);
def putUp9OptionOI = if IsNan(putUp9OptionOITemp) then 0 else putUp9OptionOITemp;
def callUp9OptionOI = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))))))))), Aggregation, Pricetype.LAST);
def callUp9OptionOITemp = if IsNan(callUp9OptionOITemp) then 0 else callUp9OptionOITemp;
def putUp9IntrinsicVal = putUp9OptionOI * mpStrikeUp9;
def callUp9IntrinsicVal = callUp9OptionOI * mpStrikeUp9;

# Strike 10
def mpStrikeUp10 = strike + (strikeSpacing * 10);

def putUp10OptionOITemp = open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT))))))))))), Aggregation, Pricetype.LAST);

def callUp10OptionOI = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL))))))))))), Aggregation, Pricetype.LAST);

def putUp10OptionOI = if IsNan(putUp10OptionOITemp) then 0 else putUp10OptionOITemp;
def callUp10OptionOITemp = if IsNan(callUp10OptionOITemp) then 0 else callUp10OptionOITemp;
def putUp10IntrinsicVal = putUp10OptionOI * mpStrikeUp10;
def callUp10IntrinsicVal = callUp10OptionOI * mpStrikeUp10;

# Strike 11
def mpStrikeUp11 = strike + (strikeSpacing * 11);

def putUp11OptionOITemp =
 open_interest(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetNextITMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT)))))))))))), Aggregation, Pricetype.LAST);

def callUp11OptionOITemp = open_interest(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetNextOTMOption(GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.CALL)))))))))))), Aggregation, Pricetype.LAST);

def putUp11OptionOI = if IsNan(putUp11OptionOITemp) then 0 else putUp11OptionOITemp;
def callUp11OptionOI = if IsNan(callUp11OptionOITemp) then 0 else callUp11OptionOITemp;
def putUp11IntrinsicVal = putUp11OptionOI * mpStrikeUp11;
def callUp11IntrinsicVal = callUp11OptionOI * mpStrikeUp11;


# Max Pain Calculation -11

def callOISumDwn11 = callDwn11OptionOI;

def putOISumDwn11 = putDwn11OptionOI + putDwn10OptionOI + putDwn9OptionOI + putDwn8OptionOI + putDwn7OptionOI + putDwn6OptionOI
+ putDwn5OptionOI + putDwn4OptionOI + putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn11 = callDwn11IntrinsicVal;

def putSumProductDwn11 = putDwn11IntrinsicVal + putDwn10IntrinsicVal + putDwn9IntrinsicVal + putDwn8IntrinsicVal + putDwn7IntrinsicVal
+ putDwn6IntrinsicVal + putDwn5IntrinsicVal + putDwn4IntrinsicVal + putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn11 = mpStrikeDwn11 * callOISumDwn11 - callSumProductDwn11;
def putvalueDwn11 = putSumProductDwn11 - mpStrikeDwn11 * putOISumDwn11;
def totalValueDwn11 = callValueDwn11 + putValueDwn11;


# Max Pain Calculation -10

def callOISumDwn10 = callDwn11OptionOI + callDwn10OptionOI;

def putOISumDwn10 = putDwn10OptionOI + putDwn9OptionOI + putDwn8OptionOI + putDwn7OptionOI + putDwn6OptionOI
+ putDwn5OptionOI + putDwn4OptionOI + putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn10 = callDwn11IntrinsicVal + callDwn10IntrinsicVal;

def putSumProductDwn10 = putDwn10IntrinsicVal + putDwn9IntrinsicVal + putDwn8IntrinsicVal + putDwn7IntrinsicVal
+ putDwn6IntrinsicVal + putDwn5IntrinsicVal + putDwn4IntrinsicVal + putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn10 = mpStrikeDwn10 * callOISumDwn10 - callSumProductDwn10;
def putValueDwn10 = putSumProductDwn10 - mpStrikeDwn10 * putOISumDwn10;
def totalValueDwn10 = callValueDwn10 + putValueDwn10;


# Max Pain Calculation -9

def callOISumDwn9 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI;

def putOISumDwn9 = putDwn9OptionOI + putDwn8OptionOI + putDwn7OptionOI + putDwn6OptionOI
+ putDwn5OptionOI + putDwn4OptionOI + putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn9 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal;

def putSumProductDwn9 = putDwn9IntrinsicVal + putDwn8IntrinsicVal + putDwn7IntrinsicVal
+ putDwn6IntrinsicVal + putDwn5IntrinsicVal + putDwn4IntrinsicVal + putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn9 = mpStrikeDwn9 * callOISumDwn9 - callSumProductDwn9;
def putvalueDwn9 = putSumProductDwn9 - mpStrikeDwn9 * putOISumDwn9;
def totalValueDwn9 = callValueDwn9 + putValueDwn9;


# Max Pain Calculation -8

def callOISumDwn8 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI;

def putOISumDwn8 = putDwn8OptionOI + putDwn7OptionOI + putDwn6OptionOI
+ putDwn5OptionOI + putDwn4OptionOI + putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn8 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal;

def putSumProductDwn8 = putDwn8IntrinsicVal + putDwn7IntrinsicVal
+ putDwn6IntrinsicVal + putDwn5IntrinsicVal + putDwn4IntrinsicVal + putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn8 = mpStrikeDwn8 * callOISumDwn8- callSumProductDwn8;
def putvalueDwn8 = putSumProductDwn8 - mpStrikeDwn8 * putOISumDwn8;
def totalValueDwn8 = callValueDwn8 + putValueDwn8;


# Max Pain Calculation -7

def callOISumDwn7 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI;

def putOISumDwn7 = putDwn7OptionOI + putDwn6OptionOI
+ putDwn5OptionOI + putDwn4OptionOI + putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn7 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal;

def putSumProductDwn7 = putDwn7IntrinsicVal
+ putDwn6IntrinsicVal + putDwn5IntrinsicVal + putDwn4IntrinsicVal + putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn7 = mpStrikeDwn7 * callOISumDwn7- callSumProductDwn7;
def putvalueDwn7 = putSumProductDwn7 - mpStrikeDwn7 * putOISumDwn7;
def totalValueDwn7 = callValueDwn7 + putValueDwn7;


# Max Pain Calculation -6

def callOISumDwn6 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI;

def putOISumDwn6 = putDwn6OptionOI
+ putDwn5OptionOI + putDwn4OptionOI + putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn6 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal;

def putSumProductDwn6 = putDwn6IntrinsicVal + putDwn5IntrinsicVal + putDwn4IntrinsicVal + putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn6 = mpStrikeDwn6 * callOISumDwn6- callSumProductDwn6;
def putvalueDwn6 = putSumProductDwn6 - mpStrikeDwn6 * putOISumDwn6;
def totalValueDwn6 = callValueDwn6 + putValueDwn6;


# Max Pain Calculation -5

def callOISumDwn5 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI;

def putOISumDwn5 = putDwn5OptionOI + putDwn4OptionOI + putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn5 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal;

def putSumProductDwn5 = putDwn5IntrinsicVal + putDwn4IntrinsicVal + putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn5 = mpStrikeDwn5 * callOISumDwn5- callSumProductDwn5;
def putvalueDwn5 = putSumProductDwn5 - mpStrikeDwn5 * putOISumDwn5;
def totalValueDwn5 = callValueDwn5 + putValueDwn5;


# Max Pain Calculation -4

def callOISumDwn4 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI;

def putOISumDwn4 = putDwn4OptionOI + putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn4 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal;

def putSumProductDwn4 = putDwn4IntrinsicVal + putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn4 = mpStrikeDwn4 * callOISumDwn4- callSumProductDwn4;
def putvalueDwn4 = putSumProductDwn4 - mpStrikeDwn4 * putOISumDwn4;
def totalValueDwn4 = callValueDwn4 + putValueDwn4;


# Max Pain Calculation -3

def callOISumDwn3 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI;

def putOISumDwn3 = putDwn3OptionOI + putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn3 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal;

def putSumProductDwn3 = putDwn3IntrinsicVal + putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn3 = mpStrikeDwn3 * callOISumDwn3- callSumProductDwn3;
def putvalueDwn3 = putSumProductDwn3 - mpStrikeDwn3 * putOISumDwn3;
def totalValueDwn3 = callValueDwn3 + putValueDwn3;


# Max Pain Calculation -2

def callOISumDwn2 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI;

def putOISumDwn2 = putDwn2OptionOI + putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn2 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal;

def putSumProductDwn2 = putDwn2IntrinsicVal + putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn2 = mpStrikeDwn2 * callOISumDwn2- callSumProductDwn2;
def putValueDwn2 = putSumProductDwn2 - mpStrikeDwn2 * putOISumDwn2;
def totalValueDwn2 = callValueDwn2 + putValueDwn2;


# Max Pain Calculation -1

def callOISumDwn1 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI;

def putOISumDwn1 = putDwn1OptionOI + put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductDwn1 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal;

def putSumProductDwn1 = putDwn1IntrinsicVal
+ put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueDwn1 = mpStrikeDwn1 * callOISumDwn1- callSumProductDwn1;
def putValueDwn1 = putSumProductDwn1 - mpStrikeDwn1 * putOISumDwn1;
def totalValueDwn1 = callValueDwn1 + putValueDwn1;


# Max Pain Calculation 0

def callOISum0 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI;

def putOISum0 = put0OptionOI + putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProduct0 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal;

def putSumProduct0 = put0IntrinsicVal + putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValue0 = mpStrike0 * callOISum0- callSumProduct0;
def putValue0 = putSumProduct0 - mpStrike0 * putOISum0;
def totalValue0 = callValue0 + putValue0;


# Max Pain Calculation +1

def callOISumUp1 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI;

def putOISumUp1 = putUp1OptionOI
+ putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp1 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal;

def putSumProductUp1 = putUp1IntrinsicVal + putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp1 = mpStrikeUp1 * callOISumUp1- callSumProductUp1;
def putValueUp1 = putSumProductUp1 - mpStrikeUp1 * putOISumUp1;
def totalValueUp1 = callValueUp1 + putValueUp1;


# Max Pain Calculation +2

def callOISumUp2 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI;

def putOISumUp2 = putUp2OptionOI + putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp2 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal;

def putSumProductUp2 = putUp2IntrinsicVal + putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp2 = mpStrikeUp2 * callOISumUp2- callSumProductUp2;
def putValueUp2 = putSumProductUp2 - mpStrikeUp2 * putOISumUp2;
def totalValueUp2 = callValueUp2 + putValueUp2;


# Max Pain Calculation +3

def callOISumUp3 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI;

def putOISumUp3 = putUp3OptionOI + putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp3 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal;

def putSumProductUp3 = putUp3IntrinsicVal + putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp3 = mpStrikeUp3 * callOISumUp3- callSumProductUp3;
def putValueUp3 = putSumProductUp3 - mpStrikeUp3 * putOISumUp3;
def totalValueUp3 = callValueUp3 + putValueUp3;


# Max Pain Calculation +4

def callOISumUp4 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI + callUp4OptionOI;

def putOISumUp4 = putUp4OptionOI + putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp4 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal + callUp4IntrinsicVal;

def putSumProductUp4 = putUp4IntrinsicVal + putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp4 = mpStrikeUp4 * callOISumUp4- callSumProductUp4;
def putValueUp4 = putSumProductUp4 - mpStrikeUp4 * putOISumUp4;
def totalValueUp4 = callValueUp4 + putValueUp4;


# Max Pain Calculation +5

def callOISumUp5 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI + callUp4OptionOI + callUp5OptionOI;

def putOISumUp5 = putUp5OptionOI + putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp5 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal + callUp4IntrinsicVal + callUp5IntrinsicVal;

def putSumProductUp5 = putUp5IntrinsicVal
+ putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp5 = mpStrikeUp5 * callOISumUp5- callSumProductUp5;
def putValueUp5 = putSumProductUp5 - mpStrikeUp5 * putOISumUp5;
def totalValueUp5 = callValueUp5 + putValueUp5;


# Max Pain Calculation +6

def callOISumUp6 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI + callUp4OptionOI + callUp5OptionOI + callUp6OptionOI;

def putOISumUp6 = putUp6OptionOI + putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp6 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal + callUp4IntrinsicVal + callUp5IntrinsicVal
+ callUp6IntrinsicVal;

def putSumProductUp6 = putUp6IntrinsicVal + putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp6 = mpStrikeUp6 * callOISumUp6- callSumProductUp6;
def putValueUp6 = putSumProductUp6 - mpStrikeUp6 * putOISumUp6;
def totalValueUp6 = callValueUp6 + putValueUp6;


# Max Pain Calculation +7

def callOISumUp7 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI + callUp4OptionOI + callUp5OptionOI + callUp6OptionOI + callUp7OptionOI;

def putOISumUp7 = putUp7OptionOI + putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp7 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal + callUp4IntrinsicVal + callUp5IntrinsicVal
+ callUp6IntrinsicVal + callUp7IntrinsicVal;

def putSumProductUp7 = putUp7IntrinsicVal + putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp7 = mpStrikeUp7 * callOISumUp7- callSumProductUp7;
def putValueUp7 = putSumProductUp7 - mpStrikeUp7 * putOISumUp7;
def totalValueUp7 = callValueUp7 + putValueUp7;


# Max Pain Calculation +8

def callOISumUp8 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI + callUp4OptionOI + callUp5OptionOI + callUp6OptionOI + callUp7OptionOI + callUp8OptionOI;

def putOISumUp8 = putUp8OptionOI
+ putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp8 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal + callUp4IntrinsicVal + callUp5IntrinsicVal
+ callUp6IntrinsicVal + callUp7IntrinsicVal + callUp8IntrinsicVal;

def putSumProductUp8 = putUp8IntrinsicVal + putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp8 = mpStrikeUp8 * callOISumUp8- callSumProductUp8;
def putValueUp8 = putSumProductUp8 - mpStrikeUp8 * putOISumUp8;
def totalValueUp8 = callValueUp8 + putValueUp8;


# Max Pain Calculation +9

def callOISumUp9 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI + callUp4OptionOI + callUp5OptionOI + callUp6OptionOI + callUp7OptionOI + callUp8OptionOI
+ callUp9OptionOI;

def putOISumUp9 = putUp9OptionOI + putUp10OptionOI + putUp11OptionOI;

def callSumProductUp9 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal + callUp4IntrinsicVal + callUp5IntrinsicVal
+ callUp6IntrinsicVal + callUp7IntrinsicVal + callUp8IntrinsicVal + callUp9IntrinsicVal;

def putSumProductUp9 = putUp9IntrinsicVal + putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp9 = mpStrikeUp9 * callOISumUp9- callSumProductUp9;
def putValueUp9 = putSumProductUp9 - mpStrikeUp9 * putOISumUp9;
def totalValueUp9 = callValueUp9 + putValueUp9;


# Max Pain Calculation +10

def callOISumUp10 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI + callUp4OptionOI + callUp5OptionOI + callUp6OptionOI + callUp7OptionOI + callUp8OptionOI
+ callUp9OptionOI + callUp10OptionOI;

def putOISumUp10 = putUp10OptionOI + putUp11OptionOI;

def callSumProductUp10 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal + callUp4IntrinsicVal + callUp5IntrinsicVal
+ callUp6IntrinsicVal + callUp7IntrinsicVal + callUp8IntrinsicVal + callUp9IntrinsicVal + callUp10IntrinsicVal;

def putSumProductUp10 = putUp10IntrinsicVal + putUp11IntrinsicVal;

def callValueUp10 = mpStrikeUp10 * callOISumUp10- callSumProductUp10;
def putValueUp10 = putSumProductUp10 - mpStrikeUp10 * putOISumUp10;
def totalValueUp10 = callValueUp10 + putValueUp10;


# Max Pain Calculation +11

def callOISumUp11 = callDwn11OptionOI + callDwn10OptionOI + callDwn9OptionOI + callDwn8OptionOI + callDwn7OptionOI + callDwn6OptionOI
+ callDwn5OptionOI + callDwn4OptionOI + callDwn3OptionOI + callDwn2OptionOI + callDwn1OptionOI + call0OptionOI + callUp1OptionOI
+ callUp2OptionOI + callUp3OptionOI + callUp4OptionOI + callUp5OptionOI + callUp6OptionOI + callUp7OptionOI + callUp8OptionOI
+ callUp9OptionOI + callUp10OptionOI + callUp11OptionOI;

def putOISumUp11 = putUp11OptionOI;

def callSumProductUp11 = callDwn11IntrinsicVal + callDwn10IntrinsicVal + callDwn9IntrinsicVal + callDwn8IntrinsicVal + callDwn7IntrinsicVal
+ callDwn6IntrinsicVal + callDwn5IntrinsicVal +callDwn4IntrinsicVal + callDwn3IntrinsicVal + callDwn2IntrinsicVal + callDwn1IntrinsicVal
+ call0IntrinsicVal + callUp1IntrinsicVal + callUp2IntrinsicVal + callUp3IntrinsicVal + callUp4IntrinsicVal + callUp5IntrinsicVal
+ callUp6IntrinsicVal + callUp7IntrinsicVal + callUp8IntrinsicVal + callUp9IntrinsicVal + callUp10IntrinsicVal + callUp11IntrinsicVal;

def putSumProductUp11 = putUp11IntrinsicVal;

def callValueUp11 = mpStrikeUp11 * callOISumUp11- callSumProductUp11;
def putValueUp11 = putSumProductUp11 - mpStrikeUp11 * putOISumUp11;
def totalValueUp11 = callValueUp11 + putValueUp11;


# Find the Minimum Valued Option w/ the Most Open Interest and Greatest Divergence from Current Price
def minValue = min(totalValueDwn11,min(totalValueDwn10, min(totalValueDwn9, min(totalValueDwn8, min(totalValueDwn7, min(totalValueDwn6, min(totalValueDwn5, min(totalValueDwn4, min(totalValueDwn3, min(totalValueDwn2, min(totalValueDwn1, min(totalValue0, min(totalValueUp1, min(totalValueUp2, min(totalValueUp3, min(totalValueUp4, min(totalValueUp5, min(totalValueUp6, min(totalValueUp7, min(totalValueUp8, min(totalValueUp9, min(totalValueUp10, totalValueUp11))))))))))))))))))))));

# Find the Max Pain Price
def MaxPainPrice = if minValue == totalValueDwn11 then mpStrikeDwn11 else
    if minValue == totalValueDwn10 then mpStrikeDwn10 else
    if minValue == totalValueDwn9 then mpStrikeDwn9 else
    if minValue == totalValueDwn8 then mpStrikeDwn8 else 
    if minValue == totalValueDwn7 then mpStrikeDwn7 else
    if minValue == totalValueDwn6 then mpStrikeDwn6 else
    if minValue == totalValueDwn5 then mpStrikeDwn5 else
    if minValue == totalValueDwn4 then mpStrikeDwn4 else
    if minValue == totalValueDwn3 then mpStrikeDwn3 else
    if minValue == totalValueDwn2 then mpStrikeDwn2 else
    if minValue == totalValueDwn1 then mpStrikeDwn1 else
    if minValue == totalValue0 then mpStrike0 else
    if minValue == totalValueUp1 then mpStrikeUp1 else
    if minValue == totalValueUp2 then mpStrikeUp2 else
    if minValue == totalValueUp3 then mpStrikeUp3 else
    if minValue == totalValueUp4 then mpStrikeUp4 else
    if minValue == totalValueUp5 then mpStrikeUp5 else
    if minValue == totalValueUp6 then mpStrikeUp6 else
    if minValue == totalValueUp7 then mpStrikeUp7 else
    if minValue == totalValueUp8 then mpStrikeUp8 else
    if minValue == totalValueUp9 then mpStrikeUp9 else
    if minValue == totalValueUp10 then mpStrikeUp10 else
    if minValue == totalValueUp11 then mpStrikeUp11 else
Double.Nan;

# Plot the Max Pain Price
plot MaxPain = MaxPainPrice;
MaxPain.SetPaintingStrategy(PaintingStrategy.LINE);
MaxPain.SetDefaultColor(Color.ORANGE);
MaxPain.SetStyle(Curve.SHORT_DASH);
MaxPain.SetLineWeight(2);

# Add Label to Chart that Displays the Divergence of Asset Price vs. Max Pain Price
def MaxPainPercDiv = ((closePrice - MaxPainPrice) / MaxPainPrice) * 100;
AddLabel(yes, "Max Pain Div = " + Round(MaxPainPercDiv) + " %" , color.CYAN);

# Add Label to Chart that Displays the Current ATM Option
AddLabel(yes, GetATMOption(GetUnderlyingSymbol(), expirationDate, OptionClass.PUT), color.CYAN);









                                                        








