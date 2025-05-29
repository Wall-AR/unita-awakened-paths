
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { CheckCircle, Zap } from "lucide-react";

const DailyPracticeCard = () => {
  // Mock data - será substituído por dados reais do usuário
  const initialDailyPractice = {
    id: "meditation-focus",
    name: "Meditação de Foco",
    description: "Uma prática de 15 minutos para desenvolver concentração e clareza mental.",
    detailedContent: "Sente-se confortavelmente, feche os olhos suavemente. Concentre-se na sua respiração, observando o ar entrar e sair. Se sua mente divagar, gentilmente traga o foco de volta à respiração. Continue por 15 minutos. Ao final, traga a consciência de volta ao corpo e ao ambiente ao seu redor antes de abrir os olhos.",
    duration: "15 min",
    completed: false, // Initial completed state for today
    streak: 3,
  };

  const [isCompletedToday, setIsCompletedToday] = useState(initialDailyPractice.completed);
  const [currentStreak, setCurrentStreak] = useState(initialDailyPractice.streak);

  const handleMarkAsCompleted = () => {
    if (!isCompletedToday) {
      setIsCompletedToday(true);
      setCurrentStreak(prevStreak => prevStreak + 1);
    }
    // In a real app, you would also persist this change to the backend.
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prática Diária</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-heading text-lg">{initialDailyPractice.name}</h3>
          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            {initialDailyPractice.duration}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground">{initialDailyPractice.description}</p>
        
        {isCompletedToday ? (
          <div className="bg-green-100 dark:bg-green-900/30 border border-green-500/50 p-4 rounded-md text-center">
            <CheckCircle className="mx-auto h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
            <p className="text-sm font-semibold text-green-700 dark:text-green-300">Prática completada hoje!</p>
            <p className="text-xs mt-1 text-muted-foreground">Sequência atual: {currentStreak} dias</p>
          </div>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Iniciar Prática</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{initialDailyPractice.name}</DialogTitle>
                <DialogDescription>{initialDailyPractice.description}</DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-3">
                <h4 className="font-semibold text-sm">Instruções:</h4>
                <p className="text-sm text-muted-foreground max-h-60 overflow-y-auto p-2 border rounded-md bg-muted/20">
                  {initialDailyPractice.detailedContent || "Conteúdo da prática aqui..."}
                </p>
              </div>
              <DialogFooter className="sm:justify-between gap-2 sm:gap-0">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="button" onClick={handleMarkAsCompleted}>
                    Marcar como Concluída
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyPracticeCard;
