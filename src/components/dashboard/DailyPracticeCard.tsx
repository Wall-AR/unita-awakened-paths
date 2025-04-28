
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DailyPracticeCard = () => {
  // Mock data - será substituído por dados reais do usuário
  const dailyPractice = {
    id: "meditation-focus",
    name: "Meditação de Foco",
    description: "Uma prática de 15 minutos para desenvolver concentração e clareza mental",
    duration: "15 min",
    completed: false,
    streak: 3
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prática Diária</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-heading text-lg">{dailyPractice.name}</h3>
          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
            {dailyPractice.duration}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground">{dailyPractice.description}</p>
        
        {dailyPractice.completed ? (
          <div className="bg-muted/30 p-3 rounded-md text-center">
            <p className="text-sm">Prática completada hoje ✓</p>
            <p className="text-xs mt-1">Sequência atual: {dailyPractice.streak} dias</p>
          </div>
        ) : (
          <Button className="w-full">Iniciar Prática</Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyPracticeCard;
