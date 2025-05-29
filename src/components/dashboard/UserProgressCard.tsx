
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

const UserProgressCard = () => {
  // Mock data - será substituído por dados reais do usuário
  const userLevel = 5;
  const userXP = 450;
  const nextLevelXP = 1000;
  const percentToNextLevel = (userXP / nextLevelXP) * 100;
  const userTitles = ["Estudante Bíblico", "Aprendiz Hermético"];
  const recentAchievements = ["7 dias de prática consecutiva", "Completou módulo introdutório"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seu Progresso</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Nível {userLevel}</span>
              <span className="text-sm">{userXP}/{nextLevelXP} XP</span>
            </div>
            <Progress value={percentToNextLevel} className="h-2" />
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Seus Títulos</h4>
            <div className="flex flex-wrap gap-2">
              {userTitles.map((title, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 bg-secondary/30 rounded-full"
                >
                  {title}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Conquistas Recentes</h4>
            <ul className="space-y-1">
              {recentAchievements.map((achievement, index) => (
                <li key={index} className="text-xs flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/profile/achievements">
                <Award className="mr-2 h-4 w-4" />
                Ver Todas as Conquistas
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProgressCard;
