
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schedule from "@/components/Schedule";
import CountdownTimer from "@/components/CountdownTimer";
import cronogramaData from "@/data/cronograma.json";

const Cronograma = () => {
  // Get the earliest date from cronograma data
  const earliestDate = cronogramaData.length > 0 
    ? new Date(cronogramaData.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())[0].data).toISOString()
    : "2023-09-15T19:00:00";
  
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-flashclip-blue-dark text-white py-16 px-4 dark:bg-gradient-to-r dark:from-flashclip-blue dark:to-flashclip-blue-dark">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cronograma</h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Confira a programação completa do evento
            </p>
          </div>
        </div>
        
        <section className="py-10 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto mb-16">
              <CountdownTimer targetDate={earliestDate} />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Schedule />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cronograma;
