
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { missions } from "@/data/missionsData";
import { masterGuides } from "@/data/mastersData.expanded";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const MissionDetail = () => {
  const { missionId } = useParams<{ missionId: string }>();
  
  // Encontrar a missão pelo ID
  const mission = missions.find((m) => m.id === missionId);
  
  // Se não encontrar a missão
  if (!mission) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 pb-12">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-heading mb-6">Missão não encontrada</h1>
            <p>A missão que você está procurando não existe ou foi removida.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Encontrar o mestre da missão
  const master = masterGuides.find((m) => m.id === mission.masterId);
  
  // Mock de progresso da missão (seria carregado de um estado real do usuário)
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const progress = Object.values(completedSteps).filter(Boolean).length / mission.steps.length * 100;
  
  // Toggle para completar um passo
  const toggleStep = (stepIndex: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepIndex]: !prev[stepIndex]
    }));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 pb-12">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/missions" className="text-sm text-primary hover:underline flex items-center gap-1">
              &larr; Voltar para Missões
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Cabeçalho da Missão */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-heading mb-2">{mission.title}</h1>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                          {mission.type === "multiple" ? "Múltiplo" : mission.type === "study" ? "Estudo" : 
                           mission.type === "practice" ? "Prática" : mission.type === "service" ? "Serviço" : 
                           mission.type === "creativity" ? "Criatividade" : "Autoconhecimento"}
                        </span>
                        <span className="text-xs px-2 py-1 bg-secondary/20 rounded-full">
                          {mission.level === "beginner" ? "Iniciante" : 
                           mission.level === "intermediate" ? "Intermediário" : "Avançado"}
                        </span>
                        <span className="text-xs px-2 py-1 bg-muted/30 rounded-full">
                          Duração: {mission.duration}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-lg">🏆</div>
                        <div>
                          <span className="text-lg font-bold">{mission.rewards.xp} XP</span>
                        </div>
                      </div>
                      {mission.rewards.attributes && (
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(mission.rewards.attributes).map(([attr, val]) => (
                            <span key={attr} className="text-xs px-1.5 py-0.5 bg-primary/10 rounded">
                              +{val} {attr}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Descrição e Objetivos */}
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-heading mb-3">Descrição</h2>
                    <p className="text-muted-foreground">{mission.description}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-heading mb-3">Objetivos</h2>
                    <ul className="space-y-2">
                      {mission.objectives.map((objective, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {/* Passos da Missão */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-heading mb-1">Passos da Missão</h2>
                    <div className="flex items-center gap-2">
                      <Progress value={progress} className="h-2 flex-grow" />
                      <span className="text-sm">{Math.round(progress)}%</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {mission.steps.map((step, idx) => (
                      <li key={idx}>
                        <div className="flex items-center gap-3">
                          <Checkbox 
                            checked={!!completedSteps[idx]}
                            onCheckedChange={() => toggleStep(idx)}
                          />
                          <span className={completedSteps[idx] ? "line-through text-muted-foreground" : ""}>
                            {step}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Verificação */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-heading mb-3">Verificação</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Para completar esta missão, você precisará fornecer as seguintes evidências:
                  </p>
                  
                  <ul className="space-y-4">
                    {mission.verification.map((item, idx) => (
                      <li key={idx} className="p-3 border border-border/50 rounded-lg">
                        <h3 className="font-medium mb-1">{item}</h3>
                        <div className="mt-2">
                          <Button variant="outline" size="sm" className="mr-2">
                            Carregar Arquivo
                          </Button>
                          <Button variant="outline" size="sm">
                            Adicionar Texto
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <Button disabled={progress < 100}>Enviar Missão para Avaliação</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              {/* Mestre da Missão */}
              {master && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-heading mb-4">Mestre Guia</h2>
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                        {master.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg">{master.name}</h3>
                        <p className="text-sm text-muted-foreground">{master.tradition}</p>
                      </div>
                    </div>
                    
                    {master.quote && (
                      <blockquote className="border-l-2 border-primary/50 pl-4 italic mt-4 text-sm">
                        "{master.quote}"
                      </blockquote>
                    )}
                    
                    <div className="mt-4 text-right">
                      <Link 
                        to={`/masters/${master.id}`}
                        className="text-sm text-primary hover:underline"
                      >
                        Ver perfil do mestre
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Status da Missão */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-heading mb-4">Status da Missão</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso:</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Início:</span>
                      <span>Hoje</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Vence em:</span>
                      <span>7 dias</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Status:</span>
                      <span className="text-amber-500">Em progresso</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Itens Necessários */}
              {mission.requiredItems && mission.requiredItems.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-heading mb-4">Itens Necessários</h2>
                    <ul className="space-y-2">
                      {mission.requiredItems.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              
              {/* Ações */}
              <Card>
                <CardContent className="p-6 space-y-3">
                  <Button variant="outline" className="w-full">
                    Solicitar Orientação
                  </Button>
                  <Button variant="outline" className="w-full">
                    Salvar para Depois
                  </Button>
                  <Button variant="outline" className="w-full text-destructive hover:text-destructive">
                    Abandonar Missão
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MissionDetail;
