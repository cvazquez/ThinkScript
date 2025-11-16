# Days Until Earnings (Corrected)
input initialDays = 1;
input finalDays = 62;

def Earnings = AbsValue(GetEventOffset(Events.Earnings, 0));
def NextEarnings = if isNaN(Earnings)
                   then 1
                   else Earnings;

plot result = (NextEarnings between initialDays and finalDays);

