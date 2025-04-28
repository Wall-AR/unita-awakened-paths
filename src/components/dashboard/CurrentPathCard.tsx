
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CurrentPathCard = () => {
  // Mock data - será substituído por dados reais do usuário
  const currentPath = {
    id: "philosopher",
    name: "O Caminho do Filósofo",
    description: "Conhecimento teórico, compreensão intelectual, sabedoria conceitual",
    progress: 35
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seu Caminho</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="font-heading text-xl">{currentPath.name}</h3>
        <p className="text-sm text-muted-foreground">{currentPath.description}</p>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Progresso</span>
            <span className="text-sm">{currentPath.progress}%</span>
          </div>
          <div className="w-full h-2 bg-secondary/30 rounded-full">
            <div 
              className="h-full bg-primary rounded-full"
              style={{ width: `${currentPath.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex justify-between pt-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/paths">Explorar Caminhos</Link>
          </Button>
          
          <Button size="sm" asChild>
            <Link to={`/paths/${currentPath.id}`}>Detalhes</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentPathCard;
