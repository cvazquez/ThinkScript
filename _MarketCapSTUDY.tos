def shares = GetFundamental(FundamentalType.SharesOutstanding);
def marketCap = shares * close;

def capType =
    if marketCap < 2000000000 then 1 else
    if marketCap < 10000000000 then 2 else
    if marketCap < 200000000000 then 3 else 4;

AddLabel(yes,
    if capType == 1 then "Small Cap" else
    if capType == 2 then "Mid Cap" else
    if capType == 3 then "Large Cap" else "Mega Cap",
    if capType == 1 then Color.RED else
    if capType == 2 then Color.YELLOW else
    if capType == 3 then Color.GREEN else Color.CYAN);

