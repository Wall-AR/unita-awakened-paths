
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MasterGuidanceCard = () => {
  // Mock data - será substituído por dados reais do usuário
  const currentMaster = {
    id: "hermes",
    name: "Hermes Trismegisto",
    quote: "Como acima, assim é abaixo; como abaixo, assim é acima.",
    guidance: "Observe os padrões universais na realidade cotidiana. A chave está nas correspondências.",
    tradition: "Hermetismo"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orientação do Mestre</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">
            ⚕️
          </div>
          <div>
            <h3 className="font-heading text-lg">{currentMaster.name}</h3>
            <p className="text-xs text-muted-foreground">{currentMaster.tradition}</p>
          </div>
        </div>
        
        <blockquote className="border-l-2 border-primary/50 pl-4 italic text-sm">
          "{currentMaster.quote}"
        </blockquote>
        
        <p className="text-sm">{currentMaster.guidance}</p>
        
        <div className="text-right">
          <Link 
            to={`/masters/${currentMaster.id}`}
            className="text-sm text-primary hover:underline"
          >
            Consultar mestre →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MasterGuidanceCard;
