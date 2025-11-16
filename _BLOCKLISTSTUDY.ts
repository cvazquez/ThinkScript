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
    GetSymbol() == "BDSX" or
    GetSymbol() == "HVII";

plot export = blockList;
