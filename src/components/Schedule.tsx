
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cronogramaData from "@/data/cronograma.json";

interface ScheduleItem {
  data: string;
  horario: string;
  titulo: string;
  descricao: string;
  local: string;
}

// Function to group schedule items by date
const groupByDate = (items: ScheduleItem[]) => {
  const grouped: Record<string, ScheduleItem[]> = {};
  
  items.forEach(item => {
    const date = new Date(item.data);
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    
    if (!grouped[formattedDate]) {
      grouped[formattedDate] = [];
    }
    
    grouped[formattedDate].push(item);
  });
  
  return grouped;
};

const Schedule = () => {
  const groupedSchedule = groupByDate(cronogramaData);
  const dates = Object.keys(groupedSchedule);
  const [activeTab, setActiveTab] = useState(dates[0]);
  
  return (
    <div className="w-full">
      <Tabs defaultValue={dates[0]} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 w-full flex overflow-x-auto space-x-2 pb-1 no-scrollbar">
          {dates.map((date) => (
            <TabsTrigger 
              key={date} 
              value={date}
              className="flex-shrink-0 px-4 py-2"
            >
              {date}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {dates.map((date) => (
          <TabsContent key={date} value={date} className="space-y-4">
            {groupedSchedule[date].map((item, index) => (
              <Card key={index} className="tech-card overflow-hidden">
                <div className="h-2 bg-flashclip-blue"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{item.titulo}</CardTitle>
                      <CardDescription>{item.descricao}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-flashclip-blue">{item.horario}</p>
                      <p className="text-sm text-muted-foreground">{item.local}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Additional content can be added here if needed */}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Schedule;
