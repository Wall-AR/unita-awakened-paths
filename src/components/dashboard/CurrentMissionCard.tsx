
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CurrentMissionCard = () => {
  // Mock data - será substituído por dados reais do usuário
  const currentMission = {
    id: "correspondencias-natureza",
    title: "Correspondências da Natureza",
    masterId: "hermes",
    masterName: "Hermes Trismegisto",
    description: "Observe um fenômeno natural e identifique como ele se reflete em outros níveis da realidade.",
    progress: 40,
    stepsCompleted: 3,
    totalSteps: 8,
    dueIn: "4 dias"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sua Missão Atual</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-heading text-xl">{currentMission.title}</h3>
          <p className="text-sm">
            <span className="text-muted-foreground">De </span>
            <Link to={`/masters/${currentMission.masterId}`} className="text-primary hover:underline">
              {currentMission.masterName}
            </Link>
          </p>
        </div>
        
        <p className="text-sm">{currentMission.description}</p>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">{currentMission.stepsCompleted}/{currentMission.totalSteps} passos</span>
            <span className="text-sm">Vence em {currentMission.dueIn}</span>
          </div>
          <Progress value={currentMission.progress} className="h-2" />
        </div>
        
        <div className="flex justify-end pt-2">
          <Button asChild>
            <Link to={`/missions/${currentMission.id}`}>Continuar Missão</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentMissionCard;
