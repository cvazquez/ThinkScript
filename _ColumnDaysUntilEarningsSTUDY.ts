# Days Until Earnings (Corrected)
def Earnings = AbsValue(GetEventOffset(Events.Earnings, 0));
def NextEarnings = if isNaN(Earnings)
                   then 0
                   else Earnings;

plot result = NextEarnings;

