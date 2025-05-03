
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  
  return (
    <div className="w-full">
      <div className="space-y-12">
        {dates.map((date) => (
          <div key={date} className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 px-4 py-6 dark-gradient rounded-xl flex flex-col items-center md:items-start justify-center">
              <div className="flex items-center mb-2">
                <Calendar className="mr-2" size={20} />
                <h3 className="text-xl font-bold">{date}</h3>
              </div>
            </div>
            <div className="md:w-3/4 space-y-4">
              {groupedSchedule[date].map((item, index) => (
                <Card key={index} className="tech-card overflow-hidden dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
                  <div className="h-2 blue-gradient"></div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{item.titulo}</CardTitle>
                        <CardDescription className="dark:text-gray-300">{item.descricao}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-flashclip-blue dark:text-blue-300">
                          <Clock size={16} className="mr-1" />
                          <p className="font-medium">{item.horario}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.local}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Additional content can be added here if needed */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
